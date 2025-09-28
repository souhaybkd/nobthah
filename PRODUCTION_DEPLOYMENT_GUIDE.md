# Production Deployment Guide - Nobthah Resume Builder

## Issues Identified and Solutions

### 1. **Appwrite Configuration Issues**

**Problem**: The application uses hardcoded Appwrite configuration that may not work properly in production.

**Solution**: 
- ✅ Updated `src/appwrite/appwrite.config.ts` to use environment variables
- ✅ Created `.env.local` and `.env.production` files
- ✅ Added fallback values for development

### 2. **CORS and Domain Configuration**

**Problem**: The production domain `https://nobthah.vercel.app/` might not be whitelisted in Appwrite.

**Required Actions**:
1. **In Appwrite Console** (https://cloud.appwrite.io/console):
   - Go to your project: `66cf1e960032fa93109c`
   - Navigate to **Settings** → **Domains**
   - Add `https://nobthah.vercel.app` to the allowed domains
   - Add `https://nobthah.vercel.app/*` for all subpaths

### 3. **Environment Variables for Vercel**

**Required Vercel Environment Variables**:
```
VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=66cf1e960032fa93109c
```

**How to set in Vercel**:
1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the variables above for **Production** environment

### 4. **Enhanced Error Handling**

**Improvements Made**:
- ✅ Added detailed error logging in registration components
- ✅ Enhanced error messages for better debugging
- ✅ Added try-catch blocks for better error handling

### 5. **Webhook Configuration Issue**

**Problem**: The webhook uses a different project ID (`665eb96b0012e6af0002`) than the main app (`66cf1e960032fa93109c`).

**Solution**: Update the webhook to use the same project ID as the main application.

## Deployment Steps

1. **Set Environment Variables in Vercel**:
   ```
   VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=66cf1e960032fa93109c
   ```

2. **Configure Appwrite Domains**:
   - Add `https://nobthah.vercel.app` to allowed domains in Appwrite console

3. **Redeploy the Application**:
   - Push changes to your repository
   - Vercel will automatically redeploy

## Testing the Fix

1. **Check Browser Console**: Look for detailed error messages
2. **Check Network Tab**: Verify API calls to Appwrite are successful
3. **Test Registration**: Try creating a new account on the live site

## Common Issues and Solutions

### Issue: "CORS policy" errors
**Solution**: Add your production domain to Appwrite allowed domains

### Issue: "Project not found" errors  
**Solution**: Verify the project ID in environment variables matches your Appwrite project

### Issue: "Network error" or "Connection failed"
**Solution**: Check if the Appwrite endpoint is accessible from your production environment

## Debugging Commands

To test locally with production-like environment:
```bash
# Set production environment variables
export VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
export VITE_APPWRITE_PROJECT_ID=66cf1e960032fa93109c

# Run the development server
npm run dev
```

## Next Steps

1. ✅ Update Appwrite configuration to use environment variables
2. ✅ Add enhanced error handling and logging
3. ⏳ Set environment variables in Vercel
4. ⏳ Configure Appwrite domains for production
5. ⏳ Test the registration flow on production
6. ⏳ Update webhook configuration if needed
