import { Education, Society } from '../types/content';

export const education: Education[] = [
  {
    id: "1",
    institution: "University of California, Berkeley",
    degree: "Bachelor of Arts",
    field: "Data Science",
    startDate: "2025-08",
    endDate: "2029-05",
    gpa: 0.00,
    coursework: [
      "Foundations in Data Science (Data C8)",
      "Structure and Interpretation of Computer Programs (CS 61A)",
      "Machine Learning @ Berkeley Decal Course (CS 198)",
    ],
    achievements: [
    ],
    societies: [
      {
        id: "ds-society",
        name: "Data Science Society",
        description: "A student organization focused on building a community of data science enthusiasts through workshops, networking events, and collaborative projects.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        category: "Academic"
      },
      {
        id: "ml-berkeley",
        name: "Machine Learning @ Berkeley",
        description: "Student-run organization dedicated to making machine learning accessible through education, research, and industry connections.",
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        category: "Academic"
      }
      // {
      //   id: "bsc",
      //   name: "Berkeley Student Cooperative",
      //   description: "A housing cooperative providing affordable living options while fostering community engagement and sustainable living practices.",
      //   imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      //   category: "Housing"
      // },
      // {
      //   id: "cal-hiking",
      //   name: "Cal Hiking & Outdoor Society",
      //   description: "Outdoor recreation club organizing hiking trips, camping adventures, and environmental conservation activities around the Bay Area.",
      //   imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
      //   category: "Recreation"
      // },
      // {
      //   id: "usa",
      //   name: "Undergraduate Statistics Association",
      //   description: "Professional organization connecting statistics students with career opportunities, research projects, and academic support.",
      //   imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      //   category: "Academic"
      // }
    ]
  },
  {
    id: "2",
    institution: "Portola High School",
    degree: "Diploma",
    field: "",
    startDate: "2021-08",
    endDate: "2025-05",
    gpa: 3.9,
    coursework: [
      "AP Computer Science A (Java)",
      "Calculus I & II",
      "Analytic Geometry & Calculus III",
      "Differential Equations",
      "Linear Algebra",
      "AP Statistics",
      "Physics I & II",
      "Physics C: Mechanics",
      "Physics C: Electricity & Magnetism",
      "AP Chemistry",
      "ACT: 36"
    ],
    achievements: [
      "Magna Cum Laude Graduate",
    ],
    societies: [
      {
        id: "portola-data-science-club",
        name: "Portola Data Science Club",
        description: "Founder of first Data Science club at school",
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
        category: "Clubs"
      }
    ]
    // societies: [
    //   {
    //     id: "nhs",
    //     name: "National Honor Society",
    //     description: "Prestigious academic honor society recognizing outstanding students in scholarship, leadership, service, and character.",
    //     imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    //     category: "Honor Society"
    //   },
    //   {
    //     id: "cs-honor",
    //     name: "Computer Science Honor Society",
    //     description: "Honor society for students excelling in computer science, promoting academic excellence and technological innovation.",
    //     imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
    //     category: "Honor Society"
    //   },
    //   {
    //     id: "math-honor",
    //     name: "Math Honor Society",
    //     description: "Recognition society for students demonstrating exceptional mathematical ability and academic achievement.",
    //     imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    //     category: "Honor Society"
    //   },
    //   {
    //     id: "science-olympiad",
    //     name: "Science Olympiad",
    //     description: "Competitive science team participating in regional and state tournaments across various STEM disciplines.",
    //     imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
    //     category: "Competition"
    //   },
    //   {
    //     id: "academic-decathlon",
    //     name: "Academic Decathlon",
    //     description: "Competitive academic team covering ten subjects including literature, mathematics, science, and current events.",
    //     imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    //     category: "Competition"
    //   },
    //   {
    //     id: "robotics",
    //     name: "Robotics Club",
    //     description: "Engineering club designing and building robots for competitions while learning programming and mechanical design.",
    //     imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    //     category: "STEM"
    //   },
    //   {
    //     id: "chess",
    //     name: "Chess Club",
    //     description: "Strategic thinking club for chess enthusiasts, participating in tournaments and developing analytical skills.",
    //     imageUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop",
    //     category: "Recreation"
    //   },
    //   {
    //     id: "debate",
    //     name: "Debate Team",
    //     description: "Competitive speech and debate team developing critical thinking, research, and public speaking skills.",
    //     imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    //     category: "Speech & Debate"
    //   }
    // ]
  }
];