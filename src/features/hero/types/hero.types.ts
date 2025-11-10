// src/features/hero/types/hero.types.ts
import { TechStackItem, SocialLink } from '@/types/common.types';

export interface HeroContent {
  name: string;
  greeting: string;
  roles: string[];
  description: string;
  resumePath: string;
  email: string;
  profileImage: string;
}

export interface HeroData {
  content: HeroContent;
  techStack: TechStackItem[];
  socialLinks: SocialLink[];
}