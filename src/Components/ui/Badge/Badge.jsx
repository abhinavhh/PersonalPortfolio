// src/components/ui/Badge/Badge.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const Badge = ({ 
  icon, 
  children, 
  isDark = false, 
  delay = 0,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay }}
      whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full border backdrop-blur-sm cursor-pointer ${
        isDark
          ? 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
          : 'bg-white/80 border-gray-200 hover:border-gray-300'
      } ${className}`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="text-sm font-medium">{children}</span>
    </motion.div>
  );
};

Badge.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  isDark: PropTypes.bool,
  delay: PropTypes.number,
  className: PropTypes.string
};