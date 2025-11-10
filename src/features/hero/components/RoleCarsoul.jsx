// src/features/hero/components/RoleCarousel.jsx
import { motion } from 'framer-motion';
import { fadeInUpVariants } from '../../../lib/animations';
import PropTypes from 'prop-types';

export const RoleCarousel = ({ currentRole, isDark = false }) => {
  return (
    <div className="text-xl md:text-2xl lg:text-3xl font-semibold h-12 flex items-center justify-center lg:justify-start">
      <motion.span
        key={currentRole}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInUpVariants}
        transition={{ duration: 0.5 }}
        className={isDark ? 'text-gray-300' : 'text-gray-700'}
      >
        {currentRole}
      </motion.span>
    </div>
  );
};

RoleCarousel.propTypes = {
  currentRole: PropTypes.string.isRequired,
  isDark: PropTypes.bool
};