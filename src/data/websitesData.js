/**
 * ============================================================================
 * WEBSITES SHOWCASE DATA
 * ============================================================================
 * To add a new website to your showcase:
 * 1. Copy one of the objects below and paste it at the TOP of the array.
 * 2. Fill in the title, slogan, description, year, category, techStack, links, etc.
 * 3. Place any screenshots or logos in the `/public` folder and reference them here.
 * ============================================================================
 */

export const WEBSITES_DATA = [
    {
        id: "trackway",
        title: "Trackway App",
        slogan: "Where algorithms meet the road.",
        description: "Intelligent route optimization and delivery tracking platform. Real-time apps and smart route calculation get drivers and packages from Point A to Point B the fastest way possible.",
        year: "2026",
        category: "Web Application",
        image: "/trackwaypic.png",
        logo: "/trackway.png",
        techStack: ["React", "Vite", "JavaScript", "HTML", "CSS", "Algorithms"],
        liveUrl: "https://trackwayapp.vercel.app/",
        githubUrl: "https://github.com/Primegotit",
        featured: true,
        status: "Live Production",
        highlights: ["Real-time routing", "High-performance UI", "Responsive across all screens"]
    },
    {
        id: "kostic",
        title: "Kostic POS System",
        slogan: "Built for business, designed for ease.",
        description: "A smart, streamlined Point of Sale system built to keep businesses agile. Manages sales, inventory tracking, analytics, and ultra-fast checkouts in one unified interface.",
        year: "2025",
        category: "Web Application",
        image: "/kosticpic.png",
        logo: "/logo7.png",
        techStack: ["JavaScript", "HTML5", "TailwindCSS", "PHP", "Vercel"],
        liveUrl: "https://kostic.vercel.app/",
        githubUrl: "https://github.com/Primegotit",

    },
    {
        id: "nust-portal",
        title: "School Management System",
        slogan: "Modern excellence, securely locked in.",
        description: "The system allows students and lectures and the admin, to log in , check results, manage students, allocate marks, manage modules and etc. The most important part about this system is that it offers robust security and is impenetrable to hacking or any type of digital maliciuos act.",
        year: "2026",
        category: "Web Application",
        image: "/nust-portal.png",
        logo: "/primegotit logo green big 3.png",
        techStack: ["JavaScript", "HTML5", "CSS", "PHP", "Vercel"],
        liveUrl: "https://nustportal.vercel.app/",
        githubUrl: "https://github.com/Primegotit",

    }

];

export const CATEGORIES = [
    "All",
    "Web Application",
    "Corporate / Agency",
    "Portfolio / Creative"
];
