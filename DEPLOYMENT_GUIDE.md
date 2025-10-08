# 🚀 Deployment Guide - Pamilla Website

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** with GitHub account
3. **Click "New site from Git"**
4. **Connect GitHub** and select your repository
5. **Deploy settings:**
   - Build command: `npm install && npm run build`
   - Publish directory: `./`
   - Node version: 18.x
6. **Click "Deploy site"**
7. **Your site will be live at:** `https://your-site-name.netlify.app`

### Option 2: Vercel (Alternative)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Deploy settings:**
   - Framework: Other
   - Build command: `npm install`
   - Output directory: `./`
6. **Click "Deploy"**
7. **Your site will be live at:** `https://your-project.vercel.app`

### Option 3: GitHub Pages (Static Only)

1. **Go to your GitHub repository**
2. **Click "Settings" tab**
3. **Scroll to "Pages" section**
4. **Source: Deploy from a branch**
5. **Branch: main**
6. **Folder: / (root)**
7. **Click "Save"**
8. **Your site will be live at:** `https://username.github.io/repository-name`

---

## 🛠 Manual Deployment Steps

### Step 1: Prepare for Deployment

```bash
# Navigate to project directory
cd "/Users/luvuyondiki/Documents/Software Development Projects /Pamilla Website"

# Install dependencies
npm install

# Test locally
npm start
```

### Step 2: Choose Your Hosting Platform

#### For Netlify:
1. **Drag and drop** your project folder to [netlify.com/drop](https://netlify.com/drop)
2. **Or connect via Git** for automatic deployments

#### For Vercel:
1. **Install Vercel CLI:** `npm i -g vercel`
2. **Run:** `vercel` in your project directory
3. **Follow the prompts**

#### For Traditional Hosting:
1. **Upload files** to your web server
2. **Install Node.js** on your server
3. **Run:** `npm install && npm start`

---

## 🔧 Environment Configuration

### Required Environment Variables

Create a `.env` file in your project root:

```env
# Server Configuration
PORT=9888
NODE_ENV=production

# Database (if using)
DATABASE_URL=your_database_url

# Email Configuration (if using)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Analytics (optional)
GOOGLE_ANALYTICS_ID=your_ga_id
```

### Netlify Environment Variables

1. **Go to Site Settings > Environment Variables**
2. **Add the following:**
   - `NODE_ENV` = `production`
   - `PORT` = `9888`

---

## 📱 Testing Your Deployment

### Local Testing Checklist

- [ ] **Homepage loads** correctly
- [ ] **Navigation works** on all pages
- [ ] **Forms submit** without errors
- [ ] **Images load** properly
- [ ] **Mobile responsive** design
- [ ] **CV upload** functionality
- [ ] **Tour booking** forms
- [ ] **Contact forms** work

### Production Testing Checklist

- [ ] **Site loads** on production URL
- [ ] **All pages** accessible
- [ ] **Forms work** in production
- [ ] **File uploads** function
- [ ] **Mobile version** works
- [ ] **Performance** is good
- [ ] **SEO meta tags** present

---

## 🎯 Post-Deployment Setup

### 1. Custom Domain (Optional)

#### For Netlify:
1. **Go to Site Settings > Domain Management**
2. **Add your custom domain**
3. **Update DNS records** as instructed
4. **Enable HTTPS** (automatic)

#### For Vercel:
1. **Go to Project Settings > Domains**
2. **Add your custom domain**
3. **Update DNS records** as instructed
4. **SSL certificate** (automatic)

### 2. Analytics Setup

1. **Create Google Analytics account**
2. **Get tracking ID**
3. **Add to your site:**

```html
<!-- Add to <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 3. Email Configuration (Optional)

If you want to receive form submissions via email:

1. **Set up email service** (Gmail, SendGrid, etc.)
2. **Add email configuration** to server.js
3. **Test email functionality**

---

## 🚨 Troubleshooting

### Common Issues

#### "Module not found" errors
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### "Port already in use" error
```bash
# Solution: Kill process using port 9888
lsof -ti:9888 | xargs kill -9
```

#### Images not loading
- **Check file paths** in HTML/CSS
- **Ensure images** are in correct folders
- **Verify file permissions**

#### Forms not submitting
- **Check server.js** is running
- **Verify API endpoints** are working
- **Check browser console** for errors

### Performance Issues

#### Slow loading
- **Optimize images** (compress before upload)
- **Enable gzip compression**
- **Use CDN** for static assets

#### Mobile issues
- **Test on real devices**
- **Check viewport meta tag**
- **Verify responsive CSS**

---

## 📊 Monitoring & Maintenance

### Regular Checks

#### Weekly:
- [ ] **Site uptime** monitoring
- [ ] **Form submissions** review
- [ ] **Error logs** check

#### Monthly:
- [ ] **Performance** analysis
- [ ] **Security updates** for dependencies
- [ ] **Content updates** as needed

#### Quarterly:
- [ ] **Full security** audit
- [ ] **Performance optimization**
- [ ] **Feature updates**

---

## 🎉 Success!

Once deployed, your Pamilla Website will be live and ready for business!

### Next Steps:
1. **Share the URL** with the owner
2. **Test all functionality**
3. **Set up monitoring**
4. **Plan for future updates**

### Support:
- **Technical issues:** Check this guide first
- **Feature requests:** Document and prioritize
- **Updates:** Follow the maintenance schedule

---

*This deployment guide ensures your Pamilla Website goes live successfully with all features working properly.*
