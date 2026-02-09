"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trek: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", trek: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-dark to-primary px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading">
            Get in Touch
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Have questions about our treks? We&apos;re here to help you plan the
            adventure of a lifetime.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary-dark font-heading mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Reach out through any of these channels. We usually respond within 24
                hours.
              </p>
            </div>

            {[
              {
                icon: Mail,
                title: "Email",
                value: "hello@garhwalhikes.com",
                href: "mailto:hello@garhwalhikes.com",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91 98765 43210",
                href: "tel:+919876543210",
              },
              {
                icon: MapPin,
                title: "Address",
                value: "Rishikesh, Uttarakhand, India 249201",
                href: "#",
              },
            ].map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                className="flex items-start gap-4 group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <contact.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 hover:text-primary transition">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Hours */}
            <div className="bg-snow rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-primary-dark mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                <p>Saturday: 10:00 AM – 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white rounded-2xl border border-gray-100 p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="trek"
                    className="block text-sm font-semibold text-primary-dark mb-2"
                  >
                    Interested Trek
                  </label>
                  <select
                    id="trek"
                    name="trek"
                    value={formData.trek}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition"
                  >
                    <option value="">Select a trek</option>
                    <option value="kedarkantha">Kedarkantha</option>
                    <option value="har-ki-dun">Har Ki Dun</option>
                    <option value="roopkund">Roopkund</option>
                    <option value="valley-of-flowers">Valley of Flowers</option>
                    <option value="chopta-chandrashila">Chopta Chandrashila</option>
                    <option value="dayara-bugyal">Dayara Bugyal</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary-dark mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition"
                  placeholder="Tell us about your trekking experience, interests, and any questions you have..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-light transition-all flex items-center justify-center gap-2 hover:shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>

              {submitted && (
                <div className="rounded-lg bg-green-100 border border-green-300 p-4 text-center">
                  <p className="text-green-700 font-semibold">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold text-primary-dark font-heading mb-8 text-center">
          Find Us
        </h2>
        <div className="rounded-2xl overflow-hidden h-96 bg-gradient-to-br from-primary-dark/10 to-primary/10 border border-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto text-primary/50 mb-3" />
            <p className="text-gray-500">Interactive map coming soon</p>
            <p className="text-sm text-gray-400 mt-2">
              Visit us in Rishikesh or meet us on the trail!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-snow py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-dark font-heading text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "When should I book my trek?",
                a: "We recommend booking 4-6 weeks in advance to secure your spot. Popular treks during peak seasons fill up quickly.",
              },
              {
                q: "What's the fitness level required?",
                a: "It varies by trek. Easy treks are suitable for beginners, while Challenging treks need experienced mountaineers. We'll help you choose the right fit.",
              },
              {
                q: "Is altitude sickness a concern?",
                a: "Possible but manageable. We use gradual acclimatization, proper hydration, and experienced guides. Medical support is always available.",
              },
              {
                q: "Can I customize my trek itinerary?",
                a: "Absolutely! We offer custom treks tailored to your preferences, fitness level, and timeline. Contact us to discuss your ideal adventure.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-gray-200 bg-white p-6 cursor-pointer hover:border-primary/30 transition"
              >
                <summary className="flex items-center justify-between font-semibold text-primary-dark">
                  {faq.q}
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
