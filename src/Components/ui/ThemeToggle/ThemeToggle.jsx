// src/components/ui/ThemeToggle/ThemeToggle.jsx
import { Moon, Sun } from 'lucide-react';
import { IconButton } from '../IconButton/IconButton';
import PropTypes from 'prop-types';

export const ThemeToggle = ({ isDark, onToggle, className = '' }) => {
  return (
    <IconButton
      icon={isDark ? <Sun size={18} /> : <Moon size={18} />}
      onClick={onToggle}
      isDark={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={className}
    />
  );
};

ThemeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string
};