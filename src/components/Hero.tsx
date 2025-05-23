
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Code, Coffee } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-400 to-primary-600 rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-secondary-400 to-accent rounded-full blur-2xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(45,90,135,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,90,135,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Profile Section */}
          <div className="relative mb-12 animate-fade-in">
            {/* Profile Image with Glass Effect */}
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-teal-500 to-secondary-500 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-600 to-teal-600 rounded-full flex items-center justify-center text-white text-5xl font-bold backdrop-blur-sm">
                  BA
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-2 -right-2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <Code className="w-5 h-5 text-primary-600" />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <Coffee className="w-5 h-5 text-secondary-600" />
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Available for new opportunities
            </div>
          </div>

          <div className="animate-slide-in-left">
            {/* Enhanced Typography */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="text-secondary-500 w-6 h-6" />
                <span className="text-gray-600 font-medium tracking-wide uppercase text-sm">Welcome to my portfolio</span>
                <Sparkles className="text-secondary-500 w-6 h-6" />
              </div>
              
              <h1 className="font-heading text-6xl md:text-8xl font-bold mb-4">
                <span className="text-gray-900">Hey There,</span>
                <br />
                <span className="bg-gradient-to-r from-primary-600 via-teal-600 to-secondary-600 bg-clip-text text-transparent">
                  I'm Bhushan
                </span>
              </h1>
            </div>
            
            {/* Enhanced Tagline */}
            <div className="relative mb-8">
              <div className="text-xl md:text-3xl text-gray-700 font-semibold leading-relaxed">
                <span className="relative">
                  Passionate Developer
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-teal-500"></div>
                </span>
                <span className="text-gray-500"> | </span>
                <span className="text-primary-600">Java & Web Enthusiast</span>
                <span className="text-gray-500"> | </span>
                <span className="text-teal-600">Lifelong Learner</span>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              I design beautifully simple solutions, and I love what I do. Specializing in 
              <span className="text-primary-600 font-semibold"> Java backend development</span> and 
              <span className="text-teal-600 font-semibold"> full-stack web technologies</span>.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-primary-300 text-primary-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Me
              </Button>
            </div>

            {/* Enhanced Experience Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="text-center pr-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              
              <div className="text-center pl-6">
                <div className="text-lg font-bold text-gray-800">BCA Graduate</div>
                <div className="text-sm text-gray-600 font-medium">Full-Stack Developer</div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center animate-bounce">
              <div className="text-sm text-gray-500 mb-2 font-medium">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
