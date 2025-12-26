# 🚀 Deployment Guide - NexusPress

Complete guide for deploying Next.js + WordPress Headless CMS to Vercel.

---

## 📋 Quick Start

### Prerequisites

- WordPress: `https://staging.screenroot.com/nexuspresscms/`
- GitHub: `https://github.com/chetan3460/nextjs-wordpress-headless`
- Vercel Account (free tier)

---

## 🔧 WordPress Setup

### 1. Fix REST API (CRITICAL)

**Problem**: WordPress returns 500 errors on `/wp-json/`

**Solution**:

1. Login to WordPress Admin: `https://staging.screenroot.com/nexuspresscms/wp-admin/`
2. Go to **Settings** → **Permalinks**
3. Click **"Save Changes"** (don't change anything)
4. Test: `https://staging.screenroot.com/nexuspresscms/wp-json/` should return JSON

### 2. Verify Required Plugins

Ensure these are **Active**:

- ✅ WPGraphQL
- ✅ Advanced Custom Fields PRO
- ✅ WPGraphQL for Advanced Custom Fields

### 3. Test Endpoints

```bash
# REST API
curl https://staging.screenroot.com/nexuspresscms/wp-json/wp/v2/pages

# GraphQL
curl https://staging.screenroot.com/nexuspresscms/graphql
```

---

## 🚀 Vercel Deployment

### Method 1: Dashboard (Recommended)

1. **Go to**: https://vercel.com/new

2. **Import Repository**: `chetan3460/nextjs-wordpress-headless`

3. **Configure Project**:
   - Project Name: `nexuspress`
   - Framework: Next.js (auto-detected)
   - Root Directory: `./`

4. **Add Environment Variables**:

```env
NEXT_PUBLIC_WORDPRESS_URL=https://staging.screenroot.com/nexuspresscms
WORDPRESS_GRAPHQL_ENDPOINT=https://staging.screenroot.com/nexuspresscms/graphql
WORDPRESS_REST_ENDPOINT=https://staging.screenroot.com/nexuspresscms/wp-json
NEXT_PUBLIC_SITE_NAME=NexusPress
REVALIDATE_SECRET=your-secure-random-secret-here
WORDPRESS_CONSUMER_KEY=your-wordpress-consumer-key-here
WORDPRESS_CONSUMER_SECRET=your-wordpress-consumer-secret-here
```

> **Important**:
>
> - Generate a secure secret: `openssl rand -base64 32`
> - Get WordPress API keys from: WooCommerce → Settings → Advanced → REST API
> - Select **"Production"** environment for all variables

5. **Click Deploy** and wait 2-3 minutes

---

### Method 2: CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /path/to/nextjs-wordpress-headless
vercel --prod
```

---

## ⚙️ Post-Deployment

### 1. Update Site URL

After deployment, add:

```env
NEXT_PUBLIC_SITE_URL=https://your-vercel-url.vercel.app
```

Then **Redeploy** from Vercel dashboard.

### 2. Verify Deployment

Test these URLs:

- Homepage: `https://your-url.vercel.app/`
- About: `https://your-url.vercel.app/our-company/about-us`
- News: `https://your-url.vercel.app/our-company/news-updates`
- API: `https://your-url.vercel.app/api/news`

---

## 🔄 ISR Revalidation (Optional)

Add to WordPress `functions.php`:

```php
add_action('save_post', 'trigger_vercel_revalidation', 10, 3);

function trigger_vercel_revalidation($post_id, $post, $update) {
    if ($post->post_status !== 'publish') return;

    $vercel_url = 'https://your-url.vercel.app/api/revalidate';
    $secret = 'your-revalidate-secret-here';

    wp_remote_post($vercel_url, [
        'body' => json_encode([
            'secret' => $secret,
            'path' => '/'
        ]),
        'headers' => ['Content-Type' => 'application/json']
    ]);
}
```

---

## 🐛 Troubleshooting

### Build Fails: "REST API error: Internal Server Error"

**Fix**: Regenerate WordPress permalinks (see WordPress Setup #1)

### Images Not Loading

**Fix**: Already configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'staging.screenroot.com',
      pathname: '/nexuspresscms/wp-content/uploads/**',
    },
  ],
}
```

### Environment Variables Not Working

**Fix**:

1. Ensure all variables have **"Production"** environment selected
2. Redeploy after adding/updating variables

---

## 🌐 Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Add your domain
3. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain
5. Redeploy

---

## 📊 Performance

### Enable Analytics

- Go to **Project Settings** → **Analytics**
- Enable **Web Analytics**

### Configure Caching

```javascript
// In page components
export const revalidate = 3600; // 1 hour
```

---

## 🔐 Security Checklist

- [x] Environment variables in Vercel (not in code)
- [x] `.env.local` in `.gitignore`
- [x] Strong revalidation secret
- [x] WordPress admin password protected
- [x] SSL enabled (automatic on Vercel)

---

## 📈 Monitoring

### Vercel Dashboard

- **Deployments**: Build logs
- **Analytics**: Performance metrics
- **Functions**: API usage
- **Logs**: Runtime errors

### WordPress Health

```bash
# Check REST API
curl https://staging.screenroot.com/nexuspresscms/wp-json/

# Check GraphQL
curl -X POST https://staging.screenroot.com/nexuspresscms/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ generalSettings { title } }"}'
```

---

## 🎯 Deployment Checklist

### Pre-Deployment

- [ ] WordPress site accessible
- [ ] REST API working
- [ ] GraphQL working
- [ ] Plugins active
- [ ] Permalinks saved

### Deployment

- [ ] Repository imported
- [ ] Environment variables added
- [ ] Build successful

### Post-Deployment

- [ ] Site URL updated
- [ ] Homepage loads
- [ ] Images display
- [ ] Navigation works
- [ ] Content appears

---

## 📞 Support

- **Vercel**: https://vercel.com/docs
- **Next.js**: https://nextjs.org/docs
- **WPGraphQL**: https://www.wpgraphql.com/docs

---

## 🎉 Success!

Your site is live! 🚀

**Next Steps**:

1. Add custom domain
2. Set up monitoring
3. Configure ISR webhooks
4. Optimize performance

---

**Version**: 1.0.0  
**Last Updated**: December 26, 2025

---

## 🔒 Security Notes

### Sensitive Information

**NEVER commit these to Git:**

- API keys (WORDPRESS_CONSUMER_KEY, WORDPRESS_CONSUMER_SECRET)
- Revalidation secrets (REVALIDATE_SECRET)
- Database credentials
- Any production passwords

**Always use:**

- Vercel environment variables for secrets
- `.env.local` for local development (already in `.gitignore`)
- Strong, unique passwords
- HTTPS for all connections

### WordPress REST API

The REST API at `/wp-json/` is publicly accessible by design for headless CMS.  
However, you should:

- Keep WordPress core and plugins updated
- Use strong admin passwords
- Enable 2FA on WordPress admin
- Limit login attempts
- Use security plugins (Wordfence, iThemes Security)
