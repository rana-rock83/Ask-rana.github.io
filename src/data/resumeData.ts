export interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  outcomes: string[];
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export const persona = {
  name: "Rana Munshi",
  role: "Sr UI/UX Designer",
  location: "Noida",
  email: "ranamunshi2001@gmail.com",
  phone: "9990128346",
  linkedin: "https://linkedin.com/in/rana-munshi-6049976",
  behance: "https://behance.net/ranamunshi7f5f",
  summary:
    "Dynamic and innovative designer with a strong focus on user-centered design principles, leveraging empathy and curiosity to create impactful solutions that enhance user experiences and drive engagement.",
};

export const skills: Record<string, string[]> = {
  "Core Design Expertise": [
    "UI/UX Design",
    "Product Design",
    "Interaction Design",
    "Responsive Design",
    "Visual Hierarchy",
    "Micro-interactions",
  ],
  "Design Process & Strategy": [
    "Critical Thinking & Problem Solving",
    "Challenge Identification",
    "Solution Evaluation",
    "Risk Mitigation",
    "UX Research",
    "Information Architecture",
    "Persona Creation",
    "User Flows",
  ],
  "Design Implementation & Systems": [
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "UX Writing",
    "Accessibility Design",
  ],
  "Specialized & Emerging Design": ["Ethical AI Design", "Web 3.0"],
};

export const experiences: Experience[] = [
  {
    title: "Design Team Manager | Lead - UI/UX Designer",
    company: "Rapid Innovation",
    period: "Apr 2021 – Present",
    bullets: [
      "Led and mentored a team of product and brand designers, fostering a culture of innovation and continuous improvement.",
      "Directed the end-to-end design lifecycle for different projects.",
      "Developed and implemented design strategies that aligned with business goals, enhancing overall brand consistency and user experience.",
      "Streamlined design processes and workflows, improving team efficiency by 90%.",
      "Collaborated cross-functionally with product, engineering, and marketing to deliver high-impact design solutions.",
    ],
  },
  {
    title: "Design Team Lead & Assistant Project Manager",
    company: "Wildnet Technologies",
    period: "Nov 2013 – Apr 2021",
    bullets: [
      "Led and mentored a team of 3 web designers, fostering a collaborative environment to deliver high-impact web solutions.",
      "Contributed hands-on design expertise to key projects, ensuring high-quality, user-centered solutions.",
      "Assisted the CTO in managing critical projects, coordinating timelines, resources, and communication across teams.",
      "Streamlined project workflows and facilitated cross-functional collaboration.",
    ],
  },
  {
    title: "Web Designer - Team Lead",
    company: "Xceed IT Solutions",
    period: "Jul 2008 – Nov 2013",
    bullets: [
      "Designed and developed responsive, user-centric websites and web applications.",
      "Oversaw the entire web design lifecycle, from concept and wireframing to final implementation and optimization.",
      "Championed best practices in UI/UX design, accessibility, and front-end development.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Navori",
    description:
      "A leading global provider of interactive digital signage software solutions, specializing in empowering businesses to create engaging visual communications.",
    outcomes: [
      "Up to 30% increase in viewer attention through AI-powered audience measurement.",
      "5-15% uplift in impulse purchases via dynamic, timely promotions.",
      "50% reduction in content deployment time through intuitive CMS.",
    ],
  },
  {
    name: "Rattan Furniture Fairy",
    description:
      "E-commerce platform for premium rattan furniture with immersive product presentations and streamlined filtering.",
    outcomes: [
      "Intuitive navigation with structured categories and sub-categories.",
      "High-quality 360-degree product views and lifestyle imagery.",
      "Responsive design optimized across all devices.",
    ],
  },
  {
    name: "Xstrela — Game Portal",
    description:
      "A next-gen web gaming platform where users play, earn crypto rewards, and trade in-game assets via blockchain.",
    outcomes: [
      "Simplified crypto wallet onboarding for mainstream gamers.",
      "Intuitive in-game NFT marketplace for seamless asset trading.",
      "Immersive, responsive interface integrating blockchain without disrupting gameplay.",
    ],
  },
  {
    name: "Slab",
    description:
      "A groundbreaking phygital marketplace connecting real-world products with the metaverse through RFID-enabled NFT minting.",
    outcomes: [
      "15-30% boost in perceived value of physical goods through NFT pairing.",
      "50% reduction in digital asset creation complexity for brands.",
      "Seamless avatar integration with high visual fidelity.",
    ],
  },
  {
    name: "Tractor Tuesday",
    description:
      "An online auction platform for buying and selling agricultural machinery with zero-commission for sellers.",
    outcomes: [
      "10-25% faster sale cycles compared to traditional methods.",
      "5-15% cost savings for buyers on equipment purchases.",
      "30% reduction in post-sale disputes through transparent listings.",
    ],
  },
  {
    name: "Ruh AI",
    description:
      "Helps teams build AI agents (marketing assistants, content bots, support agents) by integrating with documents, CRM, and helpdesk.",
    outcomes: [
      "Reusable design system components (modals, cards, sidebars).",
      "Multi-step bot configuration UX flow.",
      "Figma tokens for seamless developer handoff.",
    ],
  },
];

export const education: Education[] = [
  {
    title: "Certification in Advanced Figma UI/UX Design",
    institution: "Udemy",
    period: "Apr 2025 – May 2025",
    description: "Advanced Figma features and best practices for production-ready designs.",
  },
  {
    title: "Bachelor in Arts",
    institution: "Delhi University",
    period: "May 2003 – May 2006",
    description: "Broad education emphasizing critical thinking, analytical skills, and communication.",
  },
  {
    title: "Diploma for Web & Graphic Design",
    institution: "Arena Multimedia",
    period: "Jun 2004 – Sep 2005",
    description: "Industry-relevant skills for careers in digital design.",
  },
];

export type ChipId = "about" | "experience" | "skills" | "projects" | "education" | "contact" | "resume";

export interface Chip {
  id: ChipId;
  label: string;
  icon: string;
}

export const chips: Chip[] = [
  { id: "about", label: "About Rana", icon: "User" },
  { id: "experience", label: "Work Experience", icon: "Briefcase" },
  { id: "skills", label: "Skills", icon: "Zap" },
  { id: "projects", label: "Projects", icon: "FolderOpen" },
  { id: "education", label: "Education", icon: "GraduationCap" },
  { id: "contact", label: "Contact", icon: "Mail" },
  { id: "resume", label: "Download Resume", icon: "Download" },
];
