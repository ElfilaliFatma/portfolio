import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  Globe,
  GraduationCap,
  MessageSquareCode,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  specialization: string;
  bio: string;
  email: string;
  phone: string;
  skills: string[];
  linkedin: string;
  github: string;
  photo: string;
  initials: string;
  color: string;
};

export type Service = {
  title: string;
  description: string;
  value: string;
  useCase: string;
  deliverables: string[];
  icon: LucideIcon;
  color: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
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
  level: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  context: string;
  rating: number;
};

export type WhyChooseUs = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const company = {
  name: "Vertex Lab",
  tagline: "AI · Data Science · Software Engineering",
  shortDescription:
    "A Tunisia-based software engineering team building AI-powered products, data platforms, and modern digital solutions for clients worldwide.",
  email: "fatmaezzahra.elfilali@sesame.com",
  location: "Tunisia",
  socialLinks: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

export const navigation: NavigationItem[] = [
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "CVs", href: "/#cvs" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Fatma Ezzahra El Filali",
    role: "AI & Full-Stack Engineer",
    specialization: "Machine Learning / Web Development / Cybersecurity",
    bio: "Builds end-to-end products that connect machine learning, secure APIs, and polished web interfaces. Her experience spans predictive modeling, NLP, computer vision, and production-minded software delivery.",
    email: "fatmaezzahra.elfilali@sesame.com",
    phone: "+216 XXX XXX XXX",
    skills: ["Python", "TensorFlow", "Django", "Angular", "Spring Boot", "AWS"],
    linkedin: "#",
    github: "#",
    photo: "/team/fatma.png",
    initials: "FE",
    color: "indigo",
  },
  {
    name: "Ibrahim Gaha",
    role: "Data Engineer & Backend Engineer",
    specialization: "Data Engineering / APIs / Cloud",
    bio: "Designs backend systems and structured data workflows for analytics-heavy platforms. His work combines Python and Java engineering, API design, ETL thinking, and cloud deployment across AWS environments.",
    email: "ibrahim.gaha@sesame.com",
    phone: "+216 XXX XXX XXX",
    skills: ["Python", "Java", "Spring Boot", "GraphQL", "PostgreSQL", "AWS"],
    linkedin: "#",
    github: "#",
    photo: "/team/ibrahim.png",
    initials: "IG",
    color: "violet",
  },
  {
    name: "Melek Briki",
    role: "ML Engineer & Data Analyst",
    specialization: "Machine Learning / Analytics / Data Engineering",
    bio: "Transforms raw data into useful insights through machine learning, BI dashboards, and big-data tooling. She bridges model experimentation, analytics storytelling, and implementation-ready engineering.",
    email: "melek.briki@sesame.com",
    phone: "+216 XXX XXX XXX",
    skills: ["Scikit-learn", "PySpark", "Power BI", "Django", "Spring Boot", "MongoDB"],
    linkedin: "#",
    github: "#",
    photo: "/team/melek.png",
    initials: "MB",
    color: "emerald",
  },
];

export const heroStats = [
  { value: "3", label: "Engineers on the team" },
  { value: "6", label: "Service areas" },
  { value: "25+", label: "Technologies across the stack" },
  { value: "3", label: "Delivered projects" },
];

export const aboutHighlights = [
  "Data Science & AI engineering with end-to-end delivery — from model design to production-ready interfaces.",
  "Full-stack software engineering: modern web frontends, robust backends, and reliable database systems.",
  "A cross-functional team covering data pipelines, ML models, analytics dashboards, and cloud-ready deployments.",
];

export const aboutFacts = [
  {
    title: "Engineering Background",
    value: "Data Science & AI",
    icon: GraduationCap,
  },
  {
    title: "Based In",
    value: "Tunisia · Remote-Ready",
    icon: Globe,
  },
  {
    title: "Focus Areas",
    value: "AI · Web · Data · Cloud",
    icon: Sparkles,
  },
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Java",
  "SQL",
  "Spring Boot",
  "Django",
  "Angular",
  "REST APIs",
  "GraphQL",
  "TensorFlow",
  "Scikit-learn",
  "PySpark",
  "Power BI",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "AWS",
  "GitHub Actions",
  "Linux",
];

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Modern, performant web applications built with the latest frameworks. From landing pages to complex SaaS platforms — designed for both users and search engines.",
    value: "Reach more clients and deliver a flawless digital experience.",
    useCase: "Internal portals, dashboards, admin systems, service platforms.",
    deliverables: ["Responsive UI & UX", "API & backend integration", "Admin dashboards", "SEO-ready structure"],
    icon: Globe,
    color: "indigo",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent systems that automate decisions, predict outcomes, and surface insights. We build ML models and integrate AI capabilities directly into your product.",
    value: "Automate repetitive work and make smarter, data-backed decisions.",
    useCase: "Predictive models, recommendation engines, AI-powered features.",
    deliverables: ["Model training & evaluation", "AI feature integration", "Automation workflows", "NLP & classification"],
    icon: Bot,
    color: "violet",
  },
  {
    title: "Data Engineering",
    description:
      "Reliable data pipelines and infrastructure that collect, transform, and store your data in a structured, analytics-ready format.",
    value: "Turn raw data into a clean, trustworthy foundation for decisions.",
    useCase: "ETL pipelines, data warehouses, KPI reporting foundations.",
    deliverables: ["ETL pipeline design", "SQL data modeling", "Data cleaning & prep", "Warehouse architecture"],
    icon: Database,
    color: "cyan",
  },
  {
    title: "Analytics & Dashboards",
    description:
      "Interactive dashboards and visual reports that make your data readable for everyone — from operations teams to executives.",
    value: "See what's working, spot problems early, and move faster.",
    useCase: "Business intelligence dashboards, performance KPI tracking.",
    deliverables: ["Power BI / BI dashboards", "KPI design", "Reporting automation", "Decision-ready visuals"],
    icon: BarChart3,
    color: "emerald",
  },
  {
    title: "Mobile-Friendly Interfaces",
    description:
      "Interfaces built to feel smooth on every device. Whether it's a mobile-first product or responsive redesign, we ensure touch-friendly, accessible experiences.",
    value: "Capture mobile users without compromising the desktop experience.",
    useCase: "Healthcare booking, e-commerce flows, educational platforms.",
    deliverables: ["Mobile-first design", "Cross-device testing", "Touch-friendly flows", "Progressive enhancement"],
    icon: Smartphone,
    color: "rose",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deployment, containerization, and automation to make your applications production-ready, scalable, and maintainable with minimal manual overhead.",
    value: "Ship faster, deploy confidently, and scale without friction.",
    useCase: "Containerized apps, CI/CD pipelines, cloud-hosted platforms.",
    deliverables: ["Docker containerization", "CI/CD pipeline setup", "Cloud deployment", "Environment configuration"],
    icon: CloudCog,
    color: "amber",
  },
];

export const projects: Project[] = [
  {
    slug: "university-analytics-platform",
    name: "University Analytics Platform",
    category: "Data",
    stack: ["SSIS", "SQL Server", "Power BI"],
    summary:
      "A centralized academic analytics platform that consolidates student performance data into decision-ready dashboards for administrators and departments.",
    description:
      "Fragmented academic records modeled into a structured data warehouse, driving actionable reporting workflows for performance tracking and follow-up.",
    outcome: [
      "Consolidated multiple data sources into a single reporting model",
      "Reduced manual reporting effort with automated dashboard refreshes",
      "Enabled department-level performance tracking with drill-down views",
    ],
    metrics: ["12 dashboard KPIs", "4 reporting views", "1 unified data model"],
    highlight: "Academic data warehouse & BI dashboard",
    image: "/projects/university-analytics.svg",
    imageCaption:
      "Dashboard mockup with KPI cards, trend lines, and department performance panels built on a centralized SQL data model.",
  },
  {
    slug: "smart-health-app",
    name: "Smart Health App",
    category: "Web",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    summary:
      "A mobile-first healthcare platform handling appointment booking, patient follow-up, and clinic-side scheduling in one connected product.",
    description:
      "End-to-end product design covering a patient-facing mobile interface, backend scheduling engine, and admin panel for clinic management.",
    outcome: [
      "Streamlined appointment booking into a self-service mobile flow",
      "Reduced admin overhead with automated reminders and status updates",
      "Unified patient, clinic, and admin roles in a single backend system",
    ],
    metrics: ["3 user roles", "1 mobile booking flow", "Full-stack architecture"],
    highlight: "Mobile-first healthcare product · Full-stack",
    image: "/projects/smart-health.svg",
    imageCaption:
      "Healthcare app mockup showing booking screens, patient profiles, appointment history, and the clinic admin module.",
  },
  {
    slug: "ai-chat-assistant",
    name: "AI Chat Assistant",
    category: "AI",
    stack: ["OpenAI API", "Next.js", "TypeScript"],
    summary:
      "An AI-powered support assistant that handles frequent queries, guides users through workflows, and automates first-line responses for web products.",
    description:
      "Conversational UI integrated into a modern Next.js product, using the OpenAI API to reduce repetitive support work and improve response speed.",
    outcome: [
      "Automated first-response handling for common user questions",
      "Integrated seamlessly into the existing web application UI",
      "Demonstrated scalable AI integration pattern for future product features",
    ],
    metrics: ["Conversational UI", "3 guided support flows", "OpenAI API integration"],
    highlight: "AI-powered support automation · Next.js",
    image: "/projects/ai-chat-assistant.svg",
    imageCaption:
      "AI chat interface showing conversation states, quick-reply suggestions, and support routing for web product integration.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Web Interfaces",
    icon: Sparkles,
    level: "Advanced",
    description: "Modern interfaces with responsive layouts, strong UX structure, and production-ready frontend tooling.",
    items: ["Next.js", "React", "TypeScript", "Angular", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    icon: Wrench,
    level: "Advanced",
    description: "Robust application logic, secure API design, and backend services ready for real-world business workflows.",
    items: ["Spring Boot", "Django", "Node.js", "REST APIs", "GraphQL", "JWT/Auth"],
  },
  {
    title: "AI & Machine Learning",
    icon: Bot,
    level: "Advanced",
    description: "Academic and project experience spanning classical ML, deep learning, and intelligent automation features.",
    items: ["Python", "Scikit-learn", "TensorFlow", "NLP", "Computer Vision", "Predictive Modeling"],
  },
  {
    title: "Data Engineering & Big Data",
    icon: Database,
    level: "Advanced",
    description: "Structured data pipelines, warehouse thinking, and scalable processing for analytics-ready systems.",
    items: ["SQL", "PostgreSQL", "MySQL", "PySpark", "HDFS", "ETL Pipelines"],
  },
  {
    title: "Analytics & Visualization",
    icon: BarChart3,
    level: "Proficient",
    description: "Clear reporting layers that turn raw metrics into readable dashboards and decision-ready insights.",
    items: ["Power BI", "DAX", "Matplotlib", "Seaborn", "KPI Dashboards", "Reporting"],
  },
  {
    title: "DevOps & Cloud",
    icon: Blocks,
    level: "Proficient",
    description: "Deployment and automation tooling that helps projects move from local development to stable production environments.",
    items: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Linux", "Git"],
  },
  {
    title: "Cybersecurity & Systems",
    icon: ShieldCheck,
    level: "Foundational",
    description: "Security-aware engineering practices covering infrastructure awareness, secure APIs, and system hardening basics.",
    items: ["CCNA", "Vulnerability Detection", "Secure APIs", "IAM Basics", "Endpoint Hardening", "Network Basics"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Academic Supervisor",
    role: "Project Mentor",
    company: "Engineering School",
    quote:
      "Their ability to combine technical rigor with clear, structured presentation sets them apart. The work is clean, well-documented, and demonstrates genuine engineering maturity.",
    context: "Academic project review",
    rating: 5,
  },
  {
    name: "Team Collaborator",
    role: "Fellow Engineer",
    company: "Group Project",
    quote:
      "Working with this team was seamless. They communicate clearly, divide responsibilities well, and consistently deliver polished outputs — even under tight timelines.",
    context: "Team collaboration",
    rating: 5,
  },
  {
    name: "Early Stakeholder",
    role: "Product Owner",
    company: "Prototype Engagement",
    quote:
      "They brought structure, professionalism, and solid technical execution to a complex product brief. The result was far beyond what we expected at this stage.",
    context: "Freelance prototype",
    rating: 5,
  },
];

export const whyChooseUs: WhyChooseUs[] = [
  {
    title: "Engineering-Grade Quality",
    description:
      "Every project is built with rigorous engineering standards — clean architecture, tested logic, and code that's maintainable beyond the first delivery.",
    icon: Code2,
  },
  {
    title: "Modern, Production-Ready Stack",
    description:
      "We use current, industry-standard technologies: Next.js, Python, PostgreSQL, Docker. No legacy code, no outdated approaches.",
    icon: Zap,
  },
  {
    title: "Transparent Communication",
    description:
      "You always know where your project stands. Clear timelines, regular updates, and honest conversations when challenges arise.",
    icon: MessageSquareCode,
  },
  {
    title: "Cross-Disciplinary Expertise",
    description:
      "One team covering AI, data engineering, and full-stack software. No need to coordinate between multiple freelancers — we handle the full stack.",
    icon: Star,
  },
];

export const differentiators = [
  {
    title: "Engineering depth with real delivery",
    description:
      "We combine deep technical knowledge with the ability to ship working products — not just prototypes or theoretical designs.",
    icon: BriefcaseBusiness,
  },
  {
    title: "AI + Data + Software in one team",
    description:
      "Our cross-functional expertise connects machine learning, data engineering, and modern software development in every engagement.",
    icon: Sparkles,
  },
  {
    title: "Security-aware by default",
    description:
      "Security best practices, proper input validation, and access control are built into every project, not added as afterthoughts.",
    icon: Shield,
  },
];
