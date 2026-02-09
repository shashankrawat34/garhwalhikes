# Garhwal Hikes – Trekking Adventure Website

A modern, responsive Next.js website for Garhwal Hikes, a trekking adventure company specializing in curated Himalayan treks. Built with TypeScript, Tailwind CSS v4, and modern React patterns.

## 🏔️ Features

- **Home Page** – Eye-catching hero section with featured treks, testimonials, and company story
- **Trek Listing** – Browse all treks organized by region with filtering
- **Trek Details** – Comprehensive trek pages with itineraries, highlights, and booking info
- **About Page** – Company mission, values, and what sets us apart
- **Contact Page** – Contact form with FAQs and business information
- **Responsive Design** – Mobile-first approach with seamless desktop experience
- **Modern UI** – Smooth animations, gradient effects, and interactive components
- **Eco-Friendly** – Emphasis on sustainability and community responsibility

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Runtime:** Node.js with Turbopack

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles & animations
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   ├── treks/
│   │   ├── page.tsx         # Trek listing page
│   │   └── [slug]/page.tsx  # Individual trek detail page
│   └── not-found.tsx        # 404 page
├── components/               # Reusable React components
│   ├── Navbar.tsx           # Navigation header
│   ├── Footer.tsx           # Footer section
│   ├── Hero.tsx             # Hero section
│   ├── FeaturedTreks.tsx    # Featured treks showcase
│   ├── WhyChooseUs.tsx      # Why choose us section
│   └── Testimonials.tsx     # Customer testimonials
├── data/
│   └── treks.ts             # Trek data and testimonial info
└── next-env.d.ts            # TypeScript declarations

public/                       # Static assets (add images here)
package.json                  # Dependencies and scripts
tailwind.config.js           # Tailwind configuration
tsconfig.json                # TypeScript configuration
next.config.mjs              # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## 📝 Trek Data

Treks are defined in `src/data/treks.ts` with the following structure:

```typescript
{
  slug: string;              // URL-friendly identifier
  name: string;              // Trek name
  tagline: string;           // Short description
  description: string;       // Medium description
  longDescription: string;   // Detailed description
  difficulty: string;        // Easy, Moderate, Difficult, Challenging
  duration: string;          // e.g., "6 Days"
  distance: string;          // e.g., "20 km"
  maxAltitude: string;       // e.g., "12,500 ft"
  bestTime: string;          // Best season to trek
  price: number;             // Price per person in INR
  groupSize: string;         // e.g., "6-15 people"
  startPoint: string;        // Trek starting location
  endPoint: string;          // Trek ending location
  highlights: string[];      // Array of trek highlights
  itinerary: object[];       // Day-by-day itinerary
  includes: string[];        // What's included in the trek
  gradient: string;          // Tailwind gradient class
  icon: string;              // Emoji or icon
  region: string;            // Garhwal region
  featured: boolean;         # Show on homepage?
}
```

## 🎨 Design System

### Color Palette

- **Primary:** `#1a5632` (Forest Green)
- **Primary Light:** `#2d8a4e`
- **Primary Dark:** `#0f3d22`
- **Accent:** `#e8a735` (Gold)
- **Earth:** `#8b6f47`
- **Snow:** `#f0f5fa`

### Typography

- **Headings:** Georgia, serif (font-heading)
- **Body:** System UI, sans-serif (font-body)

### Animations

- `fade-in-up` – Elements fade in while sliding up
- `fade-in` – Smooth opacity transition
- `slide-in-right` – Elements slide in from right
- Custom animation delays via `animation-delay-*` classes

## 📸 Adding Images

To add images to your treks:

1. Place images in `public/images/` directory
2. Update trek data with image URLs
3. Create new image components if needed

Example:
```typescript
// In trek data:
image: "/images/kedarkantha.jpg",
```

## 🌱 Customization

### Adding a New Trek

1. Add trek object to `src/data/treks.ts`
2. Set `featured: true` to show on homepage (max 4 recommended)
3. Trek pages are generated automatically

### Modifying Colors

1. Update custom CSS variables in `src/app/globals.css` under `@theme`
2. Or modify Tailwind colors in individual components

### Updating Contact Information

Edit contact details in:
- `src/components/Footer.tsx` – Footer section
- `src/app/contact/page.tsx` – Contact page

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px – 1024px
- **Desktop:** > 1024px

All components use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`).

## 🔒 SEO & Meta Tags

Each page includes proper meta tags:
- Already configured for Open Graph and Twitter cards
- Dynamic page titles and descriptions
- Canonical URLs

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

1. Build for production:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## 🌍 Environment Variables

Create a `.env.local` file if needed for:
- API endpoints
- Analytics tokens
- Third-party service keys

Example:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📄 License

This project is proprietary to Garhwal Hikes.

## 🤝 Support

For questions or issues, contact: hello@garhwalhikes.com

---

**Made with ❤️ for mountain lovers** 🏔️
