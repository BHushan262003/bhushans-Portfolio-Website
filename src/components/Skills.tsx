import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Settings, Users, Zap, Rocket, Cpu, Terminal, Globe, GitBranch } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-400" size={28} />,
      skills: ["Java", "PHP", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      description: "Core programming languages and markup technologies"
    },
    {
      title: "Development Tools",
      icon: <Terminal className="text-purple-400" size={28} />,
      skills: ["VS Code", "MySQL", "Git", "GitHub", "Postman", "Chrome DevTools"],
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      description: "Essential development and debugging tools"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-teal-400" size={28} />,
      skills: ["Responsive Design", "DOM Manipulation", "AJAX", "RESTful APIs", "MVC Pattern"],
      color: "teal",
      gradient: "from-teal-500 to-teal-600",
      description: "Modern web development practices and patterns"
    },
    {
      title: "Professional Skills",
      icon: <Users className="text-emerald-400" size={28} />,
      skills: ["Problem Solving", "Team Collaboration", "Time Management", "Agile Learning", "Critical Thinking"],
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      description: "Essential soft skills for professional development"
    }
  ];

  const achievements = [
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      label: "Projects Completed",
      value: "1",
      color: "yellow",
      description: "School Management System"
    },
    {
      icon: <Code className="text-blue-400" size={24} />,
      label: "Technologies Mastered",
      value: "7+",
      color: "blue",
      description: "Programming languages and frameworks"
    },
    {
      icon: <GitBranch className="text-emerald-400" size={24} />,
      label: "Lines of Code",
      value: "5000+",
      color: "emerald",
      description: "Across various projects and exercises"
    }
  ];

  const digitalElements = [
    { icon: <Code className="text-blue-400" size={18} />, delay: "0s" },
    { icon: <Database className="text-emerald-400" size={16} />, delay: "1s" },
    { icon: <Cpu className="text-purple-400" size={20} />, delay: "2s" },
    { icon: <Terminal className="text-yellow-400" size={14} />, delay: "3s" },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Digital Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Matrix Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
        
        {/* Dynamic Floating Elements */}
        {digitalElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-40"
            style={{
              left: `${15 + index * 20}%`,
              top: `${20 + index * 15}%`,
              animationDelay: element.delay,
              animationDuration: '8s'
            }}
          >
            {element.icon}
          </div>
        ))}

        {/* Enhanced Glowing Orbs */}
        <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Digital Code Lines */}
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-large border border-blue-400/30">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-4 animate-pulse"></div>
              <span className="text-blue-300 font-semibold text-lg">Technical Expertise</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 mx-auto rounded-full mb-8 animate-pulse"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and methodologies that power exceptional digital experiences.
            </p>
          </div>

          {/* Enhanced Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:shadow-terminal hover:border-blue-400/40 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-${achievement.color}-500/20 to-${achievement.color}-600/20 backdrop-blur-sm border-2 border-${achievement.color}-400/30 group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-3 animate-pulse">{achievement.value}</div>
                  <div className="text-lg text-gray-300 font-semibold mb-2">{achievement.label}</div>
                  <div className="text-sm text-gray-400">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:shadow-terminal hover:border-blue-400/40 transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-10">
                  <div className="flex items-center mb-8">
                    <div className={`mr-6 p-5 rounded-3xl bg-gradient-to-br ${category.gradient} shadow-large group-hover:scale-110 transition-transform duration-300 border-2 border-white/20`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`px-4 py-3 rounded-xl text-sm font-semibold border-2 bg-gradient-to-r from-${category.color}-500/10 to-${category.color}-600/10 text-${category.color}-300 border-${category.color}-400/30 hover:from-${category.color}-500/20 hover:to-${category.color}-600/20 transition-all duration-200 hover:scale-105 hover:shadow-medium backdrop-blur-sm text-center`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 shadow-terminal border-2 border-white/10 max-w-3xl mx-auto hover:border-blue-400/40 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Collaborate?</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Let's work together to bring your digital ideas to life using these cutting-edge technologies 
                and innovative problem-solving approaches.
              </p>
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110 shadow-large border-2 border-white/20 backdrop-blur-sm">
                Start a Project Together
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};