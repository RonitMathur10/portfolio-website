import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '../../types/content';
import Card from './Card';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card hover className="h-full flex flex-col">
      {/* Project Image */}
      <div className="mb-4">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="mb-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </span>
        </div>
      )}

      {/* Project Title */}
      <h3 className="text-xl font-semibold text-secondary-900 mb-2">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-secondary-600 mb-4 flex-grow">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        )}
        {project.liveUrl && (
          <Button
            variant="primary"
            size="sm"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;