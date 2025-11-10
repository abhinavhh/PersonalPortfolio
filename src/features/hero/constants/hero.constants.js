// src/features/hero/constants/hero.constants.js
import { Github, Linkedin } from 'lucide-react';
import heroImg from '../../../assets/Me.png';

export const HERO_DATA = {
  content: {
    name: 'ABHINAV U',
    greeting: "Hello, I'm",
    roles: [
      'Full Stack Developer', 
      'Web Developer',
      'CS Graduate',
      'Problem Solver'
    ],
    description: 
      "Fresh CS Engineering graduate (2021-2025) with a passion for creating digital experiences. Eager to dive into full-stack development and build innovative web solutions that make a difference.",
    resumePath: '/ABHINAV U (5).pdf',
    email: 'abhinavanil1830@gmail.com',
    profileImage: heroImg
  },
  techStack: [
    { name: 'React', icon: '⚛️', color: 'text-blue-400' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
    { name: 'Java', icon: '☕', color: 'text-orange-400' },
    { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-300' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-300' },
    { name: 'Django', icon: '', color: 'text-green-300' },
  ],
  socialLinks: [
    { 
      icon: Github, 
      href: 'https://github.com/abhinavhh', 
      label: 'GitHub',
      ariaLabel: 'Visit GitHub profile'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/abhinav-u-212b64286', 
      label: 'LinkedIn',
      ariaLabel: 'Visit LinkedIn profile'
    }
  ]
};

export const ROLE_ROTATION_INTERVAL = 2000;
export const BACKGROUND_PARTICLES_COUNT = 6;