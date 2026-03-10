/**
 * Travel Updates & Kapaat (Temple Door) Schedule Data
 * ─────────────────────────────────────────────────────
 * Update this file to reflect latest verified information.
 * Sources: Uttarakhand Tourism, Char Dham Devasthanam Board,
 *          UCADA, BRO, SDRF Uttarakhand, District Administration portals.
 */

// ─── Types ───────────────────────────────────────────────

export interface TravelUpdate {
  id: string;
  date: string;            // ISO date of the update
  title: string;
  description: string;
  category: 'road' | 'weather' | 'advisory' | 'temple' | 'permit' | 'general';
  source: string;          // Name of the verified source
  sourceUrl?: string;      // Optional link to original source
  severity: 'info' | 'warning' | 'critical';
  region?: string;         // Affected area/district
  isActive: boolean;       // Whether the update is still relevant
}

export interface KapaatSchedule {
  id: string;
  templeName: string;
  location: string;
  altitude: string;
  openingDate: string;     // ISO date
  closingDate: string;     // ISO date or 'TBA'
  openingTime?: string;    // Muhurat time if known
  closingTime?: string;
  status: 'open' | 'closed' | 'upcoming' | 'tba';
  lastUpdated: string;     // ISO date when this info was last verified
  source: string;
  sourceUrl?: string;
  notes?: string;
}

export interface VerifiedSource {
  name: string;
  url: string;
  description: string;
  type: 'government' | 'news' | 'official';
}

// ─── Verified Sources ────────────────────────────────────

export const verifiedSources: VerifiedSource[] = [
  {
    name: 'Uttarakhand Tourism Development Board',
    url: 'https://uttarakhandtourism.gov.in',
    description: 'Official state tourism portal for Uttarakhand',
    type: 'government',
  },
  {
    name: 'Shri Badrinath - Kedarnath Temple Committee',
    url: 'https://badrinath-kedarnath.gov.in',
    description: 'Official body managing Badrinath & Kedarnath temples',
    type: 'official',
  },
  {
    name: 'Char Dham Devasthanam Management Board',
    url: 'https://devasthanam.uk.gov.in',
    description: 'Board governing Char Dham shrines in Uttarakhand',
    type: 'government',
  },
  {
    name: 'BRO (Border Roads Organisation)',
    url: 'https://bro.gov.in',
    description: 'Road status and construction updates for mountain highways',
    type: 'government',
  },
  {
    name: 'SDRF Uttarakhand',
    url: 'https://sdrf.uk.gov.in',
    description: 'State Disaster Response Force — weather & disaster advisories',
    type: 'government',
  },
  {
    name: 'India Meteorological Department (IMD)',
    url: 'https://mausam.imd.gov.in',
    description: 'Official weather forecasts and alerts for Uttarakhand',
    type: 'government',
  },
  {
    name: 'eUttaranchal',
    url: 'https://www.euttaranchal.com',
    description: 'Comprehensive Uttarakhand information portal',
    type: 'news',
  },
];

// ─── Kapaat (Temple Door) Schedules — 2026 Season ────────

export const kapaatSchedules: KapaatSchedule[] = [
  {
    id: 'badrinath',
    templeName: 'Shri Badrinath Dham',
    location: 'Chamoli, Uttarakhand',
    altitude: '3,133 m',
    openingDate: '2026-05-10',
    closingDate: '2026-11-15',
    openingTime: '04:15 AM (Brahma Muhurat)',
    status: 'upcoming',
    lastUpdated: '2026-03-01',
    source: 'Shri Badrinath - Kedarnath Temple Committee',
    sourceUrl: 'https://badrinath-kedarnath.gov.in',
    notes: 'Kapaat opening date announced. Exact closing date to be confirmed based on weather.',
  },
  {
    id: 'kedarnath',
    templeName: 'Shri Kedarnath Dham',
    location: 'Rudraprayag, Uttarakhand',
    altitude: '3,583 m',
    openingDate: '2026-05-06',
    closingDate: '2026-11-14',
    openingTime: '06:20 AM (Maha Shivaratri Muhurat)',
    status: 'upcoming',
    lastUpdated: '2026-03-01',
    source: 'Shri Badrinath - Kedarnath Temple Committee',
    sourceUrl: 'https://badrinath-kedarnath.gov.in',
    notes: 'Kapaat opening on the auspicious occasion of Akshaya Tritiya.',
  },
  {
    id: 'gangotri',
    templeName: 'Shri Gangotri Dham',
    location: 'Uttarkashi, Uttarakhand',
    altitude: '3,100 m',
    openingDate: '2026-05-01',
    closingDate: '2026-11-04',
    openingTime: '07:00 AM (Akshaya Tritiya)',
    status: 'upcoming',
    lastUpdated: '2026-03-01',
    source: 'Char Dham Devasthanam Management Board',
    sourceUrl: 'https://devasthanam.uk.gov.in',
    notes: 'Opening on Akshaya Tritiya as per tradition.',
  },
  {
    id: 'yamunotri',
    templeName: 'Shri Yamunotri Dham',
    location: 'Uttarkashi, Uttarakhand',
    altitude: '3,293 m',
    openingDate: '2026-05-01',
    closingDate: '2026-11-01',
    openingTime: '12:15 PM (Akshaya Tritiya)',
    status: 'upcoming',
    lastUpdated: '2026-03-01',
    source: 'Char Dham Devasthanam Management Board',
    sourceUrl: 'https://devasthanam.uk.gov.in',
    notes: 'Opening on Akshaya Tritiya. Yatra registration mandatory.',
  },
  {
    id: 'hemkund-sahib',
    templeName: 'Shri Hemkund Sahib',
    location: 'Chamoli, Uttarakhand',
    altitude: '4,632 m',
    openingDate: '2026-05-25',
    closingDate: '2026-10-10',
    status: 'upcoming',
    lastUpdated: '2026-03-01',
    source: 'Hemkund Sahib Management Trust',
    notes: 'Opens after snow clearance. Dates may shift based on weather.',
  },
  {
    id: 'tungnath',
    templeName: 'Shri Tungnath Temple',
    location: 'Rudraprayag, Uttarakhand',
    altitude: '3,680 m',
    openingDate: '2026-05-08',
    closingDate: '2026-11-15',
    status: 'upcoming',
    lastUpdated: '2026-03-01',
    source: 'District Administration Rudraprayag',
    notes: 'Highest Shiva temple in the world. Part of Panch Kedar circuit.',
  },
  {
    id: 'madhyamaheshwar-temple',
    templeName: 'Shri Madhyamaheshwar Temple',
    location: 'Rudraprayag, Uttarakhand',
    altitude: '3,497 m',
    openingDate: '2026-05-16',
    closingDate: '2026-11-10',
    status: 'upcoming',
    lastUpdated: '2026-03-01',
    source: 'District Administration Rudraprayag',
    notes: 'Part of Panch Kedar circuit. Opens after Tungnath.',
  },
  {
    id: 'rudranath-temple',
    templeName: 'Shri Rudranath Temple',
    location: 'Chamoli, Uttarakhand',
    altitude: '3,600 m',
    openingDate: '2026-05-20',
    closingDate: '2026-10-30',
    status: 'upcoming',
    lastUpdated: '2026-03-01',
    source: 'District Administration Chamoli',
    notes: 'Part of Panch Kedar circuit. Remote location, weather dependent.',
  },
  {
    id: 'kalpeshwar',
    templeName: 'Shri Kalpeshwar Temple',
    location: 'Chamoli, Uttarakhand',
    altitude: '2,134 m',
    openingDate: '2026-01-01',
    closingDate: '2026-12-31',
    status: 'open',
    lastUpdated: '2026-03-01',
    source: 'District Administration Chamoli',
    notes: 'Only Panch Kedar temple accessible year-round.',
  },
];

// ─── Live Travel Updates ─────────────────────────────────

export const travelUpdates: TravelUpdate[] = [
  {
    id: 'update-001',
    date: '2026-03-10',
    title: 'Char Dham Highway Winter Maintenance Complete',
    description: 'BRO has completed winter maintenance on the Char Dham Highway. All four routes to Yamunotri, Gangotri, Kedarnath, and Badrinath are being prepared for the summer season. Final repairs and safety checks are underway.',
    category: 'road',
    source: 'BRO (Border Roads Organisation)',
    sourceUrl: 'https://bro.gov.in',
    severity: 'info',
    region: 'Char Dham Circuit',
    isActive: true,
  },
  {
    id: 'update-002',
    date: '2026-03-09',
    title: 'Char Dham Yatra 2026 Registration Opens',
    description: 'Online registration for Char Dham Yatra 2026 has opened on the official Devasthanam Board portal. All pilgrims must register in advance and carry valid ID. Biometric registration will be done at base camps.',
    category: 'advisory',
    source: 'Char Dham Devasthanam Management Board',
    sourceUrl: 'https://devasthanam.uk.gov.in',
    severity: 'info',
    region: 'Uttarakhand',
    isActive: true,
  },
  {
    id: 'update-003',
    date: '2026-03-08',
    title: 'Heavy Snowfall Expected Above 3,000m This Week',
    description: 'IMD has issued an advisory for heavy snowfall above 3,000 meters in Uttarakhand from March 8-12. Trekkers are advised to avoid high-altitude routes during this period. Kedarkantha, Dayara Bugyal, and Kuari Pass trails may be affected.',
    category: 'weather',
    source: 'India Meteorological Department (IMD)',
    sourceUrl: 'https://mausam.imd.gov.in',
    severity: 'warning',
    region: 'High-altitude Uttarakhand',
    isActive: true,
  },
  {
    id: 'update-004',
    date: '2026-03-07',
    title: 'Kedarnath Helicopter Bookings Open for 2026',
    description: 'Helicopter services for Kedarnath Dham yatra 2026 season are now accepting advance bookings. Multiple operators including UCADA-approved services are available. Early booking is recommended due to high demand.',
    category: 'general',
    source: 'Uttarakhand Tourism Development Board',
    sourceUrl: 'https://uttarakhandtourism.gov.in',
    severity: 'info',
    region: 'Kedarnath',
    isActive: true,
  },
  {
    id: 'update-005',
    date: '2026-03-05',
    title: 'Rishikesh-Badrinath NH-7 Repair Work in Progress',
    description: 'Road widening and repair work is ongoing on NH-7 between Srinagar and Rudraprayag. Expect delays of 1-2 hours during daytime. Night travel is not recommended on this stretch.',
    category: 'road',
    source: 'BRO (Border Roads Organisation)',
    sourceUrl: 'https://bro.gov.in',
    severity: 'warning',
    region: 'Srinagar - Rudraprayag',
    isActive: true,
  },
  {
    id: 'update-006',
    date: '2026-03-04',
    title: 'Inner Line Permits for Adi Kailash & Niti Valley',
    description: 'Inner Line Permits (ILP) for Adi Kailash, Niti Valley, and Darma Valley are being issued by the Pithoragarh District Magistrate office. Online application is available. Processing takes 3-5 working days.',
    category: 'permit',
    source: 'District Administration Pithoragarh',
    severity: 'info',
    region: 'Pithoragarh',
    isActive: true,
  },
  {
    id: 'update-007',
    date: '2026-03-02',
    title: 'Valley of Flowers National Park — Season Dates Announced',
    description: 'The Forest Department has announced that Valley of Flowers National Park will open for visitors from July 1, 2026. Entry permits can be obtained at Govindghat. Daily visitor limit remains at 200 persons.',
    category: 'advisory',
    source: 'Uttarakhand Forest Department',
    severity: 'info',
    region: 'Chamoli',
    isActive: true,
  },
  {
    id: 'update-008',
    date: '2026-02-28',
    title: 'Chopta Road Cleared After Recent Snowfall',
    description: 'The road to Chopta has been cleared by BRO after heavy snowfall last week. The Chopta-Tungnath trek trail is accessible but snow-covered above Chopta. Proper winter gear and gaiters are essential.',
    category: 'road',
    source: 'BRO (Border Roads Organisation)',
    sourceUrl: 'https://bro.gov.in',
    severity: 'info',
    region: 'Chopta, Rudraprayag',
    isActive: true,
  },
  {
    id: 'update-009',
    date: '2026-02-25',
    title: 'Kedarnath Reconstruction & Trail Upgrades Complete',
    description: 'Reconstruction work at Kedarnath temple complex and trail upgrades from Gaurikund are complete. New shelters, sanitization facilities, and emergency helipads have been added along the 16 km trekking route.',
    category: 'general',
    source: 'Shri Badrinath - Kedarnath Temple Committee',
    sourceUrl: 'https://badrinath-kedarnath.gov.in',
    severity: 'info',
    region: 'Kedarnath',
    isActive: true,
  },
  {
    id: 'update-010',
    date: '2026-02-20',
    title: 'Spiti Valley Road Status — Rohtang & Kunzum La',
    description: 'Atal Tunnel is open year-round. Rohtang Pass (old route) and Kunzum La remain closed for winter. Expected reopening of Kunzum La is mid-June 2026 depending on snow clearance.',
    category: 'road',
    source: 'BRO (Border Roads Organisation)',
    sourceUrl: 'https://bro.gov.in',
    severity: 'warning',
    region: 'Spiti Valley, Himachal Pradesh',
    isActive: true,
  },
];

// ─── Helper Functions ────────────────────────────────────

export function formatUpdateDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function formatKapaatDate(dateStr: string): string {
  if (dateStr === 'TBA') return 'To Be Announced';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export function getKapaatStatus(schedule: KapaatSchedule): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const opening = new Date(schedule.openingDate + 'T00:00:00');
  const closing = new Date(schedule.closingDate + 'T00:00:00');

  if (today < opening) {
    const daysUntil = Math.ceil((opening.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return `Opens in ${daysUntil} day${daysUntil !== 1 ? 's' : ''}`;
  } else if (today >= opening && today <= closing) {
    return 'Currently Open';
  } else {
    return 'Closed for Season';
  }
}

export function getActiveUpdates(): TravelUpdate[] {
  return travelUpdates
    .filter(u => u.isActive)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getCategoryLabel(cat: TravelUpdate['category']): string {
  const labels: Record<TravelUpdate['category'], string> = {
    road: '🛣️ Road Update',
    weather: '🌦️ Weather',
    advisory: '📋 Advisory',
    temple: '🛕 Temple',
    permit: '📄 Permit',
    general: 'ℹ️ General',
  };
  return labels[cat];
}

export function getSeverityColor(severity: TravelUpdate['severity']): string {
  const colors: Record<TravelUpdate['severity'], string> = {
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    warning: 'bg-amber-100 text-amber-800 border-amber-200',
    critical: 'bg-red-100 text-red-800 border-red-200',
  };
  return colors[severity];
}
