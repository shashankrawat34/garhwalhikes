import { useState } from 'react';
import { trekData } from '../data/treks';

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  platform: 'instagram' | 'youtube' | '';
  instagramHandle?: string;
  instagramFollowers?: string;
  youtubeChannel?: string;
  youtubeSubscribers?: string;
  preferredTreks: string[];
  preferredMonths: string[];
  about: string;
}

export default function InfluencerProgram() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contactNumber: '',
    platform: '',
    preferredTreks: [],
    preferredMonths: [],
    about: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'instagram' | 'youtube' | '';
    setFormData(prev => ({
      ...prev,
      platform: value,
      instagramHandle: '',
      instagramFollowers: '',
      youtubeChannel: '',
      youtubeSubscribers: '',
    }));
  };

  const handleTrekToggle = (trekId: string) => {
    setFormData(prev => ({
      ...prev,
      preferredTreks: prev.preferredTreks.includes(trekId)
        ? prev.preferredTreks.filter(id => id !== trekId)
        : [...prev.preferredTreks, trekId],
    }));
  };

  const handleMonthToggle = (month: string) => {
    setFormData(prev => ({
      ...prev,
      preferredMonths: prev.preferredMonths.includes(month)
        ? prev.preferredMonths.filter(m => m !== month)
        : [...prev.preferredMonths, month],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        platform: '',
        preferredTreks: [],
        preferredMonths: [],
        about: '',
      });
    }, 3000);
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="hero-title">Uttarakhand Travel Influencer Program</h1>
          <p className="hero-subtitle">Join us and share the magic of Garhwal with your audience</p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-py px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-primary mb-3">🌟 Exclusive Experiences</h3>
              <p className="text-gray-700 leading-relaxed">Access premium treks, private guided tours, and behind-the-scenes experiences unavailable to regular trekkers.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-primary mb-3">💰 Sponsorship Opportunities</h3>
              <p className="text-gray-700 leading-relaxed">Receive sponsored trek packages and special discounts based on your follower metrics.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-primary mb-3">📸 Content Support</h3>
              <p className="text-gray-700 leading-relaxed">We provide professional photography support, drone footage rights, and exclusive location information.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-primary mb-3">🤝 Community Building</h3>
              <p className="text-gray-700 leading-relaxed">Join a network of amazing travel creators and collaborate on content projects.</p>
            </div>
          </div>

          {/* Who We're Looking For */}
          <div className="card p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Who We're Looking For</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span>Passionate travelers and adventure enthusiasts with engaged audiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span>Content creators on Instagram (10K+ followers) or YouTube (5K+ subscribers)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span>Those with high engagement rates and authentic audience interaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span>Creators committed to authentic storytelling and quality content</span>
              </li>
            </ul>
          </div>

          {/* What You Get */}
          <div className="card p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">✨ Benefits Include:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sponsored trek packages</li>
                  <li>• Free accommodation and meals</li>
                  <li>• Professional guide services</li>
                  <li>• Photography & drone support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">🎁 Additional Perks:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Exclusive location access</li>
                  <li>• Early launch opportunities</li>
                  <li>• Revenue sharing options</li>
                  <li>• Continued partnership benefits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Expect */}
          <div className="card p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">What We Expect</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">★</span>
                <span>Authentic, high-quality content featuring Garhwal Hikes treks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">★</span>
                <span>Minimum of 3-5 posts/videos during or within 30 days of trek</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">★</span>
                <span>Proper tagging and mentions on all platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">★</span>
                <span>Authentic storytelling that resonates with your audience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">★</span>
                <span>Professional conduct and adherence to safety guidelines</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-py px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Apply Now</h2>

          {submitted && (
            <div className="bg-green-50 border-2 border-green-300 text-green-700 px-6 py-4 rounded-lg mb-6 text-center font-medium">
              ✓ Application submitted successfully! We'll review your application and get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label className="block text-gray-900 font-semibold mb-2">Contact Number *</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+91 98765432100"
                />
              </div>
            </div>

            {/* Platform Selection */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Primary Platform *</label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handlePlatformChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Select a platform</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">YouTube</option>
              </select>
            </div>

            {/* Instagram Fields */}
            {formData.platform === 'instagram' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Instagram Handle *</label>
                  <input
                    type="text"
                    name="instagramHandle"
                    value={formData.instagramHandle || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="@yourhandle"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Follower Count *</label>
                  <input
                    type="number"
                    name="instagramFollowers"
                    value={formData.instagramFollowers || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your follower count"
                  />
                </div>
              </div>
            )}

            {/* YouTube Fields */}
            {formData.platform === 'youtube' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">YouTube Channel *</label>
                  <input
                    type="text"
                    name="youtubeChannel"
                    value={formData.youtubeChannel || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your channel name"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Subscriber Count *</label>
                  <input
                    type="number"
                    name="youtubeSubscribers"
                    value={formData.youtubeSubscribers || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your subscriber count"
                  />
                </div>
              </div>
            )}

            {/* Preferred Treks */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3">Preferred Treks (Select at least one)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {trekData.map(trek => (
                  <label key={trek.id} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-md transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.preferredTreks.includes(trek.id)}
                      onChange={() => handleTrekToggle(trek.id)}
                      className="w-4 h-4 text-primary rounded"
                    />
                    <span className="text-gray-700">{trek.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Preferred Months */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3">Preferred Months</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {months.map(month => (
                  <label key={month} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-50 rounded-md transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.preferredMonths.includes(month)}
                      onChange={() => handleMonthToggle(month)}
                      className="w-4 h-4 text-primary rounded"
                    />
                    <span className="text-gray-700 text-sm">{month}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Tell Us About Yourself *</label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Share your niche, engagement rate, audience demographics, and why you want to partner with Garhwal Hikes..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full text-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
