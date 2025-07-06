import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import hero_img from "../assets/Me.png"

const Hero = () => {
  const { isDarkMode }= useTheme();
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "Web Developer",
    "CS Graduate",
    "Problem Solver"
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-blue-400" },
    { name: "Node.js", icon: "🟢", color: "text-green-400" },
    { name: "Java", icon: "☕", color: "text-orange-400" },
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-300" },
    { name: "MongoDB", icon: "🍃", color: "text-green-300" },
    { name: "MySQL", icon: "🐬", color: "text-blue-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative md:mt-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDarkMode ? "bg-blue-500/10" : "bg-blue-400/20"
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
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="lg:grid-cols-2 gap-12 items-center flex flex-col lg:flex-row">
          {/* Left Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className={`text-lg md:text-xl font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
            >
              ABHINAV U
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-xl md:text-2xl lg:text-3xl font-semibold h-12 flex items-center justify-center lg:justify-start">
                <motion.span
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  {roles[currentRole]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Fresh CS Engineering graduate (2021-2025) with a passion for creating digital experiences. Eager to dive into full-stack development and build innovative web solutions that make a difference.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-sm uppercase tracking-wider mb-6 text-gray-500">
                Tech Stack I'm Learning
              </h3>
              <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${
                      isDarkMode
                        ? "bg-gray-900/50 border-gray-700 hover:border-gray-600"
                        : "bg-white/80 border-gray-200 hover:border-gray-300"
                    } backdrop-blur-sm cursor-pointer`}
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 border-2 transition-colors ${
                  isDarkMode
                    ? "border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
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

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div variants={floatingVariants} animate="animate" className="relative">
              {/* Optional background styling */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-20"></div>
              <div className="relative rounded-full p-2 bg-white dark:bg-gray-800 shadow-lg">
                <img
                  src={hero_img}
                  alt="Abhinav U"
                  className="w-78 h-78 md:w-80 md:h-80 lg:w-96 lg:h-96 object-fill rounded-full"
                />
              </div>
              {/* Optional: Add floating tech icons if needed */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
