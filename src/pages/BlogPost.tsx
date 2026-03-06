import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  getBlogPostBySlug,
  getRelatedPosts,
  blogCategories,
  blogAuthor,
} from '../data/blog';
import type { BlogPost } from '../data/blog';
import { updateMetaTags } from '../utils/seo';

/* ─── Photo Gallery Lightbox ─── */
function PhotoGallery({ images, alt }: { images: string[]; alt: string }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-primary to-primary-dark cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              <img
                src={src}
                alt={`${alt} gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width="300"
                height="300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-secondary transition-colors z-10"
            aria-label="Close gallery"
          >
            ✕
          </button>
          {lightboxIdx > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx - 1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-secondary transition-colors z-10"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          {lightboxIdx < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx + 1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-secondary transition-colors z-10"
              aria-label="Next image"
            >
              ›
            </button>
          )}
          <img
            src={images[lightboxIdx]}
            alt={`${alt} ${lightboxIdx + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Travel Map (Leaflet) ─── */
function TravelMap({ coords, title }: { coords: BlogPost['mapCoords']; title: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);
  const [mapReady, setMapReady] = useState(false);

  // Load Leaflet CSS + JS once
  useEffect(() => {
    if (document.querySelector('link[href*="leaflet"]')) {
      setMapReady(true);
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => setMapReady(true);
    document.head.appendChild(script);
  }, []);

  // Initialize map when ready
  useEffect(() => {
    if (!mapReady || !coords || coords.length === 0 || !mapRef.current) return;

    // Clean up previous map
    if (mapInstanceRef.current) {
      (mapInstanceRef.current as { remove: () => void }).remove();
      mapInstanceRef.current = null;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const L = (window as unknown as Record<string, any>).L;
    if (!L || !mapRef.current) return;

    const map = L.map(mapRef.current, { scrollWheelZoom: false });
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    const markers: [number, number][] = [];
    coords.forEach((c: { lat: number; lng: number; label: string }) => {
      const pos: [number, number] = [c.lat, c.lng];
      markers.push(pos);
      L.marker(pos).addTo(map).bindPopup(`<strong>${c.label}</strong>`);
    });

    if (markers.length === 1) {
      map.setView(markers[0], 12);
    } else {
      map.fitBounds(L.latLngBounds(markers), { padding: [50, 50], maxZoom: 13 });
    }

    // Force Leaflet to recalculate tile positions after render
    setTimeout(() => map.invalidateSize(), 200);

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapReady, coords]);

  if (!coords || coords.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Trek Map — {title}</h2>
      <div
        ref={mapRef}
        className="w-full rounded-xl overflow-hidden shadow-md border border-gray-200 relative z-0"
        style={{ height: '400px' }}
      />
    </div>
  );
}

/* ─── Social Media Embeds ─── */
function SocialEmbeds() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Follow Our Adventures</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Instagram */}
        <div className="card p-6 text-center">
          <div className="text-4xl mb-3">📷</div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">Instagram</h4>
          <p className="text-gray-600 text-sm mb-4">Daily photos from the trail</p>
          <a
            href={blogAuthor.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-small inline-block"
          >
            @garhwalhikes
          </a>
        </div>

        {/* YouTube */}
        <div className="card p-6 text-center">
          <div className="text-4xl mb-3">🎬</div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">YouTube</h4>
          <p className="text-gray-600 text-sm mb-4">Trek videos and vlogs</p>
          <a
            href={blogAuthor.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-small inline-block"
          >
            Garhwal Hikes
          </a>
        </div>

        {/* Facebook */}
        <div className="card p-6 text-center">
          <div className="text-4xl mb-3">👤</div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">Facebook</h4>
          <p className="text-gray-600 text-sm mb-4">Community updates</p>
          <a
            href={blogAuthor.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-small inline-block"
          >
            Garhwal Hikes
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Related Posts ─── */
function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;
  const getCategoryLabel = (key: string) => blogCategories.find((c) => c.key === key)?.label ?? key;

  return (
    <section className="section-py px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Related Articles</h2>
        <p className="text-gray-600 text-lg mb-12">More stories you might enjoy</p>
        <div className="grid-cols-adaptive">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
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
                    <div className="w-full h-full flex items-center justify-center text-white text-5xl">📝</div>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="bg-primary text-secondary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide self-start mb-3">
                    {getCategoryLabel(post.category)}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 flex-grow">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Structured Data (JSON-LD) ─── */
function BlogStructuredData({ post }: { post: BlogPost }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://garhwalhikes.com${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: 'https://garhwalhikes.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Garhwal Hikes',
      url: 'https://garhwalhikes.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://garhwalhikes.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ─── Main Blog Post Page ─── */
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (post) {
      updateMetaTags({
        title: `${post.title} - Garhwal Hikes Blog`,
        description: post.excerpt,
        url: `https://garhwalhikes.com/blog/${post.slug}`,
        ogImage: post.image ? `https://garhwalhikes.com${post.image}` : undefined,
      });
    }
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <section className="hero">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <h1 className="hero-title">Article Not Found</h1>
            <p className="hero-subtitle mb-8">The article you're looking for doesn't exist or has been moved.</p>
          </div>
        </section>
        <div className="text-center py-16">
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const categoryLabel = blogCategories.find((c) => c.key === post.category)?.label ?? post.category;

  return (
    <main className="min-h-screen bg-white">
      <BlogStructuredData post={post} />

      {/* Hero with post image */}
      <section className="relative w-full overflow-hidden">
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary min-h-[300px] md:min-h-[420px] flex items-end">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              width="1200"
              height="600"
            />
          )}
          <div className="relative z-10 w-full">
            <div className="max-w-4xl mx-auto px-4 md:px-6 pb-8 md:pb-12 pt-16 md:pt-24">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-6 text-gray-200">
                <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-secondary">{categoryLabel}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4">
                <span className="bg-secondary text-primary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide">
                  {categoryLabel}
                </span>
                <span className="text-gray-200 text-sm">{post.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary tracking-tight mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-200 flex-wrap">
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">GH</span>
                  </div>
                  {post.author.name}
                </span>
                <span>·</span>
                <span>
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span>·</span>
                <span className="text-secondary font-medium">{post.destination}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-py px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div
            className="prose prose-lg max-w-none mb-12
              [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mb-4 [&_h2]:mt-10
              [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mb-3 [&_h3]:mt-8
              [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-5
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2
              [&_li]:text-gray-700 [&_li]:leading-relaxed
              [&_strong]:text-gray-900 [&_strong]:font-semibold
              [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary-dark
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:my-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-gray-200">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog?search=${encodeURIComponent(tag)}`}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* YouTube Embed */}
          {post.youtubeId && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Watch the Video</h2>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${post.youtubeId}`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Photo Gallery */}
          <PhotoGallery images={post.gallery ?? []} alt={post.title} />

          {/* Travel Map */}
          <TravelMap coords={post.mapCoords} title={post.destination} />

          {/* Social Media */}
          <SocialEmbeds />

          {/* Author Bio */}
          <div className="card p-8 mb-12">
            <div className="flex items-start gap-6 flex-col sm:flex-row">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-secondary text-2xl font-bold">GH</span>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-gray-900 mb-1">Written by {post.author.name}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{post.author.bio}</p>
                <div className="flex gap-4">
                  {post.author.socials.instagram && (
                    <a
                      href={post.author.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-semibold text-sm"
                    >
                      Instagram
                    </a>
                  )}
                  {post.author.socials.youtube && (
                    <a
                      href={post.author.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-semibold text-sm"
                    >
                      YouTube
                    </a>
                  )}
                  {post.author.socials.facebook && (
                    <a
                      href={post.author.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-semibold text-sm"
                    >
                      Facebook
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="flex justify-between items-center py-6 border-t border-gray-200">
            <Link to="/blog" className="btn-secondary text-sm">
              ← Back to Blog
            </Link>
            <Link to="/contact" className="btn-primary text-sm">
              Book a Trek →
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </main>
  );
}
