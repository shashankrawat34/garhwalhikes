import { useState, useEffect } from 'react';
import { trekData, reviews, aboutContent } from '../data/treks';
import TrekCard from '../components/shared/TrekCard';
import ReviewCard from '../components/shared/ReviewCard';
import { updateMetaTags } from '../utils/seo';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // SEO - Update meta tags for home page
  useEffect(() => {
    updateMetaTags({
      title: 'Best Trekking Company in Uttarakhand - Garhwal Hikes',
      description: 'Trek to the heart of Himalayas with Garhwal Hikes. Expert guided treks in Uttarakhand including Panch Kedar, Kuari Pass, Valley of Flowers and more.',
      url: 'https://garhwalhikes.com/',
    });
  }, []);

  const yatraTraps = trekData.filter(t => t.category === 'yatra');
  const winterTreks = trekData.filter(t => t.category === 'winter');
  const monsoonTreks = trekData.filter(t => t.category === 'monsoon');

  const searchFilter = (trek: typeof trekData[0]) =>
    trek.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trek.description.toLowerCase().includes(searchQuery.toLowerCase());

  const filteredYatra = yatraTraps.filter(searchFilter);
  const filteredWinter = winterTreks.filter(searchFilter);
  const filteredMonsoon = monsoonTreks.filter(searchFilter);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="hero-title">Trek to the Heart of Himalayas</h1>
          <p className="hero-subtitle mb-8">Experience the magic of Garhwal's mountains with expert guides and unforgettable adventures</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search treks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && setSearchQuery(searchQuery)}
                className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white shadow-lg"
              />
              <button 
                onClick={() => setSearchQuery(searchQuery)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Yatra Treks Section */}
      <section className="section-py px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Yatra Treks</h2>
            <p className="text-gray-600 text-lg">Sacred pilgrimages and spiritual journeys</p>
          </div>
          <div className="grid-cols-adaptive">
            {(searchQuery ? filteredYatra : yatraTraps).map(trek => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        </div>
      </section>

      {/* Winter Treks Section */}
      <section className="section-py px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Winter Treks</h2>
            <p className="text-gray-600 text-lg">Snow-covered peaks and pristine landscapes</p>
          </div>
          <div className="grid-cols-adaptive">
            {(searchQuery ? filteredWinter : winterTreks).map(trek => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        </div>
      </section>

      {/* Monsoon Treks Section */}
      <section className="section-py px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Monsoon Treks</h2>
            <p className="text-gray-600 text-lg">Lush green valleys and vibrant wildflowers</p>
          </div>
          <div className="grid-cols-adaptive">
            {(searchQuery ? filteredMonsoon : monsoonTreks).map(trek => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        </div>
      </section>

      {/* About Garhwal Hikes */}
      <section className="section-py px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary to-primary-dark h-96 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-white text-8xl">🏔️</div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{aboutContent.heading}</h2>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">{aboutContent.content}</p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-3 text-lg">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">{aboutContent.mission}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3 text-lg">Our Values</h3>
                  <div className="flex flex-wrap gap-3">
                    {aboutContent.values.map((value, idx) => (
                      <span key={idx} className="bg-primary text-secondary px-4 py-2 rounded-full font-semibold text-sm">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-py px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">What Trekkers Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from our adventurers</p>
          </div>
          <div className="grid-cols-adaptive">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary via-primary-dark to-primary text-secondary section-py px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Trek?</h2>
        <p className="mb-8 text-lg text-gray-100">Join us for an unforgettable Himalayan adventure</p>
        <a href="/contact" className="inline-block btn-primary bg-white text-primary hover:bg-gray-100">
          Start Your Journey
        </a>
      </section>
    </main>
  );
}
