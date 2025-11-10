// src/features/hero/components/HeroImage.jsx
import { motion } from 'framer-motion';
import { floatingVariants } from '../../../lib/animations';
import PropTypes from 'prop-types';

export const HeroImage = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex justify-center lg:justify-end order-1 lg:order-2"
    >
      <motion.div variants={floatingVariants} animate="animate" className="relative">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-20" />
        <div className="relative rounded-full p-2 bg-white dark:bg-gray-800 shadow-lg">
          <img
            src={src}
            alt={alt}
            className="w-78 h-78 md:w-80 md:h-80 lg:w-96 lg:h-96 object-fill rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};