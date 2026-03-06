import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  blogPosts,
  blogCategories,
  getFeaturedPosts,
  searchBlogPosts,
  getAllDestinations,
  blogAuthor,
} from '../data/blog';
import type { BlogCategory, BlogPost } from '../data/blog';
import { updateMetaTags } from '../utils/seo';

function BlogCard({ post }: { post: BlogPost }) {
  const categoryLabel = blogCategories.find(c => c.key === post.category)?.label ?? post.category;

  return (
    <Link to={`/blog/${post.slug}`}>
      <div className="card card-hover h-full flex flex-col">
        <div
          className="bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden w-full"
          style={{ aspectRatio: '400 / 250' }}
        >
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              width="400"
              height="250"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-5xl">
              {post.category === 'photo-essays' ? '📸' : post.category === 'videos' ? '🎬' : '📝'}
            </div>
          )}
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-primary text-secondary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide">
              {categoryLabel}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span className="font-medium text-primary">{post.destination}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  const categoryLabel = blogCategories.find(c => c.key === post.category)?.label ?? post.category;

  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <div className="card card-hover overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden"
            style={{ minHeight: '280px' }}
          >
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                width="600"
                height="400"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-7xl">🏔️</div>
            )}
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-secondary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide">
                {categoryLabel}
              </span>
              <span className="bg-secondary text-primary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide">
                Featured
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">{post.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span className="font-medium text-primary">{post.destination}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');
  const [activeDestination, setActiveDestination] = useState('all');

  useEffect(() => {
    updateMetaTags({
      title: 'Travel Blog - Garhwal Hikes | Trekking Stories, Guides & Photos',
      description:
        'Explore Himalayan trekking guides, personal stories, photo essays and destination features from Garhwal Hikes. Plan your next adventure with expert insights.',
      url: 'https://garhwalhikes.com/blog',
    });
    window.scrollTo(0, 0);
  }, []);

  const featuredPosts = useMemo(() => getFeaturedPosts(), []);
  const destinations = useMemo(() => getAllDestinations(), []);

  const filteredPosts = useMemo(() => {
    let posts = searchQuery ? searchBlogPosts(searchQuery) : [...blogPosts];

    if (activeCategory !== 'all') {
      posts = posts.filter(p => p.category === activeCategory);
    }

    if (activeDestination !== 'all') {
      posts = posts.filter(p => p.destination === activeDestination);
    }

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery, activeCategory, activeDestination]);

  const showFeatured = !searchQuery && activeCategory === 'all' && activeDestination === 'all';

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="hero-title">Travel Blog</h1>
          <p className="hero-subtitle mb-8">
            Stories, guides, and visual journeys from the heart of the Himalayas
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, destinations, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-1 py-4 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center md:flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-primary text-secondary shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Posts
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-primary text-secondary shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Filter */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-gray-600 font-medium text-sm">Destination:</span>
            <select
              value={activeDestination}
              onChange={(e) => setActiveDestination(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Destinations</option>
              {destinations.map((dest) => (
                <option key={dest} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
            {(activeCategory !== 'all' || activeDestination !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setActiveDestination('all');
                  setSearchQuery('');
                }}
                className="text-primary font-semibold text-sm hover:underline"
              >
                Clear all filters
              </button>
            )}
            <span className="text-gray-500 text-sm ml-auto">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {showFeatured && featuredPosts.length > 0 && (
        <section className="section-py px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Featured Articles</h2>
              <p className="text-gray-600 text-lg">Our top picks for your next adventure</p>
            </div>
            <div className="space-y-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <FeaturedCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts Grid */}
      <section className="section-py px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              {activeCategory !== 'all'
                ? blogCategories.find((c) => c.key === activeCategory)?.label ?? 'Articles'
                : searchQuery
                ? 'Search Results'
                : 'Latest Articles'}
            </h2>
            <p className="text-gray-600 text-lg">
              {activeCategory !== 'all'
                ? blogCategories.find((c) => c.key === activeCategory)?.description
                : searchQuery
                ? `Showing results for "${searchQuery}"`
                : 'Explore all our trekking stories and guides'}
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid-cols-adaptive">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setActiveDestination('all');
                }}
                className="btn-primary"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About the Author / CTA */}
      <section className="bg-gradient-to-r from-primary via-primary-dark to-primary text-secondary section-py px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-primary text-3xl font-bold">GH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Author</h2>
          <p className="text-gray-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {blogAuthor.bio}
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {blogAuthor.socials.instagram && (
              <a
                href={blogAuthor.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg transition-colors"
              >
                <span className="text-xl">📷</span>
                <span className="font-semibold">Instagram</span>
              </a>
            )}
            {blogAuthor.socials.youtube && (
              <a
                href={blogAuthor.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg transition-colors"
              >
                <span className="text-xl">🎬</span>
                <span className="font-semibold">YouTube</span>
              </a>
            )}
            {blogAuthor.socials.facebook && (
              <a
                href={blogAuthor.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg transition-colors"
              >
                <span className="text-xl">👤</span>
                <span className="font-semibold">Facebook</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
