import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CvSection } from "@/components/cv-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { SkillsSection } from "@/components/skills-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { getProjects } from "@/lib/project-store";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <CvSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <WhyChooseUsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
