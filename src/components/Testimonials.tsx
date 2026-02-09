import { testimonials } from "@/data/treks";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-snow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-dark font-heading">
            What Our Trekkers Say
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Hear from adventurers who&apos;ve conquered the mountains with us and
            discovered their true potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-gray-100 bg-white p-6 space-y-4 hover:shadow-lg transition-all"
              style={{
                animation: "fade-in-up 0.6s ease-out forwards",
                animationDelay: `${index * 100}ms`,
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="pt-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {testimonial.avatar}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-primary-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.trek}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
