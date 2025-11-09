import React from 'react';
import { awards } from '../data/awards';
import Card from '../components/ui/Card';
import { Award, Calendar } from 'lucide-react';

const Awards: React.FC = () => {
  const awardsByCategory = awards.reduce((acc, award) => {
    if (!acc[award.category]) {
      acc[award.category] = [];
    }
    acc[award.category].push(award);
    return acc;
  }, {} as Record<string, typeof awards>);

  const totalAwards = awards.length;
  const categories = Object.keys(awardsByCategory).length;
  const validYears = awards
    .map(award => new Date(award.date).getFullYear())
    .filter(year => !isNaN(year));
  const latestYear = validYears.length > 0 ? Math.max(...validYears) : new Date().getFullYear();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Awards & Recognition
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Recognition for academic excellence, research contributions, and outstanding project work
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">{totalAwards}</h3>
            <p className="text-secondary-600">Total Awards</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">{categories}</span>
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">Categories</h3>
            <p className="text-secondary-600">Different Types</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">{latestYear}</h3>
            <p className="text-secondary-600">Latest Award</p>
          </Card>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award) => (
            <Card key={award.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Award Image */}
              <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-16 h-16 text-primary-600 mx-auto mb-2" />
                  <p className="text-primary-700 font-medium">Award Image</p>
                  <p className="text-primary-600 text-sm">Upload your award photo here</p>
                </div>
              </div>

              {/* Award Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {award.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                      {award.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-secondary-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {award.date}
                    </p>
                  </div>
                </div>

                <p className="text-secondary-600 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary-50 to-primary-100">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">
              Continuous Growth & Recognition
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              These awards represent milestones in my academic and professional journey. 
              I'm committed to continuing this path of excellence and contributing meaningfully 
              to the field of data science and technology.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Awards;