// src/features/about/components/AboutSection.jsx
import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { useActiveTab } from '../hooks/useActiveTab';
import { SectionHeader } from '../../../components/ui/SectionHeader/SectionHeader';
import { TabNavigation } from './TabNavigation';
import { OverviewTab } from './OverviewTab';
import { SkillsTab } from './SkilsTab';
import { JourneyTab } from './JourneyTab';
import { GoalsTab } from './GoalsTab';
import { AboutBackground } from './AboutBackground';
import {
  ABOUT_TABS,
  ABOUT_HEADER,
  OVERVIEW_DATA,
  SKILLS_DATA,
  JOURNEY_DATA,
  GOALS_DATA,
  BACKGROUND_PARTICLES_COUNT
} from '../constants/about.constants';

export const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const { activeTab, setActiveTab } = useActiveTab(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <OverviewTab data={OVERVIEW_DATA} isDark={isDarkMode} />;
      case 1:
        return <SkillsTab skills={SKILLS_DATA} isDark={isDarkMode} />;
      case 2:
        return <JourneyTab journey={JOURNEY_DATA} isDark={isDarkMode} />;
      case 3:
        return <GoalsTab data={GOALS_DATA} isDark={isDarkMode} />;
      default:
        return <OverviewTab data={OVERVIEW_DATA} isDark={isDarkMode} />;
    }
  };

  return (
    <section
      id="about"
      className={`min-h-screen pt-20 relative ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <AboutBackground count={BACKGROUND_PARTICLES_COUNT} isDark={isDarkMode} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          title={ABOUT_HEADER.title}
          subtitle={ABOUT_HEADER.subtitle}
          isDark={isDarkMode}
        />

        <TabNavigation
          tabs={ABOUT_TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isDark={isDarkMode}
        />

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[500px]"
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
};