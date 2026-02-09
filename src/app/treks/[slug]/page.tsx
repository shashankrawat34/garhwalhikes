import { getTrekBySlug } from "@/data/treks";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  TrendingUp,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface TrekPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TrekPageProps) {
  const { slug } = await params;
  const trek = getTrekBySlug(slug);
  return {
    title: trek ? `${trek.name} Trek – Garhwal Hikes` : "Trek Not Found",
    description: trek?.longDescription || "Trek adventure in Garhwal Himalayas",
  };
}

export default async function TrekPage({ params }: TrekPageProps) {
  const { slug } = await params;
  const trek = getTrekBySlug(slug);

  if (!trek) {
    notFound();
  }

  const allTreks = require("@/data/treks").treks;
  const currentIndex = allTreks.findIndex((t: any) => t.slug === trek.slug);
  const nextTrek = allTreks[(currentIndex + 1) % allTreks.length];

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section
        className={`relative min-h-96 flex items-end bg-gradient-to-br ${trek.gradient} px-4 sm:px-6 lg:px-8`}
      >
        <div className="absolute inset-0 card-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl w-full pb-12">
          <Link
            href="/treks"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Treks
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading">
            {trek.name}
          </h1>
          <p className="text-xl text-white/80 mt-3">{trek.tagline}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: Clock,
                  label: "Duration",
                  value: trek.duration,
                },
                {
                  icon: TrendingUp,
                  label: "Max Altitude",
                  value: trek.maxAltitude,
                },
                {
                  icon: MapPin,
                  label: "Distance",
                  value: trek.distance,
                },
                {
                  icon: Calendar,
                  label: "Best Time",
                  value: trek.bestTime,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-gray-100 bg-white p-4 text-center hover:border-primary/30 transition"
                >
                  <stat.icon className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-primary-dark mt-1">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary-dark font-heading">
                About This Trek
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {trek.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary-dark font-heading">
                Trek Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trek.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-dark font-heading">
                Detailed Itinerary
              </h2>
              <div className="space-y-4">
                {trek.itinerary.map((day, index) => (
                  <div
                    key={day.day}
                    className="rounded-lg border border-gray-100 bg-white p-6 hover:border-primary/30 hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        Day {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-primary-dark">
                          {day.title}
                        </h3>
                        <p className="mt-2 text-gray-600 leading-relaxed">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary-dark font-heading">
                What&apos;s Included
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trek.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg space-y-4">
              <div>
                <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">
                  Price Per Person
                </p>
                <p className="text-4xl font-bold text-primary-dark">
                  ₹{trek.price.toLocaleString("en-IN")}
                </p>
              </div>

              <Link
                href="/contact"
                className="block rounded-full bg-primary px-6 py-3.5 text-center font-semibold text-white hover:bg-primary-light transition-all hover:shadow-lg"
              >
                Book Now
              </Link>

              <p className="text-center text-xs text-gray-500">
                Limited slots available. Book early!
              </p>

              <div className="space-y-3 border-t pt-4">
                {[
                  {
                    icon: Users,
                    label: "Group Size",
                    value: trek.groupSize,
                  },
                  {
                    icon: TrendingUp,
                    label: "Difficulty",
                    value: trek.difficulty,
                  },
                  {
                    icon: MapPin,
                    label: "Region",
                    value: trek.region,
                  },
                  {
                    icon: Calendar,
                    label: "Start Point",
                    value: trek.startPoint,
                  },
                ].map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <detail.icon className="h-4 w-4 text-primary" />
                      {detail.label}
                    </span>
                    <span className="text-sm font-semibold text-primary-dark">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="rounded-xl bg-accent/10 border border-accent/20 p-6 space-y-3">
              <h3 className="font-bold text-primary-dark">Before You Trek</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Physical fitness matters — start training 4-6 weeks before</li>
                <li>
                  ✓ High altitude experience recommended for 12000+ ft treks
                </li>
                <li>✓ Carry proper gear from the provided packing list</li>
                <li>✓ Travel insurance with altitude coverage is mandatory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Trek CTA */}
      <section className="bg-gradient-to-r from-primary-dark to-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between gap-6 text-white">
            <div>
              <p className="text-sm uppercase tracking-wider text-white/60 font-semibold">
                Explore More
              </p>
              <p className="text-2xl font-bold font-heading">
                {nextTrek.name}
              </p>
            </div>
            <Link
              href={`/treks/${nextTrek.slug}`}
              className="flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              View Trek
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
