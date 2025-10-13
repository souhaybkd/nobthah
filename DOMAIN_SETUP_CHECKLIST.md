# ✅ Domain Setup Checklist for nobtha-cv.com

## 🎯 Quick Reference

**Your Domain:** `nobtha-cv.com`

---

## 📋 **MUST DO BEFORE GOING LIVE**

### 1. Appwrite Platform URLs ⚠️ CRITICAL

Add these in Appwrite Console → Platforms:

1. **Production**: `nobtha-cv.com`
2. **Production (www)**: `www.nobtha-cv.com`
3. **Development**: `localhost`

**Why?** Password reset will FAIL if domain not added!

---

### 2. LemonSqueezy Redirect URLs

**Arabic:**
- Success: `https://nobtha-cv.com/payment-success?resumeId={PRODUCT_NAME}`
- Failure: `https://nobtha-cv.com/payment-failed`

**English:**
- Success: `https://nobtha-cv.com/en/payment-success?resumeId={PRODUCT_NAME}`
- Failure: `https://nobtha-cv.com/en/payment-failed`

---

### 3. LemonSqueezy Webhook URL

Use your Appwrite Function URL (after deployment):
```
https://[function-id].appwrite.global/webhook
```

---

### 4. Environment Variable

Update `.env` for production:
```env
VITE_APP_URL=https://nobtha-cv.com
```

---

### 5. Email Configuration

**Sender Email:** `noreply@nobtha-cv.com`
**Sender Name:** Nobtha CV

Configure in Appwrite → Settings → Email

---

## 🚀 **DEPLOYMENT STEPS**

1. [ ] Build project: `npm run build`
2. [ ] Deploy to Netlify/Vercel
3. [ ] Configure custom domain: `nobtha-cv.com`
4. [ ] Enable HTTPS (automatic)
5. [ ] Add environment variables
6. [ ] Deploy webhook to Appwrite Functions
7. [ ] Configure LemonSqueezy webhook URL
8. [ ] Add platform URLs in Appwrite
9. [ ] Test password reset
10. [ ] Test payment flow
11. [ ] Test all templates

---

## 🧪 **TESTING URLS**

- Home: `https://nobtha-cv.com`
- English Home: `https://nobtha-cv.com/en`
- Login: `https://nobtha-cv.com/login`
- Register: `https://nobtha-cv.com/register`
- Dashboard: `https://nobtha-cv.com/navigate/dashboard`
- Privacy: `https://nobtha-cv.com/privacy`
- Terms: `https://nobtha-cv.com/terms`

---

**All set for nobtha-cv.com! 🎉**
