import { Project, Experience, Competency } from './types';

export const PERSONAL_INFO = {
  name: "Umer Saddiq",
  title: "Expert Flutter Developer",
  location: "Multan, Pakistan",
  phone: "+92-301-53-77-566",
  email: "umersaddiq49@gmail.com",
  github: "https://github.com/umersaddiq",
  linkedin: "https://linkedin.com/in/umer-saddiq-86234b179",
  about: "Flutter Developer with more than 4 years of experience in the Mobile App Development industry. Expert in designing and developing a wide range of applications from scratch and implementing key features seamlessly. Proficient in the Flutter ecosystem, including Dart, and advanced state management using Riverpod, BLoC, and GetX. Experienced in integrating RESTful APIs, Web Sockets, Firebase, Supabase, and specialized mobile functionalities such as Real-Time Tracking, Google Maps, Stripe, and IAPS."
};

export const COMPETENCIES: Competency[] = [
  {
    title: "Cross-Platform Development",
    description: "Building high-performance, user-centric Mobile and Web applications using Flutter and Dart."
  },
  {
    title: "State Management",
    description: "Proficient in implementing scalable architectures with Riverpod, BLoC, and GetX."
  },
  {
    title: "APIs & Backend Integration",
    description: "Developing seamless connections via Restful APIs, Web Sockets, and Firebase services."
  },
  {
    title: "Location & Mapping Services",
    description: "Advanced implementation of Google Maps and Real-Time tracking functionality."
  },
  {
    title: "Payment & Monetization",
    description: "Integrating secure transaction systems, including Stripe and In-App Purchases (IAPS)."
  },
  {
    title: "App Optimization",
    description: "Skilled in using GoRouter for navigation, Localization for global reach, oAuth, Web Scrapping, and Home Widgets."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "SparkoSol",
    role: "Mobile Application Developer",
    period: "01/2022 – Present",
    location: "Multan, Pakistan",
    description: [
      "Designed and developed a wide range of cross-platform applications from scratch.",
      "Integrated key features seamlessly within the mobile application development lifecycle.",
      "Using state management solutions and real-time data tracking to enhance app performance."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "King of the Curve",
    description: [
      "Developed a gamified test-prep platform for MCAT, NCLEX, and STEP exams, scaling to 500,000+ downloads and generating $2M in revenue.",
      "Developed a full-length mock exam feature that replicates the real MCAT exam environment.",
      "Engineered a 'Classroom' feature with AI integration to automate quiz generation."
    ],
    technologies: ["Riverpod", "Audio Player", "Video Player", "Home Widgets", "Firebase", "Hive", "RevenueCat", "CustomerIO"],
    platforms: ["Play Store", "App Store", "Web"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.kingofthecurve.kingofthecurve&hl=en_US" },
      { label: "App Store", url: "https://apps.apple.com/us/app/mcat-king-of-the-curve/id1534662918" },
      { label: "Web", url: "https://mcat.kingofthecurve.org/" }
    ]
  },
  {
    title: "365 CEO Moves",
    description: [
      "Developed a daily content delivery platform for executives and entrepreneurs featuring actionable leadership strategies.",
      "Architected a serverless backend using Supabase and PostgreSQL.",
      "Implemented native In-App Purchase (IAP) flows using StoreKit and Google Play Billing."
    ],
    technologies: ["Riverpod", "Supabase", "PostgreSQL", "Supabase Edge Functions", "StoreKit", "Google Play Billing", "GoRouter"],
    platforms: ["Play Store", "App Store"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/365-ceo-moves/id6756650881" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.sparkosol.boss_app&hl=en&gl=US" }
    ]
  },
  {
    title: "Al Sila",
    description: [
      "Developed a robust Quran reading experience with multi-reciter audio streaming support.",
      "Implemented real-time prayer timing with automated local notification alerts.",
      "Leveraged Google Maps API to implement a 'Nearby Mosques' locator."
    ],
    technologies: ["Local Notifications", "Home Widgets", "GoRouter", "Google Maps API"],
    platforms: ["App Store", "Web"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/al-sila/id1546607117" },
      { label: "Web", url: "https://al-sila.web.app/home" }
    ]
  },
  {
    title: "UrbiHunt",
    description: [
      "Curated adventures that guide users through cities with multiple Enigmas (puzzles).",
      "Integrated with real-time location services for automatic landmark detection.",
      "Track rankings and compare performance with other explorers."
    ],
    technologies: ["BLoC", "Localization", "Firebase", "Freezed", "Real Time Database", "IAPs"],
    platforms: ["Play Store", "App Store"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/urbihunt/id1546785042" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.urbihunt.urbihunt&hl=en&gl=US" }
    ]
  },
  {
    title: "ElHappy Breath",
    description: [
      "Integrated Firebase Authentication supporting Google, Apple, and Facebook sign-in providers.",
      "Developed a robust curriculum delivery system integrating custom video players and YouTube API support.",
      "Ensured a secure and flexible user entry point for high-quality educational content."
    ],
    technologies: ["Firebase", "Audio Player", "YouTube API"],
    platforms: ["App Store"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/el-happybreath/id6447536531" }
    ]
  },
  {
    title: "ITS Stock Admin Panel",
    description: [
      "Inventory & Stock Management system to monitor levels across various products using serial numbers.",
      "Dynamic management of Regions and Branches with support for multiple user tiers.",
      "Comprehensive logging of stock changes and user actions for precision tracking."
    ],
    technologies: ["GoRouter", "Firebase", "Firebase Admin", "Hive"],
    platforms: ["Web"],
    links: [
      { label: "Web", url: "https://its-stocks-admin.web.app/" }
    ]
  },
  {
    title: "WallStock",
    description: [
      "Designed and implemented a dedicated admin interface for managing extensive wallpaper collections.",
      "Developed a dynamic categorization system for administrators.",
      "Engineered a robust service layer using Cloud Firestore for real-time updates."
    ],
    technologies: ["GoRouter", "Firebase", "Cloud Firestore"],
    platforms: ["Web"],
    links: [
      { label: "Web", url: "https://admin-wallstock.web.app/" },
      { label: "GitHub", url: "https://github.com/umersaddiq/wallstock_admin" }
    ]
  },
  {
    title: "CarsComm",
    description: [
      "A centralized system for managing vehicle portfolios, ownership history, and secure vehicle reassignment.",
      "A secure media-enabled storage module for digitizing essential vehicle documents.",
      "A sophisticated security layer allowing users to flag vehicles as stolen."
    ],
    technologies: ["Google Maps", "Hive", "Firebase", "RESTful APIs", "Deep Links", "Azure Storage"],
    platforms: ["Australian Region Only"],
    links: [
      { label: "Web", url: "https://carscomm.framer.website/" }
    ]
  }
];
