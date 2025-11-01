import React from 'react';
import { experience } from '../data/experience';
import TimelineItem from '../components/ui/TimelineItem';
import Card from '../components/ui/Card';
import { Briefcase, TrendingUp, Users, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const totalYears = experience.reduce((total, exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate === 'Present' ? new Date() : new Date(exp.endDate);
    const years = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return total + years;
  }, 0);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Experience
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            My professional journey in data science and technology
          </p>
        </div>

        {/* Experience Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Years Experience</h3>
            <p className="text-3xl font-bold text-primary-600">{Math.round(totalYears)}</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Positions</h3>
            <p className="text-3xl font-bold text-primary-600">{experience.length}</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Companies</h3>
            <p className="text-3xl font-bold text-primary-600">{new Set(experience.map(exp => exp.company)).size}</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Career Growth</h3>
            <p className="text-3xl font-bold text-primary-600">100%</p>
          </Card>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Professional Timeline</h2>
            <p className="text-lg text-secondary-600">
              My career progression in data science and analytics
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <TimelineItem
                      title={exp.position}
                      subtitle={exp.company}
                      date={`${exp.startDate} - ${exp.endDate}`}
                      description={exp.description}
                      achievements={exp.achievements}
                      technologies={exp.technologies}
                      link={exp.link}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Technologies */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Technologies Used</h2>
            <p className="text-lg text-secondary-600">
              Tools and technologies I've worked with professionally
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(experience.flatMap(exp => exp.technologies))).map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;