# Railway Deployment Guide

## 🚀 Quick Railway Deployment

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for Railway deployment"
   git push origin main
   ```

2. **Deploy on Railway**:
   - Visit [railway.app](https://railway.app) and sign up/login
   - Click "Deploy from GitHub repo"
   - Connect your GitHub account if not already connected
   - Select this repository
   - Railway will automatically:
     - Detect the Node.js/Vite setup
     - Install dependencies with `npm ci`
     - Build the project with `npm run build`
     - Start the server with `npm start`

### Method 2: Railway CLI

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy**:
   ```bash
   railway login
   railway init
   railway up
   ```

## ⚙️ Configuration Files Included

- **`railway.json`**: Railway-specific deployment configuration
- **`nixpacks.toml`**: Build configuration for Railway's Nixpacks
- **`package.json`**: Updated with proper start script
- **`vite.config.ts`**: Optimized for production deployment

## 🔧 Environment Variables

Railway automatically provides:
- `PORT`: The port your app should listen on
- `RAILWAY_STATIC_URL`: Your app's public URL

Optional variables you can add:
- `NODE_ENV=production` (Railway sets this automatically)
- Custom API URLs or integration keys

## 📋 Deployment Checklist

- ✅ Updated `package.json` with proper name and start script
- ✅ Created `railway.json` for deployment configuration
- ✅ Added `nixpacks.toml` for build optimization
- ✅ Updated HTML meta tags for SEO
- ✅ Optimized Vite config for production
- ✅ Created comprehensive `.gitignore`
- ✅ Updated README with deployment instructions

## 🔍 Verification Steps

After deployment:

1. **Check Build Logs**: Ensure all dependencies install correctly
2. **Verify Assets**: CSS, JavaScript, and images load properly
3. **Test Registration**: Verify the Zoom registration form works
4. **Mobile Testing**: Check responsive design on mobile devices
5. **Performance**: Test loading speeds

## 🚨 Common Issues & Solutions

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs for specific errors

### App Won't Start
- Ensure `npm start` script is properly configured
- Check that the port is correctly configured
- Verify all environment variables are set

### Assets Not Loading
- Check that paths are relative (no leading `/` for assets)
- Verify Vite build output in `dist/` folder
- Ensure `.gitignore` doesn't exclude necessary files

## 🎯 Post-Deployment Tasks

1. **Custom Domain** (Optional):
   - Go to Railway project settings
   - Add custom domain
   - Update DNS records as instructed

2. **Analytics Setup**:
   - Add Google Analytics or similar
   - Set up conversion tracking for registrations

3. **Monitoring**:
   - Monitor Railway dashboard for performance
   - Set up alerts for downtime

## 📊 Expected Performance

- **Build Time**: 2-3 minutes
- **Cold Start**: ~1-2 seconds
- **Bundle Size**: ~500KB (optimized)
- **Lighthouse Score**: 90+ (with optimizations)

## 🔗 Useful Railway Commands

```bash
# View logs
railway logs

# Check service status
railway status

# Open deployed app
railway open

# Add environment variable
railway variables set KEY=value

# Connect to database (if needed)
railway connect
```

## 🆘 Support

If you encounter issues:
1. Check Railway documentation: [docs.railway.app](https://docs.railway.app)
2. Review build logs in Railway dashboard
3. Verify all configuration files are properly committed

---

Your content automation webinar landing page is now ready for Railway deployment! 🎉 