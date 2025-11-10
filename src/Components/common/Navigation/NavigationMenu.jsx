// src/components/common/Navigation/NavigationMenu.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const NavigationMenu = ({
  items,
  onItemClick,
  orientation = 'horizontal',
  isDark = false,
  className = ''
}) => {
  const isVertical = orientation === 'vertical';

  return (
    <div className={`flex ${isVertical ? 'flex-col' : 'space-x-8'} items-center ${className}`}>
      {items.map((item) => (
        <motion.button
          key={item.sectionId}
          whileHover={isVertical ? { x: 5 } : { y: -2 }}
          onClick={() => onItemClick(item.sectionId)}
          className={`text-sm font-medium transition-colors ${
            isVertical ? 'w-full text-left py-2 uppercase tracking-wider' : ''
          } ${
            isDark
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {item.label}
        </motion.button>
      ))}
    </div>
  );
};

NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      sectionId: PropTypes.string.isRequired
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  isDark: PropTypes.bool,
  className: PropTypes.string
};