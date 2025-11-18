// src/features/about/constants/about.constants.js
import { 
  Code, 
  Database, 
  Globe, 
  Lightbulb, 
  Target, 
  Trophy, 
  BookOpen, 
  Coffee 
} from "lucide-react";

export const ABOUT_TABS = [
  { id: 0, label: "Overview", icon: Globe },
  { id: 1, label: "Skills", icon: Code },
  { id: 2, label: "Journey", icon: BookOpen },
  { id: 3, label: "Goals", icon: Target }
];

export const OVERVIEW_DATA = {
  whoIAm: {
    title: "Who I Am",
    paragraphs: [
      "I'm a passionate Computer Science graduate with a fresh perspective on modern web development. My journey through engineering has equipped me with both theoretical knowledge and practical skills in building scalable, user-friendly applications.",
      "I believe in writing clean, maintainable code and creating digital experiences that not only function flawlessly but also delight users. Every project is an opportunity to learn, grow, and contribute something meaningful to the digital world."
    ]
  },
  whatDrivesMe: {
    title: "What Drives Me",
    items: [
      { 
        icon: Lightbulb, 
        label: "Innovation", 
        desc: "Always exploring new technologies" 
      },
      { 
        icon: Coffee, 
        label: "Dedication", 
        desc: "Committed to continuous learning" 
      },
      { 
        icon: Target, 
        label: "Precision", 
        desc: "Attention to detail in every project" 
      },
      { 
        icon: Trophy, 
        label: "Excellence", 
        desc: "Striving for quality in all work" 
      }
    ]
  }
};

export const SKILLS_DATA = [
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
      { name: "PostgreSQL", level: 80, color: "from-blue-600 to-blue-700" },
      { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" },
      { name: "MySQL", level: 40, color: "from-blue-500 to-blue-600" }
    ]
  }
];

export const JOURNEY_DATA = [
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

export const GOALS_DATA = {
  heading: {
    title: "Looking Forward",
    subtitle: "My goals for the next phase of my career"
  },
  goals: [
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
  ]
};

export const ABOUT_HEADER = {
  title: "About Me",
  subtitle: "Discover my journey, skills, and aspirations in the world of technology"
};

export const BACKGROUND_PARTICLES_COUNT = 4;