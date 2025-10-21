import React from 'react';
import { education } from '../data/education';
import TimelineItem from '../components/ui/TimelineItem';
import Card from '../components/ui/Card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

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
                      technologies={edu.coursework || []}
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
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Key Coursework</h2>
            <p className="text-lg text-secondary-600">
              Relevant courses that shaped my expertise in data science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.flatMap(edu => edu.coursework || []).map((course, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-secondary-900 mb-2">{course}</h3>
                <div className="w-full bg-primary-100 h-1 rounded-full">
                  <div className="bg-primary-500 h-1 rounded-full w-full"></div>
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