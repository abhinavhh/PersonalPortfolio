// src/features/about/components/AboutBackground.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const AboutBackground = ({ count = 4, isDark = false }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            isDark ? 'bg-purple-500/5' : 'bg-purple-400/10'
          }`}
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}
    </div>
  );
};

AboutBackground.propTypes = {
  count: PropTypes.number,
  isDark: PropTypes.bool
};