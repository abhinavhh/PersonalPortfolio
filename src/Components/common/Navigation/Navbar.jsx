// src/components/common/Navigation/Navbar.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { useScrollToSection } from '../../../hooks/useScrollToSection';
import { ThemeToggle } from '../../ui/ThemeToggle/ThemeToggle';
import { IconButton } from '../../ui/IconButton/IconButton';
import { NavigationMenu } from './NavigationMenu';
import { MobileMenu } from './MobileMenu';
import { NAV_ITEMS } from './navigation.constants';
import logoImg from '../../../assets/file_00000000917861f89f39aafdf5ced379-removebg-preview.png';

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection(() => setIsMenuOpen(false));

  const handleThemeToggle = () => {
    toggleDarkMode(isDarkMode ? 'light' : 'dark');
  };

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b ${
        isDarkMode
          ? 'bg-gray-850/80 text-gray-400 border-gray-800'
          : 'bg-gray-50/80 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="flex items-center space-x-2"
        >
          <img src={logoImg} width={40} alt="Logo" />
          <span className="text-lg ml-1">ABHINAV</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavigationMenu
            items={NAV_ITEMS}
            onItemClick={scrollToSection}
            isDark={isDarkMode}
          />
          <ThemeToggle 
            isDark={isDarkMode} 
            onToggle={handleThemeToggle} 
          />
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle 
            isDark={isDarkMode} 
            onToggle={handleThemeToggle} 
          />
          <IconButton
            icon={isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            isDark={isDarkMode}
            aria-label="Toggle menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        items={NAV_ITEMS}
        onItemClick={scrollToSection}
        isDark={isDarkMode}
      />
    </motion.nav>
  );
};