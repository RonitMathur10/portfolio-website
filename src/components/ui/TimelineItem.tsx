import React from 'react';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  achievements?: string[];
  coursework?: string[];
  // technologies?: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  date,
  description,
  achievements,
  // technologies,
  coursework,
  isLast = false,
}) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-4 top-12 w-0.5 h-full bg-primary-200"></div>
      )}

      {/* Timeline Dot */}
      <div className="absolute left-2 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-sm"></div>

      {/* Content */}
      <div className="ml-12 pb-8">
        <div className="bg-white rounded-lg shadow-sm border border-secondary-200 p-6">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-secondary-900">{title}</h3>
            <p className="text-primary-600 font-medium">{subtitle}</p>
            <div className="flex items-center text-sm text-secondary-500 mt-1">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </div>
          </div>

          {/* Description */}
          {description && (
            <p className="text-secondary-600 mb-4">{description}</p>
          )}

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-secondary-900 mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-secondary-600">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {/* {technologies && technologies.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-secondary-900 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )} */}
          {/* Coursework */}
          {coursework && coursework.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-secondary-900 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;