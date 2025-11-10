// src/components/ui/SocialLinks/SocialLinks.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const SocialLinks = ({ links, isDark = false, className = '' }) => {
  return (
    <div className={`flex justify-center space-x-6 ${className}`}>
      {links.map((social) => {
        const IconComponent = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full transition-colors ${
              isDark
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            }`}
            aria-label={social.ariaLabel || social.label}
          >
            <IconComponent size={24} />
          </motion.a>
        );
      })}
    </div>
  );
};

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string
    })
  ).isRequired,
  isDark: PropTypes.bool,
  className: PropTypes.string
};