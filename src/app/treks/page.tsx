import { treks } from "@/data/treks";
import Link from "next/link";
import { Clock, TrendingUp, MapPin, ArrowRight } from "lucide-react";

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-yellow-100 text-yellow-700",
  Difficult: "bg-red-100 text-red-700",
  Challenging: "bg-purple-100 text-purple-700",
};

const difficultyDot: Record<string, string> = {
  Easy: "bg-green-500",
  Moderate: "bg-yellow-500",
  Difficult: "bg-orange-500",
  Challenging: "bg-red-500",
};

export default function TreksPage() {
  const grouped = treks.reduce(
    (acc, trek) => {
      const region = trek.region;
      if (!acc[region]) acc[region] = [];
      acc[region].push(trek);
      return acc;
    },
    {} as Record<string, typeof treks>
  );

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark to-primary px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading">
            All Treks
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Explore {treks.length} carefully curated trekking adventures across the
            majestic Garhwal Himalayas
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["All", "Easy", "Moderate", "Difficult", "Challenging"].map((level) => (
              <button
                key={level}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  level === "All"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treks by Region */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {Object.entries(grouped).map(([region, regionTreks]) => (
          <div key={region} className="mb-16">
            <h2 className="text-2xl font-bold text-primary-dark font-heading mb-8 flex items-center gap-2">
              <span className="inline-block w-1 h-8 bg-accent rounded" />
              {region} Region
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionTreks.map((trek) => (
                <Link
                  key={trek.slug}
                  href={`/treks/${trek.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {/* Card Header */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${trek.gradient} flex items-center justify-center`}
                  >
                    <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                      {trek.icon}
                    </span>
                    <div className="absolute inset-0 card-gradient" />
                    <span
                      className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                        difficultyColor[trek.difficulty]
                      }`}
                    >
                      {trek.difficulty}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col p-5">
                    <h3 className="font-bold text-lg text-primary-dark font-heading">
                      {trek.name}
                    </h3>
                    <p className="text-xs text-accent font-medium mt-0.5">
                      {trek.tagline}
                    </p>
                    <p className="text-sm text-gray-600 mt-3 flex-1 line-clamp-2">
                      {trek.description}
                    </p>

                    {/* Meta Info */}
                    <div className="mt-4 space-y-3 border-t pt-4">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{trek.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <TrendingUp className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>Max altitude: {trek.maxAltitude}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{trek.bestTime}</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between border-t pt-4">
                      <div>
                        <p className="text-lg font-bold text-primary-dark">
                          ₹{trek.price.toLocaleString("en-IN")}
                        </p>
                        <p className="text-xs text-gray-500">/ person</p>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Details
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
