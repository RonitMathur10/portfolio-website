import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../../data/personal';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'mail':
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-secondary-50 border-t border-secondary-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-secondary-600">{personalInfo.email}</p>
              <p className="text-secondary-600">{personalInfo.location}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-secondary-600 hover:text-primary-600 transition-colors">
                About Me
              </a>
              <a href="/projects" className="block text-secondary-600 hover:text-primary-600 transition-colors">
                Projects
              </a>
              <a href="/experience" className="block text-secondary-600 hover:text-primary-600 transition-colors">
                Experience
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              {personalInfo.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-600 hover:text-primary-600 transition-colors"
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-secondary-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-600 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-secondary-600 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;