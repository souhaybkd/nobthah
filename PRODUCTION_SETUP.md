# 🚀 Production Setup for nobtha-cv.com

## ✅ Pre-Deployment Checklist

### 1. Environment Variables

Update your `.env` file with production values:

```env
# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=66cf1e960032fa93109c

# LemonSqueezy Configuration
VITE_LEMONSQUEEZY_API_KEY=your_actual_lemonsqueezy_api_key
VITE_LEMONSQUEEZY_STORE_ID=96692
VITE_LEMONSQUEEZY_VARIANT_ID=427561

# App Configuration
VITE_APP_URL=https://nobtha-cv.com

# Webhook Configuration (Server-side - Appwrite Function)
APPWRITE_API_KEY=your_appwrite_server_api_key
APPWRITE_PROJECT_ID=665eb96b0012e6af0002
LEMONSQUEEZY_WEBHOOK_SECRET=your_webhook_secret_from_lemonsqueezy
```

---

## 🔧 Appwrite Configuration

### Step 1: Add Platform URLs

1. Go to [Appwrite Console](https://cloud.appwrite.io)
2. Select your project: **66cf1e960032fa93109c**
3. Go to **Overview** → **Platforms**
4. Add these platforms:

**Platform 1: Production**
- Type: Web App
- Name: Nobtha CV Production
- Hostname: `nobtha-cv.com`

**Platform 2: Production (www)**
- Type: Web App  
- Name: Nobtha CV Production (www)
- Hostname: `www.nobtha-cv.com`

**Platform 3: Development**
- Type: Web App
- Name: Nobtha CV Local
- Hostname: `localhost`

**Why?** Password reset and OAuth will only work from these domains.

---

## 💳 LemonSqueezy Configuration

### Step 1: Update Redirect URLs

Go to your product settings in LemonSqueezy:

**Arabic Version:**
- Success URL: `https://nobtha-cv.com/payment-success?resumeId={PRODUCT_NAME}`
- Failure URL: `https://nobtha-cv.com/payment-failed`

**English Version:**
- Success URL: `https://nobtha-cv.com/en/payment-success?resumeId={PRODUCT_NAME}`
- Failure URL: `https://nobtha-cv.com/en/payment-failed`

### Step 2: Configure Webhook

1. Go to LemonSqueezy → Settings → Webhooks
2. Click "Add endpoint"
3. **Webhook URL**: Use your Appwrite Function URL:
   ```
   https://[YOUR_APPWRITE_FUNCTION_ID].appwrite.global/webhook
   ```
   (You'll get this after deploying the webhook function)

4. **Events to send:**
   - ✅ `order_created`
   - ✅ `subscription_created`

5. **Signing secret:** Generate and save to `.env` as `LEMONSQUEEZY_WEBHOOK_SECRET`

---

## 🔐 Deploy Webhook to Appwrite Functions

### Step 1: Create Function

1. Go to Appwrite Console → Functions
2. Click "Create Function"
3. Configuration:
   - **Name**: LemonSqueezy Webhook Handler
   - **Runtime**: Node.js 18
   - **Entrypoint**: `main.js`

### Step 2: Upload Code

Upload the `webhooks/main.js` file to the function.

### Step 3: Set Environment Variables

In the function settings, add:
```
APPWRITE_API_KEY=your_server_api_key
APPWRITE_PROJECT_ID=665eb96b0012e6af0002
LEMONSQUEEZY_WEBHOOK_SECRET=your_webhook_secret
```

### Step 4: Deploy & Get URL

1. Deploy the function
2. Copy the function URL (e.g., `https://65f...appwrite.global`)
3. Use this URL in LemonSqueezy webhook configuration

---

## 🌐 Deploy Frontend

### Option 1: Netlify (Recommended)

1. **Connect Repository:**
   ```bash
   # Push to GitHub first
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Deploy to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import from Git"
   - Select your repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`

3. **Environment Variables in Netlify:**
   Go to Site settings → Environment variables, add:
   ```
   VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=66cf1e960032fa93109c
   VITE_LEMONSQUEEZY_API_KEY=your_key
   VITE_LEMONSQUEEZY_STORE_ID=96692
   VITE_LEMONSQUEEZY_VARIANT_ID=427561
   VITE_APP_URL=https://nobtha-cv.com
   ```

4. **Custom Domain:**
   - Go to Domain settings
   - Add custom domain: `nobtha-cv.com`
   - Follow DNS setup instructions
   - Enable HTTPS (automatic with Netlify)

### Option 2: Vercel

Similar process to Netlify:
1. Import from Git
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add environment variables
5. Configure custom domain: `nobtha-cv.com`

---

## 📧 Email Configuration (Password Reset)

### Appwrite Email Settings

1. Go to Appwrite Console → Settings → Email
2. Configure SMTP:
   - **Sender Name**: Nobtha CV
   - **Sender Email**: noreply@nobtha-cv.com
   - **SMTP Host**: (your email provider)
   - **SMTP Port**: 587 or 465
   - **SMTP Username**: your email
   - **SMTP Password**: your password

3. **Email Templates:**
   - Password Recovery: Customize with your branding
   - Verification: Customize if using email verification

**Recommended SMTP Providers:**
- SendGrid (free tier: 100 emails/day)
- Mailgun (free tier available)
- AWS SES (very cheap)

---

## ✅ Post-Deployment Testing

### 1. Test Authentication
- ✅ Register new account
- ✅ Login/Logout
- ✅ Password reset flow

### 2. Test Payment Flow
1. Create a resume
2. Click "Download"
3. Complete payment (use test mode first!)
4. Verify redirect to success page
5. Check webhook received in Appwrite logs
6. Verify user label added
7. Download PDF

### 3. Test All Templates
- Load each of the 9 templates
- Verify colors look good
- Test print/PDF generation
- Check both Arabic and English versions

### 4. Check Pages
- ✅ Home page loads
- ✅ Privacy policy accessible
- ✅ Terms of service accessible
- ✅ Dashboard works
- ✅ Account settings work

---

## 🔍 Monitoring & Logs

### Appwrite Function Logs
1. Go to Functions → Your webhook function
2. Check "Executions" tab
3. Monitor for errors after payments

### LemonSqueezy Webhook Logs
1. Go to Settings → Webhooks
2. Click on your webhook
3. View delivery attempts

### Frontend Errors
Set up error tracking (optional):
- Sentry
- LogRocket
- Rollbar

---

## 🚨 Security Checklist

Before going live:

- [ ] ✅ All API keys in environment variables (not in code)
- [ ] ✅ `.env` file in `.gitignore`
- [ ] ✅ Appwrite platforms configured (nobtha-cv.com)
- [ ] ✅ LemonSqueezy webhook secret configured
- [ ] ✅ HTTPS enabled (automatic with Netlify/Vercel)
- [ ] ✅ CORS configured in Appwrite
- [ ] ✅ Password reset emails working
- [ ] ✅ Payment flow tested
- [ ] ✅ All templates tested

---

## 🎯 Go-Live Checklist

### Day Before Launch:
1. [ ] Final template testing
2. [ ] Payment flow tested in production
3. [ ] All emails working
4. [ ] DNS configured for nobtha-cv.com
5. [ ] SSL certificate active

### Launch Day:
1. [ ] Switch LemonSqueezy from test to live mode
2. [ ] Monitor webhook logs
3. [ ] Test complete user journey
4. [ ] Monitor Appwrite usage

### Week 1:
1. [ ] Monitor error logs daily
2. [ ] Check payment success rate
3. [ ] Gather user feedback
4. [ ] Fix any issues promptly

---

## 📞 Support Contacts

- **Appwrite Support**: [Discord](https://discord.gg/appwrite)
- **LemonSqueezy Support**: support@lemonsqueezy.com
- **Netlify Support**: [Docs](https://docs.netlify.com)

---

## 🎉 You're Ready to Launch!

Your domain: **nobtha-cv.com**

All templates are professional and ready to go! 🚀

**Good luck with your launch!** 💪

