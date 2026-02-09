export interface Trek {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  difficulty: "Easy" | "Moderate" | "Difficult" | "Challenging";
  duration: string;
  distance: string;
  maxAltitude: string;
  bestTime: string;
  price: number;
  groupSize: string;
  startPoint: string;
  endPoint: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  includes: string[];
  gradient: string;
  icon: string;
  region: string;
  featured: boolean;
}

export const treks: Trek[] = [
  {
    slug: "kedarkantha",
    name: "Kedarkantha",
    tagline: "The Crown Jewel of Winter Treks",
    description:
      "A stunning winter trek offering panoramic views of snow-clad Himalayan peaks, dense pine forests, and pristine campsites.",
    longDescription:
      "Kedarkantha is one of the most popular winter treks in India, nestled in the Govind Wildlife Sanctuary of Uttarkashi district. The trek takes you through enchanting forests of oak, pine, and rhododendron, opening up to vast alpine meadows blanketed in snow. The summit at 12,500 ft offers a breathtaking 360-degree panorama of peaks including Swargarohini, Bandarpoonch, Black Peak, and Ranglana. The campsites along the way — Juda Ka Talab and Kedarkantha Base — are among the most beautiful you'll find anywhere in the Himalayas.",
    difficulty: "Easy",
    duration: "6 Days",
    distance: "20 km",
    maxAltitude: "12,500 ft",
    bestTime: "December – April",
    price: 7499,
    groupSize: "6–15 people",
    startPoint: "Sankri",
    endPoint: "Sankri",
    highlights: [
      "360° summit views of major Himalayan peaks",
      "Snow-covered trails through pine forests",
      "Frozen lake at Juda Ka Talab",
      "Beautiful campsites with mountain backdrops",
      "Rich wildlife in Govind Sanctuary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        description:
          "Drive from Dehradun to Sankri (6,400 ft) passing through Mussoorie, Purola, and Mori. Enjoy scenic views of the Tons River valley. Overnight at guesthouse.",
      },
      {
        day: 2,
        title: "Sankri to Juda Ka Talab",
        description:
          "Trek through dense oak and pine forest to reach the beautiful frozen lake campsite at 9,100 ft. Distance: 4 km, 4-5 hours.",
      },
      {
        day: 3,
        title: "Juda Ka Talab to Kedarkantha Base",
        description:
          "Short trek through open meadows to the base camp at 11,250 ft. Enjoy stunning sunset views. Distance: 3 km, 2-3 hours.",
      },
      {
        day: 4,
        title: "Summit Day & Descent to Hargaon",
        description:
          "Early morning summit push to 12,500 ft for sunrise. Descend to Hargaon campsite. Distance: 9 km, 7-8 hours.",
      },
      {
        day: 5,
        title: "Hargaon to Sankri",
        description:
          "Descend through forests back to Sankri. Celebration dinner with the team. Distance: 4 km, 3-4 hours.",
      },
      {
        day: 6,
        title: "Sankri to Dehradun",
        description:
          "Drive back to Dehradun. Trip ends by evening. Carry memories for a lifetime!",
      },
    ],
    includes: [
      "Accommodation in tents & guesthouse",
      "All meals during the trek",
      "Experienced trek leaders & guides",
      "Safety equipment & first aid",
      "Forest permits & camping charges",
      "Transport: Dehradun – Sankri – Dehradun",
    ],
    gradient: "from-blue-600 to-cyan-500",
    icon: "⛰️",
    region: "Uttarkashi",
    featured: true,
  },
  {
    slug: "har-ki-dun",
    name: "Har Ki Dun",
    tagline: "Valley of the Gods",
    description:
      "An ancient cradle-shaped valley surrounded by snow peaks, linked to legends of the Mahabharata and rich in cultural heritage.",
    longDescription:
      "Har Ki Dun, meaning 'Valley of Gods,' is a pristine cradle-shaped valley sitting at 11,675 ft in the Govind Wildlife Sanctuary. This ancient valley is steeped in mythology — locals believe it was the route the Pandavas took on their journey to heaven. The trek passes through charming villages like Osla and Seema, where time seems to stand still with their traditional wooden architecture and ancient temples. The trail meanders through dense deodar forests, alongside glacial streams, and opens into vast meadows with spectacular views of Swargarohini, Hata Peak, and Jaundhar Glacier.",
    difficulty: "Moderate",
    duration: "7 Days",
    distance: "47 km",
    maxAltitude: "11,675 ft",
    bestTime: "April – June, Sept – Nov",
    price: 8999,
    groupSize: "6–15 people",
    startPoint: "Sankri",
    endPoint: "Sankri",
    highlights: [
      "Ancient valley from Mahabharata legends",
      "Traditional Himalayan villages",
      "Diverse flora and wildlife",
      "Views of Swargarohini massif",
      "Glacial streams and alpine meadows",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        description:
          "Drive from Dehradun along the beautiful Tons valley to reach Sankri. Rest and acclimatize.",
      },
      {
        day: 2,
        title: "Sankri to Taluka",
        description:
          "Drive to Taluka and begin the trek. Walk through deodar forests. Distance: 12 km.",
      },
      {
        day: 3,
        title: "Taluka to Seema",
        description:
          "Trek alongside the Supin river through remote villages with ancient wooden temples.",
      },
      {
        day: 4,
        title: "Seema to Har Ki Dun",
        description:
          "Enter the magnificent valley with jaw-dropping views of surrounding peaks.",
      },
      {
        day: 5,
        title: "Explore Har Ki Dun & Jaundhar Glacier",
        description:
          "Day exploration to Jaundhar Glacier and Maninda Tal. Enjoy the alpine landscape.",
      },
      {
        day: 6,
        title: "Har Ki Dun to Taluka",
        description:
          "Retrace steps downhill to Taluka through the beautiful valley trail.",
      },
      {
        day: 7,
        title: "Taluka to Sankri to Dehradun",
        description:
          "Short walk to Taluka, drive back to Dehradun via Sankri.",
      },
    ],
    includes: [
      "Accommodation in tents & village stays",
      "All meals during the trek",
      "Experienced trek leaders & guides",
      "Safety equipment & first aid",
      "Forest permits & camping charges",
      "Transport: Dehradun – Sankri – Dehradun",
    ],
    gradient: "from-emerald-600 to-teal-500",
    icon: "🏔️",
    region: "Uttarkashi",
    featured: true,
  },
  {
    slug: "roopkund",
    name: "Roopkund",
    tagline: "The Mysterious Skeleton Lake",
    description:
      "Trek to the enigmatic glacial lake famous for its ancient human skeletons, through stunning bugyals and dramatic terrain.",
    longDescription:
      "Roopkund at 16,499 ft is one of the most intriguing treks in India, leading to a glacial lake surrounded by rock-strewn glaciers and snowy peaks. The lake gained worldwide fame for the hundreds of ancient human skeletons discovered around its shores. The trek passes through some of the most beautiful high-altitude meadows (bugyals) in India — Bedni Bugyal and Ali Bugyal — vast carpets of green stretching as far as the eye can see, framed by Himalayan peaks. The dramatic shift from lush forests to barren, rocky terrain near the lake makes this trek an unforgettable adventure.",
    difficulty: "Difficult",
    duration: "8 Days",
    distance: "53 km",
    maxAltitude: "16,499 ft",
    bestTime: "May – June, Sept – Oct",
    price: 11999,
    groupSize: "8–15 people",
    startPoint: "Lohajung",
    endPoint: "Lohajung",
    highlights: [
      "Mysterious skeleton lake at 16,499 ft",
      "Iconic Bedni & Ali Bugyals (meadows)",
      "Views of Trishul & Nanda Ghunti",
      "Dramatic terrain changes",
      "Rich biodiversity & wildflowers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Lohajung",
        description:
          "Long scenic drive through Rishikesh, Karnaprayag to Lohajung (7,600 ft). Rest and briefing.",
      },
      {
        day: 2,
        title: "Lohajung to Didna Village",
        description:
          "Trek through forests and past streams to the quaint village of Didna. Distance: 7 km.",
      },
      {
        day: 3,
        title: "Didna to Ali Bugyal",
        description:
          "Ascend to the stunning Ali Bugyal meadow at 11,000 ft. Breathtaking views open up.",
      },
      {
        day: 4,
        title: "Ali Bugyal to Ghora Lotani",
        description:
          "Cross the even larger Bedni Bugyal. Camp at Ghora Lotani amidst the peaks.",
      },
      {
        day: 5,
        title: "Ghora Lotani to Bhagwabasa",
        description:
          "Rocky terrain ascent to the high camp at 14,100 ft. Acclimatization.",
      },
      {
        day: 6,
        title: "Bhagwabasa to Roopkund & back to Bedni",
        description:
          "Early summit push to the skeleton lake. Return to Bedni Bugyal. Distance: 12 km.",
      },
      {
        day: 7,
        title: "Bedni to Lohajung",
        description:
          "Descend through forests back to Lohajung. Celebration dinner.",
      },
      {
        day: 8,
        title: "Lohajung to Dehradun",
        description: "Drive back to Dehradun. Trek concludes.",
      },
    ],
    includes: [
      "Accommodation in tents & village stays",
      "All meals during the trek",
      "Experienced trek leaders & support staff",
      "Safety equipment, oxygen & first aid",
      "Forest permits & camping charges",
      "Transport: Dehradun – Lohajung – Dehradun",
    ],
    gradient: "from-purple-600 to-indigo-500",
    icon: "💀",
    region: "Chamoli",
    featured: true,
  },
  {
    slug: "valley-of-flowers",
    name: "Valley of Flowers",
    tagline: "A UNESCO World Heritage Trek",
    description:
      "Walk through a valley carpeted with hundreds of species of wildflowers, set against glaciers and towering peaks.",
    longDescription:
      "The Valley of Flowers National Park is a UNESCO World Heritage Site that transforms into a breathtaking carpet of color during the monsoon months. Discovered by mountaineer Frank Smythe in 1931, this enchanted valley hosts over 600 species of flowering plants, many of which are rare and endangered. Combined with a visit to the sacred Hemkund Sahib, this trek offers a perfect blend of natural beauty and spiritual experience. The valley sits in the Zanskar and Great Himalayan ranges and is home to rare fauna including the Asiatic black bear, snow leopard, and musk deer.",
    difficulty: "Easy",
    duration: "6 Days",
    distance: "38 km",
    maxAltitude: "14,100 ft",
    bestTime: "July – September",
    price: 8499,
    groupSize: "6–20 people",
    startPoint: "Govindghat",
    endPoint: "Govindghat",
    highlights: [
      "UNESCO World Heritage Site",
      "600+ species of wildflowers",
      "Visit to Hemkund Sahib",
      "Rare Himalayan wildlife",
      "Stunning glacial landscapes",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Joshimath",
        description:
          "Scenic drive through Rishikesh, Devprayag and Karnaprayag to Joshimath.",
      },
      {
        day: 2,
        title: "Joshimath to Ghangaria",
        description:
          "Drive to Govindghat, trek to Ghangaria (10,000 ft) along the Pushpawati river.",
      },
      {
        day: 3,
        title: "Ghangaria to Valley of Flowers",
        description:
          "Full day exploration of the magnificent valley. Photography paradise!",
      },
      {
        day: 4,
        title: "Ghangaria to Hemkund Sahib",
        description:
          "Trek to the holy Hemkund Sahib lake at 14,100 ft. Return to Ghangaria.",
      },
      {
        day: 5,
        title: "Ghangaria to Govindghat to Joshimath",
        description: "Descend to Govindghat and drive to Joshimath.",
      },
      {
        day: 6,
        title: "Joshimath to Dehradun",
        description: "Drive back to Dehradun. Trip concludes.",
      },
    ],
    includes: [
      "Hotel & guesthouse accommodation",
      "All meals during the trek",
      "Experienced trek leaders & guides",
      "First aid & safety equipment",
      "National park entry fees",
      "Transport: Dehradun – Govindghat – Dehradun",
    ],
    gradient: "from-pink-500 to-rose-500",
    icon: "🌸",
    region: "Chamoli",
    featured: true,
  },
  {
    slug: "chopta-chandrashila",
    name: "Chopta Chandrashila",
    tagline: "Mini Switzerland of Uttarakhand",
    description:
      "A short but rewarding trek to the Chandrashila summit via the ancient Tungnath temple, the highest Shiva temple in the world.",
    longDescription:
      "Chopta-Chandrashila is a perfect weekend trek combining spirituality with adventure. The trail begins from Chopta, often called the 'Mini Switzerland of India,' and winds up to Tungnath — the highest Shiva temple in the world at 12,073 ft. From there, a short but steep climb leads to the Chandrashila summit at 13,000 ft. The summit offers one of the most spectacular panoramic views in the Garhwal Himalayas, with peaks like Nanda Devi, Trishul, Kedar Peak, Bandarpoonch, and Chaukhamba spread across the horizon. The trail passes through beautiful rhododendron and deodar forests.",
    difficulty: "Easy",
    duration: "4 Days",
    distance: "10 km",
    maxAltitude: "13,000 ft",
    bestTime: "October – March",
    price: 5499,
    groupSize: "6–20 people",
    startPoint: "Chopta",
    endPoint: "Chopta",
    highlights: [
      "Tungnath – highest Shiva temple in the world",
      "Chandrashila summit panoramic views",
      "Rhododendron & deodar forests",
      "Views of Nanda Devi & Chaukhamba",
      "Perfect weekend trek",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Chopta",
        description:
          "Drive through Rishikesh and Ukhimath to reach Chopta. Evening nature walk.",
      },
      {
        day: 2,
        title: "Chopta to Tungnath to Chandrashila",
        description:
          "Trek to Tungnath temple, push to Chandrashila summit for panoramic views. Camp at Chopta.",
      },
      {
        day: 3,
        title: "Explore Chopta & Deoria Tal",
        description:
          "Visit the beautiful Deoria Tal lake with reflections of Chaukhamba peaks.",
      },
      {
        day: 4,
        title: "Chopta to Dehradun",
        description: "Drive back to Dehradun. Trip ends by evening.",
      },
    ],
    includes: [
      "Hotel & camp accommodation",
      "All meals during the trek",
      "Experienced trek leaders",
      "First aid & safety equipment",
      "Transport: Dehradun – Chopta – Dehradun",
    ],
    gradient: "from-amber-500 to-orange-500",
    icon: "🛕",
    region: "Rudraprayag",
    featured: false,
  },
  {
    slug: "dayara-bugyal",
    name: "Dayara Bugyal",
    tagline: "The Meadow of Dreams",
    description:
      "Trek to one of the most stunning high-altitude meadows in India, a vast green carpet at 12,000 ft with panoramic Himalayan views.",
    longDescription:
      "Dayara Bugyal is one of the largest and most beautiful high-altitude alpine meadows in India, stretching across a vast expanse at around 12,000 ft. In summer, the bugyal transforms into a carpet of green dotted with wildflowers, while winter blankets it in pristine snow perfect for skiing. The meadow offers unobstructed views of peaks like Draupadi Ka Danda, Bandarpoonch, and Black Peak. The trek from Barsu village passes through dense oak and rhododendron forests, gradually opening up to reveal this stunning amphitheater of nature. It's an ideal trek for beginners and photography enthusiasts.",
    difficulty: "Easy",
    duration: "5 Days",
    distance: "26 km",
    maxAltitude: "12,100 ft",
    bestTime: "May – June, Sept – Nov",
    price: 6499,
    groupSize: "6–15 people",
    startPoint: "Barsu",
    endPoint: "Barsu",
    highlights: [
      "Vast alpine meadow at 12,000 ft",
      "Panoramic views of Bandarpoonch range",
      "Ideal for beginners & photography",
      "Snow camping in winter",
      "Rich forest biodiversity",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Barsu",
        description:
          "Drive to Barsu village through Uttarkashi. Rest and prepare for the trek.",
      },
      {
        day: 2,
        title: "Barsu to Barnala Tal",
        description:
          "Trek through beautiful oak forests to the serene Barnala Tal lake. Distance: 8 km.",
      },
      {
        day: 3,
        title: "Barnala Tal to Dayara Bugyal",
        description:
          "Ascend to the magnificent Dayara Bugyal. Explore the vast meadow. Distance: 5 km.",
      },
      {
        day: 4,
        title: "Explore & Descent to Barsu",
        description:
          "Morning exploration and photography. Descend back to Barsu. Distance: 13 km.",
      },
      {
        day: 5,
        title: "Barsu to Dehradun",
        description: "Drive back to Dehradun. Trip concludes.",
      },
    ],
    includes: [
      "Accommodation in tents & village stays",
      "All meals during the trek",
      "Experienced trek leaders",
      "First aid & safety equipment",
      "Forest permits",
      "Transport: Dehradun – Barsu – Dehradun",
    ],
    gradient: "from-green-500 to-lime-500",
    icon: "🌿",
    region: "Uttarkashi",
    featured: false,
  },
];

export function getTrekBySlug(slug: string): Trek | undefined {
  return treks.find((t) => t.slug === slug);
}

export function getFeaturedTreks(): Trek[] {
  return treks.filter((t) => t.featured);
}

export const testimonials = [
  {
    name: "Priya Sharma",
    trek: "Kedarkantha",
    text: "The most magical experience of my life! Watching the sunrise from the summit with snow-capped peaks all around was surreal. The guides were incredibly knowledgeable and supportive.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rohan Mehta",
    trek: "Har Ki Dun",
    text: "Har Ki Dun is a hidden paradise. The journey through ancient villages, the warmth of the locals, and the sheer beauty of the valley — Garhwal Hikes made it an unforgettable adventure.",
    rating: 5,
    avatar: "RM",
  },
  {
    name: "Ananya Gupta",
    trek: "Valley of Flowers",
    text: "Walking through the Valley of Flowers felt like stepping into a painting. The team's attention to safety and ecological responsibility was impressive. Highly recommend!",
    rating: 5,
    avatar: "AG",
  },
  {
    name: "Vikram Singh",
    trek: "Roopkund",
    text: "Roopkund pushed my limits in the best way possible. The bugyals were breathtaking, and reaching the mysterious lake felt like an achievement of a lifetime. Professional and well-organized team!",
    rating: 5,
    avatar: "VS",
  },
];
