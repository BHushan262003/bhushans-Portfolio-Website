
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Code, Coffee, Zap, Database, Cpu } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const digitalElements = [
    { icon: <Code className="text-blue-400" size={16} />, delay: "0s" },
    { icon: <Database className="text-green-400" size={14} />, delay: "1s" },
    { icon: <Cpu className="text-purple-400" size={18} />, delay: "2s" },
    { icon: <Zap className="text-yellow-400" size={12} />, delay: "3s" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Enhanced Digital Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Digital Elements */}
        {digitalElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-70"
            style={{
              left: `${20 + index * 20}%`,
              top: `${10 + index * 15}%`,
              animationDelay: element.delay,
              animationDuration: '4s'
            }}
          >
            {element.icon}
          </div>
        ))}

        {/* Matrix-like Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Glowing Orbs with Digital Effect */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-primary-500/15 to-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Profile Section */}
          <div className="relative mb-12 animate-fade-in">
            {/* Profile Image with Digital Glass Effect */}
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-teal-500 to-secondary-500 rounded-full p-1 shadow-2xl animate-pulse">
                <div className="w-full h-full rounded-full overflow-hidden bg-white/90 backdrop-blur-sm">
                  <img 
                    src="https://postimage.me/images/2025/05/24/Bhushan-IMG.jpg" 
                    alt="Bhushan Aher" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Digital Icons */}
              <div className="absolute -top-2 -right-2 bg-blue-500/20 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce border border-blue-400/30" style={{ animationDelay: '0.5s' }}>
                <Code className="w-5 h-5 text-blue-300" />
              </div>
              <div className="absolute -bottom-2 -left-2 bg-purple-500/20 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce border border-purple-400/30" style={{ animationDelay: '1s' }}>
                <Coffee className="w-5 h-5 text-purple-300" />
              </div>
            </div>

            {/* Digital Status Badge */}
            <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for new opportunities
            </div>
          </div>

          <div className="animate-slide-in-left">
            {/* Enhanced Digital Typography */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="text-blue-400 w-6 h-6 animate-pulse" />
                <span className="text-blue-300 font-medium tracking-wide uppercase text-sm">Welcome to my digital portfolio</span>
                <Sparkles className="text-purple-400 w-6 h-6 animate-pulse" />
              </div>
              
              <h1 className="font-heading text-6xl md:text-8xl font-bold mb-4">
                <span className="text-white">Hey There,</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                  I'm Bhushan
                </span>
              </h1>
            </div>
            
            {/* Enhanced Digital Tagline */}
            <div className="relative mb-8">
              <div className="text-xl md:text-3xl text-gray-200 font-semibold leading-relaxed">
                <span className="relative">
                  Passionate Developer
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                </span>
                <span className="text-gray-400"> | </span>
                <span className="text-blue-300">Java & Web Enthusiast</span>
                <span className="text-gray-400"> | </span>
                <span className="text-purple-300">Digital Creator</span>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              I design beautifully simple solutions in the digital realm. Specializing in 
              <span className="text-blue-300 font-semibold"> Java backend development</span> and 
              <span className="text-purple-300 font-semibold"> full-stack web technologies</span>.
            </p>

            {/* Enhanced Digital CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-400/30"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-blue-400/50 text-blue-300 hover:bg-blue-600/20 hover:text-white hover:border-blue-400 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-blue-900/20 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Me
              </Button>
            </div>

            {/* Enhanced Digital Experience Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-400/20 hover:shadow-2xl transition-all duration-300">
              <div className="text-center pr-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">1+</div>
                <div className="text-sm text-gray-300 font-medium">Year Experience</div>
              </div>
              
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"></div>
              
              <div className="text-center pl-6">
                <div className="text-lg font-bold text-white">BCA Graduate</div>
                <div className="text-sm text-gray-300 font-medium">Java Developer</div>
              </div>
            </div>
          </div>

          {/* Enhanced Digital Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center animate-bounce">
              <div className="text-sm text-gray-300 mb-2 font-medium">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center backdrop-blur-sm">
                <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
