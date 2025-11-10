// src/pages/HomePage.tsx
import { Navbar } from '@/components/common/Navigation/Navbar';
import { HeroSection } from '@/features/hero';
// Import other feature sections as you build them
// import { AboutSection } from '@/features/about';
// import { ProjectsSection } from '@/features/projects';
// import { ContactSection } from '@/features/contact';

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* <AboutSection /> */}
        {/* <ProjectsSection /> */}
        {/* <ContactSection /> */}
      </main>
    </>
  );
};