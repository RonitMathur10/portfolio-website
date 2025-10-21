import { PersonalInfo, Skill } from '../types/content';

export const personalInfo: PersonalInfo = {
  name: "Alex Johnson",
  title: "Data Science Undergraduate Student",
  email: "alex.johnson@university.edu",
  phone: "+1 (555) 123-4567",
  location: "Boston, MA",
  bio: "Passionate data science undergraduate with a strong foundation in machine learning, statistical analysis, and data visualization. Currently pursuing a Bachelor's degree in Data Science with a focus on predictive modeling and artificial intelligence. Eager to apply analytical skills to solve real-world problems and contribute to data-driven decision making.",
  profileImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20a%20young%20data%20scientist%20student%2C%20friendly%20smile%2C%20business%20casual%20attire%2C%20clean%20background%2C%20high%20quality%20portrait&image_size=square",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/alexjohnson",
      icon: "linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/alexjohnson",
      icon: "github"
    },
    {
      platform: "Email",
      url: "mailto:alex.johnson@university.edu",
      icon: "mail"
    }
  ]
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 90, category: "programming" },
  { name: "R", level: 85, category: "programming" },
  { name: "SQL", level: 80, category: "programming" },
  { name: "JavaScript", level: 70, category: "programming" },
  
  // Tools & Frameworks
  { name: "Pandas", level: 85, category: "frameworks" },
  { name: "NumPy", level: 85, category: "frameworks" },
  { name: "Scikit-learn", level: 80, category: "frameworks" },
  { name: "TensorFlow", level: 75, category: "frameworks" },
  { name: "PyTorch", level: 70, category: "frameworks" },
  
  // Tools
  { name: "Jupyter Notebook", level: 90, category: "tools" },
  { name: "Git", level: 80, category: "tools" },
  { name: "Tableau", level: 75, category: "tools" },
  { name: "Power BI", level: 70, category: "tools" },
  
  // Other
  { name: "Machine Learning", level: 85, category: "other" },
  { name: "Statistical Analysis", level: 80, category: "other" },
  { name: "Data Visualization", level: 85, category: "other" },
  { name: "Deep Learning", level: 75, category: "other" }
];