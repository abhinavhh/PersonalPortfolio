// src/types/common.types.ts

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
  ariaLabel?: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  color: string;
}

export interface NavItem {
  label: string;
  sectionId: string;
}

export type ThemeMode = 'light' | 'dark';

export interface AnimationVariants {
  hidden: object;
  visible: object;
  animate?: object;
}