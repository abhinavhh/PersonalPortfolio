// src/features/about/components/JourneyTab.jsx
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../../lib/animations';
import PropTypes from 'prop-types';

export const JourneyTab = ({ journey, isDark = false }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className={`absolute left-6 top-0 h-full w-0.5 ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        }`} />
        
        {journey.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.year}
              variants={itemVariants}
              className="relative flex items-start space-x-6 pb-8"
            >
              {/* Timeline Node */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                isDark 
                  ? 'bg-blue-900/50 border-gray-900' 
                  : 'bg-blue-100 border-white'
              }`}>
                <IconComponent className="text-blue-500" size={20} />
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-bold text-blue-500">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

JourneyTab.propTypes = {
  journey: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired
    })
  ).isRequired,
  isDark: PropTypes.bool
};