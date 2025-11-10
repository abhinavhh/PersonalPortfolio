// src/features/hero/components/HeroSection.jsx
import { useTheme } from '../../../context/ThemeContext';
import { useRoleRotation } from '../hooks/useRoleRotation';
import { HERO_DATA, ROLE_ROTATION_INTERVAL, BACKGROUND_PARTICLES_COUNT } from '../constants/hero.constants';
import { BackgroundParticles } from './BackgroundParticles';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { currentRole } = useRoleRotation(
    HERO_DATA.content.roles,
    ROLE_ROTATION_INTERVAL
  );

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative md:mt-6 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'
      }`}
    >
      <BackgroundParticles 
        count={BACKGROUND_PARTICLES_COUNT} 
        isDark={isDarkMode} 
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="lg:grid-cols-2 gap-12 items-center flex flex-col lg:flex-row">
          <HeroContent
            content={HERO_DATA.content}
            currentRole={currentRole}
            techStack={HERO_DATA.techStack}
            socialLinks={HERO_DATA.socialLinks}
            isDark={isDarkMode}
          />

          <HeroImage
            src={HERO_DATA.content.profileImage}
            alt={HERO_DATA.content.name}
          />
        </div>
      </div>
    </section>
  );
};