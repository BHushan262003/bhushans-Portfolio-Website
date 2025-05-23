
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, ExternalLink, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">Bhushan Amrutkar</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate Java & Web Developer dedicated to creating innovative solutions 
              and building meaningful digital experiences through clean, efficient code.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:bamrutkar85@gmail.com"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+918483933461"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 transition-colors duration-200"
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/bhushan-amrutkar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 transition-colors duration-200"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Java Backend Development</li>
              <li>Full-Stack Web Development</li>
              <li>Database Design & Management</li>
              <li>UI/UX Implementation</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Bhushan Amrutkar. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Built with</span>
              <Heart className="mx-1 text-red-500" size={16} />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
