# NexusPress

**AI-Powered WordPress Platform built with Next.js**

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![WordPress](https://img.shields.io/badge/WordPress-REST%20API-blue)](https://wordpress.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> A modern, high-performance headless WordPress platform powered by Next.js, optimized for speed, SEO, and ready for AI integration.

---

## ✨ Features

### 🚀 Performance Optimized

- **70-80% faster** than traditional WordPress
- AVIF/WebP image optimization
- Intelligent caching (30s - 1 hour based on content type)
- Edge CDN delivery
- 70% reduction in API calls

### 🎨 Modern Stack

- **Next.js 16** with App Router
- **WordPress REST API** (headless CMS)
- **Tailwind CSS** for styling
- **Dynamic imports** for code splitting
- **ISR** (Incremental Static Regeneration)

### 🔍 SEO Powerhouse

- JSON-LD structured data (Organization, Article, BreadcrumbList)
- Dynamic sitemap generation
- Yoast SEO integration
- Open Graph & Twitter Cards
- Google Analytics 4

### 🛡️ Production Ready

- Error boundaries with graceful fallbacks
- API rate limiting (100 req/min)
- On-demand cache revalidation
- PWA support with manifest
- Pre-commit hooks (Prettier + ESLint)

### ♿ Accessibility First

- ARIA labels auto-generation
- Keyboard navigation
- WCAG 2.1 compliant
- Screen reader optimized

### 🤖 AI-Ready Architecture

- Modular component system
- Flexible content blocks
- Ready for AI integrations
- Extensible API routes

---

## 📦 What's Included

```
nexuspress/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.js            # Homepage (30s cache)
│   │   ├── our-company/       # Company pages (1h cache)
│   │   ├── contact-us/        # Contact page (1h cache)
│   │   └── api/               # API routes
│   │       ├── news/          # News API
│   │       └── revalidate/    # Cache clearing
│   ├── components/
│   │   ├── blocks/            # WordPress ACF blocks
│   │   ├── common/            # Reusable components
│   │   └── layout/            # Header, Footer
│   ├── lib/
│   │   ├── wordpress/         # WordPress API client
│   │   └── utils/             # Utilities
│   │       ├── breadcrumbs.js
│   │       ├── yoast-seo.js
│   │       ├── structured-data.js
│   │       └── accessibility.js
│   └── middleware.js          # Rate limiting
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── icon-192.png          # PWA icons
│   └── icon-512.png
└── .husky/                    # Git hooks
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- WordPress installation with REST API enabled
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/chetan3460/nexuspress.git
cd nexuspress
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```bash
# WordPress Configuration
WORDPRESS_REST_ENDPOINT=http://localhost/your-wp/wp-json
NEXT_PUBLIC_WORDPRESS_URL=http://localhost/your-wp

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Cache Revalidation Secret
REVALIDATION_SECRET=your-secret-key
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📚 Documentation

- **[Performance Optimization Guide](docs/performance-optimization-guide.md)** - Make your site 70% faster
- **[Cache Management Guide](docs/cache-management-guide.md)** - LiteSpeed Cache integration
- **[Deployment Guide](docs/deployment-guide.md)** - Deploy to Vercel/Netlify
- **[Implementation Summary](docs/performance-implementation-summary.md)** - Quick reference

---

## 🎯 Performance Metrics

### Before Optimization

- Load Time: ~3.5s
- API Calls: ~1000/hour
- Bundle Size: ~2.5MB

### After Optimization

- Load Time: **~1.0s** (-70%)
- API Calls: **~300/hour** (-70%)
- Bundle Size: **~2.0MB** (-20%)

### Lighthouse Scores (Target)

- Performance: **90+**
- Accessibility: **95+**
- Best Practices: **95+**
- SEO: **100**

---

## 🔧 Key Technologies

| Technology       | Purpose                         |
| ---------------- | ------------------------------- |
| Next.js 16       | React framework with App Router |
| WordPress        | Headless CMS via REST API       |
| Tailwind CSS     | Utility-first styling           |
| Vercel           | Hosting & CDN                   |
| Google Analytics | User tracking                   |
| Yoast SEO        | SEO metadata                    |
| LiteSpeed Cache  | WordPress caching               |

---

## 📖 Usage

### Cache Management

**Clear Specific Page:**

```bash
curl -X POST "https://yoursite.com/api/revalidate?secret=YOUR_SECRET&path=/"
```

**Clear by Tag:**

```bash
curl -X POST "https://yoursite.com/api/revalidate?secret=YOUR_SECRET&tag=news"
```

**Clear All (Development):**

```bash
rm -rf .next && npm run dev
```

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

```bash
vercel --prod
```

---

## 🎨 Customization

### Add New Page

1. Create page in WordPress
2. Add to Next.js: `src/app/your-page/page.js`
3. Set cache time: `export const revalidate = 3600;`

### Add New Block

1. Create ACF block in WordPress
2. Add component: `src/components/blocks/YourBlock.jsx`
3. Register in `BlockRenderer.jsx`

### Modify Cache Times

```javascript
// Homepage - frequent updates
export const revalidate = 30;

// Static pages - rarely change
export const revalidate = 3600;

// News - moderate updates
export const revalidate = 300;
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [WordPress](https://wordpress.org/) - Content Management System
- [Vercel](https://vercel.com/) - Hosting Platform
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/chetan3460/nexuspress/issues)
- **Discussions**: [GitHub Discussions](https://github.com/chetan3460/nexuspress/discussions)

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅

- [x] Next.js 16 setup
- [x] WordPress REST API integration
- [x] Performance optimizations
- [x] SEO implementation
- [x] PWA support

### Phase 2: AI Integration 🚧

- [ ] AI-powered search
- [ ] Smart chatbot
- [ ] Content recommendations
- [ ] Auto-translation
- [ ] Image generation

### Phase 3: Advanced Features 📋

- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] A/B testing
- [ ] Personalization engine

---

<div align="center">

**Built with ❤️ using Next.js and WordPress**

[⭐ Star this repo](https://github.com/chetan3460/nexuspress) | [🐛 Report Bug](https://github.com/chetan3460/nexuspress/issues) | [✨ Request Feature](https://github.com/chetan3460/nexuspress/issues)

</div>
