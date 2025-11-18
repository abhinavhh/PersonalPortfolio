// src/features/about/components/GoalsTab.jsx
import { motion } from 'framer-motion';
import { Card } from '../../../Components/ui/Card/Card';
import { containerVariants, itemVariants } from '../../../lib/animations';
import PropTypes from 'prop-types';

export const GoalsTab = ({ data, isDark = false }) => {
  const { heading, goals } = data;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {heading.title}
        </h3>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {heading.subtitle}
        </p>
      </motion.div>

      {/* Goals Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const IconComponent = goal.icon;
          return (
            <Card
              key={goal.title}
              isDark={isDark}
              className="cursor-default"
            >
              <IconComponent className="text-blue-500 mb-4" size={32} />
              <h4 className="text-lg font-semibold mb-3">{goal.title}</h4>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {goal.description}
              </p>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
};

GoalsTab.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired
    }).isRequired,
    goals: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired
      })
    ).isRequired
  }).isRequired,
  isDark: PropTypes.bool
};