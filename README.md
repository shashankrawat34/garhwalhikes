# Garhwal Hikes Website

A responsive, high-performance React website for Garhwal Hikes trekking company. Built with Vite, React 18, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero section with search bar, trek categories (Yatra, Winter, Monsoon), customer reviews, and about section
- **All Treks Page**: Browse all treks with category filtering
- **Trek Details**: Individual trek pages with information, highlights, and booking links
- **About Page**: Company information, team, mission, and values
- **Influencer Program**: Dynamic application form for travel influencers with platform-specific fields (Instagram/YouTube)
- **Contact Page**: Contact form, company info, and FAQ

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (for optimal performance)
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Package Manager**: npm

## Color Scheme

- Primary: Forest Green (#228B22)
- Accent: Golden Yellow (#ffbe00)
- Secondary: White & Grays

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── shared/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── TrekCard.tsx
│       └── ReviewCard.tsx
├── pages/
│   ├── Home.tsx
│   ├── AllTreks.tsx
│   ├── TrekDetail.tsx
│   ├── About.tsx
│   ├── InfluencerProgram.tsx
│   └── Contact.tsx
├── data/
│   └── treks.ts
├── styles/
├── App.tsx
├── main.tsx
└── index.css
```

## Key Pages

### Home (`/`)
- Hero section with search functionality
- Trek categories: Yatra, Winter, and Monsoon treks
- Customer reviews section
- About Garhwal Hikes with mission and values
- Call-to-action section

### All Treks (`/treks`)
- Category-based filtering (Yatra, Winter, Monsoon)
- Trek cards with key information
- Links to individual trek details

### Trek Details (`/trek/:id`)
- Complete trek information
- Highlights and features
- Booking call-to-action

### About (`/about`)
- Company story and mission
- Team member profiles
- Why Choose Us section

### Influencer Program (`/influencer`)
- Why join us benefits
- Who we're looking for
- What you get and what we expect
- Dynamic application form supporting:
  - Instagram (handle & follower count)
  - YouTube (channel & subscriber count)
  - Trek preferences
  - Monthly availability selection

### Contact (`/contact`)
- Contact information and hours
- Contact form
- FAQ section
- WhatsApp integration

## Mobile Optimization

The website is optimized for mobile-first design with:
- Responsive grid layouts
- Touch-friendly buttons and forms
- Optimized font sizes and spacing for readability
- Efficient CSS for fast iOS performance
- Lightweight assets and optimized builds

## Performance

- Built with Vite for fast development and production builds
- Tree-shaking and code splitting
- Optimized CSS with Tailwind
- React Router for efficient client-side navigation
- No external API dependencies for main content

## Customization

### Trek Data

Edit trek information in `src/data/treks.ts`:
- Add/remove treks
- Modify trek details (duration, difficulty, altitude)
- Update highlights and descriptions

### Content

- About content in `src/data/treks.ts`
- Reviews data in `src/data/treks.ts`
- Contact information in `src/pages/Contact.tsx`

### Styling

Tailwind CSS configuration in `tailwind.config.js`:
- Customize colors in the `colors` object
- Adjust responsive breakpoints
- Extend theme with custom utilities

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is created for Garhwal Hikes.
