import Link from "next/link";
import { ChevronRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-forest to-primary" />
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Mountain silhouettes */}
          <polygon
            points="0,900 200,400 400,600 600,300 800,500 1000,200 1200,450 1440,350 1440,900"
            fill="rgba(255,255,255,0.08)"
          />
          <polygon
            points="0,900 150,500 350,650 550,350 750,550 950,280 1150,500 1440,400 1440,900"
            fill="rgba(255,255,255,0.05)"
          />
          <polygon
            points="0,900 100,600 300,700 500,450 700,600 900,380 1100,550 1300,450 1440,500 1440,900"
            fill="rgba(255,255,255,0.03)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
              animation: `fade-in ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in-up">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm tracking-wider uppercase">
            Trek the Garhwal Himalayas
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-heading leading-tight">
            Where Every Trail
            <br />
            <span className="text-accent">Tells a Story</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            Discover curated trekking adventures through Uttarakhand&apos;s most
            breathtaking landscapes. From snow-clad peaks to mystical valleys — your
            Himalayan journey awaits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/treks"
              className="group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-primary-dark shadow-xl hover:bg-accent-light transition-all hover:shadow-2xl hover:scale-105"
            >
              Explore Treks
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 pt-12 text-white/70">
            {[
              { value: "50+", label: "Treks" },
              { value: "5000+", label: "Trekkers" },
              { value: "10+", label: "Years" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 text-white/50" />
        </div>
      </div>
    </section>
  );
}
