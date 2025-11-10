// src/components/common/Navigation/MobileMenu.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { NavigationMenu } from './NavigationMenu';
import PropTypes from 'prop-types';

export const MobileMenu = ({ isOpen, items, onItemClick, isDark = false }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden mt-4 p-4 rounded-lg relative left-3/5 border ${
            isDark
              ? 'bg-gray-900 border-gray-800'
              : 'bg-white border-gray-200'
          }`}
        >
          <NavigationMenu
            items={items}
            onItemClick={onItemClick}
            orientation="vertical"
            isDark={isDark}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
  isDark: PropTypes.bool
};