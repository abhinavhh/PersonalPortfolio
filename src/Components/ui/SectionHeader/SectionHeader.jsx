// src/components/ui/SectionHeader/SectionHeader.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  isDark = false,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${centered ? 'text-center' : ''} mb-16 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
  isDark: PropTypes.bool,
  className: PropTypes.string
};