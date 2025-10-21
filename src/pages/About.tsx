import React from 'react';
import { personalInfo, skills } from '../data/personal';
import Card from '../components/ui/Card';
import SkillBar from '../components/ui/SkillBar';

const About: React.FC = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Passionate about turning data into actionable insights and building intelligent solutions
          </p>
        </div>

        {/* Personal Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">DS</span>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                {personalInfo.name}
              </h2>
              <h3 className="text-xl text-primary-600 mb-6">
                {personalInfo.title}
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
            </div>

            {/* Contact Info */}
            <Card className="p-6">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-medium text-secondary-700 w-20">Email:</span>
                  <span className="text-secondary-600">{personalInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-secondary-700 w-20">Phone:</span>
                  <span className="text-secondary-600">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-secondary-700 w-20">Location:</span>
                  <span className="text-secondary-600">{personalInfo.location}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-secondary-600">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <Card key={category} className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6 capitalize">
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBar 
                      key={index} 
                      name={skill.name} 
                      level={skill.level} 
                      category={skill.category} 
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">5+</span>
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Years Experience</h3>
            <p className="text-secondary-600">
              Working with data science and machine learning projects
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">20+</span>
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Projects Completed</h3>
            <p className="text-secondary-600">
              From research prototypes to production systems
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">3</span>
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Publications</h3>
            <p className="text-secondary-600">
              Research papers in machine learning conferences
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;