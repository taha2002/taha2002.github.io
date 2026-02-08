
import { Category, Education, WorkExperience, FreelanceProject, TechStackItem, BlogPost } from './types';

export const LINKS = {
  "github": "https://github.com/taha2002",
  "fiverr": "https://www.fiverr.com/tahabouras",
  "upwork": "https://www.upwork.com/freelancers/~01207c7496867bfeaf?mp_source=share",
  "linkedin": "https://www.linkedin.com/in/taha-bouras/",
  "email": "mailto:tahadevbou@gmail.com",
  "whatsapp": "https://wa.me/213542085561"
}
export const INTRO_TXT = [
  "> INITIATING SYSTEM BOOT SEQUENCE...",
  "> MOUNTING VIRTUAL FILESYSTEM (VFS)...",
  "> LOADING KERNEL MODULES [####################] 100%",
  "> ESTABLISHING SECURE CONNECTION...",
  "> ACCESS GRANTED: GUEST SESSION ACTIVE."
];

export const TECH_STACK: TechStackItem[] = [
  {
    category: "Languages & Core",
    items: ["Python", "PHP", "TypeScript", "JavaScript", "SQL", "Bash"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "React", "FastAPI", "Tailwind CSS", "WordPress Core", "WooCommerce", "Supabase", "Remix", "Expo"]
  },
  {
    category: "Scraping & Security",
    items: ["Burp Suite", "Selenium", "BeautifulSoup", "Cloudflare Bypass", "Antibot Detection", "Android Reverse Eng.", "ZenRows", "Origin IP Finder"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "FFmpeg", "HLS Streaming", "LangChain", "n8n", "OpenTelemetry", "Postman", "Linux"]
  }
];

export const SKILL_DATA = [
  { subject: 'Backend Eng. (PHP/Python)', A: 130, fullMark: 150 },
  { subject: 'Data Eng. (Scraping/API)', A: 145, fullMark: 150 },
  { subject: 'System Architecture', A: 125, fullMark: 150 },
  { subject: 'Modern Frontend (Next/TS)', A: 115, fullMark: 150 },
  { subject: 'Security / Reverse Eng.', A: 120, fullMark: 150 },
  { subject: 'Ind. Maintenance', A: 90, fullMark: 150 },
];

export const EDUCATION: Education[] = [
  {
    degree: "Master’s Degree in Industrial Maintenance",
    institution: "University of Ghardaia",
    period: "2023 – 2025",
    status: "Graduated with Honors",
    description: "Published research on 'Machine Learning Diagnosis-Based of HVDC Faults' (DOI: 10.1109/ICAAID68975.2025.11358232), bridging industrial systems with advanced AI diagnostics.",
    link: "https://ieeexplore.ieee.org/document/11358232"
  },
  {
    degree: "Licence (Bachelor's) in Industrial Maintenance",
    institution: "University of Ghardaia",
    period: "2020 – 2023",
    status: "Graduated"
  }
];

export const EXPERIENCE: WorkExperience[] = [
  {
    company: "Apollo Digital Solution",
    role: "Senior Backend & Integration Engineer",
    location: "Algiers / Remote",
    period: "2021 – Present",
    summary: "Lead architect for complex WordPress ecosystems and external system integrations. Responsible for bridging legacy sales software with modern web frontends, ensuring data consistency across inventory/pricing, and overseeing security protocols like HLS video encryption for educational platforms.",
    projects: [
      {
        title: "Sales Software Integration",
        details: "Built a bi-directional sync engine for gross wholesalers, handling thousands of product SKUs and order states in real-time.",
        stack: ["PHP", "WordPress", "SQL"]
      },
      {
        title: "LMS Video Encryption (Becos Online)",
        details: "Designed a DRM-like video protection system using FastAPI and FFmpeg to encrypt content chunks, preventing unauthorized downloads.",
        stack: ["FastAPI", "FFmpeg", "HLS"]
      },
      {
        title: "PIM Database API",
        details: "Engineered a high-performance API for a Product Information Management system to serve localized data to multiple storefronts.",
        stack: ["FastAPI", "Python"]
      },
      {
        title: "Laptop Data Pipeline",
        details: "Automated the extraction and cleaning of technical specs from multiple supplier sources using advanced scraping capabilities.",
        stack: ["Python", "Selenium", "Cloudflare Bypass"]
      }
    ]
  },
  {
    company: "Morrbiz",
    role: "Full Stack SaaS Engineer",
    location: "Malaysia (Remote)",
    period: "June 2023 – Dec 2025",
    summary: "Core developer for scalable SaaS applications using Next.js. Full-lifecycle responsibility including database schema design, real-time chat implementation, e-commerce logic, n8n automation workflows, and AI Agent development for business intelligence.",
    projects: [
      {
        title: "AmogaAppDash",
        details: "A comprehensive SaaS dashboard unifying Chat, E-commerce, and Delivery logistics into a single view.",
        stack: ["Next.js", "TypeScript", "Supabase", "OpenTelemetry"]
      },
      {
        title: "AI Agent E-commerce Integrator",
        details: "Developed an AI-powered bridge connecting POS systems with natural language queries using LangChain.",
        stack: ["Expo", "LangChain", "AI SDK"]
      },
      {
        title: "Shopify App (Gleaners Food Bank)",
        details: "Custom donor management application with a simplified Point of Sale interface.",
        stack: ["Shopify API", "Remix", "React"]
      },
      {
        title: "WooMorrIntegration",
        details: "Enterprise-grade plugin synchronizing WooCommerce stores with external ERPs.",
        stack: ["WordPress", "PHP"]
      }
    ]
  }
];

export const FREELANCE_PROJECTS: FreelanceProject[] = [
  // {
  //   title: "Gallery & System Modal Example",
  //   date: "2025",
  //   category: Category.SAAS,
  //   description: "A showcase template demonstrating the internal gallery view. Click the eye button below to explore architectural diagrams and interface mocks.",
  //   techStack: ["React", "System Design", "UI/UX"],
  //   featured: true,
  //   gallery: [
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
  //     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
  //     "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
  //   ],
  //   detailedDescription: "This is the expanded view for complex projects. It supports long-form text to explain architectural decisions, challenges faced, and specific features that cannot be summarized in a card. \n\nThe gallery below renders high-resolution assets, allowing potential clients or recruiters to see the actual interface or code structure without needing to leave the portfolio site."
  // },
  {
    title: "AmogaApp Dashboard",
    date: "2023 - Dec 2025",
    category: Category.SAAS,
    description: "A centralized SaaS platform for business management including real-time chat, order tracking, and delivery logistics.",
    techStack: ["Next.js", "Supabase", "TypeScript"],
    featured: true
  },
  {
    title: "AI POS Integrator",
    date: "2025",
    category: Category.SAAS,
    description: "Mobile-first AI agent allowing store owners to query inventory and sales data via voice/text.",
    techStack: ["Expo", "LangChain", "OpenAI"],
  },
  {
    title: "Large-Scale E-commerce Sales Monitor",
    date: "Feb 2023",
    category: Category.SCRAPING,
    description: "Monitored 450k+ products 6x/day to calculate sales velocity and market trends for a major African platform.",
    techStack: ["Python", "BS4", "Antibot Detection"],
    featured: true
  },
  {
    title: "HLS Video Streaming Security",
    date: "Nov 2024",
    category: Category.SCRAPING,
    description: "Implemented live watermarking and dynamic User ID injection into video streams to trace leaks.",
    techStack: ["HLS", "Video Engineering", "Python"],
    featured: true
  },
  {
    title: "Real Estate Data Pipeline",
    date: "May 2024",
    category: Category.SCRAPING,
    description: "Reverse engineered private Android APIs using Burp Suite to extract reliable real estate market data.",
    techStack: ["Burp Suite", "Android Reverse Eng", "Python"]
  },
  {
    title: "Secure PDF Extractor",
    date: "Jan 2023",
    category: Category.SCRAPING,
    description: "Bypassed Cloudflare and viewer protections to extract embedded text content from secure documents.",
    techStack: ["Python", "BS4", "Dropbox API"]
  },
  {
    title: "Business Data Aggregator",
    date: "2024",
    category: Category.SCRAPING,
    description: "Aggregated contractor data from Yelp, Angi, and BBB using origin IP discovery to bypass rate limits.",
    techStack: ["Python", "Origin IP Finder", "ZenRows"]
  },
  {
    title: "Legal API Integration",
    date: "Dec 2022",
    category: Category.API,
    description: "Custom WordPress plugin connecting to government APIs for real-time legal document verification.",
    techStack: ["PHP", "WordPress", "SOAP/REST"]
  },
  {
    title: "Gaming Credit Automation",
    date: "Feb 2023",
    category: Category.API,
    description: "WooCommerce extension for instant game top-ups with fraud verification via Stripe.",
    techStack: ["PHP", "WooCommerce", "Stripe API"]
  },
  {
    title: "Cross-Site Reseller Bridge",
    date: "Jul 2023",
    category: Category.API,
    description: "Architected a distributed dropshipping network connecting multiple reseller sites to a central inventory hub.",
    techStack: ["PHP", "WooCommerce API", "Cron"]
  },
  {
    title: "Clarilab Credit Automation",
    date: "Jun 2023",
    category: Category.API,
    description: "Automated B2C credit checks and role assignments based on financial API responses.",
    techStack: ["PHP", "OAuth 2.0", "External API"]
  }
];
