/**
 * SEO Utility Functions
 * Handles dynamic meta tag updates for different pages
 */

interface MetaTagsConfig {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

/**
 * Update meta tags dynamically
 * Used for trek pages and other content pages
 */
export function updateMetaTags(config: MetaTagsConfig): void {
  // Update title
  if (config.title) {
    document.title = config.title;
    const titleTag = document.querySelector('meta[property="og:title"]');
    if (titleTag) {
      titleTag.setAttribute('content', config.title);
    }
  }

  // Update description
  if (config.description) {
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', config.description);
    }
  }

  // Update keywords
  if (config.keywords) {
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute('content', config.keywords);
    }
  }

  // Update Open Graph tags
  if (config.ogTitle) {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', config.ogTitle);
    }
  }

  if (config.ogDescription) {
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', config.ogDescription);
    }
  }

  if (config.ogImage) {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', config.ogImage);
    }
  }

  if (config.ogUrl) {
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', config.ogUrl);
    }
  }

  // Update Twitter Card tags
  if (config.twitterTitle) {
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', config.twitterTitle);
    }
  }

  if (config.twitterDescription) {
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', config.twitterDescription);
    }
  }

  if (config.twitterImage) {
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', config.twitterImage);
    }
  }
}

/**
 * Generate trek-specific meta tags
 */
export function getTrekSEOTags(
  trekName: string,
  trekCategory: string,
  trekDescription: string,
  trekImage: string,
  trekDifficulty?: string
): MetaTagsConfig {
  const categoryName = trekCategory.charAt(0).toUpperCase() + trekCategory.slice(1);
  const difficulty = trekDifficulty ? ` | ${trekDifficulty}` : '';
  
  return {
    title: `${trekName}${difficulty} - Trek in Uttarakhand | Garhwal Hikes`,
    description: trekDescription.substring(0, 160),
    keywords: `${trekName}, trekking, Uttarakhand, Garhwal, ${categoryName} trek, adventure`,
    ogTitle: trekName,
    ogDescription: trekDescription.substring(0, 160),
    ogImage: `https://garhwalhikes.com${trekImage}`,
    ogUrl: `https://garhwalhikes.com/trek/${trekName.toLowerCase().replace(/\s+/g, '-')}`,
    twitterTitle: `${trekName} - Garhwal Hikes`,
    twitterDescription: trekDescription.substring(0, 160),
    twitterImage: `https://garhwalhikes.com${trekImage}`,
  };
}

/**
 * Generate structured data for trek
 */
export function generateTrekSchema(
  trekName: string,
  trekDescription: string,
  trekImage: string
): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: trekName,
    description: trekDescription,
    image: `https://garhwalhikes.com${trekImage}`,
    organizer: {
      '@type': 'Organization',
      name: 'Garhwal Hikes',
      url: 'https://garhwalhikes.com',
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      price: 'Contact for pricing',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };

  return JSON.stringify(schema);
}

/**
 * Scroll to top smoothly
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
