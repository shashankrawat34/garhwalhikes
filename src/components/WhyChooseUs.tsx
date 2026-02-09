import { Compass, Shield, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Expert-Led Adventures",
    description:
      "Our certified trek leaders have years of Himalayan experience, ensuring you're guided safely through every terrain and weather condition.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Comprehensive safety protocols, emergency evacuation plans, satellite phones, and first-aid trained staff on every trek.",
  },
  {
    icon: Heart,
    title: "Eco-Responsible",
    description:
      "We follow strict Leave No Trace principles, support local communities, and contribute to Himalayan conservation efforts.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description:
      "Intimate group sizes ensure personalized attention, meaningful connections, and minimal environmental impact on the trails.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Why Trek With Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-dark font-heading">
            The Garhwal Hikes Difference
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We don&apos;t just take you to the mountains — we create experiences that
            transform the way you see the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 text-center hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark font-heading mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
