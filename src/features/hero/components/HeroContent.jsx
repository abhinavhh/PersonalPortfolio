// src/features/hero/components/HeroContent.jsx
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { containerVariants, itemVariants } from '../../../lib/animations';
import { TechStackGrid } from './TechStackGrid';
import { RoleCarousel } from './RoleCarsoul';
import { Button } from '../../../components/ui/Button/Button';
import { SocialLinks } from '../../../components/ui/SocialLinks/SocialLinks';
import PropTypes from 'prop-types';

export const HeroContent = ({
  content,
  currentRole,
  techStack,
  socialLinks,
  isDark = false
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center lg:text-left order-2 lg:order-1"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <span className={`text-lg md:text-xl font-medium ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          {content.greeting}
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
      >
        {content.name}
      </motion.h1>

      <motion.div variants={itemVariants} className="mb-8">
        <RoleCarousel currentRole={currentRole} isDark={isDark} />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {content.description}
      </motion.p>

      <motion.div variants={itemVariants}>
        <TechStackGrid techStack={techStack} isDark={isDark} />
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
      >
        <Button
          variant="primary"
          asLink
          href={content.resumePath}
          download="Abhinav-u-resume.pdf"
          icon={<Download size={20} />}
        >
          Download Resume
        </Button>

        <Button
          variant="secondary"
          asLink
          href={`mailto:${content.email}`}
          icon={<Mail size={20} />}
        >
          Get In Touch
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SocialLinks links={socialLinks} isDark={isDark} className="mb-12" />
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col items-center">
        <span className="text-sm mb-3 text-gray-500">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full text-gray-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

HeroContent.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    resumePath: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  currentRole: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
  isDark: PropTypes.bool
};