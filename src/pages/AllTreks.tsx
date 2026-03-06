import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { trekData } from '../data/treks';
import TrekCard from '../components/shared/TrekCard';
import { updateMetaTags } from '../utils/seo';

export default function AllTreks() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);

  // SEO - Update meta tags for all treks page
  useEffect(() => {
    updateMetaTags({
      title: 'All Treks in Uttarakhand | Adventure Treks | Garhwal Hikes',
      description: 'Explore all our trekking expeditions in Uttarakhand. Choose from Yatra, Winter, and Monsoon treks. Expert guides, small groups, and unforgettable Himalayan experiences.',
      url: 'https://garhwalhikes.com/treks',
    });
  }, []);

  const categories = [
    { id: 'all', label: 'All Treks' },
    { id: 'yatra', label: 'Yatra Treks' },
    { id: 'winter', label: 'Winter Treks' },
    { id: 'monsoon', label: 'Monsoon Treks' },
  ];

  const filteredTreks = selectedCategory === 'all'
    ? trekData
    : trekData.filter(trek => trek.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white section-py px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">All Treks</h1>
          <p className="text-gray-600 text-lg">Explore our curated collection of Himalayan treks</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              aria-label={`Filter treks by ${cat.label}`}
              aria-pressed={selectedCategory === cat.id}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'btn-primary'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Trek Cards Grid */}
        <div className="grid-cols-adaptive">
          {filteredTreks.map(trek => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>

        {filteredTreks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No treks found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
