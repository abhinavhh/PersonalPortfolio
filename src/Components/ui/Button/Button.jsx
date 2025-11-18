// src/components/ui/Button/Button.jsx
import { motion } from 'framer-motion';
import React from 'react';

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  asLink = false,
  href,
  download,
  className = '',
  ...props
}) => {
  const baseStyles =
    'font-semibold rounded-full flex items-center justify-center space-x-2 transition-all';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl',
    secondary:
      'border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800',
    ghost:
      'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const content = (
    <>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (asLink && href) {
    return (
      <motion.a
        href={href}
        download={download}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  );
};
