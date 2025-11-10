// src/features/hero/components/BackgroundParticles.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const BackgroundParticles = ({ count = 6, isDark = false }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'
          }`}
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}
    </div>
  );
};

BackgroundParticles.propTypes = {
  count: PropTypes.number,
  isDark: PropTypes.bool
};