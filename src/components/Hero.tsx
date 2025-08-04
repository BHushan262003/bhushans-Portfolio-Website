
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail, Code, Terminal, Brackets, Cpu, Database, Zap, GitBranch, GraduationCap } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 matrix-rain">
      {/* Enhanced Tech Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(217_91%_60%_/_0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(217_91%_60%_/_0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        
        {/* Floating Code Symbols */}
        <div className="absolute top-20 left-20 text-blue-400/30 animate-float">
          <Code size={24} />
        </div>
        <div className="absolute top-32 right-32 text-green-400/30 animate-float" style={{ animationDelay: '1s' }}>
          <Terminal size={20} />
        </div>
        <div className="absolute bottom-40 left-40 text-purple-400/30 animate-float" style={{ animationDelay: '2s' }}>
          <Brackets size={28} />
        </div>
        <div className="absolute top-64 right-20 text-teal-400/30 animate-float" style={{ animationDelay: '0.5s' }}>
          <Cpu size={22} />
        </div>
        <div className="absolute bottom-32 right-48 text-orange-400/30 animate-float" style={{ animationDelay: '1.5s' }}>
          <Database size={26} />
        </div>
        <div className="absolute top-48 left-1/3 text-red-400/30 animate-float" style={{ animationDelay: '2.5s' }}>
          <GitBranch size={18} />
        </div>
        <div className="absolute bottom-48 left-64 text-cyan-400/30 animate-float" style={{ animationDelay: '3s' }}>
          <Zap size={24} />
        </div>

        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-green-200/40 to-teal-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Binary Code Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8 animate-fade-in">
            <div className="w-full h-full rounded-full overflow-hidden shadow-large border-4 border-white terminal-glow">
              <img 
                src="https://i.postimg.cc/9Qt8Ym0Y/Whats-App-Image-2025-08-01-at-17-12-33-9179c172.jpg" 
                alt="Bhushan Amrutkar" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Code Symbol Overlay */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-2 shadow-lg border-2 border-white">
              <Code size={16} className="text-white" />
            </div>
          </div>

          {/* Enhanced Status Badge */}
          <div className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-soft terminal-glow">
            <Terminal size={14} className="mr-2 text-green-600" />
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for Software Engineering roles
          </div>

          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bhushan</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 mb-4 font-mono">
              <span className="typing-animation inline-block">Software Engineer & Full-Stack Developer</span>
            </div>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about crafting efficient code and building scalable applications. 
              Specializing in <span className="font-semibold text-blue-600">Java backend development</span>, 
              <span className="font-semibold text-green-600"> web technologies</span>, and 
              <span className="font-semibold text-purple-600"> modern software architecture</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="gradient-primary text-white px-8 py-3 text-lg font-medium rounded-full shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 terminal-glow"
              >
                <Code size={20} className="mr-2" />
                View My Code
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 group"
              >
                <Mail size={20} className="mr-2 group-hover:animate-bounce" />
                Let's Connect
              </Button>
            </div>

            {/* Enhanced Tech Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-code transition-all duration-300 group">
                <div className="flex items-center justify-center mb-2">
                  <Terminal size={20} className="text-blue-600 mr-2 group-hover:animate-pulse" />
                  <div className="text-3xl font-bold text-blue-600">1+</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Years Coding</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-code transition-all duration-300 group">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap size={20} className="text-green-600 mr-2 group-hover:animate-pulse" />
                  <div className="text-3xl font-bold text-green-600">BCA</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Computer Applications</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-code transition-all duration-300 group">
                <div className="flex items-center justify-center mb-2">
                  <Database size={20} className="text-purple-600 mr-2 group-hover:animate-pulse" />
                  <div className="text-3xl font-bold text-purple-600">Java</div>
                </div>
                <div className="text-sm text-gray-600 font-medium">Backend Expert</div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center">
              <ArrowDown size={24} className="text-gray-400 mb-1" />
              <div className="text-xs text-gray-400 font-mono">scroll_down()</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
