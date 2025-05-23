
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-100 rounded-full blur-2xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white text-4xl font-bold animate-fade-in">
            BA
          </div>

          <div className="animate-slide-in-left">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hey There,
              <br />
              <span className="text-primary-600">I'm Bhushan</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Passionate Developer | Java & Web Enthusiast | Lifelong Learner
            </div>
            
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              I design beautifully simple solutions, and I love what I do. Specializing in Java backend development and full-stack web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>

            {/* Experience Badge */}
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">2+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="mx-6 w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">BCA Graduate</div>
                <div className="text-sm text-gray-600">Full-Stack Developer</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
