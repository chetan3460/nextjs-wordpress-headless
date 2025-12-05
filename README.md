# Headless WordPress with Next.js

A modern headless WordPress website built with Next.js 14, JavaScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **WordPress** as headless CMS via GraphQL
- **Tailwind CSS** for styling
- **ISR (Incremental Static Regeneration)** for optimal performance
- **Responsive Design** with mobile-first approach
- **SEO Optimized** with Next.js metadata API

## 📋 Prerequisites

- Node.js 18+ installed
- WordPress installation with WPGraphQL plugin
- XAMPP or similar local server for WordPress

## 🛠️ Setup

### 1. WordPress Backend

Install these WordPress plugins:

- WPGraphQL
- WPGraphQL for ACF (if using Advanced Custom Fields)

### 2. Clone and Install

```bash
git clone https://github.com/YOUR-USERNAME/headless-cms-nextjs.git
cd headless-cms-nextjs
npm install
```

### 3. Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_WORDPRESS_URL=http://localhost/resplast
WORDPRESS_GRAPHQL_ENDPOINT=http://localhost/resplast/graphql
WORDPRESS_REST_ENDPOINT=http://localhost/resplast/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Resplast
REVALIDATE_SECRET=your-secret-key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.js       # Root layout
│   │   ├── page.js         # Homepage
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── layout/         # Layout components
│   │   ├── ui/             # Reusable UI components
│   │   └── blocks/         # Content blocks
│   └── lib/
│       ├── wordpress/      # WordPress API client
│       └── graphql/        # GraphQL queries
├── public/                 # Static assets
├── .env.local             # Environment variables
└── next.config.js         # Next.js configuration
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a pull request.
