export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  interests: Interest[];
  philosophy: string;
  funFacts: string[];
}

export interface Interest {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  challenges: string[];
  learnings: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  type: "work" | "education" | "research";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface PlaygroundDemo {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: "coming-soon" | "live";
}

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft?: boolean;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
  html: string;
  toc: TocItem[];
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface ResearchArticle extends PostMeta {
  content: string;
  html: string;
}
