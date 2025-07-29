import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Globe,
  Github, 
  ExternalLink, 
  Calendar, 
  Tag, 
  Star,
  Filter,
  Search,
  Play,
  Database,
  Smartphone,
  Monitor,
  Layers
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import bhubimage from "../assets/Screenshot 2025-07-17 142406.png";
import metroImage from "../assets/Screenshot 2025-07-23 173758.png";
import todolistImage from "../assets/Screenshot 2025-07-28 115454.png"
import smartImg from "../assets/Screenshot 2025-07-29 231144.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  // const [hoveredProject, setHoveredProject] = useState(null);

  // Mock theme context - replace with your actual theme context
  const { isDarkMode } = useTheme();

  const filters = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "web", label: "Web Apps", icon: Globe },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "fullstack", label: "Full Stack", icon: Database },
    { id: "frontend", label: "Frontend", icon: Monitor }
  ];

  const projects = [
    {
      id: 1,
      title: "BHUB- Book Uploading and Reading Platform",
      category: "fullstack",
      description: "A modern book uploading and reading platform for book enthusias which have role based access to the pages.",
      longDescription: "Comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, order management, and payment integration. Includes admin panel for inventory management and analytics.",
      technologies: ["PHP", "HTML", "MySQL", "CSS", "JavaScript"],
      demoUrl: "https://bhub.fwh.is",
      githubUrl: "https://github.com/abhinavhh/BHUB",
      image: bhubimage,
      date: "2024",
      status: "Completed",
      highlights: ["User Engagement", "Integrated design", "Admin dashboard", "Responsive design"]
    },
    {
      id: 2,
      title: "To Do List App",
      category: "web",
      description: "This web application provides a practical solution for staying organized and boosting productivity, offering the benefits of task organization, improved time management, and reduced stress.",
      longDescription: "This intuitive and user-friendly web application, crafted with HTML, CSS, and JavaScript, empowers you to effortlessly manage your daily tasks. The core functionality revolves around adding, completing, and storing your to-do items seamlessly.",
      technologies: ["HTML%", "CSS3", "JavaScript"],
      image: todolistImage,
      demoUrl: "https://abhinavhh.github.io/front_end/todolist/",
      githubUrl: "https://github.com/abhinavhh/front_end/tree/main/todolist",
      date: "2023",
      status: "Completed",
      highlights: ["Real-time collaboration", "Drag & drop", "File sharing", "Progress tracking"]
    },
    {
      id: 3,
      title: "IoT Enabled Smart Irrigation System",
      category: "fullstack",
      description: "A automate water controlling system for agriculture using ESP32 and Arduino with a web interface for monitoring and control.",
      longDescription: "An IoT-enabled smart irrigation system that automates water control for agriculture. Features include real-time monitoring, remote control, and data visualization through a web interface.",
      technologies: ["React", "Arduino IDE", "Spring Boot", "Tailwind CSS", "Framer Motion"],
      image: smartImg,
      demoUrl: "https://smart-irrigation-rho.vercel.app/home",
      githubUrl: "https://github.com/abhinavhh/smart_irrigation",
      date: "2024",
      status: "Completed",
      highlights: ["Real-time monitoring", "Remote control", "Data visualization", "Automated scheduling"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "frontend",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      longDescription: "Personal portfolio website featuring project showcases, skill demonstrations, contact forms, and blog integration. Built with modern design principles and accessibility in mind.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/username/portfolio",
      date: "2024",
      status: "Completed",
      highlights: ["Smooth animations", "Responsive design", "SEO optimized", "Fast loading"]
    },
    {
      id: 5,
      title: "Metro Ticket Booking System",
      category: "fullstack",
      description: "A simple to use metro ticket booking system with features like ticket booking, entering and exiting stations, and price calculation.",
      longDescription: "A comprehensive metro ticket booking system built with the MERN stack. Features include ticket booking, station entry and exit management, price calculation.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
      image: metroImage,
      demoUrl: "https://metro-ticket-system.vercel.app/",
      githubUrl: "https://github.com/abhinavhh/metro-ticket-system",
      date: "2025",
      status: "Completed",
      highlights: ["Ticket booking", "Station management", "Price calculation", "Ticket validation"]
    },
    {
      id: 6,
      title: "Blog Platform",
      category: "web",
      description: "A content management system for bloggers with rich text editing, comment system, and SEO optimization.",
      longDescription: "Complete blogging platform with rich text editor, category management, comment system, user authentication, and SEO optimization. Includes admin panel for content moderation.",
      technologies: ["React", "Node.js", "MySQL", "TinyMCE", "Express", "Helmet"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://demo-blog.com",
      githubUrl: "https://github.com/username/blog",
      date: "2023",
      status: "Completed",
      highlights: ["Rich text editor", "SEO optimized", "Comment system", "Content moderation"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

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

  // const itemVariants = {
  //   hidden: { y: 50, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.8,
  //       ease: "easeOut"
  //     }
  //   }
  // };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900/50 border-gray-700 hover:border-gray-600"
          : "bg-white/80 border-gray-200 hover:border-gray-300"
      } backdrop-blur-sm hover:shadow-xl cursor-pointer`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={project.image} alt={project.title} />
        <div className={`w-full h-full bg-gradient-to-br ${
          index % 6 === 0 ? bhubimage :
          index % 6 === 1 ? "from-green-500 to-blue-600" :
          index % 6 === 2 ? "from-purple-500 to-pink-600" :
          index % 6 === 3 ? "from-orange-500 to-red-600" :
          index % 6 === 4 ? "from-cyan-500 to-blue-600" :
          "from-indigo-500 to-purple-600"
        } flex items-center justify-center`}>
          <Code className="text-white opacity-30" size={64} />
        </div>
        
        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex space-x-4">
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="text-white" size={20} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="text-white" size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === "Completed" 
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Calendar size={14} />
            <span>{project.date}</span>
          </div>
        </div>

        <p className={`text-sm mb-4 line-clamp-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-2 py-1 rounded-md text-xs font-medium ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${
              isDarkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"
            }`}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-blue-500">Key Features:</h4>
          <div className="grid grid-cols-2 gap-1">
            {project.highlights.slice(0, 4).map((highlight, highlightIndex) => (
              <div key={highlightIndex} className="flex items-center space-x-1">
                <Star className="text-yellow-500" size={12} />
                <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 relative ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDarkMode ? "bg-blue-500/5" : "bg-blue-400/10"
            }`}
            style={{
              width: `${Math.random() * 300 + 150}px`,
              height: `${Math.random() * 300 + 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Explore my portfolio of web applications, from full-stack platforms to interactive frontends
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`} size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-full border ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <filter.icon size={20} />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className={`text-6xl mb-4 ${isDarkMode ? "text-gray-700" : "text-gray-300"}`}>
              🔍
            </div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects Completed", value: "6+", icon: Code },
            { label: "Technologies Used", value: "15+", icon: Tag },
            { label: "Lines of Code", value: "10k+", icon: Github },
            { label: "Hours Coding", value: "500+", icon: Calendar }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`text-center p-6 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-700"
                  : "bg-white/80 border-gray-200"
              } backdrop-blur-sm`}
            >
              <stat.icon className="mx-auto mb-3 text-blue-500" size={32} />
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;