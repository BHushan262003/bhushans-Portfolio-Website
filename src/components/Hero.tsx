
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Simple geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8 animate-fade-in">
            <div className="w-full h-full rounded-full overflow-hidden shadow-large border-4 border-white">
              <img 
                src="https://i.postimg.cc/9Qt8Ym0Y/Whats-App-Image-2025-08-01-at-17-12-33-9179c172.jpg" 
                alt="Bhushan Amrutkar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-soft">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for opportunities
          </div>

          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary">Bhushan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Passionate Java & Web Developer
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              I create modern web applications with clean code and user-friendly interfaces. 
              Specializing in Java backend development and full-stack technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="gradient-primary text-white px-8 py-3 text-lg font-medium rounded-full shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
              >
                <Download size={20} className="mr-2" />
                View My Work
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} className="mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Simple Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <div className="text-3xl font-bold text-primary mb-1">1+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <div className="text-3xl font-bold text-primary mb-1">BCA</div>
                <div className="text-sm text-gray-600 font-medium">Graduate</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <div className="text-3xl font-bold text-primary mb-1">Java</div>
                <div className="text-sm text-gray-600 font-medium">Developer</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
