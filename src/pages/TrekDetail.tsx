import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { trekData } from '../data/treks';

export default function TrekDetail() {
  const { id } = useParams();
  const trek = trekData.find(t => t.id === id);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');

  // Create refs for each section
  const overviewRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const inclusionsRef = useRef<HTMLDivElement>(null);
  const bestTimeRef = useRef<HTMLDivElement>(null);
  const packRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'overview', label: 'Overview', ref: overviewRef },
    { id: 'itinerary', label: 'Itinerary', ref: itineraryRef },
    { id: 'inclusions', label: 'Inclusions', ref: inclusionsRef },
    { id: 'bestTime', label: 'Best Time', ref: bestTimeRef },
    { id: 'pack', label: 'What to Pack', ref: packRef },
    { id: 'terms', label: 'Terms', ref: termsRef },
    { id: 'gallery', label: 'Gallery', ref: galleryRef },
    { id: 'faq', label: 'FAQ', ref: faqRef },
    { id: 'reviews', label: 'Reviews', ref: reviewsRef },
  ] as const;

  const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      for (let section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextImage = () => {
    if (trek?.gallery) {
      setCurrentGalleryIndex((currentGalleryIndex + 1) % trek.gallery.length);
    }
  };

  const prevImage = () => {
    if (trek?.gallery) {
      setCurrentGalleryIndex((currentGalleryIndex - 1 + trek.gallery.length) % trek.gallery.length);
    }
  };

  if (!trek) {
    return (
      <main className="min-h-screen bg-white py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trek Not Found</h1>
          <p className="text-gray-600 mb-8 text-lg">Sorry, we couldn't find the trek you're looking for.</p>
          <Link to="/treks" className="inline-block btn-primary">
            Back to All Treks
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Sticky Top Navigation Bar - Mobile Optimized */}
      <div className="sticky top-0 left-0 right-0 bg-white shadow-lg z-40 border-b border-gray-200" style={{ 
        WebkitBackdropFilter: 'blur(10px)',
        WebkitFontSmoothing: 'antialiased',
        WebkitTapHighlightColor: 'transparent'
      }}>
        <div className="max-w-2xl mx-auto px-4">
          {/* Back Button */}
          <div className="py-2 border-b border-gray-100">
            <Link to="/treks" className="text-primary font-semibold text-sm hover:text-primary-dark active:opacity-70 transition-opacity">
              ← All Treks
            </Link>
          </div>
          
          {/* Section Navigation */}
          <div className="overflow-x-auto -mx-4 px-4 overscroll-x-contain">
            <div className="flex gap-2 pt-6 pb-4 whitespace-nowrap">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.ref)}                  aria-label={`Jump to ${section.label}`}                  className={`text-xs md:text-sm font-semibold px-3 py-3 rounded-full transition-all active:scale-95 ${
                    activeSection === section.id
                      ? 'bg-primary text-secondary'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="bg-gray-50 pt-20 pb-8">
        <div className="max-w-2xl mx-auto px-4">
          {/* Trek Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">{trek.name}</h1>
          
          {/* Hero Section with Key Stats */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 mb-6 text-secondary shadow-lg overflow-hidden">
            {trek.image ? (
              <img src={trek.image} alt={trek.name} className="w-full object-cover rounded-lg mb-4" style={{aspectRatio: '2/1'}} width="1200" height="600" loading="eager" />
            ) : (
              <div className="text-5xl mb-4">🏔️</div>
            )}
            <p className="text-gray-100 mb-6 leading-relaxed">{trek.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-white text-xs mb-1 font-semibold">Duration</p>
                <p className="text-white font-bold text-lg">{trek.duration}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-white text-xs mb-1 font-semibold">Difficulty</p>
                <p className="text-white font-bold text-lg">{trek.difficulty}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-white text-xs mb-1 font-semibold">Altitude</p>
                <p className="text-white font-bold text-lg">{trek.altitude}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-white text-xs mb-1 font-semibold">Best Time</p>
                <p className="text-white font-bold text-lg">{trek.bestTime}</p>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <section ref={overviewRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>📋</span> Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">{trek.overview || trek.description}</p>
            
            {trek.highlights && trek.highlights.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-primary mb-3">Highlights</h3>
                <div className="space-y-2">
                  {trek.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                      <span className="text-primary flex-shrink-0 mt-1">★</span>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Itinerary Section */}
          <section ref={itineraryRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>🗺️</span> Detailed Itinerary
            </h2>
            {trek.itinerary && trek.itinerary.length > 0 ? (
              <div className="space-y-3">
                {trek.itinerary.map((day, idx) => (
                  <div key={idx} className="border-l-4 border-primary bg-gray-50 p-4 rounded-r-lg">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="font-bold text-primary text-sm">Day {day.day || idx + 1}: {day.title}</h4>
                      {day.altitude && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">{day.altitude}</span>}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">{day.description}</p>
                    {day.notes && <p className="text-xs text-gray-700 italic border-t border-gray-200 pt-2 mt-2">{day.notes}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-sm">Detailed itinerary will be provided upon booking.</p>
            )}
          </section>

          {/* Inclusions Section */}
          <section ref={inclusionsRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>✓</span> Inclusions & Exclusions
            </h2>
            <div className="space-y-4">
              {trek.inclusions && trek.inclusions.length > 0 && (
                <div>
                  <h3 className="font-bold text-green-600 mb-2 text-sm">What's Included</h3>
                  <div className="space-y-2">
                    {trek.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold text-xs mt-1 flex-shrink-0">✓</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {trek.exclusions && trek.exclusions.length > 0 && (
                <div>
                  <h3 className="font-bold text-red-600 mb-2 text-sm">Not Included</h3>
                  <div className="space-y-2">
                    {trek.exclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold text-xs mt-1 flex-shrink-0">✗</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Best Time Section */}
          <section ref={bestTimeRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>🌞</span> Best Time to Visit
            </h2>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20 mb-4">
              <p className="text-primary-dark font-bold mb-2">Recommended Season</p>
              <p className="text-primary-dark text-lg font-semibold">{trek.bestTime}</p>
            </div>
            {trek.bestTimeDetails ? (
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{trek.bestTimeDetails}</p>
            ) : (
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm">Weather & Conditions</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    During {trek.bestTime}, expect favorable weather with clear skies, comfortable temperatures, and excellent visibility for trekking activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm">Why This Season?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This period offers ideal trekking conditions, accessible roads, stable weather patterns, and the most spectacular mountain views.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* What to Pack Section */}
          <section ref={packRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>🎒</span> What to Pack
            </h2>
            {trek.whatToPack && trek.whatToPack.length > 0 ? (
              <div className="grid grid-cols-1 gap-2">
                {trek.whatToPack.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                    <span className="text-secondary flex-shrink-0 mt-1">→</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-sm">Ask our guides for a detailed packing list tailored to the season.</p>
            )}
          </section>

          {/* Terms & Conditions Section */}
          <section ref={termsRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>📝</span> Terms & Conditions
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{trek.termsConditions}</p>
            </div>
          </section>

          {/* Gallery Section */}
          <section ref={galleryRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>🖼️</span> Gallery
            </h2>
            {trek.gallery && trek.gallery.length > 0 ? (
              <div>
                <div className="bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden" style={{aspectRatio: '2/1'}}>
                  {trek.gallery[currentGalleryIndex].startsWith('/images/') || trek.gallery[currentGalleryIndex].startsWith('images/') ? (
                    <img src={trek.gallery[currentGalleryIndex]} alt={`Gallery ${currentGalleryIndex + 1}`} className="w-full h-full object-cover" width="1200" height="600" />
                  ) : (
                    <div className="text-8xl flex items-center justify-center">{trek.gallery[currentGalleryIndex]}</div>
                  )}
                </div>
                
                <div className="flex justify-between items-center gap-2 mb-4">
                  <button
                    onClick={prevImage}
                    aria-label="Previous gallery image"
                    className="flex-shrink-0 btn-primary bg-primary text-secondary px-4 py-2 rounded font-semibold text-sm hover:bg-primary-dark transition-colors"
                  >
                    ← Prev
                  </button>
                  <span className="text-gray-600 font-semibold text-sm text-center">
                    {currentGalleryIndex + 1} / {trek.gallery.length}
                  </span>
                  <button
                    onClick={nextImage}
                    aria-label="Next gallery image"
                    className="flex-shrink-0 btn-primary bg-primary text-secondary px-4 py-2 rounded font-semibold text-sm hover:bg-primary-dark transition-colors"
                  >
                    Next →
                  </button>
                </div>
                
                <div className="grid grid-cols-6 gap-2">
                  {trek.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentGalleryIndex(idx)}
                      aria-label={`View gallery image ${idx + 1}`}
                      aria-current={currentGalleryIndex === idx ? 'true' : 'false'}
                      className={`p-2 rounded border-2 transition-all overflow-hidden h-20 ${
                        currentGalleryIndex === idx
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-300 hover:border-primary'
                      }`}
                    >
                      {typeof img === 'string' && (img.startsWith('/images/') || img.startsWith('images/')) ? (
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover rounded" width="80" height="80" loading="lazy" />
                      ) : (
                        <span className="text-xl flex items-center justify-center h-full">{img}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600 text-sm">Gallery images will be available soon.</p>
            )}
          </section>

          {/* FAQ Section */}
          <section ref={faqRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>❓</span> Frequently Asked Questions
            </h2>
            {trek.faq && trek.faq.length > 0 ? (
              <div className="space-y-2">
                {trek.faq.map((item, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 text-left text-sm">{item.question}</span>
                      <span className={`text-primary text-lg transition-transform flex-shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {expandedFaq === idx && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-sm">Have a question? Contact us directly!</p>
            )}
          </section>

          {/* Reviews Section */}
          <section ref={reviewsRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>⭐</span> Reviews
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">👤</div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Trek Experience</p>
                  <p className="text-xs text-gray-600">Verified Trekker</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-secondary text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                This trek offers an unforgettable experience combining adventure and natural beauty. Our guides were professional, meals were excellent, and safety was prioritized throughout. Highly recommended!
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="sticky bottom-0 flex justify-center p-4">
            <a href="https://wa.me/917455062107" className="w-2/5 bg-primary text-secondary font-bold py-3 rounded-lg text-center text-base hover:bg-primary-dark transition-colors shadow-lg">
              Book This Trek
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
