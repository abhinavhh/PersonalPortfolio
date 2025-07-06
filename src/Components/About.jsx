import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Lightbulb, Target, Trophy, BookOpen, Coffee } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Mock theme context - replace with your actual theme context
  const {isDarkMode} = useTheme(); // You can replace this with your actual theme state

  const tabs = [
    { id: 0, label: "Overview", icon: Globe },
    { id: 1, label: "Skills", icon: Code },
    { id: 2, label: "Journey", icon: BookOpen },
    { id: 3, label: "Goals", icon: Target }
  ];

  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React.js", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-yellow-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-orange-600" },
        { name: "Tailwind CSS", level: 85, color: "from-cyan-500 to-cyan-600" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 75, color: "from-green-500 to-green-600" },
        { name: "Java", level: 70, color: "from-red-500 to-red-600" },
        { name: "Express.js", level: 75, color: "from-gray-500 to-gray-600" },
        { name: "REST APIs", level: 80, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "PostgreSQL", level: 70, color: "from-blue-600 to-blue-700" },
        { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" },
        { name: "MySQL", level: 80, color: "from-blue-500 to-blue-600" }
      ]
    }
  ];

  const journey = [
    {
      year: "2021",
      title: "Started CS Engineering",
      description: "Began my journey in Computer Science, discovering my passion for programming and web development.",
      icon: BookOpen
    },
    {
      year: "2022-2023",
      title: "Foundation Building",
      description: "Mastered programming fundamentals with Java, explored data structures and algorithms.",
      icon: Code
    },
    {
      year: "2023-2024",
      title: "Web Development",
      description: "Dove deep into full-stack development, learned React, Node.js, and database management.",
      icon: Globe
    },
    {
      year: "2025",
      title: "Ready to Launch",
      description: "Graduated with strong technical skills and ready to contribute to innovative projects.",
      icon: Trophy
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  const renderOverview = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Who I Am
          </h3>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            I'm a passionate Computer Science graduate with a fresh perspective on modern web development. 
            My journey through engineering has equipped me with both theoretical knowledge and practical skills 
            in building scalable, user-friendly applications.
          </p>
          <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            I believe in writing clean, maintainable code and creating digital experiences that not only 
            function flawlessly but also delight users. Every project is an opportunity to learn, grow, 
            and contribute something meaningful to the digital world.
          </p>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Drives Me
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Lightbulb, label: "Innovation", desc: "Always exploring new technologies" },
              { icon: Coffee, label: "Dedication", desc: "Committed to continuous learning" },
              { icon: Target, label: "Precision", desc: "Attention to detail in every project" },
              { icon: Trophy, label: "Excellence", desc: "Striving for quality in all work" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 rounded-lg border text-center ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-700 hover:border-gray-600"
                    : "bg-white/80 border-gray-200 hover:border-gray-300"
                } backdrop-blur-sm cursor-pointer transition-all duration-300`}
              >
                <item.icon className="mx-auto mb-2 text-blue-500" size={32} />
                <h4 className="font-semibold mb-1">{item.label}</h4>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const renderSkills = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {skills.map((skillGroup, groupIndex) => (
        <motion.div key={skillGroup.category} variants={itemVariants} className="space-y-4">
          <h3 className="text-xl font-bold text-blue-500 mb-4">{skillGroup.category}</h3>
          <div className="grid gap-4">
            {skillGroup.technologies.map((tech, techIndex) => (
              <div key={tech.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{tech.name}</span>
                  <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {tech.level}%
                  </span>
                </div>
                <div className={`h-2 rounded-full ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                    variants={skillBarVariants}
                    initial="hidden"
                    animate="visible"
                    custom={tech.level}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderJourney = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="relative">
        <div className={`absolute left-6 top-0 h-full w-0.5 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`} />
        {journey.map((item, index) => (
          <motion.div
            key={item.year}
            variants={itemVariants}
            className="relative flex items-start space-x-6 pb-8"
          >
            <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
              isDarkMode ? "bg-blue-900/50" : "bg-blue-100"
            } border-4 ${isDarkMode ? "border-gray-900" : "border-white"}`}>
              <item.icon className="text-blue-500" size={20} />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-bold text-blue-500">{item.year}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderGoals = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Looking Forward
        </h3>
        <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          My goals for the next phase of my career
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Professional Growth",
            description: "Join a dynamic team where I can contribute to impactful projects while continuously learning and growing as a developer.",
            icon: Trophy
          },
          {
            title: "Technical Excellence",
            description: "Master advanced full-stack technologies and contribute to open-source projects that benefit the developer community.",
            icon: Code
          },
          {
            title: "Innovation Focus",
            description: "Work on cutting-edge projects that push the boundaries of what's possible in web development and user experience.",
            icon: Lightbulb
          },
          {
            title: "Mentorship",
            description: "Eventually become a mentor to other aspiring developers, sharing knowledge and helping them grow in their careers.",
            icon: BookOpen
          }
        ].map((goal, index) => (
          <motion.div
            key={goal.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`p-6 rounded-lg border ${
              isDarkMode
                ? "bg-gray-900/50 border-gray-700 hover:border-gray-600"
                : "bg-white/80 border-gray-200 hover:border-gray-300"
            } backdrop-blur-sm transition-all duration-300`}
          >
            <goal.icon className="text-blue-500 mb-4" size={32} />
            <h4 className="text-lg font-semibold mb-3">{goal.title}</h4>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {goal.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="about"
      className={`min-h-screen py-20 relative ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDarkMode ? "bg-purple-500/5" : "bg-purple-400/10"
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
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Discover my journey, skills, and aspirations in the world of technology
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <tab.icon size={20} />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[500px]"
        >
          {activeTab === 0 && renderOverview()}
          {activeTab === 1 && renderSkills()}
          {activeTab === 2 && renderJourney()}
          {activeTab === 3 && renderGoals()}
        </motion.div>
      </div>
    </section>
  );
};

export default About;