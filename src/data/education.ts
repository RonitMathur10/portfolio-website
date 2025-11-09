import { Education, Society } from '../types/content';
import FEB from '../assets/Clubs/FEB.png';
import Codify from '../assets/Clubs/Codify.png';

export const education: Education[] = [
  {
    id: "1",
    institution: "University of California, Berkeley",
    degree: "Bachelor of Arts",
    field: "Data Science",
    startDate: "2025-08",
    endDate: "2029-05",
    gpa: 4.00,
    coursework: [
      "Foundations in Data Science (Data C8)",
      "Structure and Interpretation of Computer Programs (CS 61A)",
      "Machine Learning @ Berkeley Decal Course (CS 198)",
    ],
    // achievements: [
    // ]
    societies: [
        {
            id: "FEB",
            name: "Formula Electric @ Berkeley",
            description: "Software engineer for the Autonomous subteam of Berkeley's electric racing team",
            // imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
            // imageUrl: "https://www.google.com/search?sca_esv=8f56ccbb6b3ac8ff&rlz=1C5MACD_enUS1164US1164&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJjYuUnSkczEhozYdaq1wZrE2Y0FseakjNIJw-yMUFwHa6ADNJWAoQo1h7kJvh7-RIGymsR_Vi34_z_n3fJxSMOQahARHFkwwFfudMKP2CB4MoMw2rkt8FSuJbjIMoRZQxwNukDmFOnGYOTlMR7Q7I-wVTTimQ&q=formula+electric+berkeley&sa=X&ved=2ahUKEwj0x6Ow99GQAxWQADQIHbK0IKIQtKgLegQIExAB&cshid=1762033896279312&biw=1710&bih=981&dpr=2#sv=CAMSVhoyKhBlLWZDN3M3UGE0bFVEeU9NMg5mQzdzN1BhNGxVRHlPTToONG9FY2tHNzFFd2FDNE0gBCocCgZtb3NhaWMSEGUtZkM3czdQYTRsVUR5T00YADABGAcggvG--w4wAkoKCAIQAhgCIAIoAg",
            // imageUrl: FEB,
            imageUrl: FEB,
            category: "Clubs",
            link: "https://ev.studentorg.berkeley.edu/"
          },
          {
            id: "codify-berkeley",
            name: "Codify Berkeley",
            description: "Software Engineer at Codify, a Berkeley coding club",
            imageUrl: Codify,
            category: "Clubs",
            link: "https://codifyberkeley.org/"
          }
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
      "Analytic Geometry & Calculus III",
      "Differential Equations",
      "Linear Algebra",
      "AP Statistics",
      "Calculus I & II",
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
        name: "Data Science Club",
        description: "Founder of first Data Science club in High School",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
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