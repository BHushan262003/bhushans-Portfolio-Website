
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Settings, Users, Zap, Rocket, Cpu } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["Java", "PHP", "HTML5", "CSS3", "JavaScript", "SQL", "Python"],
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["VS Code", "MySQL", "MS Office", "MS Excel", "Ticketing Tools"],
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Development",
      icon: <Settings className="text-teal-400" size={24} />,
      skills: ["OOP", "Data Structures", "Full-Stack Development", "Responsive Design", "Backend Development"],
      color: "teal",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-green-400" size={24} />,
      skills: ["Problem Solving", "Communication", "Time Management", "Team Collaboration", "Agile Learning"],
      color: "green",
      gradient: "from-green-500 to-green-600"
    }
  ];

  const achievements = [
    {
      icon: <Zap className="text-yellow-400" size={20} />,
      label: "Projects Completed",
      value: "1",
      color: "yellow"
    },
    {
      icon: <Rocket className="text-blue-400" size={20} />,
      label: "Technologies Mastered",
      value: "15+",
      color: "blue"
    },
    {
      icon: <Code className="text-green-400" size={20} />,
      label: "Lines of Code",
      value: "5000+",
      color: "green"
    }
  ];

  const digitalElements = [
    { icon: <Code className="text-blue-400" size={16} />, delay: "0s" },
    { icon: <Database className="text-green-400" size={14} />, delay: "1s" },
    { icon: <Cpu className="text-purple-400" size={18} />, delay: "2s" },
    { icon: <Zap className="text-yellow-400" size={12} />, delay: "3s" },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-400/30 bg-white/5 hover:shadow-blue-500/20 hover:border-blue-400/50",
      purple: "border-purple-400/30 bg-white/5 hover:shadow-purple-500/20 hover:border-purple-400/50",
      teal: "border-teal-400/30 bg-white/5 hover:shadow-teal-500/20 hover:border-teal-400/50",
      green: "border-green-400/30 bg-white/5 hover:shadow-green-500/20 hover:border-green-400/50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getSkillBadgeColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30",
      purple: "bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30",
      teal: "bg-teal-500/20 text-teal-300 border-teal-400/30 hover:bg-teal-500/30",
      green: "bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Enhanced Digital Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:70px_70px] animate-pulse"></div>
        
        {/* Floating Digital Elements */}
        {digitalElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-60"
            style={{
              left: `${10 + index * 22}%`,
              top: `${15 + index * 12}%`,
              animationDelay: element.delay,
              animationDuration: '6s'
            }}
          >
            {element.icon}
          </div>
        ))}

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-purple-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Matrix Lines */}
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-purple-400/20">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-purple-300 font-medium">My technical expertise</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 mx-auto rounded-full mb-6 animate-pulse"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive digital toolkit of technologies and methodologies that power exceptional experiences.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/30">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className={`p-3 rounded-full bg-${achievement.color}-500/20 backdrop-blur-sm border border-${achievement.color}-400/30`}>
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 animate-pulse">{achievement.value}</div>
                  <div className="text-sm text-gray-300 font-medium">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`${getColorClasses(category.color)} border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`mr-4 p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${getSkillBadgeColor(category.color)} transition-all duration-200 hover:scale-105 hover:shadow-md backdrop-blur-sm`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 max-w-2xl mx-auto hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-300 mb-6">
                Let's work together to bring your digital ideas to life with these cutting-edge technologies.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg border border-blue-400/30 backdrop-blur-sm">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
