import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { trekData } from '../data/treks';
import TrekCard from '../components/shared/TrekCard';
import { getGroupedDates, formatTrekDate } from '../data/trekDates';

export default function TrekDetail() {
  const { id } = useParams();
  const trek = trekData.find(t => t.id === id);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

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

  // Scroll to top & reset state when navigating between treks
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentGalleryIndex(0);
    setExpandedFaq(null);
    setActiveSection('overview');
  }, [id]);

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
        <div className="max-w-2xl lg:max-w-7xl mx-auto px-4">
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
        <div className="max-w-2xl lg:max-w-7xl mx-auto px-4">
          {/* Trek Name */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{trek.name}</h1>
          
          {/* Hero Section with Key Stats */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 mb-6 text-secondary shadow-lg overflow-hidden">
            {trek.image ? (
              <img src={trek.image} alt={trek.name} className="w-full object-cover rounded-lg mb-4" style={{aspectRatio: '2/1'}} width="1200" height="600" loading="eager" />
            ) : (
              <div className="text-5xl mb-4">🏔️</div>
            )}
            <p className="text-gray-100 mb-6 leading-relaxed">{trek.description}</p>
            
            {trek.price && (
              <div className="mb-4">
                <span className="text-white text-sm font-medium">Starting from </span>
                <span className="text-secondary text-3xl font-extrabold">₹{trek.price.toLocaleString('en-IN')}</span>
                <span className="text-gray-200 text-sm"> / person</span>
              </div>
            )}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
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

          {/* Desktop Two-Column Layout */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2">

          {/* Available Dates - Mobile Only */}
          {(() => {
            const monthGroups = getGroupedDates(trek.id);
            if (monthGroups.length === 0) return null;
            return (
              <section className="bg-white rounded-lg shadow-md mb-6 scroll-mt-40 overflow-hidden lg:hidden">
                <button
                  onClick={() => toggleDropdown('dates-mobile')}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                    <span>📅</span> Available Dates
                  </h2>
                  <span className={`text-primary text-lg transition-transform duration-300 flex-shrink-0 ${openDropdowns['dates-mobile'] ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openDropdowns['dates-mobile'] && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4 space-y-4">
                    {monthGroups.map(group => (
                      <div key={group.key}>
                        <button
                          onClick={() => toggleDropdown(`mob-month-${group.key}`)}
                          className="w-full flex items-center justify-between p-3 bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition-colors"
                        >
                          <span className="font-bold text-gray-900">{group.label}</span>
                          <span className={`text-gray-600 text-sm transition-transform duration-300 ${openDropdowns[`mob-month-${group.key}`] ? 'rotate-180' : ''}`}>▲</span>
                        </button>
                        {openDropdowns[`mob-month-${group.key}`] && (
                          <div className="space-y-2">
                            {group.dates.map((d, i) => (
                              <div key={i} className="flex items-center justify-between px-4 py-3">
                                <p className="font-bold text-gray-900 text-sm">{formatTrekDate(d.date)}</p>
                                {d.status === 'closed' ? (
                                  <span className="text-sm font-bold text-red-500">Sold Out</span>
                                ) : d.status === 'filling' ? (
                                  <a href={`https://wa.me/917455062107?text=Hi, I want to book ${trek.name} on ${formatTrekDate(d.date)}`}
                                    className="text-sm font-bold text-orange-500 hover:underline"
                                  >Filling Fast</a>
                                ) : (
                                  <a href={`https://wa.me/917455062107?text=Hi, I want to book ${trek.name} on ${formatTrekDate(d.date)}`}
                                    className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded hover:bg-green-700 transition-colors"
                                  >Book Now</a>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })()}

          {/* Overview Section */}
          <section ref={overviewRef} className="bg-white rounded-lg shadow-md p-6 mb-6 scroll-mt-40">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>📋</span> Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">{trek.overview || trek.description}</p>
          </section>

          {/* Itinerary Section - Dropdown */}
          <section ref={itineraryRef} className="bg-white rounded-lg shadow-md mb-6 scroll-mt-40 overflow-hidden">
            <button
              onClick={() => toggleDropdown('itinerary')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span>🗺️</span> Detailed Itinerary
              </h2>
              <span className={`text-primary text-lg transition-transform duration-300 flex-shrink-0 ${openDropdowns['itinerary'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdowns['itinerary'] && (
              <div className="px-6 pb-6 border-t border-gray-100 pt-4">
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
              </div>
            )}
          </section>

          {/* Inclusions Section - Dropdown */}
          <section ref={inclusionsRef} className="bg-white rounded-lg shadow-md mb-6 scroll-mt-40 overflow-hidden">
            <button
              onClick={() => toggleDropdown('inclusions')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span>✓</span> Inclusions & Exclusions
              </h2>
              <span className={`text-primary text-lg transition-transform duration-300 flex-shrink-0 ${openDropdowns['inclusions'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdowns['inclusions'] && (
              <div className="px-6 pb-6 space-y-4 border-t border-gray-100 pt-4">
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
            )}
          </section>

          {/* Best Time Section - Dropdown */}
          <section ref={bestTimeRef} className="bg-white rounded-lg shadow-md mb-6 scroll-mt-40 overflow-hidden">
            <button
              onClick={() => toggleDropdown('bestTime')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span>🌞</span> Best Time to Visit
              </h2>
              <span className={`text-primary text-lg transition-transform duration-300 flex-shrink-0 ${openDropdowns['bestTime'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdowns['bestTime'] && (
              <div className="px-6 pb-6 border-t border-gray-100 pt-4">
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
              </div>
            )}
          </section>

          {/* What to Pack Section - Dropdown */}
          <section ref={packRef} className="bg-white rounded-lg shadow-md mb-6 scroll-mt-40 overflow-hidden">
            <button
              onClick={() => toggleDropdown('pack')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span>🎒</span> What to Pack
              </h2>
              <span className={`text-primary text-lg transition-transform duration-300 flex-shrink-0 ${openDropdowns['pack'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdowns['pack'] && (
              <div className="px-6 pb-6 border-t border-gray-100 pt-4">
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
              </div>
            )}
          </section>

          {/* Terms & Conditions Section - Dropdown */}
          <section ref={termsRef} className="bg-white rounded-lg shadow-md mb-6 scroll-mt-40 overflow-hidden">
            <button
              onClick={() => toggleDropdown('terms')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span>📝</span> Terms & Conditions
              </h2>
              <span className={`text-primary text-lg transition-transform duration-300 flex-shrink-0 ${openDropdowns['terms'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdowns['terms'] && (
              <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{trek.termsConditions}</p>
                </div>
              </div>
            )}
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

          {/* FAQ Section - Dropdown */}
          <section ref={faqRef} className="bg-white rounded-lg shadow-md mb-6 scroll-mt-40 overflow-hidden">
            <button
              onClick={() => toggleDropdown('faq')}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span>❓</span> Frequently Asked Questions
              </h2>
              <span className={`text-primary text-lg transition-transform duration-300 flex-shrink-0 ${openDropdowns['faq'] ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openDropdowns['faq'] && (
              <div className="px-6 pb-6 border-t border-gray-100 pt-4">
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
              </div>
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

            </div> {/* End Main Content Column */}

            {/* Desktop Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-6">
                {/* Available Dates Card */}
                {(() => {
                  const monthGroups = getGroupedDates(trek.id);
                  if (monthGroups.length === 0) return null;
                  return (
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <span>📅</span> Available Dates
                      </h3>
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {monthGroups.map(group => (
                          <div key={group.key}>
                            <button
                              onClick={() => toggleDropdown(`desk-month-${group.key}`)}
                              className="w-full flex items-center justify-between p-3 bg-gray-100 rounded-lg mb-2 hover:bg-gray-200 transition-colors"
                            >
                              <span className="font-bold text-gray-900 text-sm">{group.label}</span>
                              <span className={`text-gray-600 text-sm transition-transform duration-300 ${openDropdowns[`desk-month-${group.key}`] ? 'rotate-180' : ''}`}>▲</span>
                            </button>
                            {openDropdowns[`desk-month-${group.key}`] && (
                              <div className="space-y-1">
                                {group.dates.map((d, i) => (
                                  <div key={i} className="flex items-center justify-between px-3 py-2">
                                    <p className="font-bold text-gray-900 text-sm">{formatTrekDate(d.date)}</p>
                                    {d.status === 'closed' ? (
                                      <span className="text-xs font-bold text-red-500">Sold Out</span>
                                    ) : d.status === 'filling' ? (
                                      <a href={`https://wa.me/917455062107?text=Hi, I want to book ${trek.name} on ${formatTrekDate(d.date)}`}
                                        className="text-xs font-bold text-orange-500 hover:underline"
                                      >Filling Fast</a>
                                    ) : (
                                      <a href={`https://wa.me/917455062107?text=Hi, I want to book ${trek.name} on ${formatTrekDate(d.date)}`}
                                        className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded hover:bg-green-700 transition-colors"
                                      >Book Now</a>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                {/* Quick Stats Card */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    {trek.price && (
                      <div className="flex items-center gap-3">
                        <span className="text-xl">💰</span>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Price</p>
                          <p className="font-bold text-primary text-lg">₹{trek.price.toLocaleString('en-IN')}<span className="text-xs text-gray-500 font-normal"> /person</span></p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="text-xl">⏱️</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Duration</p>
                        <p className="font-bold text-gray-900">{trek.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📊</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Difficulty</p>
                        <p className={`font-bold ${
                          trek.difficulty === 'Easy' ? 'text-green-600' :
                          trek.difficulty === 'Moderate' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>{trek.difficulty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🏔️</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Max Altitude</p>
                        <p className="font-bold text-gray-900">{trek.altitude}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌤️</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Best Time</p>
                        <p className="font-bold text-gray-900">{trek.bestTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🏷️</span>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Category</p>
                        <p className="font-bold text-gray-900 capitalize">{trek.category}</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/917455062107"
                    className="mt-6 block w-full bg-primary text-secondary font-bold py-3 rounded-lg text-center text-base hover:bg-primary-dark transition-colors shadow-lg"
                  >
                    Book This Trek
                  </a>
                  <p className="text-xs text-gray-500 text-center mt-2">Chat with us on WhatsApp</p>
                </div>

                {/* Highlights Quick View */}
                {trek.highlights && trek.highlights.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-primary mb-3">Highlights</h3>
                    <ul className="space-y-2">
                      {trek.highlights.slice(0, 5).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-primary mt-0.5 flex-shrink-0">★</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div> {/* End Desktop Grid */}

          {/* Similar Treks Section */}
          {(() => {
            const similarTreks = trekData.filter(t => t.category === trek.category && t.id !== trek.id);
            if (similarTreks.length === 0) return null;
            return (
              <section className="mt-12 mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
                  Similar {trek.category.charAt(0).toUpperCase() + trek.category.slice(1)} Treks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {similarTreks.slice(0, 3).map(t => (
                    <TrekCard key={t.id} trek={t} />
                  ))}
                </div>
                {similarTreks.length > 3 && (
                  <div className="text-center mt-6">
                    <Link
                      to={`/treks?category=${trek.category}`}
                      className="btn-primary inline-block"
                    >
                      View All {trek.category.charAt(0).toUpperCase() + trek.category.slice(1)} Treks
                    </Link>
                  </div>
                )}
              </section>
            );
          })()}

          {/* Mobile CTA Section */}
          <div className="sticky bottom-0 flex justify-center p-4 lg:hidden">
            <a href="https://wa.me/917455062107" className="w-2/5 bg-primary text-secondary font-bold py-3 rounded-lg text-center text-base hover:bg-primary-dark transition-colors shadow-lg">
              Book This Trek
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
