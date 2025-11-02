import React from 'react';
import { education } from '../data/education';
import TimelineItem from '../components/ui/TimelineItem';
import Card from '../components/ui/Card';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Education
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            My academic journey in data science and computer science
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <TimelineItem
                      title={edu.degree}
                      subtitle={edu.institution}
                      date={`${edu.startDate} - ${edu.endDate}`}
                      description={`Field of Study: ${edu.field}`}
                      achievements={[
                        `GPA: ${edu.gpa}`,
                        ...(edu.achievements || [])
                      ]}
                      // technologies={edu.coursework || []}
                      coursework={edu.coursework || []}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Degrees Earned</h3>
            <p className="text-3xl font-bold text-primary-600 mb-2">{education.length}</p>
            <p className="text-secondary-600">Advanced degrees in technical fields</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Academic Excellence</h3>
            <p className="text-3xl font-bold text-primary-600 mb-2">3.8+</p>
            <p className="text-secondary-600">Average GPA across all programs</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Coursework</h3>
            <p className="text-3xl font-bold text-primary-600 mb-2">30+</p>
            <p className="text-secondary-600">Relevant courses completed</p>
          </Card>
        </div>

        {/* Key Coursework */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Key Coursework</h2>
            <p className="text-lg text-secondary-600">
              Relevant courses that shaped my expertise in data science
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {education.flatMap(edu => edu.coursework || []).map((course, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Societies & Organizations */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Societies & Clubs</h2>
            <p className="text-lg text-secondary-600">
              {/* Extracurricular involvement and leadership in academic and social organizations */}
              Extracurricular involvement
            </p>
          </div>

          {/* Societies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.flatMap(edu => edu.societies || []).map((society) => (
              <Card key={society.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {/* Society Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={society.imageUrl}
                    alt={society.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Society Content */}
                <div className="p-6">
                  <div className="mb-3">
                    {society.link ? (
                      <a 
                        href={society.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-secondary-900 mb-2 hover:text-primary-600 hover:underline transition-colors block"
                      >
                        {society.name}
                      </a>
                    ) : (
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">
                        {society.name}
                      </h3>
                    )}
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                      {society.category}
                    </span>
                  </div>

                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {society.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;