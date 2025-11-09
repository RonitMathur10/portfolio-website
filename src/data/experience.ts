import { Experience } from '../types/content';

export const experience: Experience[] = [
  {
    id: "tlw-frontend",
    company: "The Learning Wok (TLW)",
    position: "Frontend Intern",
    startDate: "2025-05",
    endDate: "2025-08",
    description: "Developed a full-stack competition testing platform and live leaderboard system using modern web technologies. Implemented comprehensive authentication and backend systems to enhance educational outcomes.",
    achievements: [
      "Coded a full-stack website using TypeScript and CSS to function as competition testing platform & live leaderboard",
      "Implemented Firebase auth and backend to store results",
      "Increased class pass rates by 60% and customer base by 35%"
    ],
    technologies: ["TypeScript", "CSS", "Firebase", "Authentication", "Backend Development"]
  },
  {
    id: "prsti-ai",
    company: "Prsti AI",
    position: "Data Analyst Intern",
    startDate: "2024-06",
    endDate: "2025-11",
    description: "Conducted comprehensive data analysis and machine learning model evaluation for healthcare and Dharma projects. Developed analytical frameworks and dashboards to optimize decision-making processes.",
    achievements: [
      "Orchestrated exploratory data analysis (EDA) techniques in Python: inputted, standardized, and categorized 1 million+ error values from Dharma and healthcare projects for statistical insights",
      "Evaluated relative performance of 20 classification and regression models",
      "Documented results and developed dashboards for informed analysis, decreasing analysis time by 20%"
    ],
    technologies: ["Python", "EDA", "Machine Learning", "Classification", "Regression", "Data Visualization", "Dashboards"]
  },
  {
    id: "usc-research",
    company: "USC Viterbi Computer Science Dept.",
    position: "Research Co-Author",
    startDate: "2024-06",
    endDate: "2025-01",
    description: "Engineered machine learning fairness frameworks and conducted comprehensive research on demographic bias in decision systems. Published research findings at top-tier academic conference.",
    achievements: [
      "Engineered an ML fairness framework analyzing spatial and non-spatial demographic bias in decision systems for banks, ads, and law enforcement, bridging geographic and protected-attribute data",
      "Synthesized 8 prior papers, refactored 10-year-old research codebase with modern Python libraries (pandas, rtree, statsmodels API, etc.)",
      "Automated ETL pipelines using scikit-learn to process 10 million+ data points, uncovering bias patterns across Top 10 banks",
      "Co-authored paper published at EDBT 2025"
    ],
    technologies: ["Python", "Machine Learning", "Pandas", "Rtree", "Statsmodels", "Scikit-learn", "ETL", "Research"],
    link: "https://openproceedings.org/2025/conf/edbt/paper-263.pdf"
  }
];