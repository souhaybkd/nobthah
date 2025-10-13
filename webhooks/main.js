import { Client, Users, Query } from 'node-appwrite';
import crypto from 'crypto';

export default async ({ req, res, log, error }) => {
  // Initialize Appwrite client with environment variables
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1")
    .setProject(process.env.APPWRITE_PROJECT_ID || "665eb96b0012e6af0002")
    .setKey(process.env.APPWRITE_API_KEY || '3e92ef56f3209b61d5527d2392cf46411995ffe0565c9316dfe9e21549c7d052964f76247b0e98b73f57d12afae3b1cc2a627b9cf82717c2d94ef59d9b1914489436a0235597538edf605f7b061c274ee29b5253c297d190df18dd81e73d98a4e6b762a454c6e7056d71dbaf0477063bc22b9ac2e76be45307a96c2f01f35b36');

  const users = new Users(client);

  if (req.method === 'POST' && req.path === '/webhook') {
    try {
      // Verify webhook signature from LemonSqueezy
      const signature = req.headers['x-signature'];
      const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

      if (webhookSecret && signature) {
        const hmac = crypto.createHmac('sha256', webhookSecret);
        hmac.update(JSON.stringify(req.body));
        const digest = hmac.digest('hex');

        if (digest !== signature) {
          error('Invalid webhook signature');
          return res.json({ success: false, error: 'Invalid signature' }, 401);
        }
        log('Webhook signature verified ✓');
      } else {
        log('Warning: Webhook signature verification skipped - no secret configured');
      }

      const order = req.body;
      log('Webhook received:', JSON.stringify(order, null, 2));

      // Extract user email and resume ID from webhook payload
      const userEmail = order.data?.attributes?.user_email || 
                        order.data?.attributes?.customer_email;
      const label = order.meta?.custom_data?.resumeId || 
                    order.data?.attributes?.first_order_item?.product_name;

      if (!userEmail || !label) {
        error('User email or label not found in webhook payload.');
        error('Received payload:', JSON.stringify(order, null, 2));
        return res.json({ success: false, error: 'Missing required fields' }, 400);
      }

      log(`Processing payment for email: ${userEmail}, resumeId: ${label}`);

      // Search for user in Appwrite by email
      const searchResult = await users.list([Query.equal("email", [userEmail])]);
      
      if (!searchResult || searchResult.users.length === 0) {
        error(`User with email ${userEmail} not found in Appwrite.`);
        return res.json({ success: false, error: 'User not found' }, 404);
      }

      // Update user labels to grant access to the resume template
      const user = searchResult.users[0];
      const currentLabels = user.labels || [];
      
      // Check if label already exists
      if (currentLabels.includes(label)) {
        log(`User ${user.$id} already has label "${label}"`);
        return res.json({ success: true, message: 'Label already exists' });
      }

      // Add new label (avoiding duplicates)
      const updatedLabels = [...new Set([...currentLabels, label])];
      await users.updateLabels(user.$id, updatedLabels);
      
      log(`✓ Successfully added "${label}" label to user ${user.$id} (${userEmail})`);
      log(`User now has ${updatedLabels.length} label(s): ${updatedLabels.join(', ')}`);

      return res.json({ 
        success: true, 
        message: 'Label added successfully',
        userId: user.$id,
        label: label
      });

    } catch (err) {
      error(`Failed to process webhook: ${err.message}`);
      error('Stack trace:', err.stack);
      return res.json({ success: false, error: err.message }, 500);
    }

  } else if (req.method === 'GET') {
    // Health check endpoint
    return res.json({ 
      status: 'ok', 
      message: 'Webhook endpoint is running',
      timestamp: new Date().toISOString()
    }, 200);
  } else {
    return res.json({ 
      error: 'Invalid request method or path',
      expected: 'POST /webhook'
    }, 405);
  }
};
