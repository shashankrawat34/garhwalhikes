export type BlogCategory = 'destinations' | 'guides' | 'stories' | 'photo-essays' | 'videos';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: BlogCategory;
  excerpt: string;
  content: string;
  image: string;
  gallery?: string[];
  author: BlogAuthor;
  date: string;
  readTime: string;
  tags: string[];
  destination: string;
  featured?: boolean;
  youtubeId?: string;
  mapCoords?: { lat: number; lng: number; label: string }[];
}

export interface BlogAuthor {
  name: string;
  bio: string;
  avatar?: string;
  socials: {
    instagram?: string;
    youtube?: string;
    facebook?: string;
  };
}

export const blogAuthor: BlogAuthor = {
  name: 'Garhwal Hikes',
  bio: 'We are a team of passionate trekkers and adventure enthusiasts based in Uttarakhand, dedicated to bringing you the best Himalayan trekking experiences. With 15+ years of expertise, we share authentic stories, detailed guides, and breathtaking visuals from the mountains.',
  socials: {
    instagram: 'https://www.instagram.com/garhwalhikes/',
    youtube: 'https://www.youtube.com/@garhwalhikes',
    facebook: 'https://www.facebook.com/garhwalhikes/',
  },
};

export const blogCategories: { key: BlogCategory; label: string; description: string }[] = [
  { key: 'destinations', label: 'Destinations', description: 'Top travel locations and hidden gems' },
  { key: 'guides', label: 'Travel Guides', description: 'Comprehensive trekking guides and tips' },
  { key: 'stories', label: 'Personal Stories', description: 'Experiences from the trail' },
  { key: 'photo-essays', label: 'Photo Essays', description: 'Visual journeys through the Himalayas' },
  { key: 'videos', label: 'Videos', description: 'Trek videos and visual content' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Complete Guide to Kedarkantha Trek in Winter',
    slug: 'complete-guide-kedarkantha-trek-winter',
    category: 'guides',
    excerpt: 'Everything you need to know about Kedarkantha — the most popular winter trek in India. From preparation to summit day, this guide covers it all.',
    content: `
<h2>Why Kedarkantha is the Perfect Winter Trek</h2>
<p>Kedarkantha, standing at 12,500 feet in the Govind Wildlife Sanctuary of Uttarakhand, has earned its reputation as India's most beloved winter trek. The trail offers a perfect blend of snow-covered meadows, dense pine forests, and panoramic summit views that stretch across the entire Himalayan range.</p>

<h3>Best Time to Visit</h3>
<p>The ideal window for the Kedarkantha trek is from mid-December to mid-April. During this period, the trail is blanketed in pristine snow, transforming the landscape into a winter wonderland. January and February offer the heaviest snowfall, while December and March provide a balance of snow and milder weather.</p>

<h3>Trail Overview</h3>
<p>The trek starts from Sankri village, a quaint Himalayan hamlet in the Tons Valley. Over 4 days, you'll traverse through ancient deodar and oak forests, cross frozen streams, and camp in some of the most scenic meadows in the Himalayas.</p>

<ul>
<li><strong>Day 1:</strong> Sankri to Juda Ka Talab (4 km, 4-5 hours)</li>
<li><strong>Day 2:</strong> Juda Ka Talab to Kedarkantha Base Camp (3 km, 3-4 hours)</li>
<li><strong>Day 3:</strong> Base Camp → Summit → Hargaon (8 km, 7-8 hours)</li>
<li><strong>Day 4:</strong> Hargaon to Sankri (6 km, 4-5 hours)</li>
</ul>

<h3>What to Pack</h3>
<p>Proper gear is critical for a winter trek. Your backpack should include layered clothing with a good down jacket, waterproof trekking boots with ankle support, gaiters for deep snow, and high-quality sunglasses to protect against snow glare. Don't forget a 3-season sleeping bag rated for -10°C.</p>

<h3>Fitness Requirements</h3>
<p>While Kedarkantha is classified as an easy-to-moderate trek, winter conditions add a layer of challenge. Start preparing at least a month in advance with daily cardio, stair climbing, and leg strengthening exercises. A good fitness base ensures you enjoy the trek rather than struggle through it.</p>

<h3>Photography Tips</h3>
<p>The golden hour at the summit offers unparalleled photography opportunities. The entire Swargarohini range lights up in shades of orange and pink. Keep your camera batteries warm inside your jacket, as cold temperatures drain them quickly.</p>
    `,
    image: '/images/treks/kedarkantha/trek.webp',
    author: blogAuthor,
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['winter trek', 'kedarkantha', 'snow trek', 'beginner friendly'],
    destination: 'Kedarkantha',
    featured: true,
    mapCoords: [
      { lat: 31.0245, lng: 78.1760, label: 'Sankri Base' },
      { lat: 31.0280, lng: 78.1820, label: 'Juda Ka Talab' },
      { lat: 31.0310, lng: 78.1880, label: 'Kedarkantha Summit' },
    ],
  },
  {
    id: '2',
    title: 'Valley of Flowers: A Monsoon Paradise',
    slug: 'valley-of-flowers-monsoon-paradise',
    category: 'destinations',
    excerpt: 'Discover the UNESCO World Heritage Site that bursts into a riot of colors every monsoon. The Valley of Flowers is nature\'s own canvas in the Himalayas.',
    content: `
<h2>A UNESCO World Heritage Wonder</h2>
<p>Nestled in the western Himalayas of Uttarakhand, the Valley of Flowers National Park is a breathtaking alpine meadow stretching over 87 square kilometers. Recognized as a UNESCO World Heritage Site, this valley is home to over 600 species of flowering plants, many of which are rare and endemic to this region.</p>

<h3>The Best Time — Monsoon Magic</h3>
<p>Unlike most treks where monsoon is avoided, the Valley of Flowers comes alive only during the monsoon months of July to September. The rains transform this high-altitude meadow into a spectacular carpet of wildflowers — brahmakamal, blue poppy, cobra lily, and hundreds of other species paint the valley in every imaginable color.</p>

<h3>Getting There</h3>
<p>The journey begins from Govindghat, near Joshimath. From there, a 13 km trek to Ghangaria serves as your base camp. The valley is another 3 km from Ghangaria. The trail follows the Pushpawati River through lush forests and cascading waterfalls.</p>

<h3>Flora and Fauna</h3>
<p>Besides the stunning floral diversity, the valley is home to rare Himalayan wildlife including the snow leopard, Asiatic black bear, brown bear, and the elusive musk deer. Birdwatchers can spot the Himalayan monal, Uttarakhand's state bird, along with lammergeiers soaring overhead.</p>

<h3>Conservation and Rules</h3>
<p>As a protected national park, visitors must follow strict guidelines. Camping inside the valley is not permitted—you must return to Ghangaria each day. Picking flowers, littering, and straying from marked trails are prohibited. These measures ensure this fragile ecosystem thrives for future generations.</p>
    `,
    image: '/images/treks/valley-of-flowers/trek.webp',
    author: blogAuthor,
    date: '2026-02-10',
    readTime: '6 min read',
    tags: ['monsoon trek', 'valley of flowers', 'UNESCO', 'wildflowers'],
    destination: 'Valley of Flowers',
    featured: true,
    mapCoords: [
      { lat: 30.7280, lng: 79.6050, label: 'Govindghat' },
      { lat: 30.7180, lng: 79.6150, label: 'Ghangaria' },
      { lat: 30.7100, lng: 79.6350, label: 'Valley of Flowers' },
    ],
  },
  {
    id: '3',
    title: 'My First Himalayan Trek: Lessons from Chopta-Tungnath',
    slug: 'first-himalayan-trek-chopta-tungnath',
    category: 'stories',
    excerpt: 'A personal account of trekking to the world\'s highest Shiva temple. From breathlessness to bliss, this is the story of a life-changing journey.',
    content: `
<h2>The Call of the Mountains</h2>
<p>I had always seen the Himalayas in photographs — majestic, distant, almost unreal. But nothing could have prepared me for the moment I stood at Chopta and saw the Tungnath ridge rising above the clouds. It was my first Himalayan trek, and it would change the way I see the world forever.</p>

<h3>The Journey Begins</h3>
<p>We started from Chopta at dawn, a small settlement at 8,790 feet that serves as the base for the Tungnath trek. The air was crisp, carrying the scent of rhododendron and deodar. Within the first kilometer, I understood why they call this the "Mini Switzerland of India." The meadows of Chopta stretched endlessly, dotted with wildflowers and framed by snow peaks.</p>

<h3>The Climb to Tungnath</h3>
<p>The 3.5 km trail to Tungnath temple is paved with stone steps — a trail that pilgrims and trekkers have walked for centuries. At 12,073 feet, Tungnath is the world's highest Shiva temple, and every step toward it felt like a step closer to something sacred. The altitude hit hard around the 2 km mark. My legs burned, my breath came in gasps, and for a moment I considered turning back.</p>

<p>But then a 70-year-old woman passed me on the trail, barefoot, carrying a bundle of firewood, and greeting me with a warm "Jai Bholenath." If she could do this, so could I.</p>

<h3>The Summit — Chandrashila</h3>
<p>Beyond Tungnath, the trail continues 1.5 km to Chandrashila peak at 13,000 feet. The summit rewarded patience with a 360-degree panorama: Nanda Devi, Trisul, Chaukhamba, Kedarnath, and Bandarpunch — all visible in one sweeping view. I sat there for an hour, tears streaming, overwhelmed by the beauty and the achievement.</p>

<h3>What I Learned</h3>
<p>The mountains taught me that the journey matters more than the destination. Every struggling breath, every sore muscle, every moment of doubt made the summit view a thousand times more rewarding. I returned home a different person — calmer, more grateful, and already planning my next trek.</p>
    `,
    image: '/images/treks/chopta-tungnath/trek.webp',
    author: blogAuthor,
    date: '2026-02-28',
    readTime: '10 min read',
    tags: ['personal story', 'chopta', 'tungnath', 'first trek', 'chandrashila'],
    destination: 'Chopta-Tungnath',
    featured: true,
    mapCoords: [
      { lat: 30.4489, lng: 79.2506, label: 'Chopta' },
      { lat: 30.4872, lng: 79.2164, label: 'Tungnath Temple' },
      { lat: 30.4895, lng: 79.2140, label: 'Chandrashila Peak' },
    ],
  },
  {
    id: '4',
    title: 'Roopkund — The Mystery of the Skeleton Lake',
    slug: 'roopkund-mystery-skeleton-lake',
    category: 'destinations',
    excerpt: 'At 16,500 feet lies a glacial lake filled with ancient human skeletons. The Roopkund trek is one of India\'s most intriguing and challenging adventures.',
    content: `
<h2>The Enigma at 16,500 Feet</h2>
<p>High in the Chamoli district of Uttarakhand, Roopkund Lake sits like a cold mystery wrapped in ice. Known as "Skeleton Lake," its shores are littered with human skeletal remains dating back to the 9th century. This glacial lake, just 130 feet in diameter, has puzzled scientists and captivated trekkers for decades.</p>

<h3>The Trek Route</h3>
<p>The Roopkund trek begins from Lohajung, a remote village at 7,600 feet. Over 8 days, the trail winds through some of the most dramatic landscapes in the Himalayas — dense oak and rhododendron forests, vast alpine meadows at Bedni Bugyal and Ali Bugyal (among the largest high-altitude meadows in India), and finally the stark rocky terrain leading to the frozen lake.</p>

<h3>The Legend</h3>
<p>Local legend tells of King Jasdhaval and Queen Balampa of Kanauj, who set out on a pilgrimage to Nanda Devi shrine with a large entourage. Enraged by their frivolous celebration in the sacred mountains, the goddess Nanda Devi sent a fierce hailstorm that killed the entire party. Scientific analysis of the remains supports the hailstorm theory — most skulls show fractures consistent with large round objects striking from above.</p>

<h3>The Challenge</h3>
<p>Roopkund is classified as a difficult trek. The altitude gain from Bedni Bugyal (11,500 ft) to Roopkund (16,500 ft) is significant. Acclimatization days are essential, and proper gear for sub-zero temperatures is mandatory. The trail beyond Patar Nachauni is rocky and exposed, with steep climbs that test even experienced trekkers.</p>
    `,
    image: '/images/treks/roopkund/trek.webp',
    gallery: [
      '/images/treks/roopkund/gallery/Roopkund  Gallery 1.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 2.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 3.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 4.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 5.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 6.webp',
    ],
    author: blogAuthor,
    date: '2025-12-20',
    readTime: '7 min read',
    tags: ['roopkund', 'skeleton lake', 'difficult trek', 'mystery'],
    destination: 'Roopkund',
    mapCoords: [
      { lat: 30.2620, lng: 79.7310, label: 'Lohajung' },
      { lat: 30.2410, lng: 79.7270, label: 'Bedni Bugyal' },
      { lat: 30.2625, lng: 79.7308, label: 'Roopkund Lake' },
    ],
  },
  {
    id: '5',
    title: 'Dayara Bugyal: Meadows Above the Clouds',
    slug: 'dayara-bugyal-meadows-above-clouds',
    category: 'photo-essays',
    excerpt: 'A visual journey through one of Uttarakhand\'s most stunning high-altitude meadows. Dayara Bugyal is where the earth meets the sky.',
    content: `
<h2>The Infinite Meadows of Dayara</h2>
<p>At 11,000 feet, Dayara Bugyal unfurls like a green carpet between the peaks of the Garhwal Himalayas. This vast alpine meadow, stretching for over 28 square kilometers, is one of the most visually stunning landscapes in all of India. In summer, it's a sea of green dotted with wildflowers. In winter, it transforms into a pristine snow field perfect for skiing.</p>

<h3>The Trek</h3>
<p>Starting from Barsu village near Uttarkashi, the trek to Dayara Bugyal is a moderate 7 km ascent through dense forests of oak, maple, and rhododendron. The trail climbs steadily, and when you finally emerge from the tree line onto the open meadow, the view takes your breath away. The Bandarpunch massif dominates the horizon, with Draupadi Ka Danda and Kala Nag flanking it on either side.</p>

<h3>Camping Under a Billion Stars</h3>
<p>The meadow offers several camping spots, each with its own character. The most popular is near Barnala Tal, a small lake that reflects the surrounding peaks like a mirror. At night, the absence of light pollution turns the sky into a planetarium — the Milky Way arches overhead so vividly that it almost doesn't seem real.</p>

<h3>Seasons of Dayara</h3>
<p>Each season paints Dayara differently. Spring brings carpets of primrose and iris. Summer offers lush green meadows under clear blue skies. Autumn cloaks the forests in gold and crimson. Winter blankets everything in meters of powdery snow, making it a skiing destination that rivals any in the world.</p>
    `,
    image: '/images/treks/dayara-bugyal/trek.webp',
    author: blogAuthor,
    date: '2026-01-05',
    readTime: '5 min read',
    tags: ['photo essay', 'dayara bugyal', 'meadows', 'camping'],
    destination: 'Dayara Bugyal',
    mapCoords: [
      { lat: 31.0050, lng: 78.5950, label: 'Barsu Village' },
      { lat: 31.0150, lng: 78.5850, label: 'Dayara Bugyal' },
      { lat: 31.0100, lng: 78.5900, label: 'Barnala Tal' },
    ],
  },
  {
    id: '6',
    title: 'Essential Packing Guide for Himalayan Treks',
    slug: 'essential-packing-guide-himalayan-treks',
    category: 'guides',
    excerpt: 'The ultimate packing checklist for Himalayan treks. From clothing layers to emergency gear, never forget an essential item again.',
    content: `
<h2>Pack Smart, Trek Happy</h2>
<p>Packing for a Himalayan trek can make or break your experience. Too much weight slows you down; too little preparation puts you at risk. This comprehensive guide, born from 15+ years of trekking experience, will help you pack the perfect backpack for any Himalayan adventure.</p>

<h3>The Layering System</h3>
<p>The Himalayas can throw every weather condition at you in a single day. The key to comfort is a proper layering system:</p>
<ul>
<li><strong>Base Layer:</strong> Moisture-wicking thermal wear (merino wool or synthetic). Avoid cotton as it retains moisture and causes hypothermia.</li>
<li><strong>Mid Layer:</strong> Fleece jacket or light down jacket for insulation. This layer traps body heat.</li>
<li><strong>Outer Layer:</strong> Waterproof and windproof jacket with sealed seams. A good outer layer is non-negotiable.</li>
</ul>

<h3>Footwear</h3>
<p>Your boots are the single most important piece of gear. Invest in ankle-high waterproof trekking boots with a good Vibram sole. Break them in for at least 2 weeks before the trek. Carry two pairs of trekking socks (wool-synthetic blend) and a pair of camp sandals.</p>

<h3>Backpack Essentials</h3>
<ul>
<li>55-65L rucksack with rain cover</li>
<li>Headlamp with extra batteries</li>
<li>Water bottles (2 x 1L) or hydration bladder</li>
<li>Sunscreen SPF 50+ and lip balm with UV protection</li>
<li>Personal first aid kit with altitude sickness medication</li>
<li>Quick-dry towel and wet wipes</li>
<li>Energy bars, trail mix, and electrolyte sachets</li>
</ul>

<h3>The "Don't Forget" List</h3>
<p>Every season, we see trekkers forgetting these crucial items: trekking poles (they save your knees on descents), gaiters for snow treks, a buff/balaclava for wind protection, and a good quality sleeping bag liner for hygiene.</p>
    `,
    image: '/images/treks/kuari-pass/trek.webp',
    author: blogAuthor,
    date: '2026-03-01',
    readTime: '9 min read',
    tags: ['packing guide', 'gear', 'preparation', 'tips'],
    destination: 'General',
    featured: true,
  },
  {
    id: '7',
    title: 'Kuari Pass Trek: Lord Curzon\'s Trail',
    slug: 'kuari-pass-lord-curzons-trail',
    category: 'destinations',
    excerpt: 'Walk the historic trail that British Viceroy Lord Curzon called the finest in the Himalayas. Kuari Pass offers panoramic views of the greatest Himalayan peaks.',
    content: `
<h2>The Curzon Trail</h2>
<p>In 1905, Lord Curzon, the British Viceroy of India, trekked through these mountains and declared the view from Kuari Pass the most sublime he had ever witnessed. Over a century later, the Kuari Pass trek remains one of the most rewarding moderate treks in the Indian Himalayas.</p>

<h3>The Panorama</h3>
<p>At 12,516 feet, Kuari Pass (also called Kwari Pass) offers an uninterrupted view of a stunning lineup of peaks: Nanda Devi (25,643 ft), Dronagiri (23,182 ft), Kamet (25,447 ft), Hathi Ghoda Parbat, Trisul, and Chaukhamba. Few treks in India offer this caliber of mountain views at such an accessible altitude.</p>

<h3>The Trail Experience</h3>
<p>Starting from the village of Dhak, the trail passes through pristine forests of oak, rhododendron, and birch. The campsites at Khullara and Tali are perched on ridges with dramatic views in every direction. The final climb to the pass is a steady ascent through snow-covered terrain (in season), and the reward at the top is one of the greatest mountain panoramas anywhere on Earth.</p>

<h3>Why Choose Kuari Pass</h3>
<p>This trek is ideal for those who want stunning Himalayan views without extreme difficulty. It's perfect for first-time Himalayan trekkers and families. The trail is well-marked, the campsites are comfortable, and the gradual altitude gain allows for easy acclimatization.</p>
    `,
    image: '/images/treks/kuari-pass/trek.webp',
    gallery: [
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 1.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 2.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 3.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 4.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 5.webp',
    ],
    author: blogAuthor,
    date: '2025-11-15',
    readTime: '6 min read',
    tags: ['kuari pass', 'curzon trail', 'moderate trek', 'mountain views'],
    destination: 'Kuari Pass',
    mapCoords: [
      { lat: 30.5040, lng: 79.5780, label: 'Dhak Village' },
      { lat: 30.4870, lng: 79.5950, label: 'Khullara Camp' },
      { lat: 30.4750, lng: 79.6100, label: 'Kuari Pass' },
    ],
  },
  {
    id: '8',
    title: 'Spiti Valley: The Middle Land',
    slug: 'spiti-valley-the-middle-land',
    category: 'stories',
    excerpt: 'A journey through India\'s cold desert — ancient monasteries, prayer flags, and landscapes that feel like another planet. Spiti is where time stands still.',
    content: `
<h2>Where India Ends and Tibet Begins</h2>
<p>Spiti Valley—"The Middle Land" between India and Tibet—is a high-altitude cold desert that defies every expectation. At an average altitude of 12,500 feet, this remote valley in Himachal Pradesh offers a landscape so stark, so beautiful, and so different from the rest of India that arriving here feels like landing on another planet.</p>

<h3>The Road Less Traveled</h3>
<p>Getting to Spiti is an adventure in itself. From Manali, the route crosses the treacherous Rohtang Pass (13,051 ft) and the even higher Kunzum Pass (14,931 ft). The road, if you can call it that, clings to cliff edges above roaring rivers, passes through miles of barren moonscape, and occasionally disappears entirely under glacial streams. It's terrifying, exhilarating, and absolutely worth it.</p>

<h3>Ancient Monasteries</h3>
<p>Spiti is the last stronghold of Tibetan Buddhist culture in India. The Key Monastery, perched on a hilltop at 13,668 feet, is a 1000-year-old fortress of faith housing 300 monks. Tabo Monastery, founded in 996 AD, is called the "Ajanta of the Himalayas" for its exquisite murals. Dhankar Monastery sits on a precarious clifftop overlooking the confluence of the Spiti and Pin rivers.</p>

<h3>The People</h3>
<p>What moved me most about Spiti was its people. In one of the harshest environments on Earth, where temperatures drop to -30°C and the valley is cut off from the world for six months each year, the people of Spiti are among the warmest, most hospitable I've ever met. Their resilience and joy are a lesson in what truly matters in life.</p>
    `,
    image: '/images/treks/spiti-valley/trek.webp',
    author: blogAuthor,
    date: '2025-10-20',
    readTime: '8 min read',
    tags: ['spiti valley', 'road trip', 'monasteries', 'cold desert'],
    destination: 'Spiti Valley',
    mapCoords: [
      { lat: 32.5927, lng: 78.0132, label: 'Kaza' },
      { lat: 32.5290, lng: 78.0126, label: 'Key Monastery' },
      { lat: 32.0933, lng: 78.3860, label: 'Tabo Monastery' },
    ],
  },
  {
    id: '9',
    title: 'Gaumukh Tapovan: To the Source of the Ganges',
    slug: 'gaumukh-tapovan-source-of-ganges',
    category: 'guides',
    excerpt: 'A detailed trek guide to Gaumukh, the glacier source of the holy river Ganga, and the pristine meadow of Tapovan nestled at the base of Mt. Shivling.',
    content: `
<h2>The Sacred Source</h2>
<p>Gaumukh, literally "Cow's Mouth," is the snout of the Gangotri Glacier from where the river Bhagirathi (later known as the Ganges) originates. At 13,200 feet, standing before this massive wall of ice and watching the river emerge is a profoundly moving experience — geological marvel meets spiritual significance.</p>

<h3>The Trail</h3>
<p>The 18 km trek from Gangotri to Gaumukh follows the Bhagirathi river upstream through a narrow valley. The trail is well-defined but the terrain is rocky and demanding. Beyond Gaumukh, a challenging 5 km climb leads to Tapovan, a high-altitude meadow at 14,600 feet that sits directly beneath the stunning Mt. Shivling (21,467 ft).</p>

<h3>Permits and Regulations</h3>
<p>This trek requires a permit from the Gangotri National Park office. Only 150 permits are issued per day. Photography is restricted in certain areas. Carry your ID proof and two passport-sized photographs for the permit application.</p>

<h3>The Tapovan Experience</h3>
<p>If Gaumukh is the destination, Tapovan is the reward. This flat, grassy meadow surrounded by towering peaks is one of the most spectacular campsites in the Himalayas. Mt. Shivling rises directly above, its perfect pyramid shape changing color with the sun. Sadhus (ascetics) have meditated here for centuries, and it's easy to see why.</p>
    `,
    image: '/images/treks/gaumukh-tapovan/trek.webp',
    gallery: [
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 1.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 2.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 3.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 4.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 5.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 6.webp',
    ],
    author: blogAuthor,
    date: '2025-09-10',
    readTime: '7 min read',
    tags: ['gaumukh', 'tapovan', 'gangotri glacier', 'ganges source'],
    destination: 'Gaumukh-Tapovan',
    mapCoords: [
      { lat: 30.9942, lng: 79.0811, label: 'Gangotri' },
      { lat: 30.9268, lng: 79.0835, label: 'Gaumukh Glacier' },
      { lat: 30.9100, lng: 79.0700, label: 'Tapovan Meadow' },
    ],
  },
  {
    id: '10',
    title: 'Pangarchulla Summit: The 360° Panorama Trek',
    slug: 'pangarchulla-summit-360-panorama',
    category: 'photo-essays',
    excerpt: 'A visual journey through one of Uttarakhand\'s most rewarding summit treks. Pangarchulla offers an unmatched 360-degree panorama of the Garhwal Himalayas.',
    content: `
<h2>The Summit That Rewards</h2>
<p>At 14,700 feet, the summit of Pangarchulla offers what many consider the finest 360-degree panorama in the Garhwal Himalayas. On a clear day, you can see an unbroken wall of peaks stretching from Nanda Devi in the east to Chaukhamba in the west — a sight that makes every step of the challenging climb worthwhile.</p>

<h3>The Approach</h3>
<p>The trek starts from Dhak village and follows a route through dense forests and alpine meadows. The trail to Khullara camp site offers stunning views, and the final summit push is a steep scramble over snow and rock that requires an early morning start.</p>

<h3>Summit Day</h3>
<p>The alarm goes off at 2 AM. You climb in the dark, headlamp cutting through the pre-dawn cold, boots crunching on frozen snow. The eastern horizon begins to lighten around 5 AM, and as you push through the final steep section, the first rays of sun hit the summit peaks around you, turning them gold. Then you're on top, and the world falls away in every direction.</p>

<h3>The View</h3>
<p>Nanda Devi, Dronagiri, Hathi Parbat, Ghori Parbat, Chaukhamba, Nilkanth, Kamet, Mana Peak — peak after peak after peak, stretching to the horizons. Below, the valleys are still in shadow, wisps of cloud threading through the forests. It's the kind of view that makes you understand why people climb mountains.</p>
    `,
    image: '/images/treks/pangarchulla/trek.webp',
    gallery: [
      '/images/treks/pangarchulla/gallery/Pangarchulla Gallery 1.webp',
    ],
    author: blogAuthor,
    date: '2025-12-05',
    readTime: '5 min read',
    tags: ['pangarchulla', 'summit trek', 'panorama', 'photo essay'],
    destination: 'Pangarchulla',
    mapCoords: [
      { lat: 30.4850, lng: 79.5800, label: 'Dhak Village' },
      { lat: 30.4700, lng: 79.5900, label: 'Khullara' },
      { lat: 30.4550, lng: 79.6050, label: 'Pangarchulla Summit' },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentPost: BlogPost, count = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post =>
      post.category === currentPost.category ||
      post.tags.some(tag => currentPost.tags.includes(tag)) ||
      post.destination === currentPost.destination
    )
    .slice(0, count);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function searchBlogPosts(query: string): BlogPost[] {
  const q = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(q) ||
    post.excerpt.toLowerCase().includes(q) ||
    post.tags.some(tag => tag.toLowerCase().includes(q)) ||
    post.destination.toLowerCase().includes(q)
  );
}

export function getAllDestinations(): string[] {
  return [...new Set(blogPosts.map(post => post.destination))];
}

export function getAllTags(): string[] {
  return [...new Set(blogPosts.flatMap(post => post.tags))];
}
