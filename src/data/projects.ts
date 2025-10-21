import { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: "1",
    title: "COVID-19 Impact Analysis Dashboard",
    description: "Interactive dashboard analyzing the economic and social impact of COVID-19 across different regions using real-time data.",
    longDescription: "Developed a comprehensive dashboard that visualizes the multifaceted impact of COVID-19 on various sectors including healthcare, economy, and education. The project involved data collection from multiple APIs, data cleaning and preprocessing, statistical analysis, and creating interactive visualizations. The dashboard provides insights into infection rates, economic indicators, and social mobility patterns across different geographical regions.",
    technologies: ["Python", "Plotly Dash", "Pandas", "NumPy", "APIs", "CSS"],
    githubUrl: "https://github.com/alexjohnson/covid-impact-dashboard",
    liveUrl: "https://covid-impact-dashboard.herokuapp.com",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20data%20dashboard%20with%20charts%20and%20graphs%2C%20COVID-19%20statistics%2C%20clean%20interface%2C%20purple%20and%20blue%20color%20scheme&image_size=landscape_16_9",
    featured: true,
    category: "data-visualization"
  },
  {
    id: "2",
    title: "Student Performance Predictor",
    description: "Machine learning model to predict student academic performance based on various demographic and behavioral factors.",
    longDescription: "Built a comprehensive machine learning pipeline to predict student academic outcomes using features such as study habits, socioeconomic background, previous grades, and extracurricular activities. The project involved extensive data preprocessing, feature engineering, model selection, and hyperparameter tuning. Achieved 92% accuracy using ensemble methods and provided actionable insights for educational interventions.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "Jupyter"],
    githubUrl: "https://github.com/alexjohnson/student-performance-predictor",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=machine%20learning%20model%20visualization%2C%20student%20data%20analysis%2C%20educational%20charts%2C%20academic%20performance%20graphs&image_size=landscape_16_9",
    featured: true,
    category: "machine-learning"
  },
  {
    id: "3",
    title: "Social Media Sentiment Analyzer",
    description: "NLP-powered tool for analyzing sentiment trends in social media posts related to brand mentions and product reviews.",
    longDescription: "Developed a natural language processing application that analyzes sentiment in social media posts and product reviews. The system uses advanced NLP techniques including tokenization, named entity recognition, and sentiment classification. Built a web interface for real-time sentiment analysis and trend visualization, helping businesses understand public opinion about their products and services.",
    technologies: ["Python", "NLTK", "spaCy", "Flask", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/alexjohnson/sentiment-analyzer",
    liveUrl: "https://sentiment-analyzer-demo.netlify.app",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=social%20media%20sentiment%20analysis%20interface%2C%20text%20processing%2C%20emotion%20detection%2C%20modern%20web%20app&image_size=landscape_16_9",
    featured: false,
    category: "nlp"
  },
  {
    id: "4",
    title: "Housing Price Prediction Model",
    description: "Regression model for predicting real estate prices using location, property features, and market trends data.",
    longDescription: "Created a sophisticated regression model to predict housing prices in the Boston metropolitan area. The project involved web scraping real estate data, extensive feature engineering including location-based features, property characteristics, and neighborhood demographics. Implemented multiple regression techniques and compared their performance, ultimately achieving a mean absolute error of less than $15,000 on test data.",
    technologies: ["Python", "BeautifulSoup", "Pandas", "Scikit-learn", "Folium", "Streamlit"],
    githubUrl: "https://github.com/alexjohnson/housing-price-predictor",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=real%20estate%20data%20visualization%2C%20housing%20market%20analysis%2C%20property%20price%20charts%2C%20geographic%20mapping&image_size=landscape_16_9",
    featured: false,
    category: "machine-learning"
  }
];