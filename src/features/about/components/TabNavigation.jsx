// src/features/about/components/TabNavigation.jsx
import { motion } from 'framer-motion';
import { TabButton } from '../../../Components/ui/TabButton/TabButton';
import PropTypes from 'prop-types';

export const TabNavigation = ({ tabs, activeTab, onTabChange, isDark = false }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-4 mb-12"
    >
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          icon={tab.icon}
          label={tab.label}
          isActive={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          isDark={isDark}
        />
      ))}
    </motion.div>
  );
};

TabNavigation.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired
    })
  ).isRequired,
  activeTab: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
  isDark: PropTypes.bool
};