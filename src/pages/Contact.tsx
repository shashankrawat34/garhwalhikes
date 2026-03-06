import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">Get in touch with us for trek bookings, questions, or partnerships</p>
        </div>
      </section>

      <section className="section-py px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Get In Touch</h2>

            <div className="space-y-8">
              {/* Email */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">📧 Email</h3>
                <a href="mailto:info@garhwalhikes.com" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                  info@garhwalhikes.com
                </a>
              </div>

              {/* Phone */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">📞 Phone</h3>
                <a href="tel:+917455062107" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                  +91 7455 062 107
                </a>
              </div>

              {/* WhatsApp */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">💬 WhatsApp</h3>
                <a href="https://wa.me/917455062107" target="_blank" rel="noopener noreferrer" className="inline-block btn-primary">
                  Chat on WhatsApp
                </a>
              </div>

              {/* Address */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">📍 Address</h3>
                <address className="text-gray-700 not-italic leading-relaxed">
                  Garhwal Hikes<br />
                  Adventure Hub, Uttarakhand<br />
                  India
                </address>
              </div>

              {/* Hours */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">🕐 Hours</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm text-gray-600 mt-2">IST (Indian Standard Time)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Send us a Message</h2>

            {submitted && (
              <div className="bg-green-50 border-2 border-green-300 text-green-700 px-6 py-4 rounded-lg mb-6 text-center font-medium">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Trek booking, question, etc."
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-py px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-3">How do I book a trek?</h3>
              <p className="text-gray-700 leading-relaxed">Contact us via email, WhatsApp, or use the contact form above. Our team will assist you with trek selection, dates, and pricing.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-3">What's the cancellation policy?</h3>
              <p className="text-gray-700 leading-relaxed">Cancellations made 30 days before the trek date receive a full refund. Cancellations within 30 days incur a 25% charge.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-3">What is the minimum group size?</h3>
              <p className="text-gray-700 leading-relaxed">Most treks require a minimum of 4 participants. Solo trekkers can join existing groups.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-3">Do you provide accommodation on treks?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, we provide comfortable accommodation in homestays and guest houses along the trekking routes.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
