import { Project } from '../types/content';
import FEB from '../assets/Projects/FEB_Project_Screenshot.png';

export const projects: Project[] = [
  {
    id: "feb-project",
    title: "Formula Electric @ Berkeley - Autonomous Project",
    description: "Simulated autonomous racing car on a track with Python and PID controllers.",
    longDescription: "Implemented dual PID controllers and Kinematic Bicycle Model for motion prediction and path tracking via vector projection, leveraging CasADi for control optimization",
    technologies: ["Python", "CasADi", "PID Controllers", "Kinematic Bicycle Model"],
    githubUrl: "https://github.com/RonitMathur10/Autonomous_Project_FEB/tree/main",
    imageUrl: FEB,
    featured: true,
    category: "automation"
  },
  {
    id: "berkeley-course-search",
    title: "Automated Berkeley Course Search",
    description: "Built Selenium web scraper for filtering Berkeley courses; parsed 6K+ courses into 20, optimized for freshman year.",
    longDescription: "Developed an automated web scraping solution using Python and Selenium Library to efficiently filter and parse Berkeley course offerings. The system processes over 6,000 courses and intelligently filters them down to the most relevant 20 courses optimized specifically for freshman year planning. This tool significantly streamlines the course selection process for new students.",
    technologies: ["Python", "Selenium", "Web Scraping", "Data Processing"],
    githubUrl: "https://github.com/RonitMathur10/Automated-Berkeley-Course-Search",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&crop=center",
    featured: true,
    category: "automation"
  },
  {
    id: "project-omni",
    title: "Project OMNI",
    description: "Programmed Raspberry Pi for building vision for night safety. Experimented with 7 ML architectures (Inception, Region-Based CNN, etc.) and feature optimization to increase night-vision accuracy from 70% to 90%.",
    longDescription: "Developed a comprehensive night-vision safety system using Raspberry Pi and advanced machine learning techniques. The project involved extensive experimentation with 7 different ML architectures including Inception and Region-Based CNN models. Through systematic feature optimization and model tuning, achieved a significant improvement in night-vision accuracy from 70% to 90%. Authored technical reports to demonstrate algorithmic improvements and obtained $2000 research scholarship funding.",
    technologies: ["Python", "Raspberry Pi", "Machine Learning", "Inception", "Region-Based CNN", "Computer Vision"],
    githubUrl: "https://github.com/ronitmathur10/project-omni",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=450&fit=crop&crop=center",
    featured: true,
    category: "machine-learning"
  },
  {
    id: "research-competitor-isef",
    title: "Research Competitor, International Science & Engineering Fair (ISEF)",
    description: "Built and customized a ResNet-34 CNN in Python using Tensorflow and FastAI, modifying backpropagation, learning rate scheduler, and loss functions. 5 providers on diseases using images from a mobile device.",
    longDescription: "Developed a sophisticated deep learning solution for medical diagnosis using mobile device imagery. Built and extensively customized a ResNet-34 CNN architecture using TensorFlow and FastAI frameworks. The project involved advanced modifications to backpropagation algorithms, learning rate scheduling, and custom loss functions. Conducted 50+ trials with automated tracking and early stopping techniques, applying data augmentation in Python to improve generalization accuracy by 50%. Successfully increased baseline model performance and developed a Kotlin Android app published on Google Playstore, integrating the trained model via TensorFlow Lite with ONNX Runtime for real-time classification. Garnered 50+ downloads and achieved 4.0+ reviews.",
    technologies: ["Python", "TensorFlow", "FastAI", "ResNet-34", "CNN", "Kotlin", "Android", "ONNX", "TensorFlow Lite"],
    githubUrl: "https://github.com/ronitmathur10/isef-research",
    liveUrl: "https://play.google.com/store/apps/details?id=com.ronitmathur.medicalai",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop&crop=center",
    featured: true,
    category: "machine-learning"
  },
  {
    id: "student-launch-initiative",
    title: "Student Launch Initiative - NASA Student Research",
    description: "Led avionics team of 7 in high-power rocketry. Programmed avionics modules using Arduino and Teensy 4.1 with C++ firmware for live telemetry, sensor logging, and recovery deployment.",
    longDescription: "Led a multidisciplinary avionics team of 7 members in NASA's Student Launch Initiative, focusing on high-power rocketry systems. Developed comprehensive avionics solutions using Arduino and Teensy 4.1 microcontrollers with custom C++ firmware. The system provided real-time telemetry data transmission, comprehensive sensor data logging, and automated recovery deployment mechanisms. Successfully validated all designs with NASA engineers, demonstrating technical excellence and project management capabilities in aerospace engineering applications.",
    technologies: ["C++", "Arduino", "Teensy 4.1", "Firmware", "Telemetry", "Sensor Integration", "Python"],
    githubUrl: "https://github.com/ronitmathur10/nasa-student-launch",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop&crop=center",
    featured: false,
    category: "embedded-systems"
  }
];