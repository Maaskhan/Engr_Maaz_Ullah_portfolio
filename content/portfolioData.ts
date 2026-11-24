import {
  Profile,
  ContactInfo,
  SocialLink,
  SkillCategory,
  Experience,
  Education,
  Certification,
  Project,
  PortfolioData,
} from "@/types";

export const profile: Profile = {
  name: "Maaz Ullah",
  fullName: "Eng. Maaz Ullah",
  title: "Software Engineer | AI, Machine Learning & Python Developer",
  accreditation: "PEC-Recognized Engineer",
  degreeSummary: "BS Software Engineering (2026) — MUST",
  location: "Pakistan",
  relocationStatus: "Open to Relocation & Remote Opportunities",
  summary:
    "PEC-recognized Software Engineering graduate from Mirpur University of Science and Technology (MUST) specializing in Python development, Computer Vision, AI-agent workflows, and FastAPI backend services. Proven internship experience delivering automated machine learning pipelines, REST API integrations, and responsive web applications. Creator of VisionLens, a live deployed deep-learning cataract classification platform.",
  aboutNarrative: [
    "I am a Software Engineering graduate from Mirpur University of Science & Technology (MUST), focused on Python development, Artificial Intelligence, Machine Learning, and Computer Vision.",
    "I built VisionLens, my AI-based cataract detection project.",
  ],
  motto: "Build • Innovate • Grow",
  professionalInterests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Python Development",
    "Computer Vision",
    "AI Agents & Automation",
  ],
  heroImage: "/images/profile-1.png",
  aboutImage: "/images/profile-2.png",
  resumePath: "/resume/Maaz-Ullah-CV.pdf",
};

export const contactInfo: ContactInfo = {
  email: "eng.maazullahoffical@gmail.com",
  phone: "+92 306 2375397",
  location: "Pakistan",
  availability: "Open to international opportunities, remote roles, and relocation",
  linkedInUrl: "https://linkedin.com/in/maaz-ullah-24b070365",
  githubUrl: "https://github.com/Maaskhan",
  livePortfolioAppUrl: "https://visionlens-detector.streamlit.app/",
  resumeDownloadUrl: "/resume/Maaz-Ullah-CV.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Maaskhan",
    iconName: "Github",
    handle: "Maaskhan",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/maaz-ullah-24b070365",
    iconName: "Linkedin",
    handle: "maaz-ullah-24b070365",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:eng.maazullahoffical@gmail.com",
    iconName: "Mail",
    handle: "eng.maazullahoffical@gmail.com",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+923062375397",
    iconName: "Phone",
    handle: "+92 306 2375397",
  },
  {
    id: "live-app",
    name: "VisionLens Live",
    url: "https://visionlens-detector.streamlit.app/",
    iconName: "ExternalLink",
    handle: "visionlens-detector.streamlit.app",
  },
];

export const technicalSkills: SkillCategory[] = [
  {
    id: "ai-cv",
    category: "AI & Computer Vision",
    iconName: "Brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "ResNet-50",
      "OpenCV",
      "Grad-CAM",
      "AI-Agent Workflows",
      "Prompt Engineering",
      "Image Preprocessing",
    ],
  },
  {
    id: "prog-lang",
    category: "Programming Languages",
    iconName: "Code2",
    skills: [
      "Python",
      "C/C++",
      "SQL",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "web-backend",
    category: "Web & Backend APIs",
    iconName: "Server",
    skills: [
      "FastAPI",
      "Streamlit",
      "RESTful API Design & Integration",
      "Relational Databases",
      "Responsive UI Development",
    ],
  },
  {
    id: "tools-core",
    category: "Tools & Core Concepts",
    iconName: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "Google Colab",
      "VS Code",
      "Linux",
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "Software Testing",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-dps",
    role: "Artificial Intelligence Intern",
    company: "Digital Premier Solutions (Pvt.) Ltd.",
    period: "Jun 2026 – Jul 2026",
    credentialId: "DPS-I4N8-DL",
    responsibilities: [
      "Engineered end-to-end Python machine learning workflows covering automated data preprocessing, feature extraction, and model evaluation.",
      "Designed structured AI-agent workflows and prompt-engineering pipelines to automate internal data-analysis and reporting tasks.",
      "Integrated and tested REST APIs connecting backend ML inference services with client-facing web interfaces.",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "AI-Agent Workflows",
      "Prompt Engineering",
      "REST APIs",
    ],
  },
  {
    id: "exp-nerithonx",
    role: "Web Developer Intern",
    company: "Nerithonx Technologies (Pvt.) Ltd.",
    period: "Sep 2024 – Oct 2024",
    responsibilities: [
      "Built responsive, cross-browser frontend interfaces using HTML5, CSS3, and JavaScript to improve user navigation and accessibility.",
      "Connected backend application logic with relational SQL database schemas to enable reliable structured data storage and retrieval.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "SQL",
      "Responsive Design",
    ],
  },
];

export const educationList: Education[] = [
  {
    id: "edu-must",
    degree: "BS Software Engineering",
    institution: "Mirpur University of Science and Technology (MUST)",
    year: "2026",
    accreditation: "PEC Accredited",
    details:
      "Comprehensive software engineering curriculum covering software architecture, data structures, algorithms, object-oriented design, database engineering, and artificial intelligence systems.",
  },
  {
    id: "edu-dit",
    degree: "Diploma in Information Technology (DIT)",
    institution: "KP Board of Technical & Commerce Education / GCMS Khar Bajaur",
    year: "2022",
    details:
      "Core training in computer hardware, software fundamentals, networking concepts, and introductory programming.",
  },
];

export const certificationsList: Certification[] = [
  {
    id: "cert-ai-specialist",
    name: "AI Specialist Certification",
    issuer: "Digital Premier Solutions (Pvt.) Ltd.",
    period: "Jul 2026",
    credentialId: "DPS-I4N8-DL",
  },
  {
    id: "cert-mobile-dev",
    name: "Mobile App Development Certification",
    issuer: "KP Information Technology Board (KPITB) & KP Youth Employment Program",
    period: "Jan–Mar 2022",
  },
];

export const projects: Project[] = [
  {
    id: "proj-visionlens",
    title: "VisionLens – AI-Based Cataract Detection System",
    subtitle: "Final Year Project (FYP)",
    category: "Deep Learning & Computer Vision",
    summary:
      "A deep-learning computer vision web application classifying ocular images into Normal, Immature Cataract, and Mature Cataract stages, augmented with Grad-CAM visual heatmaps for clinical explainability.",
    contributions: [
      "Developed and deployed a deep-learning computer vision web application classifying ocular images into Normal, Immature Cataract, and Mature Cataract stages.",
      "Implemented automated OpenCV image preprocessing and Grad-CAM heatmap visualizations to provide interpretable model predictions for end users.",
      "Designed and deployed the full application workflow utilizing Python, Streamlit, and deep neural networks.",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "ResNet-50",
      "OpenCV",
      "Grad-CAM",
      "Streamlit",
    ],
    liveUrl: "https://visionlens-detector.streamlit.app/",
    githubUrl: "https://github.com/Maaskhan/VisionLens-Detector",
    featured: true,
    isFyp: true,
  },
  {
    id: "proj-virtual-mouse",
    title: "AI Hand-Gesture Virtual Mouse Controller",
    subtitle: "Human-Computer Interaction (HCI) System",
    category: "Real-Time Computer Vision",
    summary:
      "A real-time computer vision system enabling touchless cursor navigation, clicking, and scrolling through live webcam hand-gesture recognition and landmark tracking.",
    contributions: [
      "Built a real-time computer vision system enabling touchless cursor navigation, clicking, and scrolling through live webcam hand-gesture recognition.",
      "Optimized frame-processing pipelines to minimize input latency and ensure smooth cursor control under varying lighting conditions.",
    ],
    techStack: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Real-Time Landmark Tracking",
    ],
    githubUrl: "https://github.com/Maaskhan",
    featured: true,
    isFyp: false,
  },
];

export const portfolioData: PortfolioData = {
  profile,
  contact: contactInfo,
  socials: socialLinks,
  skills: technicalSkills,
  experiences,
  education: educationList,
  certifications: certificationsList,
  projects,
};

// Default export for flexibility
export default portfolioData;
