import { PersonalInfo, Skill } from '../types/content';
import profile_photo from "src/assets/Profile_Photo_png.png";


export const personalInfo: PersonalInfo = {
  name: "Ronit Mathur",
  title: "UC Berkeley Data Science Undergraduate",
  email: "ronit.mathur@berkeley.edu",
  phone: "+1 (949) 506-9568",
  location: "Berkeley, CA",
  bio: "Passionate data science undergraduate with a strong foundation in machine learning, statistical analysis, and data visualization. Currently pursuing a Bachelor's degree in Data Science with a focus on predictive modeling and artificial intelligence. Eager to apply analytical skills to solve real-world problems and contribute to data-driven decision making.",
  // profileImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20of%20a%20young%20data%20scientist%20student%2C%20friendly%20smile%2C%20business%20casual%20attire%2C%20clean%20background%2C%20high%20quality%20portrait&image_size=square",
  profileImage: profile_photo,
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/ronitmathur10",
      icon: "linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/RonitMathur10",
      icon: "github"
    },
    {
      platform: "Email",
      url: "ronit.mathur@berkeley.edu",
      icon: "mail"
    }
  ]
};

export const skills: Skill[] = [
  // Programming Languages
  // can take out "level" later if i want to
  { name: "Python", level: 90, category: "programming" },
  { name: "Java", level: 90, category: "programming" },
  { name: "C++", level: 90, category: "programming" },
  { name: "Typescript", level: 90, category: "programming" },
  { name: "React", level: 90, category: "programming" },
  { name: "Kotlin", level: 90, category: "programming" },
  { name: "SQL", level: 80, category: "programming" },
  { name: "HTML/JavaScript/CSS", level: 70, category: "programming" },
  { name: "Rust", level: 85, category: "programming" },
  { name: "LaTeX", level: 90, category: "programming" },
  
  // Libraries & Frameworks
  { name: "Pandas", level: 85, category: "libraries & frameworks" },
  { name: "NumPy", level: 85, category: "libraries & frameworks" },
  { name: "Scikit-learn", level: 80, category: "libraries & frameworks" },
  { name: "TensorFlow", level: 75, category: "libraries & frameworks" },
  { name: "PyTorch", level: 70, category: "libraries & frameworks" },
  { name: "MongoDB", level: 70, category: "libraries & frameworks" },
  { name: "Flask", level: 70, category: "libraries & frameworks" },
  { name: "Node.js", level: 70, category: "libraries & frameworks" },
  { name: "Matplotlib", level: 70, category: "libraries & frameworks" },
  { name: "OpenCV", level: 70, category: "libraries & frameworks" },
  { name: "FastAI", level: 70, category: "libraries & frameworks" },
  { name: "Firebase (Storage+Authentication)", level: 70, category: "libraries & frameworks" },
  { name: "Selenium", level: 70, category: "libraries & frameworks" },
  
  // Tools
  { name: "Git", level: 80, category: "tools" },
  { name: "Jupyter Notebook", level: 90, category: "tools" },
  { name: "Excel", level: 75, category: "tools" },
  { name: "BeautifulSoup", level: 70, category: "tools" },
  
  // Other
  // { name: "Machine Learning", level: 85, category: "other" },
  // { name: "Statistical Analysis", level: 80, category: "other" },
  // { name: "Data Visualization", level: 85, category: "other" },
  // { name: "Deep Learning", level: 75, category: "other" }

  // Skills
  { name: "Machine Learning", level: 85, category: "skills" },
  { name: "Deep Learning", level: 75, category: "skills" },
  { name: "Data Processing/Analysis", level: 75, category: "skills" },
  { name: "Statistical Modeling", level: 80, category: "skills" },
  { name: "Data Visualization", level: 85, category: "skills" },
  { name: "Arduino", level: 75, category: "skills" }
];