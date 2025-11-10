// src/features/hero/components/TechStackGrid.jsx
import PropTypes from 'prop-types';
import { Badge } from '../../../Components/ui/Badge/Badge';
export const TechStackGrid = ({ techStack, isDark = false }) => {
  return (
    <div className="mb-12">
      <h3 className="text-sm uppercase tracking-wider mb-6 text-gray-500 text-center">
        Tech Stack I'm Learning
      </h3>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        {techStack.map((tech, index) => (
          <Badge
            key={tech.name}
            icon={tech.icon}
            isDark={isDark}
            delay={1 + index * 0.1}
          >
            {tech.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};

TechStackGrid.propTypes = {
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      color: PropTypes.string
    })
  ).isRequired,
  isDark: PropTypes.bool
};