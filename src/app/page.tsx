import Hero from "@/components/Hero";
import FeaturedTreks from "@/components/FeaturedTreks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <FeaturedTreks />
      <WhyChooseUs />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Ready to Trek?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Choose your adventure and start your Himalayan journey today. We handle
            the logistics, you focus on the experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/treks"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-primary-dark hover:bg-accent-light transition-all hover:shadow-lg"
            >
              Browse All Treks
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
