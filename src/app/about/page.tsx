import Link from "next/link";
import { Award, Heart, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark to-primary px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading">
            Our Story
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            From passion to adventure: How Garhwal Hikes became the Himalaya&apos;s
            most trusted trekking company
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="mt-3 text-3xl font-bold text-primary-dark font-heading">
                Transforming Lives Through Mountain Adventures
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2015 by a group of passionate mountaineers, Garhwal Hikes
              was born from a simple belief: everyone deserves to experience the
              transformative power of the mountains. We&apos;ve spent nearly a decade
              perfecting our craft, building relationships with local communities,
              and creating trekking experiences that go beyond mere tourism.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we&apos;ve guided over 5,000 adventurers to some of the most
              spectacular peaks and valleys in the Garhwal Himalayas. Each trek is
              carefully designed not just to take you higher, but to help you discover
              your own potential.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 flex items-center justify-center min-h-96">
            <div className="text-center">
              <p className="text-6xl font-bold text-primary">5,000+</p>
              <p className="text-lg text-gray-600 mt-2">Happy Trekkers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-snow py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-dark font-heading">
              Our Core Values
            </h2>
            <p className="mt-4 text-gray-600">
              These principles guide every decision we make and every adventure we
              create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Community-First",
                description:
                  "We partner with and support local Himalayan communities, ensuring tourism benefits those whose lands we traverse. Every trek contributes to local conservation efforts.",
              },
              {
                icon: Zap,
                title: "Adventure for All",
                description:
                  "From beginners to experienced mountaineers, we believe everyone can find their perfect trek. Our inclusive approach makes mountain adventures accessible to all.",
              },
              {
                icon: Award,
                title: "Excellence & Safety",
                description:
                  "Safety is never compromised. Our team undergoes rigorous training, and we maintain the highest standards in equipment, weather monitoring, and emergency protocols.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-primary-dark font-heading mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-primary-dark font-heading text-center mb-16">
          What Sets Us Apart
        </h2>

        <div className="space-y-8">
          {[
            {
              title: "Expert Leadership",
              description:
                "All our trek leaders are certified mountaineers with 5+ years of Himalayan experience. They know these mountains intimately and share their knowledge generously.",
            },
            {
              title: "Small, Intimate Groups",
              description:
                "We cap group sizes at 15 people maximum, ensuring personalized attention, authentic connections, and minimal environmental impact. Your experience matters to us.",
            },
            {
              title: "Eco-Responsible Operations",
              description:
                "We follow strict Leave No Trace principles, pack out all waste, use renewable energy when possible, and actively contribute to Himalayan conservation through our Garhwal Green Initiative.",
            },
            {
              title: "Customized Experiences",
              description:
                "Whether you want relaxation, photography, spiritual journeys, or physical challenges, we customize every trek. Your preferences shape your adventure.",
            },
            {
              title: "Community Return",
              description:
                "10% of all trek fees go directly to local Garhwal villages for education, health, and conservation projects. Your trek creates lasting positive impact.",
            },
            {
              title: "Post-Trek Support",
              description:
                "We don't just say goodbye after the trek. We maintain a community of trekkers, share resources, and support your continued mountain growth.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="flex gap-6 items-start pb-8 border-b last:border-b-0"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white font-heading">
            Ready to Join Our Community?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Start your Himalayan journey with a company that cares about your safety,
            the mountains, and the communities we visit.
          </p>
          <Link
            href="/treks"
            className="inline-block mt-8 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-primary-dark hover:bg-accent-light transition-all hover:shadow-lg"
          >
            Explore Our Treks
          </Link>
        </div>
      </section>
    </div>
  );
}
