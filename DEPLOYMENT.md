# Deployment Guide - Scaling Collective Website

This guide will walk you through deploying your King Kong-inspired Scaling Collective website to GitHub and Vercel with automatic deployment.

## 🚀 Quick Start

**Total Time**: ~10 minutes
**Prerequisites**: GitHub account, Vercel account (free)

## 📋 Pre-Deployment Checklist

✅ Git repository initialized and committed  
✅ All files ready for deployment  
✅ Vercel configuration optimized  
✅ README and documentation complete  

## 🔐 Security Best Practices

**IMPORTANT**: Use Personal Access Tokens instead of passwords for secure authentication.

### GitHub Personal Access Token Setup

1. **Go to GitHub Settings**
   - Visit: https://github.com/settings/tokens
   - Click "Generate new token (classic)"

2. **Configure Token**
   - **Note**: "Scaling Collective Deployment"
   - **Expiration**: 90 days (or as needed)
   - **Scopes**: Select these permissions:
     - ✅ `repo` (Full control of private repositories)
     - ✅ `workflow` (Update GitHub Action workflows)
     - ✅ `write:packages` (Upload packages to GitHub Package Registry)

3. **Save Token**
   - Copy the token immediately (you won't see it again)
   - Store it securely (password manager recommended)

## 📂 Step 1: Create GitHub Repository

### Option A: GitHub Web Interface (Recommended)

1. **Create New Repository**
   - Go to: https://github.com/new
   - **Repository name**: `scaling-collective-redesign`
   - **Description**: "King Kong-inspired website for AI employee implementation services"
   - **Visibility**: Public (or Private if preferred)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

2. **Get Repository URL**
   - Copy the HTTPS URL: `https://github.com/yourusername/scaling-collective-redesign.git`

### Option B: GitHub CLI (Advanced)

```bash
# Install GitHub CLI if not already installed
# Then create repository
gh repo create scaling-collective-redesign --public --description "King Kong-inspired website for AI employee implementation services"
```

## 📤 Step 2: Push to GitHub

### Using Personal Access Token

```bash
# Navigate to your project directory
cd /home/ubuntu/scaling-collective-deploy

# Add GitHub remote (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/scaling-collective-redesign.git

# Push to GitHub using Personal Access Token
# When prompted for username: enter your GitHub username
# When prompted for password: enter your Personal Access Token (NOT your GitHub password)
git push -u origin main
```

### Alternative: SSH Key Method

If you prefer SSH keys:

```bash
# Add SSH remote instead
git remote add origin git@github.com:yourusername/scaling-collective-redesign.git
git push -u origin main
```

## 🌐 Step 3: Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Login to Vercel**
   - Visit: https://vercel.com/dashboard
   - Sign in with GitHub (recommended for seamless integration)

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `scaling-collective-redesign` repository

3. **Configure Deployment**
   - **Framework Preset**: Vite (should auto-detect)
   - **Build Command**: `npm run build` (should auto-fill)
   - **Output Directory**: `dist` (should auto-fill)
   - **Install Command**: `npm install` (should auto-fill)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build completion
   - Your site will be live at: `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd /home/ubuntu/scaling-collective-deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: scaling-collective-redesign
# - Directory: ./ (current directory)
```

## 🔄 Automatic Deployments

Once connected, Vercel will automatically:
- ✅ Deploy every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Run build checks and tests
- ✅ Provide deployment status in GitHub

## 🛠️ Environment Variables (If Needed)

If your app requires environment variables:

### In Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add variables:
   ```
   VITE_API_URL=your-api-url
   VITE_ANALYTICS_ID=your-analytics-id
   ```

### In Vercel CLI:
```bash
vercel env add VITE_API_URL
vercel env add VITE_ANALYTICS_ID
```

## 🎯 Custom Domain Setup

### Add Custom Domain in Vercel:

1. **Go to Project Settings → Domains**
2. **Add Domain**: `scalingcollective.co` or your preferred domain
3. **Configure DNS** (at your domain registrar):
   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```

### SSL Certificate:
- Vercel automatically provides SSL certificates
- Your site will be available at `https://yourdomain.com`

## 📊 Performance Optimization

Your site is already optimized with:
- ✅ **Vite Build System**: Fast builds and optimized bundles
- ✅ **Code Splitting**: Automatic chunk splitting for faster loads
- ✅ **Asset Optimization**: Compressed CSS and JS
- ✅ **Caching Headers**: Configured in `vercel.json`
- ✅ **Security Headers**: XSS protection and content security

## 🔍 Monitoring & Analytics

### Add Analytics (Optional):

1. **Google Analytics**:
   ```html
   <!-- Add to index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Vercel Analytics**:
   - Enable in Vercel Dashboard → Analytics
   - Provides Core Web Vitals and performance metrics

## 🚨 Troubleshooting

### Common Issues:

**Build Fails**:
```bash
# Check build locally first
npm run build

# If successful locally, check Vercel build logs
# Usually caused by missing dependencies or environment variables
```

**Authentication Issues**:
```bash
# For GitHub: Ensure Personal Access Token has correct permissions
# For Vercel: Try logging out and back in
vercel logout
vercel login
```

**Domain Not Working**:
- Check DNS propagation (can take up to 48 hours)
- Verify CNAME record is correct
- Ensure domain is verified in Vercel

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify GitHub repository permissions
3. Ensure all dependencies are in `package.json`
4. Contact support with specific error messages

## 🎉 Success Checklist

After deployment, verify:
- ✅ Site loads at Vercel URL
- ✅ All pages and components work
- ✅ Mobile responsiveness
- ✅ King Kong styling applied correctly
- ✅ CTAs and forms functional
- ✅ Performance scores good (use PageSpeed Insights)

## 🔄 Future Updates

To update your site:
1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
3. Vercel automatically deploys the update

---

**Your King Kong-inspired Scaling Collective website is now ready to dominate the competition! 💪**

