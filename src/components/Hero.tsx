import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail, Code, Terminal, Brackets, Cpu, Database, Zap, GitBranch, GraduationCap, Star, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
      </div>

      {/* Enhanced Dynamic Tech Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Matrix Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
        
        {/* Dynamic Floating Elements */}
        <div className="absolute top-20 left-20 text-blue-400/40 animate-float">
          <Code size={28} />
        </div>
        <div className="absolute top-32 right-32 text-emerald-400/40 animate-float" style={{ animationDelay: '1s' }}>
          <Terminal size={24} />
        </div>
        <div className="absolute bottom-40 left-40 text-purple-400/40 animate-float" style={{ animationDelay: '2s' }}>
          <Brackets size={32} />
        </div>
        <div className="absolute top-64 right-20 text-teal-400/40 animate-float" style={{ animationDelay: '0.5s' }}>
          <Cpu size={26} />
        </div>
        <div className="absolute bottom-32 right-48 text-orange-400/40 animate-float" style={{ animationDelay: '1.5s' }}>
          <Database size={30} />
        </div>
        <div className="absolute top-48 left-1/3 text-red-400/40 animate-float" style={{ animationDelay: '2.5s' }}>
          <GitBranch size={22} />
        </div>
        <div className="absolute bottom-48 left-64 text-cyan-400/40 animate-float" style={{ animationDelay: '3s' }}>
          <Zap size={28} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-yellow-400/40 animate-float" style={{ animationDelay: '1.8s' }}>
          <Sparkles size={20} />
        </div>

        {/* Enhanced Gradient Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Digital Matrix Lines */}
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Enhanced Profile Image */}
          <div className="relative w-56 h-56 mx-auto mb-8 animate-fade-in">
            <div className="w-full h-full rounded-full overflow-hidden shadow-terminal border-4 border-white/20 backdrop-blur-sm">
              <img 
                src="https://i.postimg.cc/9Qt8Ym0Y/Whats-App-Image-2025-08-01-at-17-12-33-9179c172.jpg" 
                alt="Bhushan Amrutkar" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Enhanced Code Symbol Overlay */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-3 shadow-large border-3 border-white/30 backdrop-blur-sm">
              <Code size={20} className="text-white" />
            </div>
            {/* Additional Tech Icons */}
            <div className="absolute -bottom-2 -left-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full p-2 shadow-large border-2 border-white/30 backdrop-blur-sm">
              <Terminal size={16} className="text-white" />
            </div>
            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
              <div className="absolute bottom-8 right-6 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-purple-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Enhanced Status Badge */}
          <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-code backdrop-blur-sm">
            <Terminal size={16} className="mr-3 text-emerald-400" />
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="font-mono">status: available_for_opportunities</span>
          </div>

          {/* Enhanced Main Content */}
          <div className="animate-fade-in">
            <h1 className="font-heading text-6xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">Bhushan</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-blue-300 mb-6 font-mono">
              <span className="typing-animation inline-block">const role = "Full-Stack Developer";</span>
            </div>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about crafting <span className="text-blue-400 font-semibold">efficient algorithms</span>, 
              building <span className="text-emerald-400 font-semibold">scalable applications</span>, and 
              creating <span className="text-purple-400 font-semibold">exceptional user experiences</span> with modern technologies.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-large hover:shadow-terminal transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                <Code size={22} className="mr-3" />
                Explore My Code
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
              >
                <Mail size={22} className="mr-3 group-hover:animate-bounce" />
                Let's Connect
              </Button>
            </div>

            {/* Enhanced Tech Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-terminal border border-white/10 hover:shadow-large transition-all duration-300 group hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 group-hover:scale-110 transition-transform duration-300 border border-blue-400/30">
                    <Terminal size={24} className="text-blue-400 group-hover:animate-pulse" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">1+</div>
                <div className="text-sm text-gray-300 font-medium">Years Coding</div>
                <div className="text-xs text-gray-400 font-mono mt-1">since 2023</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-terminal border border-white/10 hover:shadow-large transition-all duration-300 group hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 group-hover:scale-110 transition-transform duration-300 border border-emerald-400/30">
                    <GraduationCap size={24} className="text-emerald-400 group-hover:animate-pulse" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">BCA</div>
                <div className="text-sm text-gray-300 font-medium">Computer Applications</div>
                <div className="text-xs text-gray-400 font-mono mt-1">graduating 2025</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-terminal border border-white/10 hover:shadow-large transition-all duration-300 group hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-300 border border-purple-400/30">
                    <Database size={24} className="text-purple-400 group-hover:animate-pulse" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">Java</div>
                <div className="text-sm text-gray-300 font-medium">Backend Expert</div>
                <div className="text-xs text-gray-400 font-mono mt-1">OOP specialist</div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center">
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center mb-2">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
              <ArrowDown size={20} className="text-white/60 mb-1" />
              <div className="text-xs text-white/60 font-mono">scroll_to_explore()</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};