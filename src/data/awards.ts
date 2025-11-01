import { Award } from '../types/content';

export const awards: Award[] = [
  {
    id: '1',
    title: 'Dean\'s List Recognition',
    description: 'Achieved Dean\'s List recognition for maintaining a GPA above 3.7 while taking a full course load. This award recognizes academic excellence and dedication to scholarly pursuits in computer science and data analytics.',
    imageUrl: '/api/placeholder/400/300',
    date: 'May 2023',
    category: 'Academic'
  },
  {
    id: '2',
    title: 'Best Data Science Project Award',
    description: 'Received the Best Data Science Project Award for developing a machine learning model that predicts student performance with 92% accuracy. The project was recognized for its innovative approach and practical applications in educational technology.',
    imageUrl: '/api/placeholder/400/300',
    date: 'December 2023',
    category: 'Project'
  },
  {
    id: '3',
    title: 'Outstanding Research Contribution',
    description: 'Honored with the Outstanding Research Contribution award for publishing a research paper on machine learning applications in educational data mining. The work was presented at an international conference and received positive peer reviews.',
    imageUrl: '/api/placeholder/400/300',
    date: 'March 2024',
    category: 'Research'
  },
  {
    id: '4',
    title: 'Hackathon Winner - Data Analytics Track',
    description: 'Won first place in the Data Analytics track at the university hackathon by developing a real-time dashboard for analyzing social media sentiment. The solution impressed judges with its technical implementation and user experience design.',
    imageUrl: '/api/placeholder/400/300',
    date: 'October 2023',
    category: 'Competition'
  }
];