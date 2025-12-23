# Agenix Labs LTD - Marketing Website

A premium, minimal, high-tech marketing website built with Next.js 14, TypeScript, and Tailwind CSS, inspired by Vercel's design aesthetic.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Premium Design**: Vercel-inspired minimal aesthetic with spacious layouts
- **Smooth Animations**: Framer Motion for scroll-triggered fade-ins and hover effects
- **Responsive**: Mobile-first design that looks great on all devices
- **Performance**: Optimized with Next.js Image component and server components
- **Typography**: Geist font family for excellent readability

## 📋 Sections

1. **Hero** - Eye-catching introduction with gradient text and CTA
2. **What We Do** - Service offerings with animated cards
3. **How It Works** - Step-by-step process explanation
4. **Why Us** - Key differentiators and benefits
5. **Contact** - Get in touch form and information

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agenix-9
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3b82f6 to #8b5cf6)
- **Background**: Dark theme (#000000, #0a0a0a)
- **Text**: White with gray variants for hierarchy

### Typography
- **Font**: Geist Sans (Vercel's typeface)
- **Sizes**: Responsive scale from mobile to desktop

### Spacing
- Consistent padding and margins using Tailwind's spacing scale
- Generous whitespace for premium feel

## 🚢 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel with zero configuration.

**Quick Deploy:**

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Configure environment variables (see below)
4. Deploy automatically

**Environment Variables Required:**

- `RESEND_API_KEY` - Your Resend API key for contact form emails

**📖 Detailed Deployment Guide:**

See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for:
- Step-by-step deployment instructions (Web UI & CLI)
- Environment variable configuration
- Custom domain setup
- Troubleshooting tips
- Performance optimization

**Configuration Files:**

- `vercel.json` - Vercel deployment configuration
- `.env.example` - Environment variable template
- `.vercelignore` - Files to ignore during deployment

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## 📁 Project Structure

```
agenix-9/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Main page integrating all sections
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhyUs.tsx
│   │   └── Contact.tsx
│   └── Navigation.tsx      # Navigation component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## 🔧 Customization

### Update Content

Edit the section components in `components/sections/` to update text, features, and services.

### Modify Colors

Update the Tailwind configuration in `tailwind.config.ts` or use inline color classes.

### Add Sections

1. Create new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Follow existing animation patterns with Framer Motion

## 📄 License

Copyright © 2024 Agenix Labs LTD. All rights reserved.

## 🤝 Support

For questions or support, contact us through the website contact form.
