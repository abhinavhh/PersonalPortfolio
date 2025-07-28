import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Heart,
  Code,
  Coffee
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  // Mock theme context - replace with your actual theme context
  const { isDarkMode } = useTheme(); // You can replace this with your actual theme state

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/abhinavhh",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/abhinav-u-",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/4b_hi_nav_anil",
      color: "from-sky-500 to-sky-700"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className={`py-12 border-t ${
      isDarkMode 
        ? "bg-gray-800 border-gray-700 text-white" 
        : "bg-gray-50 border-gray-200 text-gray-900"
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abhinav U
            </h3>
            <p className={`text-lg max-w-md ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Computer Science graduate passionate about creating innovative web solutions 
              and contributing to the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`hover:text-blue-500 transition-colors ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                abhinavanil1830@gmail.com
              </p>
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                +91 9995308573
              </p>
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Kannur, Kerala, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mt-12 pt-8 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          } flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0`}
        >
          <div className="flex items-center space-x-2 text-sm">
            <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
              © 2025 Abhinav U. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Made with
              </span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                and
              </span>
              <Coffee size={14} className="text-yellow-600" />
            </div>
            <span className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
              •
            </span>
            <div className="flex items-center space-x-1">
              <Code size={14} className="text-blue-500" />
              <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                MIT License
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;