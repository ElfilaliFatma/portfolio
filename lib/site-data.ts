import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CloudCog,
  Database,
  Globe,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  email: string;
  phone: string;
  skills: string;
};

export type Service = {
  title: string;
  description: string;
  useCase: string;
  deliverables: string[];
  icon: LucideIcon;
};

export type Project = {
  slug: string;
  name: string;
  stack: string[];
  summary: string;
  description: string;
  outcome: string[];
  metrics: string[];
  highlight: string;
  image: string;
  imageCaption: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  context: string;
};

export const company = {
  name: "Fatma & Ibrahim",
  shortDescription:
    "A Tunisia-based portfolio for two Data Science engineering students building web platforms, data products, and AI-powered digital experiences.",
  email: "fatmaezzahra.elfilali@sesame.com",
  location: "Tunisia",
  socialLinks: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

export const navigation: NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Fatma Ezzahra El Filali",
    role: "Data Science Engineering Student",
    email: "fatmaezzahra.elfilali@sesame.com",
    phone: "+216 XXX XXX XXX",
    skills:
      "Web Development, Cybersecurity basics, Data Science & Machine Learning",
  },
  {
    name: "Ibrahim Gaha",
    role: "Data Science Engineering Student",
    email: "ibrahim.gaha@sesame.com",
    phone: "+216 XXX XXX XXX",
    skills:
      "Data Engineering, Web Development, Academic + project experience",
  },
  {
    name: "Melek Briki",
    role: "Data Science Engineering Student",
    email: "melek.briki@sesame.com",
    phone: "+216 XXX XXX XXX",
    skills:
      "Machine Learning, Data Analysis, Web Development, Academic + project experience",
  },
];

export const heroStats = [
  { value: "2", label: "3rd-year engineering students building together" },
  { value: "6", label: "Core capability areas across software, ML, data, and security" },
  { value: "3", label: "Showcase projects with visual mockups and case-study structure" },
];

export const aboutHighlights = [
  "We are two 3rd-year engineering students in Data Science, combining academic rigor with practical project delivery.",
  "Our interests span full-stack web development, data engineering, AI systems, dashboards, and cybersecurity fundamentals.",
  "We like turning technical ideas into polished interfaces, understandable workflows, and clean project storytelling.",
];

export const aboutFacts = [
  {
    title: "Academic Background",
    value: "Data Science Engineering",
    icon: GraduationCap,
  },
  {
    title: "Location",
    value: "Tunisia",
    icon: Globe,
  },
  {
    title: "Project Focus",
    value: "Web, AI, Data, Analytics",
    icon: Sparkles,
  },
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "SQL",
  "Power BI",
  "Scikit-learn",
  "Pandas",
  "PostgreSQL",
  "Docker",
  "GitHub",
];

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Modern frontend and backend development for portfolios, dashboards, admin systems, and service platforms.",
    useCase:
      "Example: a responsive internal portal for registrations, approvals, and document tracking.",
    deliverables: ["Responsive UI", "API integration", "Dashboard pages"],
    icon: Globe,
  },
  {
    title: "Mobile-Friendly Interfaces",
    description:
      "Interfaces designed to feel smooth across phone, tablet, and desktop with attention to clarity and usability.",
    useCase:
      "Example: a mobile-first booking workflow for healthcare, events, or education.",
    deliverables: ["Mobile UX", "Adaptive layouts", "Touch-friendly flows"],
    icon: Smartphone,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Academic and project-based work around intelligent assistants, predictive models, and structured automation.",
    useCase:
      "Example: an assistant or classification workflow that reduces repetitive manual responses.",
    deliverables: ["Model prototyping", "AI workflows", "Prompt-based features"],
    icon: Bot,
  },
  {
    title: "Data Engineering",
    description:
      "Data cleaning, transformation, storage, and pipeline design for reliable reporting and repeatable analytics.",
    useCase:
      "Example: a structured pipeline that prepares institutional data for dashboards and KPI tracking.",
    deliverables: ["ETL logic", "SQL modeling", "Data preparation"],
    icon: CloudCog,
  },
  {
    title: "Analytics & Dashboards",
    description:
      "Clear visual reporting for academic, operational, or business metrics using dashboards and BI tools.",
    useCase:
      "Example: a performance dashboard to monitor engagement, attendance, or departmental activity.",
    deliverables: ["KPI design", "Reporting views", "Decision-ready visuals"],
    icon: BarChart3,
  },
];

export const projects: Project[] = [
  {
    slug: "university-analytics-platform",
    name: "University Analytics Platform",
    stack: ["SSIS", "SQL Server", "Power BI"],
    summary:
      "A sample academic analytics platform that centralizes student data and turns performance trends into decision-ready dashboards.",
    description:
      "This case study shows how fragmented academic records can be modeled into a structured reporting workflow for departments, administrators, and academic follow-up.",
    outcome: [
      "Faster access to academic performance indicators",
      "Cleaner reporting processes with fewer spreadsheet dependencies",
      "A strong example of combining data engineering and data storytelling",
    ],
    metrics: ["12 dashboard widgets", "4 reporting views", "1 centralized data model"],
    highlight: "Academic dashboard and data warehouse concept",
    image: "/projects/university-analytics.svg",
    imageCaption:
      "Example visual: a dashboard-style mockup with KPI cards, trend lines, and reporting panels for university performance tracking.",
  },
  {
    slug: "smart-health-app",
    name: "Smart Health App",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    summary:
      "A healthcare-oriented mobile product concept for appointment booking, patient follow-up, and clinic-side organization.",
    description:
      "This project highlights how a mobile interface, backend scheduling logic, and admin workflows can work together in one connected healthcare experience.",
    outcome: [
      "A more structured and mobile-friendly appointment journey",
      "Reduced friction for clinic operations and follow-up communication",
      "A strong example of full-stack product thinking for healthcare use cases",
    ],
    metrics: ["3 user roles", "1 mobile booking flow", "24/7 self-service concept"],
    highlight: "Mobile-first product concept for healthcare operations",
    image: "/projects/smart-health.svg",
    imageCaption:
      "Example visual: a healthcare app mockup with booking screens, patient profile cards, and clinic management modules.",
  },
  {
    slug: "ai-chat-assistant",
    name: "AI Chat Assistant",
    stack: ["OpenAI API", "Next.js", "TypeScript"],
    summary:
      "An AI-powered assistant concept designed to answer frequent questions, guide users, and automate first-line support.",
    description:
      "This case study demonstrates how conversational UI can be integrated into a modern web product to reduce repetitive support work and improve responsiveness.",
    outcome: [
      "A scalable first-response layer for common support questions",
      "A polished example of AI integration inside a modern web product",
      "A showcase use case combining frontend, API thinking, and automation",
    ],
    metrics: ["1 conversational UI", "3 guided support states", "Instant response concept"],
    highlight: "Conversational AI interface for support automation",
    image: "/projects/ai-chat-assistant.svg",
    imageCaption:
      "Example visual: an AI support interface with chat states, quick answers, and routing cues for customer-service scenarios.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Sparkles,
    description: "Interfaces that feel modern, responsive, and easy to navigate.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    icon: Wrench,
    description: "Practical service and API logic for modern application flows.",
    items: ["Node.js", "REST APIs", "SQL", "PostgreSQL", "Auth basics"],
  },
  {
    title: "AI & ML",
    icon: Bot,
    description: "Project-based work around predictive systems and intelligent workflows.",
    items: ["Python", "Machine Learning", "Model prototyping", "OpenAI API"],
  },
  {
    title: "Data",
    icon: Database,
    description: "Cleaning, transforming, and presenting data in a useful way.",
    items: ["Power BI", "Data cleaning", "ETL thinking", "Dashboards", "Analytics"],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    description: "Security awareness and foundational best practices.",
    items: ["Security basics", "Access control concepts", "Safe development habits"],
  },
  {
    title: "Tools",
    icon: Blocks,
    description: "Collaboration and deployment tools that support project delivery.",
    items: ["GitHub", "Docker", "Deployment basics", "Version control"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Project Supervisor Example",
    role: "Academic Mentor",
    company: "University Setting",
    quote:
      "Their strength is the combination of technical curiosity and the ability to present complex work in a clear, organized way.",
    context: "Academic project review",
  },
  {
    name: "Collaboration Example",
    role: "Teammate",
    company: "Student Project",
    quote:
      "They communicate well, divide work effectively, and consistently turn ideas into polished deliverables.",
    context: "Team collaboration feedback",
  },
  {
    name: "Client-Style Example",
    role: "SME Founder",
    company: "Prototype Engagement",
    quote:
      "Even at an early stage in their careers, they bring structure, professionalism, and thoughtful execution to digital projects.",
    context: "Prototype collaboration",
  },
];

export const differentiators = [
  {
    title: "Academic depth with practical execution",
    description:
      "We combine engineering coursework and project experience to build solutions that are technically grounded and presentation-ready.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Cross-disciplinary mindset",
    description:
      "Our work connects software engineering, data science, analytics, and security awareness instead of treating them as separate silos.",
    icon: Sparkles,
  },
  {
    title: "Designed to explain as well as impress",
    description:
      "We value clarity in UI, structure in data, and clean storytelling in the way projects are presented and documented.",
    icon: BarChart3,
  },
];
