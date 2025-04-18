import { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade', 
  delay = 0,
  duration = 0.8,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  // Animation variants
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay: delay / 1000 } }
    },
    slideUp: {
      hidden: { y: 50, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1, 
        transition: { duration, delay: delay / 1000, ease: "easeOut" } 
      }
    },
    slideRight: {
      hidden: { x: -50, opacity: 0 },
      visible: { 
        x: 0, 
        opacity: 1, 
        transition: { duration, delay: delay / 1000, ease: "easeOut" } 
      }
    },
    scale: {
      hidden: { scale: 0.9, opacity: 0 },
      visible: { 
        scale: 1, 
        opacity: 1, 
        transition: { duration, delay: delay / 1000, ease: "easeOut" } 
      }
    },
    // Add more animation variants as needed
    bounce: {
      hidden: { y: 50, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1, 
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 10, 
          delay: delay / 1000 
        } 
      }
    },
    rotate: {
      hidden: { rotate: -10, opacity: 0 },
      visible: { 
        rotate: 0, 
        opacity: 1, 
        transition: { duration, delay: delay / 1000 } 
      }
    }
  };

  const selectedVariant = variants[animation] || variants.fade;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;