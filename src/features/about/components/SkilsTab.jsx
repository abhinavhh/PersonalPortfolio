// src/features/about/components/SkillsTab.jsx
import { motion } from 'framer-motion';
import { ProgressBar } from '../../../Components/ui/ProgressBar/ProgressBar';
import { containerVariants, itemVariants } from '../../../lib/animations';
import PropTypes from 'prop-types';

export const SkillsTab = ({ skills, isDark = false }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {skills.map((skillGroup) => (
        <motion.div 
          key={skillGroup.category} 
          variants={itemVariants} 
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-blue-500 mb-4">
            {skillGroup.category}
          </h3>
          <div className="grid gap-4">
            {skillGroup.technologies.map((tech) => (
              <ProgressBar
                key={tech.name}
                label={tech.name}
                level={tech.level}
                color={tech.color}
                isDark={isDark}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

SkillsTab.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          level: PropTypes.number.isRequired,
          color: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired,
  isDark: PropTypes.bool
};