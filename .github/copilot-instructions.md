# Garhwal Hikes Website - Development Instructions

## Project Overview
Responsive React website for Garhwal Hikes (garhwalhikes.com) with multiple pages for trek information, influencer programs, and user engagement.

## Project Setup
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (for optimal performance)
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Color Scheme**: Forest Green (#228B22), Golden Yellow (#ffbe00), White
- **Target**: Mobile-first, iOS-optimized

## Pages Implemented
1. **Home** - Hero section, trek categories, reviews, about section
2. **All Treks** - Category-based trek listing with filtering
3. **Trek Details** - Individual trek information pages
4. **About** - Company information, team, mission, and values
5. **Influencer Program** - Application form with dynamic fields based on platform selection
6. **Contact** - Contact form, information, and FAQ

## Key Features
- **Hero Section**: Search bar for trek discovery
- **Trek Categories**: Yatra, Winter, and Monsoon treks with cards
- **Influencer Program Form**: 
  - Platform selection (Instagram/YouTube)
  - Dynamic fields for followers/subscribers
  - Trek preferences and month selection
  - Auto-submit and success notification
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Navigation**: Header and footer with internal routing
- **Reviews Section**: Customer testimonials with ratings

## Development Progress
- [x] Project scaffolded with Vite + React + TypeScript
- [x] Tailwind CSS and dependencies installed
- [x] Project structure created (pages, components, data)
- [x] Routing configured (React Router v6)
- [x] Shared components built (Header, Footer, TrekCard, ReviewCard)
- [x] Home page with all sections implemented
- [x] All Treks, Trek Details, About pages implemented
- [x] Contact page with form and FAQ
- [x] Influencer Program page with dynamic form
- [x] Development server running and tested

## Running the Project
```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

Development server runs on: http://localhost:5173/

## File Structure
```
src/
├── components/shared/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── TrekCard.tsx
│   └── ReviewCard.tsx
├── pages/
│   ├── Home.tsx
│   ├── AllTreks.tsx
│   ├── TrekDetail.tsx
│   ├── About.tsx
│   ├── InfluencerProgram.tsx
│   └── Contact.tsx
├── data/
│   └── treks.ts (Trek data, reviews, about content)
├── App.tsx (Main routing)
└── index.css (Tailwind styles)
```

## Customization Tips
- **Trek Data**: Edit `src/data/treks.ts` to add/modify treks
- **Colors**: Update `tailwind.config.js` to customize color scheme
- **Content**: Modify page components directly or data in `src/data/treks.ts`
- **Images**: Replace emoji placeholders with actual trek images as needed

