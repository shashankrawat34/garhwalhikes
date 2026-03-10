export interface Trek {
  id: string;
  name: string;
  price?: number;
  category: 'yatra' | 'winter' | 'monsoon';
  description: string;
  duration: string;
  difficulty: 'Easy' | 'Easy-Moderate' | 'Moderate' | 'Hard';
  bestTime: string;
  altitude: string;
  image?: string;
  highlights?: string[];
  itinerary?: ItineraryDay[];
  overview?: string;
  inclusions?: string[];
  exclusions?: string[];
  whatToPack?: string[];
  termsConditions?: string;
  gallery?: string[];
  faq?: FAQ[];
  bestTimeDetails?: string;
  sacredTemples?: SacredTemple[];
}

export interface SacredTemple {
  name: string;
  represents: string;
  altitude: string;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  altitude?: string;
  distance?: string;
  time?: string;
  altitudeGain?: string;
  notes?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const trekData: Trek[] = [
  // Yatra Treks
  {
    id: 'panch-kedar',
    name: 'Panch Kedar with Badrinath',
    price: 38999,
    category: 'yatra',
    description: 'Sacred pilgrimage trek to the five Kedars and the holy temple of Badrinath.',
    duration: '12D/11N',
    difficulty: 'Moderate',
    bestTime: 'May - October',
    altitude: '3,680m',
    overview: 'The state of Uttarakhand has been home to many gods and goddesses since ancient times. Among these, Lord Kedarnath (another name for Lord Shiva) is especially important. In the Kedarkhand area, also known as the Garhwal region of the Himalayas, there are five special temples dedicated to Lord Shiva known as "Panch Kedar." The names of these five temples are—Kedarnath, Tungnath, Madhmaheshwar, Rudranath, and Kalpeshwar. Each of these temples is known to represent a different part of Shiva\'s body: Kedarnath represents his hump, Madhmaheshwar his navel (belly), Tungnath his arms, Rudranath his face, and Kalpeshwar his jata (matted hair). Among all these, Kedarnath temple is the most important because it is also part of the Chota Char Dham Yatra and one of the twelve Jyotirlingas of Lord Shiva.\n\nThe most well-known story is from the Mahabharata. After the epic war, when the Pandavas killed their own relatives, the Kauravas, they felt guilty and wanted to seek forgiveness from Lord Shiva. Lord Shiva did not want to meet them and turned himself into a bull and tried to hide by diving into the ground. But later, parts of Lord Shiva\'s body appeared at five different places in the Himalayas, and these places became holy temples.\n\nThe Panch Kedar Yatra is a famous pilgrimage route in the Garhwal Himalayas of Uttarakhand, India, which covers five ancient Shiva temples. During this journey, most people also visit Kedarnath, which itself is a major Hindu spiritual site and part of the Chota Char Dham. The whole route is about 140 kilometers and takes around 11 to 12 days to finish. The journey includes walking through high-altitude areas like Tungnath, going through forests, climbing through steep mountain paths leading to Rudranath, crossing green meadows on the way to Madhmaheshwar, and passing through remote mountain villages such as Ransi and Sagar. Both young and old devotees take part eagerly, enjoying the natural beauty and excitement of trekking in the Himalayas.\n\nDuring the trek, one gets to witness amazing views of the Himalayan mountain ranges. The road passes through dense forests, peaceful meadows, village paths, little rivers, and tricky hilly trails. The temples are visited in a specific traditional order: first is Kedarnath, followed by Madhmaheshwar, then Tungnath, next is Rudranath, and finally Kalpeshwar. This order is believed to be spiritually correct and has been followed by pilgrims for many generations.',
    highlights: [
      'Kedarnath Temple - The hump (back) of Lord Shiva at 3,583m',
      'Madhyamaheshwar Temple - The navel (belly) of Lord Shiva at 3,497m',
      'Tungnath Temple - The arms of Lord Shiva, world\'s highest Shiva temple at 3,680m',
      'Rudranath Temple - The face of Lord Shiva at 3,600m',
      'Kalpeshwar Temple - The hair (jata) of Lord Shiva at 2,134m, open year-round',
      'Badrinath Shrine - Lord Vishnu temple and one of the four Char Dhams at 3,300m',
      'Amazing Himalayan views and pristine nature',
      'Spiritual awakening and sacred pilgrimage experience'
    ],
    sacredTemples: [
      {
        name: 'Kedarnath Temple',
        represents: 'The hump (back) of Lord Shiva',
        altitude: '3,583 m (11,755 ft)',
        description: 'The most prominent and important of the Panch Kedar temples. Kedarnath is one of the 12 Jyotirlingas of Lord Shiva and is situated near the Mandakini River. This sacred shrine is the first major stop on the pilgrimage journey and attracts devotees from across the world throughout the year.'
      },
      {
        name: 'Madhyamaheshwar Temple',
        represents: 'The navel (belly) of Lord Shiva',
        altitude: '3,497 m (11,470 ft)',
        description: 'Located in the Mansoona village valley, this temple is famous for its serene environment and ancient stone architecture. The temple integrates beautifully with the surrounding landscape, offering both spiritual and natural beauty.'
      },
      {
        name: 'Tungnath Temple',
        represents: 'The arms of Lord Shiva',
        altitude: '3,680 m (12,073 ft)',
        description: 'Located at the highest altitude, making it the world\'s highest Shiva temple. Known for its peaceful surroundings and panoramic Himalayan views, Tungnath offers breathtaking vistas of snow-clad peaks. The temple sits on a ridge dividing the waters of the Alaknanda and Mandakini rivers.'
      },
      {
        name: 'Rudranath Temple',
        represents: 'The face of Lord Shiva',
        altitude: '3,600 m (11,811 ft)',
        description: 'Known for its naturally formed rock face (Mukha) that resembles Lord Shiva. Surrounded by alpine meadows and dense forests, Rudranath offers a peaceful and spiritually uplifting experience. The trek to this temple is relatively challenging but deeply rewarding.'
      },
      {
        name: 'Kalpeshwar Temple',
        represents: 'The hair (jata) of Lord Shiva',
        altitude: '2,134 m (6,985 ft)',
        description: 'The only Panch Kedar temple accessible throughout the year, as it remains open even during winter. Located in the Urgam Valley, this temple is unique in its accessibility and is often the final stop on the pilgrimage circuit.'
      },
      {
        name: 'Badrinath Shrine',
        represents: 'Lord Vishnu - Supreme Deity',
        altitude: '3,300 m (10,824 ft)',
        description: 'India\'s holiest Vishnu temple and one of the four most important pilgrimage sites (Char Dham). Located in the scenic Chamoli district, Badrinath is surrounded by towering peaks and the Alaknanda River. This shrine completes your spiritual journey with divine blessings from Lord Vishnu.'
      }
    ],
    itinerary: [
      { day: 1, title: 'Drive from Haridwar to Sitabpur', description: 'Drive to Sitabpur via Devprayag, Dhari Devi and Rudraprayag. Arrive at Sitapur in evening and check-in at your hotel. Dinner and stay at Sitabpur Hotel.', altitude: '340m', notes: 'Stay- Triple/Quad Share' },
      { day: 2, title: 'Drive from Sitabpur to Sonprayag, Trek From Gaurikund to Kedarnath', description: 'Start early in the morning and reach Sonprayag, take shuttle taxi to Gaurikund. The 21 km trek is a combination of steep climbs, moderate stretches, and some level patches. Start your trek from Gaurikund to Kedarnath. Reach Kedarnath in the evening and check-in at your stay. Dinner and stay at Kedarnath.', altitude: '3,583m', notes: 'Shuttle charges to reach Gaurikund is to be paid by customer. Stay- Dormitory' },
      { day: 3, title: 'Trek from Kedarnath to Gaurikund, Drive from Sonprayag to Sitabpur', description: 'After blissful darshan at Kedarnath Temple, trek back to Gaurikund and take shuttle taxi till Sonprayag. Drive towards Sitabpur and check-in at your stay. Dinner and stay at Sitabpur.', altitude: '340m', notes: 'Shuttle charges from Gaurikund to reach Sonprayag is to be paid by customer. Stay- Triple/Quad Share' },
      { day: 4, title: 'Drive from Sitabpur to Ransi to trek towards Gaundar', description: 'After an early breakfast, start your drive from Sitabpur to Ransi & trek to Gaundar village, covering a distance of approximately 6 km. Reach Gaundar in the afternoon and check-in at your stay. Dinner and stay at Gaundar.', altitude: '1,500m', notes: 'Stay- Triple/Quad Share' },
      { day: 5, title: 'Trek from Gaundar to Madhyamaheshwar', description: 'Today\'s trek from Gaundar to Madhyamaheshwar is a challenging one, covering approximately 11 km with a steep ascent. After breakfast, begin your hike through dense forests and alpine meadows. Reach Madhyamaheshwar in the evening and check-in at your stay. Witness the divine evening aarti at the temple premises. Dinner and stay at Madhyamaheshwar.', altitude: '3,497m', notes: 'Stay- Triple/Quad Share' },
      { day: 6, title: 'Trek back from Madhyamaheshwar to Ransi & drive towards Ukhimath', description: 'Wake up early and trek towards the beautiful meadows of Bhuda Madhyamaheshwar. Trek back to your stay and have breakfast. Start trek towards Ransi village and drive towards Ukhimath, check-in at your stay in evening. Dinner and stay at Ukhimath Stay.', altitude: '1,600m', notes: 'Stay- Triple/Quad Share' },
      { day: 7, title: 'Drive to Chopta & trek towards Tungnath & Chandrashila, trek back to Chopta & Drive to Sagar', description: 'Start your drive from Ukhimath to Chopta after breakfast & start your trek towards Tungnath. The 4 km trail to Tungnath is moderate with steep climb in some stretches however scenic view of surrounding keep rejuvenate the climbers. After darshan trek towards Chandrashila peak & trek back to Chopta & then drive towards Sagar village & check-in at your stay. Dinner and stay at Sagar.', altitude: '3,680m', notes: 'Shuttle charges to reach trek start point is to be paid by customer. Stay- Triple/Quad Share' },
      { day: 8, title: 'Sagar to Lyuti Bugyal', description: 'Start your trek from Sagar after breakfast and commence the uphill trek to Lyuti Bugyal which passes through Pung Bugyal & Mauli Karak. Reach Lyuti Bugyal in the afternoon and check-in at your assigned camps. Dinner and stay at Lyuti.', altitude: '2,800m', notes: 'Stay- Shared Camps' },
      { day: 9, title: 'Lyuti to Rudranath to Lyuti', description: 'Wake up early and trek towards the beautiful meadows of Panaar Bugyal. Hike on gradient path with level walk & down hill descent after Pitradhar. After darshan at Rudranath return back to Lyuti Bugyal for night halt. Dinner and stay at Lyuti Bugyal.', altitude: '3,600m', notes: 'Stay- Shared Camps' },
      { day: 10, title: 'Lyuti to Sagar', description: 'After breakfast start trek down to Sagar and check-in at your stay. Dinner and stay at Sagar.', altitude: '1,500m', notes: 'Stay- Triple/Quad Share' },
      { day: 11, title: 'Sagar to Kalpeshwar to Badrinath', description: 'Start your day with early breakfast at Sagar. Board your vehicle and then drive towards Helang, take shuttle taxi reach Kalpeshwar temple. After blissful darshan board your Shuttle taxi reach Helang and drive towards Badrinath.', altitude: '3,300m', notes: 'Shuttle charges from Helang to Kalpeshwar and back is to be paid by customer. Stay- Triple/Quad Share' },
      { day: 12, title: 'Badrinath to Haridwar', description: 'The twelfth day of our Panch Kedar Yatra marks the final leg of the spiritual journey. Wake up early and, if not visited the previous day, seek blessings at Badrinath Temple. After breakfast, begin the long drive back to Haridwar via Joshimath, Pipalkoti, Karnaprayag, Rudraprayag, and Devprayag. Enjoy the scenic landscapes of the Alaknanda River and confluences along the way. Reach Haridwar in the evening. This concludes the sacred yatra to the Panch Kedar Circuit with Badrinath.', altitude: '340m', notes: '' }
    ],
    inclusions: [
      'Stay: Accommodation is included for 11 Nights. Stays will be provided on sharing basis.',
      'Transport: Transportation from Haridwar to Haridwar is covered.',
      'Meals: All meals (11 Dinner & 11 Breakfast) starting from dinner of Day 1 (Check-In) to breakfast on the last Day (Check-Out).',
      'Trek Staff: A qualified, professional team, including a mountaineering-certified trek leader, guide and support staff, will accompany you.',
      'Emergency Kit: First aid medical kits, oxygen cylinders, and stretchers are provided for safety.'
    ],
    exclusions: [
      'Any kind of Travel/ Health Insurance (Garhwal Hikes strictly recommend each traveller to please carry your own travel/health insurance)',
      'Any kind of medical expenses.',
      'Any food or drinks outside the package (e.g. beverages, mineral water, snacks and meals in during transportation) are the customer\'s responsibility.',
      'Personal Expenses like any tips, laundary, mineral water, camera fee or any other personal natural expenses.',
      'If any natural disasters (e.g., landslides, roadblocks) occur, any extra costs incurred would need to be paid directly by the customer.',
      'Any other fee (Forest fee, EDC fee)/charges(Shuttle charges) is to be paid by the customer.'
    ],
    whatToPack: [
      'Warm layers',
      'Windproof jacket',
      'Comfortable trekking shoes',
      'Rain gear',
      'Inner wear (thermal)',
      'Backpack (50-60L)',
      'Sleeping bag',
      'Torch/Headlamp',
      'First aid kit',
      'Water purification tablets',
      'Hat and gloves',
      'Sunscreen',
      'Water bottle',
      'Camera',
      'Trekking poles',
      'Identity proof',
      'Trek permits (if required)',
      'Insurance documents',
      'Emergency contacts',
      'Medical records',
      'Altitude sickness meds',
      'Energy snacks',
      'Electrolyte tablets',
      'Pain relievers',
      'Blister treatment',
      'Prayer beads',
      'Meditation mat',
      'Religious texts',
      'Offerings for temples',
      'Personal sacred items'
    ],
    bestTimeDetails: 'Ideal Season: May to October. The temples are generally open from May to October, depending on weather conditions. During these months, the weather is favorable for trekking, and the high-altitude routes are accessible. May-June: Spring season with pleasant weather, blooming flowers, and clear mountain views. July-August: Monsoon season - occasional rain but lush green landscapes. September-October: Autumn with stable weather and crystal-clear skies - optimal trekking conditions. November-April: Most temples close due to heavy snowfall.',
    termsConditions: 'By using our services or making any booking, you agree to these Terms & Conditions. All bookings or payments constitute acceptance of these terms.\n\nBOOKING AND PAYMENT:\nAll bookings must include complete and accurate information (name, contact, ID, etc.). A deposit or advance payment is required at the time of booking. Remaining payments must be made before the service begins. Payments must be made through the methods specified by the Company.\n\nNATIONAL/EMERGENCY EVENTS (FORCE MAJEURE):\nEvents beyond control, including natural disasters, earthquakes, floods, pandemics, government regulations, wars, riots, or strikes ("Force Majeure"), may affect travel, cause delays, or cancellations. The Company will not be liable for costs arising due to such events, and customers will be responsible for any expenses incurred.\n\nSAFETY AND RESPONSIBILITIES:\nCustomers are responsible for their own safety and the security of their belongings. Drivers must comply with the law; any instruction from the customer to violate regulations is the customer\'s responsibility, not the Company\'s.\n\nDELAYS, ROUTE CHANGES, AND ROAD ISSUES:\nIn case of roadblocks, poor weather, traffic jams, or other obstacles causing delays or route changes, the Company will not be responsible. Customers must bear any additional travel costs incurred due to such changes.\n\nLOSS, DAMAGE, OR ACCIDENTS:\nThe Company is not responsible for vehicle breakdowns, accidents, theft, lost baggage, or any personal injuries. Any claims related to vehicles or operators must be directed to the service provider; the Company accepts no liability beyond arranging the service.\n\nDISPUTE RESOLUTION:\nAll disputes shall be governed by Indian law and resolved under the jurisdiction of Indian courts.\n\nAMENDMENTS:\nThe Company reserves the right to modify or update these Terms & Conditions at any time.',
    image: '/images/treks/panch-kedar/trek.webp',
    gallery: [
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 1.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 2.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 3.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 4.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 5.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 6.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 7.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 8.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 9.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 10.webp',
      '/images/treks/panch-kedar/gallery/Panch Kedar Gallery 11.webp'
    ],
    faq: [
      { question: 'What is Panch Kedar Yatra?', answer: 'Panch Kedar Yatra is a sacred pilgrimage in Uttarakhand, India, visiting five revered Shiva temples believed to be established by the Pandavas.' },
      { question: 'What are the names of Panch Kedar?', answer: 'The five temples are Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, and Kalpeshwar.' },
      { question: 'Panch Kedar Yatra registration.', answer: 'Registration is usually required at designated counters or online portals run by the Uttarakhand government to ensure safety and crowd management.' },
      { question: 'What is the difficulty level of Panch Kedar?', answer: 'The trek varies in difficulty, with some temples like Tungnath being relatively easier, while others like Rudranath and Madhyamaheshwar require moderate to challenging trekking experience.' },
      { question: 'Which Kedar opens for 12 months?', answer: 'Kalpeshwar is the only Panch Kedar temple that remains accessible throughout the year.' },
      { question: 'Panch Kedar Yatra opening dates 2026.', answer: 'The temples, except Kalpeshwar, typically open in late April or May, but exact opening dates for 2026 are announced by the Uttarakhand government closer to the time. Kedarnath - 22nd April 2026, Madhyamaheshwar - 21st May 2026, Tungnath - 2nd May 2026, Rudranath - 18th May 2026.' },
      { question: 'What is the best time to undertake the Panch Kedar Yatra?', answer: 'The best time is usually between May and October, when the weather is favorable and the temples are open.' },
      { question: 'How do I prepare physically and mentally for the Panch Kedar Yatra?', answer: 'Regular cardio exercise, strength training, and acclimatization to high altitudes, along with mental preparedness for trekking, are important.' },
      { question: 'What accommodations and facilities are available along the Panch Kedar route?', answer: 'There are basic guesthouses, tents, and lodges in villages along the route, and travelers should book in advance during peak season.' }
    ]
  },
  {
    id: 'kedarnath-trek',
    name: 'Kedarnath Trek',
    price: 10499,
    category: 'yatra',
    description: 'Sacred pilgrimage trek to the Kedarnath Temple, one of the twelve Jyotirlingas of Lord Shiva and an important shrine among the Panch Kedar.',
    duration: '4D/3N',
    difficulty: 'Moderate',
    bestTime: 'May - October',
    altitude: '3,583 m',
    image: '/images/treks/kedarnath-trek/trek.webp',
    overview: 'Located in the Rudraprayag district of Uttarakhand, Kedarnath Temple is one of the twelve sacred Jyotirlingas of Lord Shiva and an important shrine among the Panch Kedar. Situated at an altitude of 3,583 meters in the Garhwal Himalayas, Kedarnath is both a significant pilgrimage destination and a spiritually enriching Himalayan trek.\n\nAt Kedarnath, the hump (back) of Lord Shiva is worshipped, while the other parts are worshipped at the remaining Panch Kedar temples across Uttarakhand. The temple holds immense religious and historical significance and is believed to have been revived by Adi Shankaracharya centuries ago.\n\nThe journey typically begins from Rishikesh, passing through Guptakashi and Gaurikund, which serves as the base for the trek. The total trekking distance from Gaurikund to Kedarnath is approximately 21 km one way. Due to an altitude gain of around 5,072 feet, the trek requires moderate physical endurance.\n\nThe temple usually opens in late April or early May and remains accessible until October. May, June, September, and October are considered the most favorable months for visiting. Prior registration on the official Char Dham Yatra portal is mandatory before undertaking the pilgrimage. Kedarnath Yatra offers a unique blend of devotion, adventure, and breathtaking Himalayan landscapes, making it one of the most revered spiritual journeys in India.',
    highlights: [
      'Sacred Kedarnath Temple - One of the 12 Jyotirlingas',
      'Kaal Bhairav Temple nearby',
      'Mandakini Ghat sacred bathing point',
      'Kedar Dome snow-clad peak views',
      'Adi Shankaracharya statue and legacy'
    ],
    itinerary: [
      { day: 1, title: 'Rishikesh to Sitabpur', description: 'Your journey begins early in the morning from Rishikesh, the gateway to the Char Dham Yatra. Covering approximately 180 km, the drive to Sitabpur typically takes around 7–8 hours. The scenic route unfolds along the sacred rivers of Uttarakhand. You will initially drive alongside the holy Ganga until reaching Devprayag, where the Bhagirathi and Alaknanda rivers merge to officially form the Ganga. From there, the journey continues along the Alaknanda River valley, offering breathtaking mountain and river views. En route, you will have the opportunity to visit the Dhari Devi Temple, dedicated to Goddess Kali. By evening, you will arrive at Sitabpur. Dinner and overnight stay will be arranged at the hotel.', altitude: '4,539 ft', notes: 'Accommodation on sharing basis' },
      { day: 2, title: 'Sitabpur to Sonprayag, Trek From Gaurikund to Kedarnath', description: 'After breakfast, start your day with a drive from Sitabpur to Sonprayag. From Sonprayag, take a local taxi (shuttle) to Gaurikund, about 8 km away. Gaurikund is the starting point of the Kedarnath trek. The trek from Gaurikund to Kedarnath Temple is around 21 km. The path is properly paved with stones and has railings at many places, making it easier and safer for pilgrims. Since there is a significant altitude gain, some people may feel tired or experience mild symptoms of AMS. Walk slowly, take short breaks, drink enough water, and carry light snacks. By evening, you will reach Kedarnath. After checking into accommodation, you can rest and later visit the temple to attend the peaceful evening Aarti.', altitude: '9,875 ft', notes: 'Shuttle charges to be paid by customer. Dormitory stay' },
      { day: 3, title: 'Kedarnath Darshan and Return to Sitabpur', description: 'Wake up early in the morning for darshan at Kedarnath Temple. During peak season, there can be long queues. After your darshan, explore nearby spiritual places such as Kaal Bhairav Temple, Mandakini Ghat, Bhim Shila, and the statue of Adi Shankaracharya. Just behind the temple, you can see majestic mountains like Kedar Dome and other snow-covered ranges. Near Kaal Bhairav Temple, you may find open meadows with seasonal wildflowers during the right time of year. After spending peaceful moments, prepare to begin your descent towards Gaurikund. Walk carefully and keep enough water and light snacks with you. By evening, you will reach Gaurikund. Take a local taxi to Sonprayag, then continue driving back to Sitabpur. Dinner and overnight stay arranged in Sitabpur.', altitude: 'Varies', notes: 'Shuttle charges from Gaurikund to Sonprayag to be paid by customer. Triple/Quad share' },
      { day: 4, title: 'Sitabpur to Rishikesh', description: 'After breakfast, begin your return journey from Sitabpur to Rishikesh. The drive usually takes around 6–7 hours, depending on road and traffic conditions. By evening, you will reach Rishikesh. From here, you can continue your onward journey and return home.', altitude: '340m', notes: 'Completion of journey' }
    ],
    sacredTemples: [
      { name: 'Kedarnath Temple', represents: 'The hump (back) of Lord Shiva', altitude: '3,583m', description: 'The main shrine dedicated to Lord Shiva, one of the twelve Jyotirlingas where the hump of Lord Shiva is worshipped. This is the most prominent temple among the Panch Kedar temples.' },
      { name: 'Kaal Bhairav Temple', represents: 'A fierce form of Shiva, symbolizing protection and destruction of evil', altitude: '3,583m', description: 'Located near Kedarnath Temple, dedicated to a fierce incarnation of Shiva that protects devotees and destroys negative forces.' },
      { name: 'Mandakini Ghat', represents: 'Sacred bathing point of the Mandakini River', altitude: '3,583m', description: 'The sacred bathing point of the Mandakini River, believed to have purifying properties. Pilgrims take holy dips here as part of their spiritual journey.' },
      { name: 'Bhim Shila', represents: 'Connection to the Pandavas from the Mahabharata', altitude: '3,583m', description: 'A large rock formation associated with the legendary Pandavas from the Mahabharata, located near the temple and marking an important historical and mythological site.' },
      { name: 'Statue of Adi Shankaracharya', represents: 'The great saint who revived the Kedarnath Temple', altitude: '3,583m', description: 'A monument honoring Adi Shankaracharya, one of Hinduism\'s greatest philosophers who revived the Kedarnath Temple centuries ago, bringing it to its current spiritual prominence.' },
      { name: 'Kedar Dome', represents: 'The majestic snow-clad peak representing divine heights', altitude: '3,800m', description: 'A majestic snow-clad peak visible from the temple premises, offering breathtaking views and symbolizing the divine heights of spirituality and nature.' }
    ],
    inclusions: [
      'Stay: Accommodation is included for 3 Nights. Stays will be provided on sharing basis.',
      'Transport: Transportation from Rishikesh to Rishikesh is covered. 4 Members: Hatchback - Alto, Swift, or Equivalent Vehicle. 5-7 Members: Ertiga, Innova, or Equivalent Vehicle. 8-14 Members: Tempo Traveler.',
      'Meals: All meals (Dinner & Breakfast) starting from dinner of Day 1 (Check-In) to breakfast on the last Day (Check-Out).',
      'Trek Staff: A qualified, professional team, including a mountaineering-certified trek leader, guide and support staff, will accompany you.',
      'Emergency Kit: First aid medical kits, oxygen cylinders, and stretchers are provided for safety.'
    ],
    exclusions: [
      'Any kind of Travel/ Health Insurance (Garhwal Eye strictly recommend each traveller to please carry your own travel/health insurance)',
      'Any kind of medical expenses.',
      'Any food or drinks outside the package (e.g. beverages, mineral water, snacks and meals during transportation) are the customer\'s responsibility.',
      'Personal Expenses like any tips, laundry, mineral water, camera fee or any other personal natural expenses.',
      'If any natural disasters (e.g., landslides, roadblocks) occur, any extra costs incurred would need to be paid directly by the customer.',
      'Any other fee (Forest fee, EDC fee)/charges(Shuttle charges) is to be paid by the customer.'
    ],
    whatToPack: [
      'Warm woolens/thermals',
      'Windproof jacket',
      'Waterproof coat',
      'Trekking shoes',
      'Hat and gloves',
      'Backpack (25-30L)',
      'Sleeping bag',
      'Torch/Headlamp',
      'Water bottle',
      'Trekking poles',
      'Altitude sickness medicine',
      'Personal medications',
      'Energy snacks',
      'Sunscreen',
      'Multi-vitamin tablets',
      'ID proof',
      'Insurance papers',
      'Medical certificates',
      'Emergency contacts',
      'Small currency',
      'Prayer beads',
      'Sacred offerings',
      'Meditation items',
      'Camera',
      'Binoculars',
      'Notebook/Journal',
      'Hand sanitizer',
      'Moisturizer'
    ],
    bestTimeDetails: 'May & June – Peak Season: These months mark the beginning of the pilgrimage season. The weather remains pleasant with moderate temperatures and minimal rainfall, making travel and darshan comfortable. However you can expect large crowds and longer waiting times due to peak rush. September & October – Peaceful & Scenic: If you prefer a quieter and more serene experience, September and October are ideal. Post-monsoon, the skies are clearer, the surroundings appear freshly washed. The only factor to consider is the drop in temperature, especially during early mornings and nights, so adequate warm clothing is needed. Off Season (Monsoon Period): The off-season typically falls between the last week of July and the first week of September. During this period, heavy rainfall can lead to landslides, road blockages, cloudbursts, and flash floods. Due to safety concerns and unpredictable weather conditions, travel during these months is generally not recommended.',
    termsConditions: 'Booking Policy: Advance booking with deposit is mandatory. Remaining payment due before yatra commencement. Cancellations 30 days prior receive 50% refund. Cancellations within 15 days are non-refundable. Weather and Safety: Company reserves right to alter itinerary due to weather. Pilgrims must follow all safety instructions. Travel insurance is mandatory and highly recommended. Participants with health issues must consult doctors before trekking. By booking the Kedarnath Yatra, you agree to all terms and conditions. The yatra is subject to weather conditions, permits, and other circumstances beyond company control.',
    gallery: [
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 1.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 2.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 3.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 4.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 5.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 6.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 7.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 8.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 9.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 10.webp',
      '/images/treks/kedarnath-trek/gallery/Kedarnath Gallery 11.webp'
    ],
    faq: [
      { question: 'How do I reach Kedarnath Temple?', answer: 'You travel by road up to Gaurikund (via Rishikesh, Haridwar, or Dehradun), and then trek 21 kilometers from Gaurikund to the temple. Helicopter services are also available from nearby helipads like Phata, Sirsi, or Guptkashi.' },
      { question: 'What is the trek distance to Kedarnath?', answer: 'It\'s roughly 21 kilometers from Gaurikund to the temple, which takes approximately 5-6 hours depending on your pace and acclimatization.' },
      { question: 'What is the opening date of Kedarnath in 2026?', answer: 'The exact date is announced on Mahashivratri, but it\'s usually late April or early May. The temple typically opens on April 22nd each year.' },
      { question: 'What\'s the average temperature near Kedarnath Temple?', answer: 'During the pilgrimage season, daytime temperatures hover between 5°C to 17°C, and nights can be near freezing. It\'s essential to carry warm clothing.' },
      { question: 'What is the weather like at Kedarnath?', answer: 'The weather can be cold even in summer, with potential rain. Monsoon months bring heavy rain, and winters see heavy snow and sub-zero temperatures, making the temple inaccessible.' },
      { question: 'How do I register for the Kedarnath Yatra in 2026?', answer: 'Registration is done online through the official Uttarakhand tourism website. You fill out the required details and receive a Yatra registration slip, which is mandatory for the pilgrimage.' },
      { question: 'How can I book a helicopter to Kedarnath in 2026?', answer: 'Helicopter bookings are typically available online through authorized operators listed on the Uttarakhand tourism website. Charges apply separately.' },
      { question: 'What is the nearest railway station to Kedarnath?', answer: 'Rishikesh and Haridwar are the nearest major railway stations. From there, you travel by road to Gaurikund, the base camp for the trek.' }
    ]
  },
  {
    id: 'madhyamaheshwar',
    name: 'Madhyamaheshwar Trek',
    price: 9999,
    category: 'yatra',
    description: 'A Sacred Journey to the Navel of Lord Shiva in the Heart of the Himalayas',
    duration: '4D/3N',
    difficulty: 'Moderate',
    bestTime: 'May - October',
    altitude: '2,713 m',
    overview: 'Madmaheshwar, one of the five temples in the Panch Kedar Yatra, holds immense spiritual significance as the shrine where the navel of Lord Shiva is worshipped. This sacred trek takes you through pristine mountain landscapes, dense forests, and charming villages to reach this ancient temple perched at 2,713 meters. The journey to Madmaheshwar is a perfect blend of adventure and spirituality. Trek through lush meadows and rhododendron forests while experiencing the authentic culture of Garhwal. The temple itself is surrounded by breathtaking mountain vistas and offers a peaceful sanctuary for spiritual seekers and trekkers alike.',
    highlights: [
      'Madhyamaheshwar Temple - The navel of Lord Shiva at 2,713m',
      'Sacred Panch Kedar pilgrimage destination',
      'Less crowded than other popular trails',
      'Stunning panoramic views of snow-capped peaks',
      'Lush meadows and rhododendron forests',
      'Authentic Garhwal culture and villages',
      'Intimate connection with nature and spirituality',
      'Perfect blend of adventure and spiritual fulfillment'
    ],
    itinerary: [
      { day: 1, title: 'Rishikesh to Ransi to Upper Bantoli', description: 'Drive to Ransi via Devprayag, Dhari Devi and Rudraprayag. Arrive at Ransi in afternoon and start your trek from Ransi to Bantoli, covering a distance of approximately 6 km. Reach Upper Bantoli in the evening and check-in at your stay. Dinner and stay at Upper Bantoli.', altitude: '2,400m', notes: 'Drive Distance: 230 km, 7-8 hours. Trek Distance: 6 km, 2-3 hours. Pick up: Tapovan, Rishikesh' },
      { day: 2, title: 'Upper Bantoli to Madhyamaheshwar', description: 'Today\'s trek from Bantoli to Madhyamaheshwar is a challenging one, covering approximately 10 km with a steep ascent. After breakfast, begin your hike through dense forests and alpine meadows. Reach Madhyamaheshwar in the evening and check-in at your stay. Witness the divine evening aarti at the temple premises. Dinner and stay at Madhyamaheshwar.', altitude: '2,713m', notes: 'Trek Distance: 11 km. Trek Time: 6-7 hours' },
      { day: 3, title: 'Madhyamaheshwar to Ransi', description: 'Wake up early and trek towards the beautiful meadows of Bhuda Madhyamaheshwar. Trek back to your stay and have breakfast. Trek back towards Ransi village and check-in at your stay in evening. Dinner and stay at Ransi.', altitude: '1,800m', notes: 'Trek Distance: 20 km. Trek Time: 8-9 hours' },
      { day: 4, title: 'Ransi to Rishikesh', description: 'Start your day with early breakfast at Ransi. Board your vehicle and then drive towards Rishikesh. Drop at Tapovan, Rishikesh by evening.', altitude: '340m', notes: 'Drive Distance: 230 km, 6-7 hours. Drop: Tapovan, Rishikesh' }
    ],
    sacredTemples: [
      {
        name: 'Madhyamaheshwar Temple',
        represents: 'The navel (belly) of Lord Shiva',
        altitude: '2,713 m',
        description: 'One of the five temples in the Panch Kedar Yatra, Madhyamaheshwar holds immense spiritual significance as the shrine where the navel of Lord Shiva is worshipped. Located in the Mansoona village valley, this temple is famous for its serene environment and ancient stone architecture, integrating beautifully with the surrounding landscape.'
      }
    ],
    inclusions: [
      'Stay: Accommodation for 3 Nights. Stays provided on sharing basis.',
      'Transport: Transportation from Rishikesh to Rishikesh. 4 Members: Hatchback (Alto, Swift, or Equivalent). 5-7 Members: Ertiga, Innova, or Equivalent. 8-14 Members: Tempo Traveler',
      'Meals: All meals (Dinner & Breakfast) starting from dinner of Day 1 (Check-In) to breakfast on the last Day (Check-Out).',
      'Trek Staff: A qualified, professional team, including a mountaineering-certified trek leader, guide and support staff',
      'Emergency Kit: First aid medical kits, oxygen cylinders, and stretchers for safety'
    ],
    exclusions: [
      'Travel/Health Insurance (Garhwal Hikes strongly recommends each traveller to carry your own travel/health insurance)',
      'Medical expenses',
      'Food or drinks outside the package (beverages, mineral water, snacks and meals during transportation)',
      'Personal Expenses (tips, laundry, mineral water, camera fee, any other personal expenses)',
      'Extra costs from natural disasters (landslides, roadblocks) - paid by customer',
      'Forest fee, EDC fee, Shuttle charges - to be paid by customer'
    ],
    whatToPack: [
      'Lightweight layers',
      'Fleece jacket',
      'Windproof jacket',
      'Trekking shoes (waterproof)',
      'Rain gear',
      'Backpack (30L+)',
      'Sleeping bag (rated for cold)',
      'Torch/Headlamp',
      'First aid kit',
      'Water bottle (2L capacity)',
      'Hat and gloves',
      'Sunscreen (SPF 50+)',
      'Sunglasses',
      'Camera for photography',
      'Trekking poles',
      'Identity proof',
      'Insurance documents',
      'Emergency contact info',
      'Medical certificates',
      'Photocopy of documents',
      'Altitude sickness medication',
      'Energy snacks and bars',
      'Electrolyte tablets',
      'Pain relievers',
      'Blister treatment',
      'Toiletries and lip balm',
      'Wet wipes and tissues',
      'Notebook and pen',
      'Personal medications',
      'Additional snacks and protein bars'
    ],
    bestTimeDetails: 'Ideal Season: May to October. May-June: Spring season with blooming flowers and clear skies. Perfect for photography and trekking. July-August: Monsoon season - trek is viable but requires caution due to possible rainfall and slippery trails. September-October: Post-monsoon season with crystal-clear views and pleasant weather. The best time for trekking. November-April: Winter season with heavy snow and extreme cold - difficult to access.',
    termsConditions: 'Booking and Payment: All bookings must include complete and accurate information. A deposit or advance payment is required at the time of booking. Remaining payments must be made before the service begins. Payments must be made through the methods specified by the Company. Transport, Shuttle, and Cab Services: The Company does not own or operate vehicles directly; it only arranges these services. If a vehicle needs to be replaced, or additional services are required, all costs will be borne by the customer. Any additional charges such as shuttle/cab fees, parking, tolls, permits, or extra/night charges must be paid by the customer. Delays, Route Changes, and Road Issues: In case of roadblocks, poor weather, traffic jams, or other obstacles causing delays or route changes, the Company will not be responsible. Customers must bear any additional travel costs incurred due to such changes. National/Emergency Events (Force Majeure): Events beyond control may affect travel, cause delays, or cancellations. The Company will not be liable for costs arising due to such events. Loss, Damage, or Accidents: The Company is not responsible for accidents, theft, lost baggage, or personal injuries. Any claims must be directed to the service provider. Safety and Responsibilities: Customers are responsible for their own safety and security of belongings. Drivers must comply with the law. Cancellation and Refunds: Advance payments may be non-refundable in case of cancellations. Partial refunds may be considered at the Company\'s discretion. Dispute Resolution: All disputes shall be governed by Indian law and resolved under the jurisdiction of Indian courts. Amendments: The Company reserves the right to modify or update these Terms & Conditions at any time.',
    image: '/images/treks/madhyamaheshwar/trek.webp',
    gallery: [
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 1.webp',
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 2.webp',
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 3.webp',
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 4.webp',
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 5.webp',
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 6.webp',
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 7.webp',
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 8.webp',
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 9.webp',
      '/images/treks/madhyamaheshwar/gallery/Madhyamaheshwar Gallery 10.webp'
    ],
    faq: [
      { question: 'Why is Madhyamaheshwar special?', answer: 'Madhyamaheshwar is part of the sacred Panch Kedar pilgrimage, making it one of the most revered trekking destinations in the Himalayas. The trek is less crowded than other popular trails, offering a more intimate connection with nature and spirituality. The temple area offers stunning panoramic views of distant snow-capped peaks and the surrounding valleys.' },
      { question: 'Is this trek suitable for beginners?', answer: 'Yes, Madhyamaheshwar is a Moderate difficulty trek, making it suitable for those seeking a moderate trek that combines spiritual fulfillment with natural beauty, without requiring extreme technical expertise.' },
      { question: 'What is the best time to visit?', answer: 'The ideal season is May to October. September-October is the best time for trekking with post-monsoon crystal-clear views and pleasant weather.' },
      { question: 'What is the maximum altitude?', answer: 'The maximum altitude is 2,713 meters above sea level at Madhyamaheshwar Temple.' },
      { question: 'How long is the trek?', answer: 'The trek is 4 Days / 3 Nights, with a total trek distance of approximately 37 km spread across the days.' },
      { question: 'What meals are included?', answer: 'All meals (Dinner & Breakfast) are included starting from dinner of Day 1 (Check-In) to breakfast on the last Day (Check-Out).' }
    ]
  },
  {
    id: 'rudranath',
    name: 'Rudranath Trek',
    price: 10499,
    category: 'yatra',
    description: 'Trek to the Face of Lord Shiva in the Pristine Beauty of Garhwal Forests',
    duration: '5D/4N',
    difficulty: 'Moderate',
    bestTime: 'May - October',
    altitude: '2,286 m',
    overview: 'Rudranath is one of the most pristine and least-trodden sacred pilgrimage sites in the Indian Himalayas. Positioned at an altitude of 2,286 meters, this ancient temple dedicated to Lord Shiva (representing his face) is nestled within thick oak and rhododendron forests of the Garhwal region in Uttarakhand. The trek to Rudranath is a perfect blend of adventure and spirituality. It takes you through lush meadows like Lyuti Bugyal and Panaar Bugyal, across pristine mountain terrain, and through centuries-old pilgrim routes. Unlike the more crowded Himalayan destinations, Rudranath remains relatively unexplored, making it an ideal destination for those seeking authentic spiritual experiences away from commercial tourism. The trek passes through charming villages and offers spectacular views of the surrounding peaks. The temple itself, with its ancient architecture and serene surroundings, provides a peaceful sanctuary for spiritual seekers and adventure enthusiasts alike.',
    highlights: [
      'Rudranath Temple - The face of Lord Shiva at 2,286m',
      'Sacred Panch Kedar pilgrimage destination',
      'Least-trodden and pristine pilgrimage site',
      'Lyuti Bugyal and Panaar Bugyal meadows',
      'Centuries-old pilgrim routes',
      'Oak and rhododendron forest walks',
      'Authentic spiritual experience away from crowds',
      'Ancient temple architecture and serene surroundings'
    ],
    itinerary: [
      { day: 1, title: 'Rishikesh to Sagar', description: 'Drive to Sagar via Devprayag, Dhari Devi and Rudraprayag. Witness the beauty of the Garhwal region as you journey towards the foothills of the Himalayas. Arrive at Sagar in the evening and check-in at your designated hotel. Dinner and stay at Sitabpur Hotel.', altitude: '1,800m', notes: 'Drive Distance: 220 km. Drive Time: 6-7 hours. Pick up: Tapovan, Rishikesh' },
      { day: 2, title: 'Sagar to Lyuti Bugyal', description: 'Start your trek from Sagar after breakfast and commence the uphill trek to Lyuti Bugyal, passing through Pung Bugyal & Mauli Karak. These meadows offer stunning views and are home to alpine flora. Reach Lyuti Bugyal in the afternoon and check-in at your assigned camps. Dinner and stay at Lyuti Bugyal.', altitude: '2,500m', notes: 'Trek Distance: 10 km. Trek Time: 5-6 hours. Trek through: Pung Bugyal & Mauli Karak' },
      { day: 3, title: 'Lyuti Bugyal to Rudranath to Lyuti Bugyal', description: 'Wake up early and trek towards the beautiful meadows of Panaar Bugyal. Hike on gradient paths with level walks and downhill descents after Pitradhar. Reach the sacred Rudranath Temple and spend time for darshan (worship) at this ancient shrine dedicated to Lord Shiva\'s face. Experience the spiritual energy of this sacred pilgrimage site. After darshan, return back to Lyuti Bugyal for night halt. Dinner and stay at Lyuti Bugyal.', altitude: '2,286m', notes: 'Trek Distance: 18 km. Trek Time: 8-9 hours. Via: Panaar Bugyal & Pitradhar' },
      { day: 4, title: 'Lyuti Bugyal to Sagar', description: 'After breakfast, start your trek down to Sagar. The descent is easier than the uphill trek but requires careful foot placement on rocky terrain. Enjoy the fresh mountain air and forest surroundings as you make your way down. Reach Sagar by afternoon, check-in at your hotel, and rest after the trek. Dinner and stay at Sagar.', altitude: '1,800m', notes: 'Trek Distance: 10 km. Trek Time: 5-6 hours. Return to Base' },
      { day: 5, title: 'Sagar to Rishikesh', description: 'Start your day with early breakfast at Sagar. Board your vehicle and drive towards Rishikesh via the scenic Garhwal region. Take in the beauty of the Himalayan foothills one last time as you journey back. Drop at Tapovan, Rishikesh by evening, concluding your sacred pilgrimage with unforgettable memories of Rudranath and the spiritual essence of the Himalayas.', altitude: '340m', notes: 'Drive Distance: 220 km. Drive Time: 6-7 hours. Drop at: Tapovan, Rishikesh' }
    ],
    sacredTemples: [
      {
        name: 'Rudranath Temple',
        represents: 'The face of Lord Shiva',
        altitude: '2,286 m',
        description: 'According to legends, after the Mahabharata war, the Pandavas sought Lord Shiva\'s blessings to atone for their sins. Shiva avoided them by disguising himself as a bull and disappearing into the Himalayas. Different parts of his body later appeared in five locations, now revered as the Panch Kedar temples. At Rudranath, his face is worshipped. The sacred temple sits at the convergence of spirituality and pristine wilderness, offering trekkers an experience that goes beyond mere physical adventure.'
      }
    ],
    inclusions: [
      'Stay: Accommodation for 3 Nights. Stays provided on sharing basis.',
      'Transport: Transportation from Rishikesh to Rishikesh. 4 Members: Hatchback (Alto, Swift, or Equivalent). 5-7 Members: Ertiga, Innova, or Equivalent. 8-14 Members: Tempo Traveler',
      'Meals: All meals (Dinner & Breakfast) starting from dinner of Day 1 (Check-In) to breakfast on the last Day (Check-Out).',
      'Trek Staff: A qualified, professional team, including a mountaineering-certified trek leader, guide and support staff',
      'Emergency Kit: First aid medical kits, oxygen cylinders, and stretchers for safety'
    ],
    exclusions: [
      'Travel/Health Insurance (Garhwal Hikes strictly recommends each traveller to carry your own travel/health insurance)',
      'Medical expenses',
      'Food or drinks outside the package (beverages, mineral water, snacks and meals during transportation)',
      'Personal Expenses (tips, laundry, mineral water, camera fee, any other personal expenses)',
      'Extra costs from natural disasters (landslides, roadblocks) - paid by customer',
      'Forest fee, EDC fee, Shuttle charges - to be paid by customer'
    ],
    whatToPack: [
      'Lightweight layers',
      'Fleece jacket',
      'Windproof jacket',
      'Trekking shoes (waterproof)',
      'Rain gear',
      'Backpack (30L+)',
      'Sleeping bag (rated for cold)',
      'Torch/Headlamp',
      'First aid kit',
      'Water bottle (2L capacity)',
      'Hat and gloves',
      'Sunscreen (SPF 50+)',
      'Sunglasses',
      'Camera for photography',
      'Trekking poles',
      'Identity proof',
      'Insurance documents',
      'Emergency contact info',
      'Medical certificates',
      'Photocopy of documents',
      'Altitude sickness medication',
      'Energy snacks and bars',
      'Electrolyte tablets',
      'Pain relievers',
      'Blister treatment',
      'Toiletries and lip balm',
      'Wet wipes and tissues',
      'Notebook and pen',
      'Personal medications',
      'Additional snacks and protein bars'
    ],
    bestTimeDetails: 'Ideal Season: May to October. May-June: Spring season with blooming flowers and pleasant weather. Perfect for trekking and photography. July-August: Monsoon season - trek is viable but requires caution due to possible rainfall and slippery trails. September-October: Post-monsoon season with crystal-clear views and stable weather. The best time for trekking. November-April: Winter season with heavy snow and cold temperatures - difficult to access.',
    termsConditions: 'Booking and Payment: All bookings must include complete and accurate information. A deposit or advance payment is required at the time of booking. Remaining payments must be made before the service begins. Payments must be made through the methods specified by the Company. Transport, Shuttle, and Cab Services: The Company does not own or operate vehicles directly; it only arranges these services. If a vehicle needs to be replaced, or additional services are required, all costs will be borne by the customer. Any additional charges such as shuttle/cab fees, parking, tolls, permits, or extra/night charges must be paid by the customer. Delays, Route Changes, and Road Issues: In case of roadblocks, poor weather, traffic jams, or other obstacles causing delays or route changes, the Company will not be responsible. Customers must bear any additional travel costs incurred due to such changes. National/Emergency Events (Force Majeure): Events beyond control may affect travel, cause delays, or cancellations. The Company will not be liable for costs arising due to such events. Loss, Damage, or Accidents: The Company is not responsible for accidents, theft, lost baggage, or personal injuries. Any claims must be directed to the service provider. Safety and Responsibilities: Customers are responsible for their own safety and security of belongings. Drivers must comply with the law. Cancellation and Refunds: Advance payments may be non-refundable in case of cancellations. Partial refunds may be considered at the Company\'s discretion. Dispute Resolution: All disputes shall be governed by Indian law and resolved under the jurisdiction of Indian courts. Amendments: The Company reserves the right to modify or update these Terms & Conditions at any time.',
    image: '/images/treks/rudranath/trek.webp',
    gallery: [
      '/images/treks/rudranath/gallery/Rudranath Gallery 1.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 2.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 3.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 4.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 5.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 6.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 7.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 8.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 9.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 10.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 11.webp',
      '/images/treks/rudranath/gallery/Rudranath Gallery 12.webp'
    ],
    faq: [
      { question: 'Why is Rudranath special?', answer: 'Rudranath is one of the most pristine and least-trodden sacred pilgrimage sites in the Indian Himalayas. Unlike other Himalayan treks, it\'s not just about breathtaking peaks and verdant meadows—it\'s a journey of devotion. Trekking here is about walking through centuries of faith and experiencing a blend of mythological reverence and natural wonder.' },
      { question: 'What makes Rudranath different from other Panch Kedar temples?', answer: 'Rudranath represents the face of Lord Shiva in the Panch Kedar pilgrimage. Unlike more crowded destinations, Rudranath remains relatively unexplored, making it an ideal destination for those seeking authentic spiritual experiences away from commercial tourism.' },
      { question: 'What is the maximum altitude of the trek?', answer: 'The maximum altitude is 2,286 meters at Rudranath Temple.' },
      { question: 'How long is the trek?', answer: 'The trek is 5 Days / 4 Nights, with a total trekking distance of approximately 38 km spread across the journey.' },
      { question: 'What are the best meadows to visit on this trek?', answer: 'The trek passes through beautiful meadows including Lyuti Bugyal, Pung Bugyal, and Panaar Bugyal. These meadows offer stunning views and are home to alpine flora, making them perfect for nature photography.' },
      { question: 'Is this trek suitable for beginners?', answer: 'Yes, Rudranath is a Moderate difficulty trek suitable for trekkers with some experience. It is a great introductory pilgrimage trek that combines spiritual fulfillment with adventure without requiring extreme technical expertise.' }
    ]
  },
  {
    id: 'gaumukh-tapovan',
    name: 'Gaumukh-Tapovan Trek',
    price: 17999,
    category: 'yatra',
    description: 'Trek to the source of the Ganges River at Gaumukh and the yoga meditation site of Tapovan.',
    duration: '6N/7D',
    difficulty: 'Hard',
    bestTime: 'May - October',
    altitude: '4,463m',
    overview: 'If you are dreaming of a trek that goes beyond ordinary adventure, Gaumukh Tapovan with Garhwal Hikes is your perfect start. Beginning and ending at the sacred town of Gangotri in Uttarkashi, this 6 nights, 7 days journey covers about 46 km and takes you to an altitude of nearly 14,150 ft.\n\nThe route winds through fragrant Deodar and Pine forests of Chirbasa, the open valleys of Bhojbasa, and finally to the dramatic Gaumukh Glacier, the revered source of the Ganga. From here, a thrilling climb leads you to the high-altitude meadows of Tapovan, where sweeping views of Mt Shivling, the Bhagirathi peaks, Meru and Kedar Dome surround your campsite.\n\nLed by our expert local team, Gaumukh Tapovan is not just about conquering rugged Himalayan trails; it is a deeply spiritual experience that blends physical challenge with silence, serenity, and the timeless energy of the Garhwal Himalaya.',
    highlights: [
      'Chirbasa - Forest camp surrounded by Chir Pine trees',
      'Bhojbasa - Named after ancient Bhoj Patra trees used for sacred texts',
      'Bhagirathi River crossing via trolley',
      'Tapovan high-altitude meadows at 14,150 ft',
      'Spectacular views of Mt. Shivling, Mt. Meru, and Kedar Dome',
      'Gaumukh Glacier - the source of the sacred Ganges River',
      'Spiritual experience blending adventure with serenity',
      'Pristine alpine meadows and glacial landscapes',
      'Expert local guides sharing sacred mountain knowledge'
    ],
    itinerary: [
      { 
        day: 1, 
        title: 'Dehradun to Gangotri', 
        description: 'We will begin our journey at 6 a.m. in the morning. Today will be longer, as you will be traveling 245 kilometers to Gangotri. It will be an unforgettable 9-10 hours journey through the beautiful mountains. The famous hill station of Mussoorie, which is just 35 kilometers from Dehradun, will be the first major attraction. From the hill station, you can see the Shivalik Ranges. You will arrive in Uttarkashi, which is situated on the Bhagirathi River\'s banks. All of the temples and holy people will convince you that you are really in the Land of the Gods. The Bhagirath River leads to the picturesque Harsil Town. We will reach Gangotri by evening and check in to our hotels.',
        altitude: '10,300 ft',
        distance: '247 km (drive)',
        time: '9-10 hours'
      },
      { 
        day: 2, 
        title: 'Gangotri to Chirbasa', 
        description: 'Today, we will start our journey early in the morning after a warm breakfast. After a few kilometers, we will reach the forest checkpoint and Ram Mandir. Here, you can rest for a few minutes while your trek leader gets the final trek permits. Take a group photo before continuing. From the checkpoint, we will walk another 9 kilometers through a forest of tall conifer trees, where you might see different plants and animals. Before arriving at Chirbasa, we will find a rock with water sprinkling from it. The water here is full of minerals and very pure, so fill your water bottle. We will spend the night at Chirbasa, a small place surrounded by Chir trees, which is why it\'s called Chirbasa.',
        altitude: '11,700 ft',
        distance: '9 km',
        time: '4-5 hours',
        altitudeGain: '1,450 ft'
      },
      { 
        day: 3, 
        title: 'Chirbasa to Bhojbasa', 
        description: 'Today, we will head to Bhojbasa Campsite. Bhojbasa is named after the Bhoj Patra tree, a small tree found nearby. In the past, there were many more Bhoj Patra trees, but the forest has become smaller. In ancient times, people used Bhoj Patra leaves to write important documents and religious texts. After crossing Chirbasa, the valley opens up, and you\'ll see the Bhagirathi peaks. On the trail, you will walk with pilgrims, other trekkers, porters, and mules. We will hike further, crossing wooden bridges and a landslide area, where careful steps are needed. By evening, we will reach Bhojbasa.',
        altitude: '12,450 ft',
        distance: '6 km',
        time: '4-5 hours'
      },
      { 
        day: 4, 
        title: 'Bhojbasa to Tapovan', 
        description: 'This is the toughest stretch of the trek, pushing your limits both physically and mentally. Fuel up with a hearty breakfast and pack plenty of snacks and water. Get in the queue to cross the Bhagirathi River via a trolley. Tapovan is situated at 4,500m (14,750 ft) and it takes 7-8 hours to reach there. The trail becomes steeper and rockier, requiring strong legs and good balance. Consider using a trekking pole for additional support on uneven terrain. Once you reach Tapovan, the rocky path opens up to reveal meadows and the Mt. Shivling. Enjoy the breathtaking views of Mt. Shivling, Mt. Meru, and the Bhagirathi peaks. After a challenging day, relax in your tent with the mountain goats as your companions.',
        altitude: '14,150 ft',
        distance: '8 km',
        time: '7-8 hours'
      },
      { 
        day: 5, 
        title: 'Tapovan Rest Day & Exploration', 
        description: 'After a challenging previous day, today is dedicated to rest, recovery, and exploration of the high-altitude meadows of Tapovan. Enjoy the breathtaking 360-degree views of Mt. Shivling, Mt. Meru, Kedar Dome, and the surrounding Bhagirathi peaks. This is an acclimatization day where you can explore the area, meditate, and soak in the spiritual energy of this sacred place. The meadows offer a sense of tranquility and connection with nature. Take it easy to help your body adjust to the high altitude.',
        altitude: '14,150 ft',
        distance: 'Local exploration',
        time: 'Rest & exploration'
      },
      { 
        day: 6, 
        title: 'Tapovan to Bhojbasa & Bhojbasa to Gangotri', 
        description: 'We will descend from Tapovan back to Bhojbasa, retracing our steps through the steep rocky trails. The descent is easier but requires careful footing. From Bhojbasa, we continue descending to Gangotri through the picturesque landscapes and conifer forests. The trek covers approximately 14 km total and takes 6-7 hours. Keep your camera ready, as you might encounter unique views and experiences on the way back. As always, ensure you have enough water, snacks, and enthusiasm for this part of the trek.',
        altitude: '10,300 ft',
        distance: '14 km',
        time: '6-7 hours'
      },
      { 
        day: 7, 
        title: 'Gangotri to Dehradun', 
        description: 'The journey from Gangotri to Dehradun marks the conclusion of our trekking expedition. Descending from the heights of Gangotri, we\'ll drive back to Dehradun. The drive will cover approximately 245 km and take 9-10 hours. As we bid farewell to the majestic landscapes, ensure you have your memories captured and cherish the experiences gained throughout the trek. Travel safely, and feel free to soak in the last glimpses of the breathtaking scenery on this homeward stretch.',
        altitude: '2,160 ft',
        distance: '245 km (drive)',
        time: '9-10 hours'
      }
    ],
    inclusions: [
      'Accommodation in tents on triple-sharing basis for all days of the trek',
      'All meals from dinner at Gangotri on Day 1 to breakfast on Day 7',
      'All essential trek equipment including sleeping bags, kitchen and dining tents, utensils, mattresses, personal tents, toilet tents, and crampons (if needed)',
      'All required fuel charges, tolls, forest entry fees, and permits',
      'Professional trek staff including mountaineering-certified trek leader, guide, cook, and support staff',
      'First aid medical kits, oxygen cylinders, and stretchers for emergency safety',
      'Trek certificate and Garhwal Hikes badges to celebrate your adventure'
    ],
    exclusions: [
      'Trek insurance (mandatory - must be purchased separately)',
      'Meals during transfers',
      'Any expenses not mentioned in inclusions',
      'Backpack offloading - additional fee of INR 3,000',
      'Transportation from Dehradun to Gangotri and return - add-on at INR 2,500 per person',
      'Any personal expenses (souvenirs, extra snacks, tips, etc.)',
      'Early departure costs - if trekker leaves before scheduled date, they must cover own food, travel, and accommodation expenses'
    ],
    whatToPack: [
      'High-altitude trekking boots',
      'Insulated jacket and down jacket',
      'Thermal innerwear',
      'Wool socks and mittens',
      'Balaclava and sunglasses',
      'High SPF sunscreen',
      'Water bottle',
      'Energy supplements',
      'First aid kit',
      'Medications for altitude',
      'Sleeping bag with high temperature rating'
    ],
    termsConditions: 'Physical fitness test recommended. High altitude experience beneficial. Experience of trekking above 12,000 ft essential. Cancellation within 7 days: no refund. Medical evacuation not covered by standard insurance. Weather-dependent itinerary changes may apply.',
    bestTimeDetails: 'Ideal Season: May to October. The high-altitude Route is accessible during these months when weather is favorable for trekking. May-June: Spring season with fresh blooms and moderate weather. Mountain views become clearer as snow melts. June-July: Monsoon approaches; occasional rain but lush green landscapes. July-August: Monsoon season with scattered showers and mist, yet the region receives fewer trekkers. September-October: Autumn with stable, cold weather and crystal-clear skies - optimal trekking conditions with stunning panoramic views.',
    image: '/images/treks/gaumukh-tapovan/trek.webp',
    gallery: [
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 1.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 2.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 3.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 4.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 5.webp',
      '/images/treks/gaumukh-tapovan/gallery/Gaumukh-Tapovan  Gallery 6.webp'
    ],
    faq: [
      { 
        question: 'What is the Gaumukh Tapovan Trek Distance and Duration?', 
        answer: 'The Gaumukh Tapovan trek covers approximately 46 km over 6 nights and 7 days, starting and ending at Gangotri. Day trips include Gangotri to Bhojbasa (15 km), Bhojbasa to Gaumukh and Tapovan (10-12 km round trip), with altitude reaching 14,150 ft.' 
      },
      { 
        question: 'What is the Best Time for Gaumukh Tapovan Trek?', 
        answer: 'The best time for Gaumukh Tapovan trek is summer (May-June) for stable weather and clear views, or autumn (September-November) for fewer crowds and vibrant meadows. Gangotri temple opens April 19, 2026, marking peak season; avoid winter due to park closure and extreme cold (-2°C to -15°C).' 
      },
      { 
        question: 'What is the Difficulty Level of Gaumukh Tapovan Trek?', 
        answer: 'Gaumukh Tapovan trek difficulty is moderate, suitable for fit trekkers with prior hiking experience. Challenges include 6-8 hour daily walks, rockfall zones, steep ascents to Tapovan meadows (2,650 ft gain), and altitude up to 14,150 ft—prepare for endurance and acclimatization.' 
      },
      { 
        question: 'What is the Gaumukh Tapovan Trek Itinerary?', 
        answer: 'Garhwal Hikes Gaumukh Tapovan trek itinerary: Day 1: Dehradun to Gangotri (245 km drive). Day 2: Gangotri to Bhojbasa via Chirbasa (15 km trek). Day 3: Bhojbasa to Gaumukh/Tapovan and back. Day 4: Bhojbasa to Gangotri. Day 5-7: Return with buffer for weather.' 
      },
      { 
        question: 'What are the Gaumukh Tapovan Trek Inclusions and Cost?', 
        answer: 'Our Gaumukh Tapovan trek package includes 2 nights hotel in Gangotri, 2-3 nights camping (Bhojbasa/Tapovan), all meals, permits, trek staff, sleeping bags, tents, and emergency kit—starting at competitive rates (transport extra). Exclusions: personal insurance, offloading (₹2,500-3,000), GST.' 
      },
      { 
        question: 'What to Pack for Gaumukh Tapovan Trek?', 
        answer: 'Essential Gaumukh Tapovan trek packing list: 45-60L backpack, trekking shoes, thermals, fleece/down jacket, rain poncho, gloves, sunglasses, power bank (20,000mAh+), personal medical kit, Aadhaar/Passport for permits, and trek insurance. Vegetarian meals provided; carry energy bars and ORS.' 
      },
      { 
        question: 'How to Reach Gangotri for Gaumukh Tapovan Trek?', 
        answer: 'Fly/train to Dehradun, then drive/bus 245 km (9-10 hrs) via Uttarkashi-Harsil to Gangotri base camp. Garhwal Hikes offers transport add-ons from Dehradun (₹2,500/person); last ATMs in Uttarkashi.' 
      },
      { 
        question: 'Is Gaumukh Tapovan Trek Safe? What Permits are Needed?', 
        answer: 'Yes, with Garhwal Hikes certified guides, oxygen kits, and walkie-talkies—safe despite rockfalls and altitude. Permits required for Gangotri National Park (included); foreigners/SCL need extra docs. Network only till Gangotri (Jio/Airtel).' 
      },
      { 
        question: 'Can Beginners Do Gaumukh Tapovan Trek?', 
        answer: 'Gaumukh Tapovan trek for beginners? Moderate difficulty suits those with basic fitness (train 4-6 weeks prior); not ideal for absolute novices due to boulder sections and 13,000+ ft altitude.' 
      },
      { 
        question: 'What Wildlife and Views on Gaumukh Tapovan Trek?', 
        answer: 'Spot blue sheep (Bharal), Himalayan bears, or snow leopards in Gangotri National Park; views of Bhagirathi Massif, Shivling, Meru, Kedar Dome from Tapovan meadows. Sacred sites: Bhagirath Shila, Pandav Gufa.' 
      }
    ]
  },
  {
    id: 'dayara-bugyal',
    name: 'Dayara Bugyal Trek',
    price: 4499,
    category: 'winter',
    description: 'Alpine Meadow Trek to One of the Most Beautiful Meadows in the Himalayas with Rolling Grasslands',
    duration: '4D/3N',
    difficulty: 'Moderate',
    bestTime: 'September - May',
    altitude: '3,637 m',
    overview: 'Dayara Bugyal is one of the most beautiful alpine meadows in the Himalayas, offering an enchanting trekking experience. Located in the Garhwal region of Uttarakhand, this meadow is characterized by rolling grasslands, stunning vistas, and diverse alpine flora. Trek across the rolling grasslands and witness breathtaking panoramic views of the surrounding peaks. This trek offers an intimate experience of meadow trekking without extreme difficulty, making it ideal for nature lovers and photography enthusiasts. The name "Bugyal" literally means "meadow" in the local language, and Dayara lives up to its name with its expansive, pristine grasslands.',
    highlights: [
      'Dayara Bugyal meadow at 3,637m with 360-degree views',
      'Rolling alpine grasslands dotted with wildflowers',
      'Stunning photography destination',
      'Views of Srikanth, Jaonli, Bandarpunch, and Swargarohini peaks',
      'Post-monsoon clear skies',
      'Wildlife and alpine flora',
      'Pristine mountain wilderness',
      'Iconic trekking experience'
    ],
    itinerary: [
      { day: 1, title: 'Dehradun to Raithal', description: 'Pickup from Dehradun Railway Station (Prince Chowk) at 06:00 AM. Drive to Raithal, the starting point of the Dayara Bugyal trek. The route goes through Mussoorie, Suakholi, Uttarkashi, and Bhatwadi, offering pleasant views of mountains, forests, and the Bhagirathi River. After reaching Raithal, check in to your homestay. Spend the evening walking around the village. Watch the sunset over the nearby peaks, and later have dinner at the homestay.', altitude: '1,950m', notes: 'Drive Distance: 180 km. Drive Time: 6-7 hours. Pick up: Prince Chowk, Dehradun' },
      { day: 2, title: 'Trek from Raithal to Gui Campsite', description: 'After breakfast, begin your trek towards the Gui campsite. The trail is about 4–5 km and moves steadily uphill through quiet forests of oak, rhododendron, and maple. It takes around four to five hours. By afternoon, reach the Gui campsite, surrounded by open clearings and beautiful mountain views. You can spend the evening enjoying the peaceful atmosphere before having dinner at the campsite.', altitude: '2,965m', notes: 'Trek Distance: 4.5 km. Trek Time: 4-5 hours. Altitude: 9,750 ft' },
      { day: 3, title: 'Trek from Gui to Dayara Bugyal Summit & back to Gui', description: 'Start early from Gui after breakfast and follow a gentle trail that soon opens into the wide meadows of Dayara Bugyal. The trek takes around five to six hours. As you climb higher, the forest line fades and the landscape turns into rolling alpine grasslands with stunning views of peaks like Srikanth, Jaonli, Bandarpunch, and Swargarohini. At the top, spend some time exploring the meadow and enjoying your packed lunch in the open fields. After taking in the panoramic scenery, head back down the same trail and return to the Gui campsite by afternoon for your overnight stay.', altitude: '3,637m', notes: 'Trek Distance: 11 km. Trek Time: 6-7 hours. Altitude: 11,939 ft' },
      { day: 4, title: 'Trek from Gui to Raithal, Drive to Dehradun', description: 'After an early breakfast, begin your descent from Gui back to Raithal. The trail is around 4–5 km and usually takes three to four hours. After reaching Raithal, pack up and start the drive back to Dehradun. The journey takes about seven to eight hours. Reach Dehradun by evening marking the end of your Dayara Bugyal trek.', altitude: '340m', notes: 'Trek Distance: 4.5 km. Trek Time: 3-4 hours. Drive Distance: 180 km. Drive Time: 6-7 hours' }
    ],
    inclusions: [
      'Stay: Accommodation is included for 3 Nights. Stays will be provided on sharing basis.',
      'Transport: Transportation from Dehradun to Dehradun is covered.',
      'Meals: All meals (Breakfast, Lunch & Dinner) starting from dinner of Day 1 (Check-In) to breakfast on the last Day (Check-Out).',
      'Trek Staff: A qualified, professional team, including a mountaineering-certified trek leader, guide and support staff, will accompany you.',
      'Forest Entry and Permits: All required fuel charges, tolls, forest entry fees, and permits are covered.',
      'Emergency Kit: First aid medical kits are provided for safety.'
    ],
    exclusions: [
      'Any kind of Travel/Health Insurance (Garhwal Hikes strictly recommend each traveller to please carry your own travel/health insurance)',
      'Any kind of medical expenses.',
      'Any food or drinks outside the package (e.g. beverages, mineral water, snacks and meals during transportation) are the customer\'s responsibility.',
      'Personal Expenses like any tips, laundry, mineral water, camera fee or any other personal natural expenses.',
      'If any natural disasters (e.g., landslides, roadblocks) occur, any extra costs incurred would need to be paid directly by the customer.',
      'Any charges related to emergency evacuation are not included.',
      'Charges for mules or porters to carry personal luggage are NOT included in fees'
    ],
    whatToPack: [
      'Thermal wear',
      'Windproof jacket',
      'Trekking shoes (waterproof)',
      'Rain gear',
      'Fleece jacket or sweater',
      'Backpack (30-40L)',
      'Sleeping bag (rated for cold)',
      'Torch/Headlamp',
      'First aid kit',
      'Water bottle (2L capacity)',
      'Hat and warm gloves',
      'Sunscreen (SPF 50+)',
      'Sunglasses',
      'Camera for photography',
      'Trekking poles',
      'Identity proof',
      'Trek permits (if required)',
      'Insurance documents',
      'Emergency contact info',
      'Medical certificates',
      'Altitude sickness medication',
      'Energy snacks and bars',
      'Electrolyte tablets',
      'Pain relievers',
      'Blister treatment',
      'Toiletries and lip balm',
      'Wet wipes and tissues',
      'Notebook and pen',
      'Personal medications',
      'Snacks and protein bars'
    ],
    bestTimeDetails: 'Ideal Season: September to May. September-October: Post-monsoon season with clear skies and blooming wildflowers. Perfect for photography and trekking. November-February: Winter season with possible snow. The landscape transforms into a pristine white wonderland. March-May: Spring season with blooming alpine flowers and pleasant weather. Rhododendrons paint the landscape in vibrant colors. June-August: Monsoon season - not recommended due to heavy rainfall and visibility issues.',
    termsConditions: 'Management accepts no responsibility for injuries or the loss/theft of any personal property during the tour. In case of any breakdown or in delay due to the breakdown of the transport in the way, you would have to wait until the transport gets repaired or till the backup vehicle is provided. Garhwal Hikes is not responsible for any delays or alterations in the program or indirectly incurred expenses in cases such as natural hazards, accidents, weather conditions, landslides, political closure or any untoward incident. Garhwal Hikes is not responsible for any delay in reaching the destination due to traffic. Trip organizer/coordinator has complete right to change the itinerary as per on the spot condition. The AC will not work in Hill stations. Please cooperate with us in keeping the environment clean and safe. Registrations once done cannot be cancelled or refunded. Enjoy the trip, respect others and have a memorable experience.',
    image: '/images/treks/dayara-bugyal/trek.webp',
    gallery: [],
    faq: [
      { question: 'What makes Dayara Bugyal special?', answer: 'Dayara Bugyal is renowned for its breathtaking alpine meadows and stunning mountain scenery. The trek takes you through pristine grasslands dotted with wildflowers during the season, offering endless opportunities for photography and nature appreciation. The meadow provides 360-degree views of the surrounding peaks and valleys, one of the most photographed locations in the Garhwal region.' },
      { question: 'Is this trek suitable for beginners?', answer: 'Yes, Dayara Bugyal is a Moderate difficulty trek making it suitable for trekkers with basic experience. The trek is not too technical and the gradual ascent makes it accessible while still offering breathtaking meadow trekking.' },
      { question: 'What is the best time to trek Dayara Bugyal?', answer: 'The best time is September to May. September-October offers post-monsoon clear skies and blooming wildflowers. November-February brings snow for a white wonderland experience. March-May features blooming alpine flowers and pleasant weather.' },
      { question: 'What peaks can I see from Dayara Bugyal?', answer: 'From Dayara Bugyal, you can see peaks like Srikanth, Jaonli, Bandarpunch, and Swargarohini. On clear days, the panoramic views are truly unforgettable with nearby summit views.' },
      { question: 'How long is the trek?', answer: 'The trek is 4 Days / 3 Nights with a total trekking distance of approximately 20 km (4.5 km + 11 km + 4.5 km across the days).' },
      { question: 'Why is Dayara Bugyal a photographer\'s paradise?', answer: 'Dayara Bugyal offers endless opportunities for photography enthusiasts. The rolling alpine grasslands, wildflowers, 360-degree views of mountain peaks, and pristine meadows make it one of the most photographed locations in the Garhwal region.' }
    ]
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers Trek',
    price: 8999,
    category: 'monsoon',
    description: 'India\'s Premier Alpine Wildflower Meadow - Trek Through Nature\'s Floral Paradise',
    duration: '5 Days',
    difficulty: 'Moderate',
    bestTime: 'July - September',
    altitude: '11,500 ft',
    overview: 'The Valley of Flowers trek is one of the most well-known treks in India. Even if you\'re not into trekking, chances are you\'ve heard of it. Trekkers from around the world visit the valley– especially during monsoon, when wildflowers of every colour burst into bloom. Some of these flowers are so rare, you won\'t see them growing like this anywhere else in the world. But at Garhwal Hikes, we feel the valley deserves much more credit than just for its flowers. Even without the blooms, the valley is pure magic. It\'s nestled deep between tall mountains, with the Pushpavati River flowing right through it. The trail winds alongside this river, leading you to a stunning viewpoint of a glacier at the far end. You can dip your feet in icy streams and just soak in the silence. In monsoon, you see bursts of colours at every step. The flowers look perfectly manicured. Yet it\'s all natural. The trek\'s cultural essence is equally captivating. You climb to Hemkund Sahib, a sacred lake perched over 14,000 ft above sea-level. The climb is tough. But as you go higher, you get stunning views of Ghangaria and the Valley of Flowers far below. It gives you a sense of how far you\'ve come. The scenery shifts as you climb. Trees thin out, and alpine meadows begin to appear. If you are trekking in August, you stumble upon the sacred Brahma Kamal along the way. At Hemkund Sahib, you stand at the edge of a huge glacial lake with the dome-roofed Gurudwara sitting by the water. It\'s a moment of peace that stays with you.',
    highlights: [
      'Valley of Flowers with thousands of wildflower species in bloom',
      'Hemkund Sahib sacred glacial lake at 14,000+ ft',
      'Ghangaria village and local culture',
      'Pushpavati River flowing through the valley',
      'Alpine meadows and wildlife',
      'Photography paradise during monsoon',
      'Spiritual rejuvenation experience',
      'Dome-roofed Gurudwara at Hemkund Sahib'
    ],
    itinerary: [
      { day: 1, title: 'Rishikesh to Joshimath', description: 'Pick up from Rishikesh at 6:00 AM. Drive for 8-9 hours covering 260 km through scenic routes. Pass through Devprayag, Rudraprayag, and enjoy the Ganga valley views. Arrive in Joshimath and check-in to your guesthouse. Evening briefing about the trek with your guides. Overnight stay at Joshimath.', altitude: '1,890m', notes: 'Drive Distance: 260 km. Drive Time: 8-9 hours. Pick up: Tapovan, Rishikesh' },
      { day: 2, title: 'Joshimath to Govindghat to Ghangaria', description: 'Morning drive from Joshimath to Govindghat (30 km, 1-2 hours). Begin trekking from Govindghat following the Alaknanda River. Walk through lush forests and alpine trails. Trek distance is 9 km taking 5-6 hours. Pass through dense rhododendron and oak forests with views of surrounding peaks. Reach Ghangaria by evening. Check-in to guesthouse and rest. Overnight stay at Ghangaria.', altitude: '3,050m', notes: 'Drive Distance: 30 km. Drive Time: 1-2 hours. Trek Distance: 9 km. Trek Time: 5-6 hours' },
      { day: 3, title: 'Ghangaria to Valley of Flowers to Ghangaria', description: 'Early morning trek from Ghangaria to the Valley of Flowers. Walk through meadows gradually carpeted with increasing number of wildflowers. Trek distance is 9 km taking 5-6 hours. Explore the sprawling meadows filled with colorful flowers. Take in the scenic beauty of the valley with flowers against the backdrop of snow-capped peaks. Witness the Pushpavati River flowing through the valley. Evening is perfect for photography. Return to Ghangaria for overnight stay.', altitude: '3,660m', notes: 'Trek Distance: 9 km. Trek Time: 5-6 hours. Difficulty: Moderate with steep sections' },
      { day: 4, title: 'Ghangaria to Hemkund Sahib to Ghangaria', description: 'Full day dedicated to exploring Hemkund Sahib trek. Start early in the morning from Ghangaria. Trek distance is 14 km taking 7-8 hours. Climb through alpine meadows with decreasing vegetation as you gain altitude. Experience the sacred Brahma Kamal flowers if trekking in August. Reach Hemkund Sahib, the glacial lake at 4,600m (15,200 ft). Stand in awe at the dome-roofed Gurudwara by the water. Enjoy panoramic views of surrounding peaks including views down to Valley of Flowers. Return to Ghangaria for overnight stay.', altitude: '4,600m', notes: 'Trek Distance: 14 km. Trek Time: 7-8 hours. Altitude: 15,200 ft. Most challenging day' },
      { day: 5, title: 'Ghangaria to Govindghat to Joshimath to Rishikesh', description: 'Begin descent from Ghangaria to Govindghat (9 km, 5-6 hours trekking). Enjoy different perspective of landscape while descending. Arrive at Govindghat and drive back to Joshimath (30 km, 1-2 hours). From Joshimath, drive back to Rishikesh (260 km, 8-9 hours). Arrive at Rishikesh by evening. Drop-off at original pick-up point, marking the end of your Valley of Flowers adventure.', altitude: '340m', notes: 'Trek Distance: 9 km. Trek Time: 5-6 hours. Drive Distance: 290 km. Drive Time: 9-10 hours. Drop at: Tapovan, Rishikesh' }
    ],
    inclusions: [
      'Stay: Accommodation is included for 5 Nights. Stays will be provided on sharing basis.',
      'Transport: Transportation from Rishikesh to Rishikesh is covered. (4 Members: Hatchback - Alto, Swift, or Equivalent Vehicle; 5-7 Members: Ertiga, Innova, or Equivalent Vehicle; 8-14 Members: Tempo Traveler)',
      'Meals: All meals (Dinner, Lunch & Breakfast) starting from dinner of Day 1 (Check-In) to breakfast on the last Day (Check-Out).',
      'Trek Staff: A qualified, professional team, including a mountaineering-certified trek leader, guide and support staff, will accompany you.',
      'Emergency Kit: First aid medical kits, oxygen cylinders, and stretchers are provided for safety.'
    ],
    exclusions: [
      'Any kind of Travel/ Health Insurance (Garhwal Hikes strictly recommend each traveller to please carry your own travel/health insurance)',
      'Any kind of medical expenses.',
      'Any food or drinks outside the package (e.g. beverages, mineral water, snacks and meals during transportation) are the customer\'s responsibility.',
      'Personal Expenses like any tips, laundary, mineral water, camera fee or any other personal natural expenses.',
      'If any natural disasters (e.g., landslides, roadblocks) occur, any extra costs incurred would need to be paid directly by the customer.',
      'Any other fee (Forest fee, EDC fee)/charges(Shuttle charges) is to be paid by the customer.'
    ],
    whatToPack: [
      'Warm fleece jacket',
      'Waterproof rain jacket',
      'Trekking pants (2-3 pairs)',
      'Thermal innerwear',
      'Warm layers and sweater',
      'Backpack (40L+)',
      'Sturdy trekking boots (waterproof preferred)',
      'Water bottle (2-3L)',
      'Sleeping bag (if not provided)',
      'Torch/Headlamp with batteries',
      'Warm hat and gloves',
      'Sunglasses and sunscreen (SPF 50+)',
      'Lip balm with SPF',
      'Trekking poles',
      'Camera with extra batteries',
      'Valid ID proof and trek permits',
      'Altitude sickness medication',
      'Personal medications and first aid essentials',
      'Energy snacks and bars',
      'Blister treatment and pain relievers',
      'Toiletries and personal care items',
      'Wet tissues and hand sanitizer',
      'Plastic bags for waste management'
    ],
    bestTimeDetails: 'Ideal Season: July to September. July-August: Peak blooming season with maximum floral diversity. All wildflower species are in bloom. Very colorful and photogenic appearance. Perfect for photography enthusiasts. September: Autumn transition period with still-beautiful flowers and clearer mountain views. Less crowded than July-August. October onwards: Not recommended due to snow and poor accessibility. Valley remains snow-covered and inaccessible. November-June: Winter conditions make the valley inaccessible. Best experience: Late July to early September for peak blooms and safe trekking conditions.',
    termsConditions: 'Management is not responsible for injuries or loss/theft of personal property during the trek. Weather conditions may necessitate changes to the itinerary. Trek leaders have authority to modify routes for safety. Garhwal Hikes is not responsible for delays due to natural hazards, accidents, or weather conditions. Registrations cannot be cancelled or refunded once confirmed. Respect local culture and environment during the trek. Follow leave-no-trace principles and keep the valley clean. Trek leaders\' decisions regarding route and safety are final. Participants must be in good physical health for high-altitude trekking.',
    image: '/images/treks/valley-of-flowers/trek.webp',
    gallery: [],
    faq: [
      { question: 'Why is Valley of Flowers so famous?', answer: 'Valley of Flowers is renowned for its botanical diversity and breathtaking natural beauty. The valley transforms into a vibrant tapestry of colors during the monsoon season when thousands of wildflower species bloom simultaneously. The unique climatic conditions and pristine environment make it a haven for diverse flora and fauna. Some flowers are so rare, you won\'t see them growing like this anywhere else in the world.' },
      { question: 'What is special about Hemkund Sahib?', answer: 'Hemkund Sahib is a sacred lake perched at over 14,000 feet. It holds significant spiritual importance in Sikhism and Indian mythology. The climb is challenging, but worth it for the stunning glacial lake surrounded by snow-capped peaks and the dome-roofed Gurudwara sitting by the water. It\'s a moment of peace that stays with you.' },
      { question: 'When is the best time to visit Valley of Flowers?', answer: 'July to September is the ideal season. July-August offers peak blooming season with maximum floral diversity and excellent photography opportunities. All wildflower species are in bloom making it very colorful. September offers still-beautiful flowers with clearer mountain views and fewer crowds. The valley remains snow-covered and inaccessible from November to June.' },
      { question: 'What is the difficulty level of this trek?', answer: 'Valley of Flowers is a Moderate difficulty trek. While not technically difficult, the high altitude (up to 15,200 ft at Hemkund Sahib) and the 7-8 hour trek on Day 4 make it challenging. Good physical fitness and some trekking experience are recommended. Proper acclimatization is essential for handling the altitude.' },
      { question: 'Is this trek suitable for beginners?', answer: 'Yes, Valley of Flowers is suitable for trekkers with some experience but can be attempted by fit beginners. The moderate difficulty and well-maintained trails make it accessible. However, proper fitness training for 2-3 months before the trek is recommended, especially for the Hemkund Sahib portion which involves steep climbs at high altitude.' },
      { question: 'What makes this trek different from other monsoon treks?', answer: 'Valley of Flowers offers a unique blend of natural beauty, spiritual significance, and cultural experience. Unlike other treks, it combines world-class floral displays with a sacred pilgrim site (Hemkund Sahib). The cultural essence of the trek is equally captivating as the natural beauty. It\'s an experience that combines adventure, photography, meditation, and spiritual rejuvenation in one unforgettable journey.' }
    ]
  },
  {
    id: 'bedni-bugyal',
    name: 'Bedni Bugyal Trek',
    price: 9499,
    category: 'monsoon',
    description: 'Trek to Bedni Bugyal, high altitude meadows offering panoramic views of the Himalayas.',
    duration: '3 Days',
    difficulty: 'Easy',
    bestTime: 'May - October',
    altitude: '2,743m',
    overview: 'Bedni Bugyal is one of the most beautiful alpine meadows in Uttarakhand. The trek through verdant meadows offers stunning 360-degree views of snow-capped peaks and is perfect for nature lovers.',
    highlights: [
      'Alpine meadows',
      'Panoramic mountain views',
      'Rhododendron forests',
      'Bird watching',
      'Photography opportunities'
    ],
    itinerary: [
      { day: 1, title: 'Drive to Auli', description: 'Drive to Auli, the trekking base.', altitude: '3,050m' },
      { day: 2, title: 'Trek to Bedni Bugyal', description: 'Trek through meadows to Bedni Bugyal.', altitude: '2,743m' },
      { day: 3, title: 'Return Trek', description: 'Trek back and drive to base city.', altitude: '340m' }
    ],
    inclusions: [
      'Accommodation in guesthouses',
      'All meals',
      'Guide services',
      'Transport'
    ],
    exclusions: [
      'Personal equipment',
      'Flights'
    ],
    whatToPack: [
      'Comfortable trekking shoes',
      'Light jacket',
      'Hat and sunscreen',
      'Water bottle',
      'Camera',
      'Snacks'
    ],
    termsConditions: 'Easy trek suitable for families. Weather-dependent cancellation policy.',
    image: '/images/treks/bedni-bugyal/trek.webp',
    gallery: [],
    faq: [
      { question: 'Good for families?', answer: 'Yes, this is a family-friendly trek with easy difficulty.' }
    ]
  },
  {
    id: 'chopta-tungnath',
    name: 'Chopta-Tungnath Trek',
    price: 3999,
    category: 'winter',
    description: 'Trek combining the scenic Chopta meadows with the sacred Tungnath Temple, the highest Shiva shrine.',
    duration: '4 Days',
    difficulty: 'Moderate',
    bestTime: 'October - May',
    altitude: '3,680m',
    overview: 'This trek combines two iconic Himalayan locations - the beautiful Chopta meadows (Kashmir of Uttarakhand) and Tungnath, the highest Shiva temple. The route offers stunning mountain views, spiritual experience, and natural beauty.',
    highlights: [
      'Chopta meadows',
      'Tungnath Temple',
      'Chandrashila summit',
      'Panoramic views',
      'Alpine vegetation'
    ],
    itinerary: [
      { day: 1, title: 'Drive to Chopta', description: 'Arrive at Chopta meadows.', altitude: '2,680m' },
      { day: 2, title: 'Explore Chopta', description: 'Trek and explore the scenic Chopta area.', altitude: '2,680m' },
      { day: 3, title: 'Trek to Tungnath', description: 'Trek up to Tungnath Temple and Chandrashila.', altitude: '3,680m' },
      { day: 4, title: 'Return to Base', description: 'Trek back and drive to starting point.', altitude: '340m' }
    ],
    inclusions: [
      'Accommodation',
      'Meals',
      'Guide',
      'Transport'
    ],
    exclusions: [
      'Equipment',
      'Personal expenses'
    ],
    whatToPack: [
      'Trekking boots',
      'Warm clothes',
      'Rain jacket',
      'Hat and gloves',
      'Sunscreen',
      'Water bottle',
      'Camera'
    ],
    termsConditions: 'Moderate fitness required. Weather-dependent schedule.',
    image: '/images/treks/chopta-tungnath/trek.webp',
    gallery: [],
    faq: [
      { question: 'Good for winter?', answer: 'Yes, best visited in winter for snow cover.' }
    ]
  },
  {
    id: 'kedarkantha',
    name: 'Kedarkantha Trek',
    price: 5499,
    category: 'winter',
    description: 'India\'s Perfect Winter Snow Trek for Beginners and Adventure Seekers',
    duration: '5D/4N',
    difficulty: 'Easy-Moderate',
    bestTime: 'December - March',
    altitude: '3,800 m',
    overview: 'Kedarkantha Trek is a spectacular winter destination offering pristine snow-covered peaks, dense alpine forests, and the charm of traditional Himalayan villages. Known as a beginner-friendly winter trek, it provides an unforgettable introduction to high-altitude trekking. Standing at 3,800 meters, this trek combines adventure with accessibility, making it perfect for those seeking their first snow experience in the Himalayas. The trek winds through lush rhododendron and oak forests, charming hill villages, and open meadows offering panoramic views of surrounding peaks.',
    highlights: [
      'Kedarkantha peak at 3,800m with stunning snow views',
      'Beginner-friendly winter trek destination',
      'Pristine snow-covered landscapes',
      'Dense alpine forests and rhododendrons',
      'Traditional Himalayan villages',
      'Panoramic views of surrounding peaks',
      'Juda Ka Talab lake with mythological significance',
      'Perfect introduction to high-altitude trekking'
    ],
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri', description: 'Pickup from Dehradun Railway Station (Prince Chowk) at 06:00 AM. Drive to Sankri via Mussoorie, Mori, and Naitwar, enjoying scenic views of the Yamuna and Tons rivers and pine forests along the way. Upon arrival, check in to the homestay. Evening at leisure to explore Sankri village and witness a beautiful Himalayan sunset, followed by dinner at the homestay.', altitude: '2,620m', notes: 'Drive Distance: 188 km. Drive Time: 7-8 hours. Pick up: Prince Chowk, Dehradun' },
      { day: 2, title: 'Sankri to Juda Ka Talab', description: 'Have breakfast and check out from the homestay. Start your trek from Sankri Village to Juda Ka Talab. Along the way, cross several high-altitude suspension bridges and small villages. Reach Juda Ka Talab, a lake that holds a mythological significance to Lord Shiva. Check in to the camps a few 100 meters away from the lake for an overnight stay.', altitude: '2,770m', notes: 'Trek Distance: 3 km. Trek Time: 4-5 hours. Altitude: 9,100 ft' },
      { day: 3, title: 'Juda Ka Talab to Kedar Kantha Base Camp', description: 'After breakfast, check out from the campsite and start your trek to the Base Camp. Immerse yourself in the beauty of a snow-lined path and patches of green that surround your way. The imposing view of the snow-capped Himalayan peaks of Bandarpoonch, Swargarohini, Kala Nag and Ranglana will surely fascinate you and make your experience worthwhile. Upon reaching the campsite, mark the end of the day with a wonderful dinner and retire to the tents for the night.', altitude: '3,420m', notes: 'Trek Distance: 4 km. Trek Time: 5-6 hours. Altitude: 11,250 ft' },
      { day: 4, title: 'Base Camp to Kedarkantha Peak, Descend to Juda Ka Talab', description: 'Wake up early and start your trek at around 2:00 AM in the morning. You will get to feel the welcoming and filtered sun rays from the mountains of the Yamunotri and Gangotri ranges and also of the Kinner Kailash ranges. On reaching the summit witness the breathtaking view of the sun rising from the summit. Afterwards, it\'s time to descend back to the Kedarkantha Base Camp and then to Juda ka Talab for an overnight stay.', altitude: '3,800m', notes: 'Trek Distance: 12 km. Trek Time: 7-8 hours. Altitude: 12,500 ft. Early morning summit push at 2:00 AM' },
      { day: 5, title: 'Juda Ka Talab to Sankri, Drive to Dehradun', description: 'After breakfast, check out from the campsite and start descending back towards Sankri Village which is a 4 km trek taking 2-3 hours. After reaching Sankri, Start your journey to Dehradun. Hold on to as many beautiful memories as you can in your heart and bid farewell to the Mighty Himalayas with gratitude and fondness.', altitude: '340m', notes: 'Trek Distance: 3 km. Trek Time: 4-5 hours. Drive Distance: 188 km. Drive Time: 7-8 hours. Drop: Prince Chowk, Dehradun' }
    ],
    inclusions: [
      'Stay: Accommodation for 4 Nights. Stays provided on sharing basis.',
      'Transport: Transportation from Dehradun to Dehradun',
      'Meals: All meals (Breakfast, Lunch & Dinner) starting from dinner of Day 1 (Check-In) to breakfast on the last Day (Check-Out).',
      'Trek Staff: A qualified, professional team, including a mountaineering-certified trek leader, guide and support staff',
      'Forest Entry and Permits: All required fuel charges, tolls, forest entry fees, and permits are covered. Emergency Kit: First aid medical kits are provided for safety.'
    ],
    exclusions: [
      'Travel/Health Insurance (Garhwal Hikes strictly recommends each traveller to carry your own travel/health insurance)',
      'Medical expenses',
      'Food or drinks outside the package (beverages, mineral water, snacks and meals during transportation)',
      'Personal Expenses (tips, laundry, mineral water, camera fee, any other personal expenses)',
      'Extra costs from natural disasters (landslides, roadblocks) - paid by customer',
      'Charges for emergency evacuation are not included',
      'Charges for mules or porters to carry personal luggage are NOT included'
    ],
    whatToPack: [
      'Thermal innerwear (base layers)',
      'Fleece layering shirts',
      'Windproof jacket',
      'Snow pants',
      'Insulated boots (rated for snow)',
      'Backpack (40-50L)',
      'Sleeping bag (rated for -10°C)',
      'Snow gaiters',
      'Trekking poles',
      'Head torch/Headlamp',
      'Thermal cap and balaclava',
      'Insulated gloves',
      'Wool socks (multiple pairs)',
      'Sunscreen (SPF 50+)',
      'Sunglasses',
      'Identity proof',
      'Trek insurance documents',
      'Medical certificates',
      'Emergency contact details',
      'Travel permits',
      'Altitude sickness medicine',
      'High-calorie energy bars',
      'Electrolyte solutions',
      'Pain relief tablets',
      'Blister and wound care',
      'Thermos for hot drinks',
      'Water bottle (insulated)',
      'High-calorie meals',
      'Lip balm and moisturizer',
      'Camera for photography'
    ],
    bestTimeDetails: 'Winter Season: December to March. December-January: Fresh snow with long, clear days. Perfect visibility for photography and sightseeing. February-March: Stable snow conditions with moderate temperatures. The powder snow is excellent and weather generally cooperative. April onwards: Snow melts as temperatures rise, making the trek less appealing after March. June-October: Not suitable due to heavy rainfall and dense fog reducing visibility.',
    termsConditions: 'Management accepts no responsibility for injuries or the loss/theft of any personal property during the tour. In case of any breakdown or in delay due to the breakdown of the transport in the way, you would have to wait until the transport gets repaired or till the backup vehicle is provided. Garhwal Hikes is not responsible for any delays or alterations in the program or indirectly incurred expenses in cases such as natural hazards, accidents, weather conditions, landslides, political closure or any untoward incident. Garhwal Hikes is not responsible for any delay in reaching the destination due to traffic. Trip organizer/coordinator has complete right to change the itinerary as per on the spot condition. The AC will not work in Hill stations. Please cooperate with us in keeping the environment clean and safe. Registrations once done cannot be cancelled or refunded. Enjoy the trip, respect others and have a memorable experience.',
    image: '/images/treks/kedarkantha/trek.webp',
    gallery: [],
    faq: [
      { question: 'Why Kedarkantha for beginners?', answer: 'Kedarkantha is a beginner-friendly winter trek with Easy-Moderate difficulty. It offers the perfect introduction to high-altitude winter trekking without requiring extreme technical expertise or prior winter experience.' },
      { question: 'What is special about winter on Kedarkantha?', answer: 'Winter transforms Kedarkantha into a snowy wonderland. Unlike many treks that become inaccessible during winter, Kedarkantha offers one of the finest winter trekking experiences in India with pristine snow, clear mountain air, and thrilling high-altitude adventure.' },
      { question: 'What is the best time to trek Kedarkantha?', answer: 'The best time is December to March. December-January offers fresh snow with perfect visibility. February-March provides stable snow conditions with moderate temperatures and excellent powder snow.' },
      { question: 'What is the maximum altitude?', answer: 'The maximum altitude is 3,800 meters at Kedarkantha peak, making it accessible for beginners while still providing a true high-altitude experience.' },
      { question: 'How long is the trek?', answer: 'The trek is 5 Days / 4 Nights with a total trekking distance of approximately 22 km. The early morning summit push on Day 4 starts at 2:00 AM to witness the sunrise from the peak.' },
      { question: 'Is this suitable for families and groups?', answer: 'Yes, Kedarkantha is popular among families, groups of friends, and solo adventurers. The moderate difficulty level and beginner-friendly nature make it ideal for group treks and family adventures.' }
    ]
  },
  {
    id: 'roopkund',
    name: 'Roopkund Trek',
    price: 13499,
    category: 'winter',
    description: 'Mysterious High-Altitude Alpine Lake Trek with Ancient Skeletons and Panoramic Himalayan Views',
    duration: '7D/6N',
    difficulty: 'Hard',
    bestTime: 'May - October',
    altitude: '4,877 m',
    overview: 'Roopkund is one of the highest altitude treks of Uttarakhand and is also known as the mysterious lake. This lake is famous due to more than five hundred skeletons of humans found at the edge of the lake. Located in the Himalayas at an altitude of nearly 4,877 meters, Roopkund rests in the Chamoli district of Garhwal. This challenging trek combines adventure with mystery, offering breathtaking views of Mt. Trishul, Nanda Ghunti, and other Himalayan peaks. The trek crosses Asia\'s largest bugyal (alpine meadow) - Bedni Bugyal - before reaching the enigmatic sacred lake surrounded by a dramatic landscape of snow-capped peaks.',
    highlights: [
      'Mysterious Roopkund Lake at 4,877m with ancient skeletons',
      'Bedni Bugyal - one of Asia\'s largest alpine meadows (1,200m height)',
      'Mt. Trishul views from multiple vantage points',
      'Nanda Ghunti (also Nanda Gunti) peak views',
      'High-altitude camping at extreme elevations',
      'Snow treking experience with crampons',
      'Lord Karzon\'s devi route legacy',
      'Spiritual and mysterious historical significance'
    ],
    itinerary: [
      { day: 1, title: 'Rishikesh/Dehradun to Wan Village', description: 'Pick up from Rishikesh, Haridwar, or Dehradun at 6:00 AM. Drive for 7-8 hours covering 300 km through scenic routes passing through Devprayag, Rudraprayag, and Karnprayag. Enjoy the journey along the Ganga valley with views of the Himalayan foothills. Upon arrival at Wan village, check-in to your homestay. Relax and acclimatize to the altitude. Dinner and overnight stay at the homestay.', altitude: '1,700m', notes: 'Drive Distance: 300 km. Drive Time: 7-8 hours. Pick up: Rishikesh/Haridwar/Dehradun' },
      { day: 2, title: 'Wan Village to Gairoli Patal', description: 'Trek starts around 9:00 AM after breakfast. Begin your trekking journey covering 9 km of distance. The trail guides you through diverse flora and fauna alongside the Neelganga River (also called Neel River), offering stunning views throughout the day. Witness the graceful presence of Mt. Trishul in the distance. Reach the campsite around 3:00 PM. Enjoy hot refreshments and relax at the camp while admiring the magnificent views of Mt. Trishul with a hot cup of tea.', altitude: '2,500m', notes: 'Trek Distance: 9 km. Trek Time: 6-7 hours. Altitude: 8,200 ft' },
      { day: 3, title: 'Gairoli Patal to Patar Nachauni via Bedni Bugyal', description: 'Trek distance for the day is 6 km. The route takes you through Bedni Bugyal, one of Asia\'s largest and most beautiful alpine meadows with a height of 1,200 meters. Experience the vastness of rolling grasslands at high altitude. The trail is historically significant as the "Devi Route" or "Lord Karzon\'s Route." Throughout the trek, enjoy mesmerizing views of Mt. Trishul and Nanda Ghunti. Reach Patar Nachauni by afternoon. Night stay at the tent with panoramic views of the surrounding peaks.', altitude: '3,050m', notes: 'Trek Distance: 6 km. Trek Time: 5-6 hours. Altitude: 10,000 ft. Bedni Bugyal crossing' },
      { day: 4, title: 'Patar Nachauni to Bagwabasa', description: 'Trek distance for today is 6 km to Bagwabasa. As you gain altitude, you find yourself directly in front of Mt. Trishul at a height of 14,000 feet. The view is magnificent and unforgettable, with the shining and sparkling Trishul on one side and the bell-shaped Nanda Ghunti on the other. The landscape becomes increasingly alpine with sparse vegetation. Arrive at the tent camp by late afternoon. Spend the evening acclimatizing and preparing for the final push to Roopkund.', altitude: '3,700m', notes: 'Trek Distance: 6 km. Trek Time: 5-6 hours. Altitude: 12,100 ft' },
      { day: 5, title: 'Bagwabasa to Roopkund and back to Gairoli Patal', description: 'The longest trekking day with 12 km of distance. Start very early in the morning around sunrise after breakfast to reach the highest altitude of more than 4,877 meters (16,000+ ft). This is the most challenging day with significant altitude gain. There is always a possibility of snowfall. Aim to reach Roopkund/Jhunar Gali by 9:00 AM as there is no tree line beyond this point, and afternoon sun causes snow to become unstable. Spend time at the mysterious lake surrounded by ancient skeletons and high peaks. The return trek descends back to Gairoli Patal for camping. Overnight stay at the spacious camp.', altitude: '4,877m', notes: 'Trek Distance: 12 km. Trek Time: 9-10 hours. Altitude: 16,000+ ft. Crampons required if snow present' },
      { day: 6, title: 'Gairoli Patal to Wan Village', description: 'After having breakfast, begin your descent from Gairoli Patal towards Wan village. Trek distance for the day is 9 km. The descent is usually easier and faster than the ascent. Enjoy the view of Neelganga river and the surrounding landscape from a different perspective. Make lasting memories of this remarkable trek. Arrive at Wan by afternoon. Overnight stay at the homestay.', altitude: '1,700m', notes: 'Trek Distance: 9 km. Trek Time: 5-6 hours. Descending trek' },
      { day: 7, title: 'Wan Village to Dehradun/Rishikesh', description: 'Early morning departure from Wan village after breakfast. Drive back towards Rishikesh, and you will arrive by 5:00 PM in the evening. Witness the beautiful evening Ganga Aarti at Triveni Ghat in Rishikesh if time permits. Drop-off at your original pick-up point in Rishikesh, Haridwar, or Dehradun, marking the end of your Roopkund trek adventure.', altitude: '340m', notes: 'Drive Distance: 300 km. Drive Time: 7-8 hours. Drop at: Rishikesh/Haridwar/Dehradun. Optional: Ganga Aarti experience' }
    ],
    inclusions: [
      'Transportation: Pick-up and drop to Rishikesh/Haridwar/Dehradun',
      'Accommodation: Camping during trek on double and triple sharing basis at campsites',
      'Trek Equipment: Sleeping bag, tent, mattress, kitchen tent, toilet tent, crampons, cooking utensils',
      'All Meals: Vegetarian meals (breakfast, lunch, and dinner) throughout the trek',
      'Natural Spring Water: Fresh water sourced from natural springs during the trek',
      'Trek Staff: Qualified and experienced guides and support team',
      'Permits and Entries: All required forest entry fees and trek permits'
    ],
    exclusions: [
      'Any kind of Travel/Health Insurance (Garhwal Hikes strictly recommends each traveller carry personal travel/health insurance)',
      'Personal Gears: Individual trekking equipment not mentioned in inclusions',
      'Meals during travel: Food and beverages during driving segments',
      'Mules or porters: Charges for porters to carry personal luggage are NOT included',
      'Any Additional Permit Costs: Charges exceeding ₹500 for additional permits',
      'Personal Expenses: Tips, laundry, souvenirs, and other individual expenses',
      'Any costs not mentioned in the inclusions section'
    ],
    whatToPack: [
      'Rucksack: 40-60 Ltr with rain cover',
      'Water Bottles: Hot and cold water bottles for temperature maintenance',
      'Personal Medical Kit: Individual medications and first aid supplies',
      'Energy Snacks: Energy bars, dry fruits, and ORS packets',
      'T-shirts: 3 lightweight t-shirts for layering',
      'Fleece Jacket: 1 lightweight fleece for insulation',
      'Down Jacket: 1 insulated down jacket for extreme cold',
      'Rain Coat/Poncho: Waterproof rain protection',
      'Thermal Inner: Upper and lower thermal wear',
      'Trek Pants: 2 full-length trek pants (avoid jeans)',
      'Gloves: 1 pair of insulated gloves for high altitude',
      'Sun Cap: 1 lightweight sun cap for daytime',
      'Woolen Cap: 1 warm woolen cap/beanie for warmth',
      'Sunglasses: UV-protected sunglasses (essential at altitude)',
      'Socks: 4 pairs of regular trekking socks',
      'Woolen Socks: 1 pair of thick woolen socks',
      'Hand Sanitiser: For personal hygiene',
      'Toilet Paper: Personal supply for treks',
      'Lip Balm: High SPF lip protection',
      'Neck Gaiter/Buff: Multi-functional neck protection',
      'Trekking Shoes: Waterproof and insulated hiking boots (rental available)',
      'Trekking Gear: Trekking poles, gaiters, crampons (rental available)'
    ],
    bestTimeDetails: 'Ideal Season: May to October. May-June: Spring season with melting snow (crampons may not be needed). Moderate temperatures and clear skies for photography. July-August: Monsoon season - NOT RECOMMENDED due to heavy rainfall, landslides, and poor visibility. September-October: Post-monsoon season with clear skies, stable weather, and fresh snow beginning to appear. Perfect window for trekking before heavy winter sets in. November-April: Winter with heavy snowfall (December-March best for snow trekking with proper gear and experience). April onwards: Snow melts rapidly making conditions unpredictable.',
    termsConditions: 'Management accepts no responsibility for injuries or the loss/theft of any personal property during the tour. In case of any breakdown or delay due to vehicle malfunction, you would have to wait until repair or until a backup vehicle is provided. Garhwal Hikes is not responsible for any delays, alterations to the program, or indirectly incurred expenses in cases of natural hazards, accidents, weather conditions, landslides, political closure, or untoward incidents. Garhwal Hikes is not responsible for delays reaching destinations due to traffic. The trip organizer/coordinator has complete right to change the itinerary based on on-the-spot conditions. In case of uncertain climatic conditions, the company reserves the right to make any decision necessary for trekker safety. If trek duration is extended due to unforeseen circumstances, trekkers are responsible for additional expenses. AC will not work in hill stations. Please cooperate in keeping the environment clean and safe. Registrations once done cannot be cancelled or refunded. Enjoy the trip, respect others, and have a memorable experience.',
    image: '/images/treks/roopkund/trek.webp',
    gallery: [
      '/images/treks/roopkund/gallery/Roopkund  Gallery 1.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 2.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 3.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 4.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 5.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 6.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 7.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 8.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 9.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 10.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 11.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 12.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 13.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 14.webp',
      '/images/treks/roopkund/gallery/Roopkund  Gallery 15.webp'
    ],
    faq: [
      { question: 'What makes Roopkund so mysterious and famous?', answer: 'Roopkund is famous for the more than five hundred human skeletons found at the edge of the lake. The origin of these skeletons remains a mystery, with theories ranging from a tragic event during a pilgrimage to a mass funeral ritual. Scientific studies suggest they date back to the 9th century. The mysterious nature combined with the high-altitude setting makes Roopkund one of the most intriguing trek destinations.' },
      { question: 'Is Roopkund suitable for beginners?', answer: 'No, Roopkund is a Hard difficulty trek and is NOT recommended for beginners. The trek involves high altitude gain up to 4,877 meters, long daily distances (up to 12 km), snow trekking with crampons, and significant physical demands. Prior trekking experience at high altitude is essential. Trekkers should have excellent cardiovascular fitness and altitude acclimatization experience.' },
      { question: 'What is the risk of altitude sickness on Roopkund?', answer: 'Altitude sickness risk is VERY HIGH due to the extreme elevation gain (4,877m). Symptoms like headache, nausea, and breathlessness are common. It\'s essential to acclimatize properly, stay hydrated, and monitor your body. Inform guides immediately of any symptoms. Consider carrying altitude sickness medication and discussing prevention strategies with your doctor before the trek.' },
      { question: 'What is the best time to trek Roopkund?', answer: 'The best trekking period is May to October. May-June offers clear skies but possible snowy patches. September-October is ideal with post-monsoon clarity and beginning winter snow. December-March is excellent for snow trekking if you have winter experience and proper gear. Avoid July-August due to heavy monsoon rains and poor visibility. Each season offers a different experience of this mystical lake.' },
      { question: 'How much physical fitness is required?', answer: 'Roopkund requires EXCELLENT physical fitness. You should be able to walk 10-12 km daily at high altitude with significant elevation gains. Regular running, gym training, or previous high-altitude trekking experience is essential. Train for at least 3-4 months before attempting this trek. Build leg strength, cardiovascular endurance, and altitude acclimatization.' },
      { question: 'What safety measures are in place for high altitude trekking?', answer: 'Our experienced guides monitor all trekkers for altitude sickness symptoms throughout the trek. We carry first aid kits and have established protocols for emergency descent. Crampons are provided if needed for snow sections. We start early to avoid afternoon snow instability. Trekkers are encouraged to carry personal insurance, altitude sickness medication, and maintain regular communication with guides. Any signs of severe altitude sickness result in immediate descent to lower altitudes.' }
    ]
  },
  {
    id: 'kuari-pass',
    name: 'Kuari Pass Trek',
    price: 6499,
    category: 'winter',
    description: 'One of India\'s Most Spectacular High-Altitude Passes with Panoramic Mountain Views',
    duration: '5D/4N',
    difficulty: 'Moderate',
    bestTime: 'October - May',
    altitude: '3,600 m',
    overview: 'Kuari Pass, also known as Curzon Trail, stands as one of the most spectacular high-altitude mountain passes in the Indian Himalayas. Named after the British Viceroy Lord Curzon who trekked through this region, this legendary trail offers unparalleled panoramic views of the Himalayan peaks. Standing at 3,600 meters, Kuari Pass provides breathtaking vistas of legendary peaks including Nanda Devi, the second-highest mountain in India, along with views of Chaukhamba, Neelkanth, and other snow-capped summits. This trek combines adventure with stunning natural landscapes, making it ideal for experienced trekkers seeking scenic beauty and cultural immersion.',
    highlights: [
      'Kuari Pass at 3,600m with 360-degree views',
      'Views of Nanda Devi (second-highest in India)',
      'Chaukhamba, Neelkanth, and snow-capped peaks',
      'Diverse ecosystems from sub-alpine meadows to forests',
      'Rhododendron and alpine flowers',
      'Up to 300 km of visible mountain ranges',
      'Dramatic escarpments and sweeping panoramas',
      'Iconic trekking photography destination'
    ],
    itinerary: [
      { day: 1, title: 'Rishikesh to Tugasi Village', description: 'Start your journey from Rishikesh, pickup will be from Tapovan, Rishikesh. Enjoy the drive to Tugasi Village. Upon your arrival, check-in to your homestay and enjoy the day at leisure. Witness the local culture and scenic views of village. Later, head back to your homestay and enjoy your overnight stay.', altitude: '2,150m', notes: 'Drive Distance: 263 km. Drive Time: 8-9 hours. Pick up: Tapovan, Rishikesh' },
      { day: 2, title: 'Tugasi to Gulling Campsite', description: 'Wake up with the scenic views of the Himalayan ranges at the starting point of your Kuari Pass trek, Tugasi Village. Get briefed about your trail and begin your first stretch of the trek. Trek through the charming Tugasi Village and witness the traditional architecture, local culture and more with the views of Dhauladhar Range and others in the backdrop. As you reach the Gulling Top, settle in your camp, followed by an overnight stay.', altitude: '2,865m', notes: 'Trek Distance: 3 km. Trek Time: 4-5 hours. Altitude: 9,400 ft' },
      { day: 3, title: 'Gulling Campsite to Khullara Base Camp', description: 'In the morning, get ready for your second stretch of your trek. The trail ascends mildly through the dense oak, rhododendron and walnut forests, with gushing streams alongside. On your way, soak in the views of Pir Panjal Range, Shivalik Range and other himalayan ranges. As you reach the scenic Khullara Top, soak in the tranquil mountain ambience and settle in your campsite followed by an overnight stay.', altitude: '3,380m', notes: 'Trek Distance: 4 km. Trek Time: 5-6 hours. Altitude: 11,100 ft' },
      { day: 4, title: 'Khullara Base Camp to Kuari Pass and return to Tugasi', description: 'Begin your trek following the trail which offers breathtaking views of the Himalayan peaks including the Nanda Devi, Kamet, and Trishul among others. Later descend to Tugasi Village, as you reach, check-in to your homestay and relax after a tiring day.', altitude: '3,600m', notes: 'Trek Distance: 16 km. Trek Time: 7-8 hours. Altitude: 12,500 ft' },
      { day: 5, title: 'Tugasi to Rishikesh', description: 'In the morning, pack your bag full of memories and bid farewell to the scenic valleys, rocky Mountains, and awe-inspiring landscapes. Check-out from your homestay, marking the end of your trip and reach Rishikesh by evening.', altitude: '340m', notes: 'Drive Distance: 263 km. Drive Time: 8-9 hours. Drop at: Tapovan, Rishikesh' }
    ],
    inclusions: [
      'Stay: Accommodation for 4 Nights. Stays provided on sharing basis.',
      'Transport: Transportation from Rishikesh to Rishikesh',
      'Meals: All meals (Breakfast, Lunch & Dinner) starting from dinner of Day 1 (Check-In) to breakfast on the last Day (Check-Out).',
      'Trek Staff: A qualified, professional team, including a mountaineering-certified trek leader, guide and support staff',
      'Forest Entry and Permits: All required fuel charges, tolls, forest entry fees, and permits are covered. Emergency Kit: First aid medical kits are provided for safety.'
    ],
    exclusions: [
      'Travel/Health Insurance (Garhwal Hikes strictly recommends each traveller to carry your own travel/health insurance)',
      'Medical expenses',
      'Food or drinks outside the package (beverages, mineral water, snacks and meals during transportation)',
      'Personal Expenses (tips, laundry, mineral water, camera fee, any other personal expenses)',
      'Extra costs from natural disasters (landslides, roadblocks) - paid by customer',
      'Charges for emergency evacuation are not included',
      'Charges for mules or porters to carry personal luggage are NOT included'
    ],
    whatToPack: [
      'Warm layers (thermal wear)',
      'Windproof jacket',
      'Trekking shoes (waterproof)',
      'Rain gear',
      'Fleece jacket or sweater',
      'Backpack (50L+)',
      'Sleeping bag (rated for cold)',
      'Torch/Headlamp',
      'First aid kit',
      'Water bottle (2-3L capacity)',
      'Hat and warm gloves',
      'Sunscreen (SPF 50+)',
      'Sunglasses',
      'Camera for photography',
      'Trekking poles',
      'Identity proof',
      'Trek permits (if required)',
      'Insurance documents',
      'Emergency contact info',
      'Medical certificates',
      'Altitude sickness medication',
      'Energy snacks and bars',
      'Electrolyte tablets',
      'Pain relievers',
      'Blister treatment',
      'Toiletries and lip balm',
      'Wet wipes and tissues',
      'Notebook and pen',
      'Personal medications',
      'Snacks and protein bars'
    ],
    bestTimeDetails: 'Ideal Season: October to May. October-November: Post-monsoon season with clear skies and crystal-clear views. Perfect for photography and trekking. December-February: Winter season with possible snow. The landscape transforms into a pristine white wonderland, offering a completely different experience. March-May: Spring season with blooming alpine flowers. Rhododendrons and other flowers paint the landscape in vibrant colors. June-September: Monsoon season - not recommended due to heavy rainfall and poor visibility.',
    termsConditions: 'Management accepts no responsibility for injuries or the loss/theft of any personal property during the tour. In case of any breakdown or in delay due to the breakdown of the transport in the way, you would have to wait until the transport gets repaired or till the backup vehicle is provided. Garhwal Hikes is not responsible for any delays or alterations in the program or indirectly incurred expenses in cases such as natural hazards, accidents, weather conditions, landslides, political closure or any untoward incident. Garhwal Hikes is not responsible for any delay in reaching the destination due to traffic. Trip organizer/coordinator has complete right to change the itinerary as per on the spot condition. The AC will not work in Hill stations. Please cooperate with us in keeping the environment clean and safe. Registrations once done cannot be cancelled or refunded. Enjoy the trip, respect others and have a memorable experience.',
    image: '/images/treks/kuari-pass/trek.webp',
    gallery: [
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 1.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 2.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 3.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 4.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 5.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 6.webp',
      '/images/treks/kuari-pass/gallery/Kuari Pass Gallery 7.webp'
    ],
    faq: [
      { question: 'Why is Kuari Pass special?', answer: 'Kuari Pass is renowned for its dramatic escarpments, sweeping panoramic views, and relatively easier accessibility compared to other high-altitude passes. The pass itself offers 360-degree views of the surrounding peaks, making it one of the most photographed locations in the Himalayas. On clear days, you can see up to 300 kilometers of mountain ranges.' },
      { question: 'What peaks can I see from Kuari Pass?', answer: 'From Kuari Pass, you can see legendary peaks including Nanda Devi (second-highest mountain in India), Chaukhamba, Neelkanth, Kamet, and Trishul among others. The panoramic views are truly unforgettable.' },
      { question: 'What is the best time to visit Kuari Pass?', answer: 'The best time is October to May. October-November offers clear skies perfect for photography. December-February brings snow for a white wonderland experience. March-May features blooming alpine flowers painting vibrant colors.' },
      { question: 'What is the maximum altitude?', answer: 'The maximum altitude is 3,600 meters at Kuari Pass itself, making it accessible for moderate level trekkers.' },
      { question: 'How long is the trek?', answer: 'The trek is 5 Days / 4 Nights, with approximately 23 km of total trekking distance spread across the days.' },
      { question: 'Is this trek suitable for beginners?', answer: 'Yes, Kuari Pass is a Moderate difficulty trek, making it suitable for those with some trekking experience. It is less technically challenging than other high-altitude passes, making it more accessible while still offering spectacular mountain views.' }
    ]
  },
  {
    id: 'do-dhaam-tungnath',
    name: 'Do Dhaam with Tungnath',
    price: 14499,
    category: 'yatra',
    description: 'Spiritual pilgrimage trek combining two sacred destinations - Kedarnath and Badrinath temples with Tungnath.',
    duration: '10 Days',
    difficulty: 'Moderate',
    bestTime: 'May - October',
    altitude: '3,680m',
    image: '/images/treks/do-dhaam-tungnath/trek.webp',
    overview: 'This trek combines two of India\'s four Dhams (sacred shrines) - Kedarnath and Badrinath - with the addition of Tungnath. It\'s a complete spiritual and adventure experience in the Himalayas.',
    highlights: [
      'Kedarnath Temple',
      'Badrinath Temple',
      'Tungnath Temple',
      'Alpine scenery',
      'Spiritual journey'
    ],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Arrive and prepare for trek.', altitude: '340m' },
      { day: 2, title: 'To Kedarnath Base', description: 'Drive and trek to Kedarnath area.', altitude: '3,500m' },
      { day: 3, title: 'Kedarnath Darshan', description: 'Visit and explore Kedarnath Temple.', altitude: '3,583m' },
      { day: 4, title: 'To Tungnath', description: 'Trek from Kedarnath to Tungnath.', altitude: '3,680m' },
      { day: 5, title: 'Tungnath Exploration', description: 'Visit Tungnath and Chandrashila.', altitude: '3,680m' },
      { day: 6, title: 'To Badrinath', description: 'Trek and drive towards Badrinath.', altitude: '3,300m' },
      { day: 7, title: 'Badrinath Darshan', description: 'Visit Badrinath Temple and nearby sites.', altitude: '3,300m' },
      { day: 8, title: 'Badrinath Exploration', description: 'Explore Tapt Kund, Brahma Kund.', altitude: '3,300m' },
      { day: 9, title: 'Return Journey', description: 'Begin return journey.', altitude: 'Varies' },
      { day: 10, title: 'Arrival', description: 'Arrive at end point with certificates.', altitude: '340m' }
    ],
    inclusions: [
      'Accommodation',
      'All meals',
      'Guides',
      'Porters',
      'Insurance',
      'Transport'
    ],
    exclusions: [
      'Flights',
      'Personal expenses'
    ],
    whatToPack: [
      'Trekking gear',
      'Warm clothes',
      'Waterproof jacket',
      'Hat, gloves, sunglasses',
      'Sunscreen',
      'Water bottle',
      'Medications',
      'Camera',
      'Notebook'
    ],
    termsConditions: 'Moderate fitness required. Good for pilgrims and adventure seekers. Cancellation policy available.',
    gallery: ['⛩️', '🏔️', '🌲', '🌅', '🏕️'],
    faq: [
      { question: 'Is this for pilgrims only?', answer: 'No, adventure seekers and nature lovers can also enjoy this trek.' }
    ]
  },
  {
    id: 'adi-kailash',
    name: 'Adi Kailash Yatra',
    price: 34999,
    category: 'yatra',
    description: 'Sacred pilgrimage to Adi Kailash, the "Mount Kailash of Uttarakhand" with panoramic Himalayan views.',
    duration: '12 Days',
    difficulty: 'Hard',
    bestTime: 'May - June, September - October',
    altitude: '5,633m',
    image: '/images/treks/adi-kailash/trek.webp',
    overview: 'Adi Kailash, also known as Chhota Kailash, is a sacred pilgrimage destination in Uttarakhand. At 5,633m, it offers stunning mountain views and spiritual significance comparable to Mount Kailash itself.',
    highlights: [
      'Adi Kailash peak',
      'Panatal Nag Lake',
      'Kuti Yangyak Lake',
      'High altitude views',
      'Spiritual experience'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Dharchula', description: 'Arrive at Dharchula, gateway to Adi Kailash trek.', altitude: '1,450m' },
      { day: 2, title: 'Trek through Valley', description: 'Trek through scenic valleys.', altitude: '2,500m' },
      { day: 3, title: 'Acclimatization Day', description: 'Acclimatization trek and preparation.', altitude: '3,000m' },
      { day: 4, title: 'Ascent Begins', description: 'Begin ascent to higher altitude.', altitude: '3,500m' },
      { day: 5, title: 'High Altitude Camp', description: 'Reach high altitude camp.', altitude: '4,500m' },
      { day: 6, title: 'Summit Day Prep', description: 'Preparation for summit day.', altitude: '4,500m' },
      { day: 7, title: 'Summit Push', description: 'Trek to Adi Kailash summit.', altitude: '5,633m' },
      { day: 8, title: 'Summit Celebration', description: 'Explore summit area, meditation.', altitude: '5,633m' },
      { day: 9, title: 'Descent Start', description: 'Begin descent.', altitude: '4,500m' },
      { day: 10, title: 'Continue Descent', description: 'Descend to lower altitude.', altitude: '3,000m' },
      { day: 11, title: 'Trek Out', description: 'Trek back towards Dharchula.', altitude: '1,500m' },
      { day: 12, title: 'Farewell', description: 'Drive to base city. Trek completion celebration.', altitude: '340m' }
    ],
    inclusions: [
      'Accommodation in tents and guesthouses',
      'All meals with altitude supplements',
      'Experienced guides',
      'Porters',
      'Oxygen cylinders',
      'Medical support',
      'Insurance'
    ],
    exclusions: [
      'Flights',
      'Personal climbing gear',
      'Alcohol',
      'Personal medical expenses',
      'Tips'
    ],
    whatToPack: [
      'High-altitude mountaineering boots',
      'Insulated down jacket',
      'Thermal base layers',
      'Climbing harness (if needed)',
      'Rope and ice axe (if needed)',
      'Multiple pairs of gloves',
      'Balaclava',
      'High-altitude sleeping bag',
      'Trekking poles',
      'High SPF sunscreen',
      'Medicine for altitude',
      'Flask for hot water'
    ],
    termsConditions: 'Mountaineering experience required. Physical fitness test mandatory. Medical clearance essential. Cancellation within 7 days: no refund.',
    gallery: ['⛏️', '🏔️', '❄️', '🌅', '🏕️'],
    faq: [
      { question: 'Do I need mountaineering skills?', answer: 'Yes, basic mountaineering skills and high altitude experience are necessary.' },
      { question: 'Is it more difficult than regular trekking?', answer: 'Yes, this is mountaineering with higher risks and physical demands.' }
    ]
  },
  {
    id: 'kailash-mansarovar',
    name: 'Kailash Mansarovar Yatra',
    category: 'yatra',
    description: 'The ultimate spiritual pilgrimage to Mount Kailash (6,638m) and Lake Mansarovar - sacred to Hindus, Buddhists, and Jains.',
    duration: '16 Days',
    difficulty: 'Hard',
    bestTime: 'June - September',
    altitude: '6,638m',
    image: '/images/treks/kailash-mansarovar/trek.webp',
    overview: 'Kailash Mansarovar is considered the holiest pilgrimage site in the world. Mount Kailash, the abode of Lord Shiva, stands at 6,638m, and Lake Mansarovar is believed to be the lake of the gods. This transformational spiritual journey combines trekking with profound spiritual experience.',
    highlights: [
      'Mount Kailash circumambulation',
      'Lake Mansarovar',
      'Rakshas Tal',
      'Gurla Mandhata',
      'Tibetan plateau',
      'Spiritual awakening'
    ],
    itinerary: [
      { day: 1, title: 'Departure', description: 'Depart for Nepal via Delhi or local base.', altitude: 'Varies' },
      { day: 2, title: 'Kathmandu', description: 'Arrive in Kathmandu. Visa preparation.', altitude: '1,400m' },
      { day: 3, title: 'Kathmandu Exploration', description: 'Explore historical sites. Final preparations.', altitude: '1,400m' },
      { day: 4, title: 'Drive towards Border', description: 'Drive towards Nepal-Tibet border via scenic route.', altitude: '2,500m' },
      { day: 5, title: 'Border Crossing', description: 'Cross into Tibet. Acclimatization in Saga.', altitude: '4,600m' },
      { day: 6, title: 'Drive to Mansarovar', description: 'Drive towards Lake Mansarovar.', altitude: '4,600m' },
      { day: 7, title: 'Lake Mansarovar', description: 'Arrive at sacred Lake Mansarovar. Holy bath.', altitude: '4,590m' },
      { day: 8, title: 'Lake Exploration', description: 'Explore Mansarovar. Meditation and rituals.', altitude: '4,590m' },
      { day: 9, title: 'Journey to Kailash Base', description: 'Drive to Kailash base (Darchen).', altitude: '4,575m' },
      { day: 10, title: 'Kailash Circumambulation Day 1', description: 'Start Kailash circumambulation trek.', altitude: '5,000m' },
      { day: 11, title: 'Circumambulation Day 2', description: 'Continue circumambulation trek.', altitude: '5,600m' },
      { day: 12, title: 'Circumambulation Complete', description: 'Complete circumambulation. Rest and meditation.', altitude: '4,575m' },
      { day: 13, title: 'Return to Mansarovar', description: 'Return to Mansarovar for more rituals.', altitude: '4,590m' },
      { day: 14, title: 'Begin Return Journey', description: 'Start return journey via same route.', altitude: '4,575m' },
      { day: 15, title: 'Drive to Border Town', description: 'Drive back towards Nepal border.', altitude: '2,000m' },
      { day: 16, title: 'Return Home', description: 'Arrive home with life-changing experience.', altitude: '340m' }
    ],
    inclusions: [
      'All permits and permissions',
      'Accommodation in hotels and camps',
      'All meals',
      'Experienced guides',
      'Porter services',
      'Transportation',
      'Travel insurance',
      'Oxygen if needed'
    ],
    exclusions: [
      'Airfare',
      'Visa fees',
      'Personal expenses',
      'Alcohol',
      'Tips for staff'
    ],
    whatToPack: [
      'Passport',
      'Required documents',
      'High-altitude trekking boots',
      'Mountaineering jacket',
      'Thermal layers',
      'Down sleeping bag',
      'First aid kit',
      'Medications',
      'High SPF sunscreen',
      'Prayer items if any',
      'Journal for experience',
      'Waterproof bags',
      'Multiple pairs of socks'
    ],
    termsConditions: 'Requires passport and visa. Minimum 5 years passport validity. Medical clearance needed. All permits arranged. Flexible itinerary based on entry permits. Cancellation within 14 days: 50% refund.',
    gallery: ['⛩️', '🏔️', '💧', '🧘', '🌅'],
    faq: [
      { question: 'Is this possible for anyone?', answer: 'Anyone with good health and spiritual inclination can attempt this yatra. Fitness level should be moderate to good.' },
      { question: 'What permits are needed?', answer: 'We arrange all necessary permits. You will need current passport and Chinese visa.' },
      { question: 'Can I do partial yatra?', answer: 'Yes, you can do just Lake Mansarovar or partial Kailash trek. Consult us for options.' }
    ]
  },
  {
    id: 'darma-valley',
    name: 'Darma Valley Trek',
    category: 'monsoon',
    description: 'Trek through the pristine Darma Valley, one of the most remote and least explored valleys of Uttarakhand.',
    duration: '7 Days',
    difficulty: 'Moderate',
    bestTime: 'July - September',
    altitude: '2,850m',
    overview: 'Darma Valley is a hidden gem in Uttarakhand, away from the regular tourist circuit. This trek offers pristine wilderness, local culture, waterfalls, and stunning mountain views. It\'s perfect for those seeking off-beat trekking experiences.',
    highlights: [
      'Pristine Darma Valley',
      'Waterfalls',
      'Local villages',
      'Mountain views',
      'Unspoiled nature'
    ],
    itinerary: [
      { day: 1, title: 'Drive to Dharchula', description: 'Arrive at Dharchula.', altitude: '1,450m' },
      { day: 2, title: 'Trek to Darma Valley', description: 'Trek into beautiful Darma Valley.', altitude: '2,000m' },
      { day: 3, title: 'Explore Valley', description: 'Trek and explore the valley.', altitude: '2,400m' },
      { day: 4, title: 'Visit Waterfalls', description: 'Trek to local waterfalls.', altitude: '2,500m' },
      { day: 5, title: 'Mountain Views', description: 'Trek to viewpoint for panoramic views.', altitude: '2,850m' },
      { day: 6, title: 'Cultural Experience', description: 'Spend time with local community.', altitude: '2,400m' },
      { day: 7, title: 'Return Trek', description: 'Trek back and drive to starting point.', altitude: '1,450m' }
    ],
    inclusions: [
      'Accommodation in guesthouses and camps',
      'All meals',
      'Guide services',
      'Transport'
    ],
    exclusions: [
      'Equipment',
      'Flights',
      'Personal expenses'
    ],
    whatToPack: [
      'Trekking boots',
      'Warm jacket for evenings',
      'Rain gear',
      'Hat and sunscreen',
      'Water bottle',
      'Camera',
      'Insect repellent'
    ],
    termsConditions: 'Off-beat trek requires adventurous spirit. Services are basic but authentic. Weather-dependent itinerary.',
    image: '/images/treks/darma-valley/trek.webp',
    gallery: [],
    faq: [
      { question: 'Why is it unknown?', answer: 'Darma Valley is remote and not on regular tourist routes, making it pristine and less crowded.' }
    ]
  },
  {
    id: 'harshil-valley',
    name: 'Harshil Valley Trek',
    category: 'monsoon',
    description: 'Trek through the scenic Harshil Valley with lush green landscapes, waterfalls, and the pristine Jalandhar River.',
    duration: '4 Days',
    difficulty: 'Easy',
    bestTime: 'June - September',
    altitude: '2,680m',
    image: '/images/treks/harshil-valley/trek.webp',
    overview: 'Harshil Valley is a serene destination offering lush green landscapes, flowing waterfalls, and local culture. During monsoon, the valley transforms into a paradise with abundant greenery and water bodies.',
    highlights: [
      'Lush green landscapes',
      'Waterfalls',
      'Jalandhar River',
      'Local culture',
      'Photography opportunities'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Harshil', description: 'Arrive at scenic Harshil Valley.', altitude: '2,680m' },
      { day: 2, title: 'Valley Exploration', description: 'Trek and explore waterfall locations.', altitude: '2,680m' },
      { day: 3, title: 'River Trek', description: 'Trek along Jalandhar River.', altitude: '2,400m' },
      { day: 4, title: 'Return', description: 'Trek back and drive to base.', altitude: '340m' }
    ],
    inclusions: [
      'Accommodation',
      'Meals',
      'Guide',
      'Transport'
    ],
    exclusions: [
      'Equipment',
      'Flights'
    ],
    whatToPack: [
      'Light trekking shoes',
      'Light jacket',
      'Rain gear',
      'Hat',
      'Sunscreen',
      'Water bottle',
      'Camera'
    ],
    termsConditions: 'Easy trek suitable for all. Monsoons may cause schedule changes.',
    gallery: ['/images/treks/harshil-valley/gallery/harshil-1.jpg'],
    faq: [
      { question: 'Best season?', answer: 'June to September during monsoon for green landscapes and waterfalls.' }
    ]
  },
  {
    id: 'niti-valley',
    name: 'Niti Valley Trek',
    category: 'monsoon',
    description: 'Trek to the remote Niti Valley, one of the least explored regions of Uttarakhand with pristine wilderness.',
    duration: '6 Days',
    difficulty: 'Hard',
    bestTime: 'July - September',
    altitude: '3,800m',
    overview: 'Niti Valley is a remote high-altitude valley offering pristine wilderness and mountain culture. The trek is challenging but rewarding with stunning mountain views and authentic Himalayan experience.',
    highlights: [
      'Remote wilderness',
      'Alpine meadows',
      'Mountain culture',
      'Untouched nature',
      'Mountain panoramas'
    ],
    itinerary: [
      { day: 1, title: 'Drive to Base', description: 'drive to valley base point.', altitude: '2,400m' },
      { day: 2, title: 'Trek Begins', description: 'Begin trek through steep trails.', altitude: '3,000m' },
      { day: 3, title: 'High Altitude Camp', description: 'Reach higher altitude camp.', altitude: '3,500m' },
      { day: 4, title: 'Valley Exploration', description: 'Explore Niti Valley.', altitude: '3,800m' },
      { day: 5, title: 'Rest and Explore', description: 'Rest day to explore area.', altitude: '3,800m' },
      { day: 6, title: 'Return Trek', description: 'Trek back to base.', altitude: '2,400m' }
    ],
    inclusions: [
      'Accommodation in camps',
      'All meals',
      'Guides',
      'Porters',
      'Insurance'
    ],
    exclusions: [
      'Equipment',
      'Flights',
      'Personal expenses'
    ],
    whatToPack: [
      'Trekking boots',
      'Warm clothes',
      'Waterproof jacket',
      'Hat, gloves',
      'Sunscreen',
      'Water bottle',
      'Energy food',
      'Sleeping bag',
      'First aid'
    ],
    termsConditions: 'Hard trek for experienced trekkers. Basic facilities. Weather-dependent.',
    image: '/images/treks/niti-valley/trek.webp',
    gallery: [],
    faq: [
      { question: 'Why is it hard?', answer: 'High altitude, steep terrain, and remote location make it challenging.' }
    ]
  },
  {
    id: 'yulla-kanda',
    name: 'Yulla Kanda Trek',
    price: 7999,
    category: 'winter',
    description: 'Trek to Yulla Kanda peak offering pristine snow-covered landscapes and panoramic mountain views.',
    duration: '4 Days',
    difficulty: 'Moderate',
    bestTime: 'November - March',
    altitude: '3,100m',
    overview: 'Yulla Kanda is a lesser-known winter destination in Uttarakhand. The trek offers beautiful snow-covered landscapes and views of nearby peaks. It\'s ideal for those seeking a quieter winter trekking experience.',
    highlights: [
      'Snow-covered peak',
      'Mountain views',
      'Winter landscape',
      'Quiet trekking'
    ],
    itinerary: [
      { day: 1, title: 'Drive to Base', description: 'Drive to trekking base.', altitude: '2,200m' },
      { day: 2, title: 'Trek through Snow', description: 'Trek through snow-covered terrain.', altitude: '2,700m' },
      { day: 3, title: 'Reach Peak', description: 'Trek to Yulla Kanda peak.', altitude: '3,100m' },
      { day: 4, title: 'Return', description: 'Trek back to base and drive.', altitude: '340m' }
    ],
    inclusions: [
      'Accommodation',
      'Meals',
      'Guide',
      'Transport'
    ],
    exclusions: [
      'Equipment',
      'Flights'
    ],
    whatToPack: [
      'Winter trekking boots',
      'Insulated jacket',
      'Thermal wear',
      'Hat and gloves',
      'Sunscreen',
      'Water bottle'
    ],
    termsConditions: 'Winter trek conditions apply. Weather-dependent.',
    image: '/images/treks/yulla-kanda/trek.webp',
    gallery: [],
    faq: [
      { question: 'Is snow guaranteed?', answer: 'Snow is likely in winter but weather patterns may vary.' }
    ]
  },
  {
    id: 'spiti-valley',
    name: 'Spiti Valley Trek',
    category: 'monsoon',
    description: 'Trek through the lunar landscape of Spiti Valley with ancient monasteries and pristine mountain wilderness.',
    duration: '8 Days',
    difficulty: 'Hard',
    bestTime: 'June - September',
    altitude: '4,500m',
    overview: 'Spiti Valley is famous for its unique lunar-like landscape, ancient monasteries, and remote mountain villages. The valley sits at high altitude and offers an otherworldly trekking experience with rich Buddhist culture.',
    highlights: [
      'Lunar landscape',
      'Ancient monasteries',
      'Kaza town',
      'Remote villages',
      'Buddhist culture'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Kaza', description: 'Arrive in Kaza, capital of Spiti.', altitude: '3,600m' },
      { day: 2, title: 'Monaste Exploration', description: 'Visit Key Monastery and local sites.', altitude: '3,600m' },
      { day: 3, title: 'Trek Begins', description: 'Begin trekking from Kaza.', altitude: '3,800m' },
      { day: 4, title: 'High Altitude Trek', description: 'Trek at high altitude through valleys.', altitude: '4,500m' },
      { day: 5, title: 'Remote Villages', description: 'Trek through remote Spitian villages.', altitude: '4,200m' },
      { day: 6, title: 'Cultural Experience', description: 'Immerse in local Buddhist culture.', altitude: '3,500m' },
      { day: 7, title: 'Return Trek', description: 'Trek back towards Kaza.', altitude: '3,600m' },
      { day: 8, title: 'Departure', description: 'Explore more and depart Spiti.', altitude: '3,600m' }
    ],
    inclusions: [
      'Accommodation in guesthouses',
      'All meals',
      'Guide services',
      'Transport',
      'Monastery visits'
    ],
    exclusions: [
      'Equipment',
      'Flights',
      'Personal expenses'
    ],
    whatToPack: [
      'High-altitude trekking boots',
      'Warm clothes',
      'Waterproof jacket',
      'Hat, gloves, sunglasses',
      'High SPF sunscreen',
      'Water bottle',
      'Energy supplements',
      'Camera',
      'Respectful clothing for monasteries'
    ],
    termsConditions: 'Hard trek at high altitude. Basic facilities. Acclimatization important.',
    image: '/images/treks/spiti-valley/trek.webp',
    gallery: [],
    faq: [
      { question: 'How different is it?', answer: 'Spiti\'s lunar landscape is unlike any other Himalayan destination, offering unique geological and cultural experience.' }
    ]
  },
  {
    id: 'ladakh-trip',
    name: 'Ladakh Trip',
    category: 'monsoon',
    description: 'Comprehensive journey through the magical land of Ladakh with high passes, Buddhist monasteries, and adventure activities.',
    duration: '10 Days',
    difficulty: 'Hard',
    bestTime: 'July - September',
    altitude: '5,606m',
    overview: 'Ladakh is one of the most stunning high-altitude destinations in India. This trip covers iconic passes like Khardung La, Leh city, ancient monasteries, and adventure activities amidst breathtaking landscapes.',
    highlights: [
      'Khardung La Pass',
      'Leh Ladakh',
      'Thiksey Monastery',
      'Pangong Lake',
      'Nubra Valley',
      'High altitude adventure'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Leh', description: 'Arrive in Leh. Acclimatization day.', altitude: '3,500m' },
      { day: 2, title: 'Leh City Tour', description: 'Explore Leh city, Old Town, temples.', altitude: '3,500m' },
      { day: 3, title: 'Khardung La Trek', description: 'Drive and trek to Khardung La, world\'s highest road pass.', altitude: '5,606m' },
      { day: 4, title: 'Nubra Valley', description: 'Drive to Nubra Valley. Camel safari.', altitude: '3,100m' },
      { day: 5, title: 'Thiksey Monastery', description: 'Visit Thiksey Monastery, stunning architecture.', altitude: '3,500m' },
      { day: 6, title: 'Pangong Lake Journey', description: 'Drive to scenic Pangong Lake.', altitude: '4,350m' },
      { day: 7, title: 'Pangong Lake Exploration', description: 'Explore Pangong Lake and surroundings.', altitude: '4,350m' },
      { day: 8, title: 'Return Journey', description: 'Start return journey to Leh.', altitude: '3,500m' },
      { day: 9, title: 'Last Minute Shopping', description: 'Final exploration, shopping, and packing.', altitude: '3,500m' },
      { day: 10, title: 'Departure', description: 'Depart from Leh with unforgettable memories.', altitude: '3,500m' }
    ],
    inclusions: [
      'Accommodation',
      'All meals',
      'Experienced guides',
      'Transportation',
      'Camel safari',
      'Monastery visits',
      'Travel insurance'
    ],
    exclusions: [
      'Flights',
      'Personal shopping',
      'Alcohol',
      'Tips'
    ],
    whatToPack: [
      'High-altitude clothing',
      'Warm jacket',
      'Thermal wear',
      'Comfortable shoes',
      'Hat and sunglasses',
      'High SPF sunscreen',
      'Water bottle',
      'Camera',
      'Travel documents',
      'Medications',
      'Altitude sickness medicine'
    ],
    termsConditions: 'High altitude trek requires acclimatization. Travel insurance mandatory. Medical clearance recommended. Flexible itinerary based on weather.',
    image: '/images/treks/ladakh-trip/trek.webp',
    gallery: [],
    faq: [
      { question: 'Can anyone go to Ladakh?', answer: 'Yes, but acclimatization is important. People with heart or lung issues should consult doctors.' },
      { question: 'What is the best time?', answer: 'July to September is ideal. Winter roads are closed.' }
    ]
  },
  {
    id: 'pangarchulla',
    name: 'Pangarchulla Trek',
    price: 9499,
    category: 'winter',
    description: 'Trek to Pangarchulla peak (4,720m) offering stunning snow-covered landscapes and panoramic Himalayan views.',
    duration: '4 Days',
    difficulty: 'Moderate',
    bestTime: 'November - March',
    altitude: '4,720m',
    image: '/images/treks/pangarchulla/trek.webp',
    gallery: [
      '/images/treks/pangarchulla/gallery/Pangarchulla Gallery 1.webp'
    ],
    overview: 'Pangarchulla is a beautiful winter trek in Uttarakhand. The trek combines moderate difficulty with stunning panoramic views, making it ideal for winter trekkers seeking adventure with accessible challenge level.',
    highlights: [
      'Pangarchulla peak',
      'Snow-covered landscape',
      'Mountain panoramas',
      'Clear skies',
      'Winter beauty'
    ],
    itinerary: [
      { day: 1, title: 'Drive to Base', description: 'Drive to Auli, trekking base.', altitude: '3,050m' },
      { day: 2, title: 'Trek Through Snow', description: 'Trek upwards through snow-covered terrain.', altitude: '3,800m' },
      { day: 3, title: 'Reach Peak', description: 'Trek to Pangarchulla summit.', altitude: '4,720m' },
      { day: 4, title: 'Return Journey', description: 'Trek down and drive back.', altitude: '340m' }
    ],
    inclusions: [
      'Accommodation',
      'Meals',
      'Guides',
      'Transport'
    ],
    exclusions: [
      'Equipment',
      'Flights'
    ],
    whatToPack: [
      'Winter trekking boots',
      'Insulated jacket',
      'Thermal wear',
      'Hat, gloves, scarf',
      'Sunscreen',
      'Water bottle',
      'Energy food'
    ],
    termsConditions: 'Winter trek. Weather-dependent schedule.',
    faq: [
      { question: 'Suitable for winter sports enthusiasts?', answer: 'Yes, great for those wanting winter trekking with stunning views.' }
    ]
  },
  {
    id: 'chaar-dhaam',
    name: 'Chaar Dhaam Yatra',
    price: 23999,
    category: 'yatra',
    description: 'The ultimate pilgrimage journey to all four Dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath.',
    duration: '16 Days',
    difficulty: 'Moderate',
    bestTime: 'May - October',
    altitude: '3,583m',
    overview: 'Chaar Dhaam Yatra is the most sacred pilgrimage circuit in Hinduism. Visit all four Dhams (Sacred abodes) in one transformational journey covering Yamunotri, Gangotri, Kedarnath, and Badrinath.',
    highlights: [
      'Yamunotri Temple',
      'Gangotri Temple',
      'Kedarnath Temple',
      'Badrinath Temple',
      'Complete spiritual journey',
      'Mountain scenery'
    ],
    itinerary: [
      { day: 1, title: 'Departure', description: 'Depart for Chaar Dhaam pilgrimage.', altitude: '340m' },
      { day: 2, title: 'Journey to Yamunotri', description: 'Drive towards Yamunotri, the source of Yamuna.', altitude: '3,291m' },
      { day: 3, title: 'Yamunotri Darshan', description: 'Visit Yamunotri Temple at the source of Yamuna River.', altitude: '3,291m' },
      { day: 4, title: 'Journey to Gangotri', description: 'Travel to Gangotri, source of Ganges.', altitude: '3,042m' },
      { day: 5, title: 'Gangotri Darshan', description: 'Visit Gangotri Temple at Ganges source.', altitude: '3,042m' },
      { day: 6, title: 'Acclimatization', description: 'Acclimatization day before high altitude treks.', altitude: '3,000m' },
      { day: 7, title: 'Journey to Kedarnath', description: 'Drive towards Kedarnath.', altitude: '3,500m' },
      { day: 8, title: 'Kedarnath Trek', description: 'Trek to Kedarnath Temple.', altitude: '3,583m' },
      { day: 9, title: 'Kedarnath Darshan', description: 'Visit and explore Kedarnath Temple.', altitude: '3,583m' },
      { day: 10, title: 'Return from Kedarnath', description: 'Trek back from Kedarnath.', altitude: '3,500m' },
      { day: 11, title: 'Journey to Badrinath', description: 'Drive towards Badrinath.', altitude: '3,300m' },
      { day: 12, title: 'Badrinath Darshan', description: 'Visit Badrinath Temple, one of the Dhams.', altitude: '3,300m' },
      { day: 13, title: 'Badrinath Exploration', description: 'Explore Tapt Kund, Brahma Kund, Auli.', altitude: '3,300m' },
      { day: 14, title: 'Return Journey Begins', description: 'Begin return journey.', altitude: 'Varies' },
      { day: 15, title: 'Travel Back', description: 'Continue return journey.', altitude: '1,500m' },
      { day: 16, title: 'Arrival', description: 'Arrive home. Pilgrimage completion celebration.', altitude: '340m' }
    ],
    inclusions: [
      'Accommodation in hotels and guesthouses',
      'All meals',
      'Experienced pilgrimage guides',
      'Transportation',
      'Insurance',
      'Entry passes to temples'
    ],
    exclusions: [
      'Flights',
      'Alcohol',
      'Personal expenses',
      'Tips'
    ],
    whatToPack: [
      'Trekking boots',
      'Warm clothes',
      'Waterproof jacket',
      'Hat, gloves, sunglasses',
      'Sunscreen',
      'Water bottle',
      'Camera',
      'Medications',
      'Devotional items',
      'Comfortable clothing',
      'Hat for sun protection'
    ],
    termsConditions: 'Moderate fitness required. Pilgrims of all ages welcome. Acclimatization is key. Flexible itinerary based on health conditions. Cancellation within 7 days: 50% refund.',
    image: '/images/treks/chaar-dhaam/trek.webp',
    gallery: [],
    faq: [
      { question: 'Can elderly people do this?', answer: 'Yes, with proper acclimatization and medical support, elderly pilgrims can complete Chaar Dhaam.' },
      { question: 'Is this trek compulsory for Hinduism?', answer: 'It is considered a major pilgrimage, especially for Hindus, but all religions can participate.' },
      { question: 'How difficult is the physical part?', answer: 'Moderate difficulty. Some days involve trekking, which requires basic fitness.' }
    ]
  }
];

export const reviews = [
  {
    name: 'Udita Pokhrel',
    location: 'Google Review',
    rating: 5,
    review: 'It was an amazing experience with Garhwal Eye. The entire journey was flawlessly organized, ensuring a smooth and enjoyable adventure. The homestays arranged were exceptional, offering comfortable accommodations and warm hospitality from welcoming hosts. Each aspect of the trip reflected careful planning and attention to detail, making it a memorable and stress-free vacation. Har Har Mahadev!',
  },
  {
    name: 'Prem Pratap',
    location: 'Google Review',
    rating: 5,
    review: 'Thinking back on my Panch Kedar trek with Garhwal Eye, I can\'t help but grin — it truly felt magical. The trip felt effortless, like everything just worked out perfectly from the start. Every homestay was more than just a place to rest; the families welcomed us like old friends. Each meal was comforting — fresh, local, and so satisfying after hours of trekking. Our guide was fantastic, someone who knew every corner of the route and always had our backs. I can\'t wait for my next adventure with them!',
  },
  {
    name: 'Amruta Kharpude',
    location: 'Local Guide · Google Review',
    rating: 5,
    review: 'We completed our Panch Kedar Yatra. Jitu Bhai is so sharp and perfect to arrange everything for us — cab facility, pick up drop, food, hotel, transport, guide, mainly Panch Kedar itinerary. 12 days was just awesome! Because of you we were able to complete our Panch Kedar. I will request everyone to please contact Mr Jitu — such a nice and brilliant person for your any trek. He supported us and was very helpful.',
  },
  {
    name: 'Pranjal',
    location: 'Google Review',
    rating: 5,
    review: 'Garhwal Eye Trekking Company is a fantastic choice for trekking lovers. Their food is fresh, tasty, and cooked with care. Plus, they offer unlimited food, even in the mountains! The camps are set up away from other groups for peace and quiet. The guides are incredibly supportive — if you feel tired, they will patiently wait for you. For anyone looking for a peaceful, well-organized trek with delicious food, clean camps, and caring guides, Garhwal Eye is the perfect choice!',
  },
  {
    name: 'Harshada P',
    location: 'Local Guide · Google Review',
    rating: 5,
    review: 'My experience with Garhwal Eye has been amazing. Great for solo travellers! TJ the trek planner planned the trip very well and handled unforeseen situations brilliantly. He made sure my safety was their priority. The home stays were generous, food was amazing. I had planned a Rudranath trek along with Kalpeshwar temple — Shivam was a very enthusiastic leader who motivated me at every step. As a solo traveller I am highly recommending Garhwal Eye. Thank you so much!',
  },
  {
    name: 'Rakesh Kumar',
    location: 'Google Review',
    rating: 5,
    review: 'Completed the 12-day Panch Kedar Yatra with Garhwal Eye, and it was an amazing spiritual and adventurous journey. The guides (Shivam & Naveen) were highly knowledgeable, friendly, and supportive throughout the trek. Accommodation was comfortable and well-maintained. The food was consistently nutritious and delicious. Transport logistics were seamless. I highly recommend Garhwal Eye for anyone seeking a well-managed and memorable Panch Kedar Yatra.',
  },
];

export const aboutContent = {
  heading: 'About Garhwal Hikes',
  content: `Garhwal Hikes is your gateway to the magnificent Himalayan region of Uttarakhand. We specialize in curated trekking experiences that blend adventure, spirituality, and natural beauty.

With years of experience in organizing treks, we ensure that every journey is safe, comfortable, and unforgettable. Our team of expert guides knows every trail intimately and is committed to providing the best trekking experience.

We believe that trekking is not just about reaching the destination; it's about the journey, the people you meet, and the connections you make with nature.`,
  mission: 'To provide world-class trekking experiences that create lasting memories and foster deep connections with the Himalayan landscape.',
  values: [
    'Safety & Responsibility',
    'Environmental Sustainability',
    'Community Engagement',
    'Quality & Excellence',
  ],
};
