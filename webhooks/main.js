import { Client, Users, Query } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
  // Initialize Appwrite client
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("665eb96b0012e6af0002")
    .setKey(process.env.APPWRITE_API_KEY); // Ensure you have this key set in your environment variables

  const users = new Users(client);

  if (req.method === 'POST' && req.path === '/webhook') {
    const order = req.body.data.attributes;
    log(order);

    const userEmail = order.user_email;
    if (!userEmail) {
      error('User email not found in webhook payload.');
      return res.json({ success: false }, 400);
    }

    try {
      // Search for the user by email
      const searchResult = await users.list([Query.equal("email", userEmail)]);
      if (!searchResult || searchResult.users.length === 0) {
        error(`User with email ${userEmail} not found.`);
        return res.json({ success: false }, 404);
      }

      // Update user labels
      const user = searchResult.users[0];
      const updatedLabels = [...new Set([...(user.labels || []), 'pro'])];
      await users.update(user.$id, { labels: updatedLabels });
      log(`Added "pro" label to user ${user.$id}.`);

      return res.json({ success: true });
    } catch (err) {
      error(`Failed to update user: ${err.message}`);
      return res.json({ success: false }, 500);
    }
  } else {
    return res.send('HELLO !!', 200);
  }
};
