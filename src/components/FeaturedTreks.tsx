import Link from "next/link";
import { getFeaturedTreks } from "@/data/treks";
import { Clock, TrendingUp, MapPin, ArrowRight } from "lucide-react";

export default function FeaturedTreks() {
  const featured = getFeaturedTreks();

  const difficultyColor: Record<string, string> = {
    Easy: "bg-green-100 text-green-700",
    Moderate: "bg-yellow-100 text-yellow-700",
    Difficult: "bg-red-100 text-red-700",
    Challenging: "bg-purple-100 text-purple-700",
  };

  return (
    <section className="py-20 sm:py-28 bg-snow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Popular Adventures
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-dark font-heading">
            Featured Treks
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Handpicked trails through the most stunning landscapes of the Garhwal
            Himalayas, each offering a unique mountain experience.
          </p>
        </div>

        {/* Trek Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((trek, index) => (
            <Link
              key={trek.slug}
              href={`/treks/${trek.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Top - Gradient */}
              <div
                className={`relative h-56 bg-gradient-to-br ${trek.gradient} flex items-center justify-center`}
              >
                <span className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                  {trek.icon}
                </span>
                <div className="absolute inset-0 card-gradient" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-xl font-bold text-white font-heading">
                    {trek.name}
                  </h3>
                  <p className="text-sm text-white/80 mt-0.5">{trek.tagline}</p>
                </div>
                <span
                  className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                    difficultyColor[trek.difficulty]
                  }`}
                >
                  {trek.difficulty}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {trek.description}
                </p>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <TrendingUp className="h-3.5 w-3.5 text-primary" />
                    <span>{trek.maxAltitude}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>{trek.region}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div>
                    <span className="text-lg font-bold text-primary-dark">
                      ₹{trek.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">/ person</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/treks"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all"
          >
            View All Treks
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
