// src/components/ui/IconButton/IconButton.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const IconButton = ({ 
  icon, 
  isDark = false, 
  asLink = false, 
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = `p-2 rounded-full transition-colors ${
    isDark
      ? 'text-gray-400 hover:text-white hover:bg-gray-800'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
  } ${className}`;

  const MotionComponent = asLink ? motion.a : motion.button;
  const additionalProps = asLink ? { href } : {};

  return (
    <MotionComponent
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseStyles}
      {...additionalProps}
      {...props}
    >
      {icon}
    </MotionComponent>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  isDark: PropTypes.bool,
  asLink: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string
};