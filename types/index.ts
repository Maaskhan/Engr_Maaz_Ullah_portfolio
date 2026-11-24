export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: "Github" | "Linkedin" | "Mail" | "ExternalLink" | "Phone";
  handle: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
  linkedInUrl: string;
  githubUrl: string;
  livePortfolioAppUrl: string;
  resumeDownloadUrl: string;
}

export interface Profile {
  name: string;
  fullName: string;
  title: string;
  accreditation: string;
  degreeSummary: string;
  location: string;
  relocationStatus: string;
  summary: string;
  aboutNarrative: string[];
  motto: string;
  professionalInterests: string[];
  heroImage: string;
  aboutImage: string;
  resumePath: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  iconName: "Brain" | "Code2" | "Server" | "Wrench";
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  credentialId?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  accreditation?: string;
  boardOrProgram?: string;
  details?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  period: string;
  credentialId?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  contributions: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  isFyp?: boolean;
}

export interface PortfolioData {
  profile: Profile;
  contact: ContactInfo;
  socials: SocialLink[];
  skills: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
}
