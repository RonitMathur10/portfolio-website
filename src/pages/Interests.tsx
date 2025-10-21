import React from 'react';
import { interests } from '../data/interests';
import Card from '../components/ui/Card';
import { 
  Brain, 
  BarChart3, 
  GitBranch, 
  Camera, 
  Mountain, 
  Gamepad2, 
  ChefHat, 
  Heart,
  Lightbulb,
  Users,
  Target
} from 'lucide-react';

const Interests: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      brain: <Brain className="w-8 h-8" />,
      'bar-chart-3': <BarChart3 className="w-8 h-8" />,
      'git-branch': <GitBranch className="w-8 h-8" />,
      camera: <Camera className="w-8 h-8" />,
      mountain: <Mountain className="w-8 h-8" />,
      gamepad2: <Gamepad2 className="w-8 h-8" />,
      'chef-hat': <ChefHat className="w-8 h-8" />,
      heart: <Heart className="w-8 h-8" />,
    };
    return iconMap[iconName] || <Lightbulb className="w-8 h-8" />;
  };

  const categories = Array.from(new Set(interests.map(interest => interest.category)));
  
  const interestsByCategory = categories.reduce((acc, category) => {
    acc[category] = interests.filter(interest => interest.category === category);
    return acc;
  }, {} as Record<string, typeof interests>);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Interests
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Beyond data science - the passions and hobbies that inspire my creativity and drive
          </p>
        </div>

        {/* Interest Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Total Interests</h3>
            <p className="text-3xl font-bold text-primary-600">{interests.length}</p>
            <p className="text-secondary-600 mt-2">Diverse areas of passion</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Categories</h3>
            <p className="text-3xl font-bold text-primary-600">{categories.length}</p>
            <p className="text-secondary-600 mt-2">Different areas of interest</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Active Pursuits</h3>
            <p className="text-3xl font-bold text-primary-600">
              {interests.filter(interest => interest.category === 'professional' || interest.category === 'creative').length}
            </p>
            <p className="text-secondary-600 mt-2">Currently active interests</p>
          </Card>
        </div>

        {/* Interests by Category */}
        <div className="space-y-16">
          {Object.entries(interestsByCategory).map(([category, categoryInterests]) => (
            <div key={category}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-secondary-900 mb-4 capitalize">
                  {category} Interests
                </h2>
                <p className="text-lg text-secondary-600">
                  {category === 'professional' && 'Interests that complement my professional development'}
                  {category === 'creative' && 'Creative pursuits that fuel my imagination'}
                  {category === 'personal' && 'Personal hobbies that bring joy and balance'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryInterests.map((interest) => (
                  <Card key={interest.id} hover className="p-6 text-center h-full">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary-600">
                        {getIcon(interest.icon)}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                      {interest.name}
                    </h3>
                    
                    <p className="text-secondary-600 leading-relaxed">
                      {interest.description}
                    </p>

                    <div className="mt-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        interest.category === 'professional' 
                          ? 'bg-blue-50 text-blue-700'
                          : interest.category === 'creative'
                          ? 'bg-purple-50 text-purple-700'
                          : 'bg-green-50 text-green-700'
                      }`}>
                        {interest.category}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Philosophy */}
        <div className="mt-20">
          <Card className="p-8 bg-gradient-to-br from-primary-50 to-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">My Philosophy</h2>
              <p className="text-lg text-secondary-600 leading-relaxed max-w-4xl mx-auto">
                I believe that diverse interests and experiences make us better professionals and human beings. 
                Whether I'm exploring new machine learning techniques, capturing moments through photography, 
                or challenging myself on a hiking trail, each pursuit brings unique perspectives that enhance 
                my approach to data science and problem-solving. The intersection of technology, creativity, 
                and human connection drives my passion for both work and life.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Interests;