// src/components/ui/ProgressBar/ProgressBar.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const ProgressBar = ({ 
  label, 
  level, 
  color, 
  isDark = false,
  showPercentage = true 
}) => {
  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5
      }
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{label}</span>
        {showPercentage && (
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {level}%
          </span>
        )}
      </div>
      <div className={`h-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          variants={barVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
  showPercentage: PropTypes.bool
};