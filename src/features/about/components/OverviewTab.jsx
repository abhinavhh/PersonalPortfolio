// src/features/about/components/OverviewTab.jsx
import { motion } from 'framer-motion';
import { Card } from '../../../components/ui/Card/Card';
import { containerVariants, itemVariants } from '../../../lib/animations';
import PropTypes from 'prop-types';

export const OverviewTab = ({ data, isDark = false }) => {
  const { whoIAm, whatDrivesMe } = data;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
        {/* Who I Am Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {whoIAm.title}
          </h3>
          {whoIAm.paragraphs.map((paragraph, index) => (
            <p 
              key={index}
              className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* What Drives Me Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {whatDrivesMe.title}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {whatDrivesMe.items.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={item.label}
                  isDark={isDark}
                  className="p-4 text-center cursor-pointer"
                >
                  <IconComponent className="mx-auto mb-2 text-blue-500" size={32} />
                  <h4 className="font-semibold mb-1">{item.label}</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

OverviewTab.propTypes = {
  data: PropTypes.shape({
    whoIAm: PropTypes.shape({
      title: PropTypes.string.isRequired,
      paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    whatDrivesMe: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.elementType.isRequired,
          label: PropTypes.string.isRequired,
          desc: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired,
  isDark: PropTypes.bool
};