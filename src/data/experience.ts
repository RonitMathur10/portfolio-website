import { Experience } from '../types/content';

export const experience: Experience[] = [
  {
    id: "1",
    company: "TechStart Analytics",
    position: "Data Science Intern",
    startDate: "2024-06",
    endDate: "2024-08",
    description: "Worked on customer behavior analysis and predictive modeling projects for e-commerce clients. Collaborated with senior data scientists to develop machine learning models and create data visualizations for stakeholder presentations.",
    achievements: [
      "Developed a customer churn prediction model with 87% accuracy",
      "Created interactive dashboards that reduced reporting time by 40%",
      "Presented findings to C-level executives",
      "Mentored 2 junior interns in Python and data analysis techniques"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL", "Git"]
  },
  {
    id: "2",
    company: "University Research Lab",
    position: "Undergraduate Research Assistant",
    startDate: "2023-09",
    endDate: "Present",
    description: "Conducting research on natural language processing applications in healthcare data. Working under Dr. Sarah Chen to analyze patient feedback and medical records using machine learning techniques.",
    achievements: [
      "Co-authored research paper submitted to ICML 2024",
      "Developed NLP pipeline for sentiment analysis of patient reviews",
      "Processed and analyzed dataset of 50,000+ medical records",
      "Presented research at undergraduate symposium"
    ],
    technologies: ["Python", "NLTK", "spaCy", "TensorFlow", "Jupyter", "PostgreSQL"]
  },
  {
    id: "3",
    company: "DataTutor Inc.",
    position: "Statistics Tutor",
    startDate: "2023-01",
    endDate: "2024-05",
    description: "Provided one-on-one and group tutoring sessions for undergraduate students in statistics, probability, and introductory data science courses. Developed custom learning materials and practice problems.",
    achievements: [
      "Maintained 4.9/5 student satisfaction rating",
      "Helped 25+ students improve their grades by at least one letter grade",
      "Created comprehensive study guides for statistics courses",
      "Trained 3 new tutors in effective teaching methodologies"
    ],
    technologies: ["R", "Excel", "SPSS", "Minitab"]
  }
];