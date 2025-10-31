import React from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  category: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, category }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'programming':
        return 'bg-primary-500';
      case 'frameworks':
        return 'bg-primary-400';
      case 'tools':
        return 'bg-primary-600';
      case 'other':
        return 'bg-primary-300';
      default:
        return 'bg-primary-500';
    }
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-secondary-900">{name}</span>
        {/* <span className="text-sm text-secondary-600">{level}%</span> */}
      </div>
      <div className="w-full bg-secondary-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ease-out ${getCategoryColor(category)}`}
          // style={{ width: `${level}%` }}
          style={{ width: `100%` }}
        ></div>
      </div>
      <div className="mt-1">
        <span className="text-xs text-secondary-500 capitalize">{category}</span>
      </div>
    </div>
  );
};

export default SkillBar;