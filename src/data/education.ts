import { Education } from '../types/content';

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Massachusetts Boston",
    degree: "Bachelor of Science",
    field: "Data Science",
    startDate: "2022-09",
    endDate: "2026-05",
    gpa: 3.8,
    coursework: [
      "Introduction to Data Science",
      "Statistical Methods",
      "Machine Learning Fundamentals",
      "Database Systems",
      "Data Visualization",
      "Linear Algebra",
      "Calculus III",
      "Probability Theory",
      "Python Programming",
      "R for Data Analysis"
    ],
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Data Science Club Vice President",
      "Outstanding Student in Statistics Award",
      "Undergraduate Research Grant Recipient"
    ]
  },
  {
    id: "2",
    institution: "Boston Community College",
    degree: "Associate of Science",
    field: "Mathematics",
    startDate: "2020-09",
    endDate: "2022-05",
    gpa: 3.9,
    coursework: [
      "Calculus I & II",
      "Statistics",
      "Computer Science Fundamentals",
      "Physics I & II"
    ],
    achievements: [
      "Summa Cum Laude Graduate",
      "Mathematics Tutor for 2 years",
      "Phi Theta Kappa Honor Society Member"
    ]
  }
];