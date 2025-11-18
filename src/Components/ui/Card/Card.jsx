// src/components/ui/Card/Card.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const Card = ({ 
  children, 
  isDark = false, 
  className = '',
  hover = true,
  ...props 
}) => {
  const baseStyles = `p-6 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
    isDark
      ? 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
      : 'bg-white/80 border-gray-200 hover:border-gray-300'
  } ${className}`;

  const hoverAnimation = hover ? { scale: 1.02, y: -5 } : {};

  return (
    <motion.div
      whileHover={hoverAnimation}
      className={baseStyles}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isDark: PropTypes.bool,
  className: PropTypes.string,
  hover: PropTypes.bool
};