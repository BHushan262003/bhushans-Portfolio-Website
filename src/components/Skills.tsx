
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Settings, Users, Zap, Rocket } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="text-primary-600" size={24} />,
      skills: ["Java", "PHP", "HTML5", "CSS3", "JavaScript", "SQL", "Python"],
      color: "primary",
      gradient: "from-primary-500 to-primary-600"
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="text-secondary-500" size={24} />,
      skills: ["VS Code", "MySQL", "MS Office", "MS Excel", "Ticketing Tools"],
      color: "secondary",
      gradient: "from-secondary-500 to-secondary-600"
    },
    {
      title: "Development",
      icon: <Settings className="text-teal-500" size={24} />,
      skills: ["OOP", "Data Structures", "Full-Stack Development", "Responsive Design", "Backend Development"],
      color: "teal",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-red-500" size={24} />,
      skills: ["Problem Solving", "Communication", "Time Management", "Team Collaboration", "Agile Learning"],
      color: "red",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const achievements = [
    {
      icon: <Zap className="text-yellow-500" size={20} />,
      label: "Projects Completed",
      value: "10+",
      color: "yellow"
    },
    {
      icon: <Rocket className="text-blue-500" size={20} />,
      label: "Technologies Mastered",
      value: "15+",
      color: "blue"
    },
    {
      icon: <Code className="text-green-500" size={20} />,
      label: "Lines of Code",
      value: "5000+",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary-200 bg-gradient-to-br from-primary-50/80 to-white hover:shadow-primary-100/50",
      secondary: "border-secondary-200 bg-gradient-to-br from-secondary-50/80 to-white hover:shadow-secondary-100/50",
      teal: "border-teal-200 bg-gradient-to-br from-teal-50/80 to-white hover:shadow-teal-100/50",
      red: "border-red-200 bg-gradient-to-br from-red-50/80 to-white hover:shadow-red-100/50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getSkillBadgeColor = (color: string) => {
    const colorMap = {
      primary: "bg-white/90 text-primary-700 border-primary-200 hover:bg-primary-100",
      secondary: "bg-white/90 text-secondary-700 border-secondary-200 hover:bg-secondary-100",
      teal: "bg-white/90 text-teal-700 border-teal-200 hover:bg-teal-100",
      red: "bg-white/90 text-red-700 border-red-200 hover:bg-red-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-teal-300/20 to-primary-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary-300/15 to-red-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-200/25 to-teal-200/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-teal-100">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-teal-700 font-medium">My technical expertise</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-teal-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and methodologies that I use to build exceptional digital experiences.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className={`p-3 rounded-full bg-${achievement.color}-100`}>
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
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
                    <div className={`mr-4 p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900">
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
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-600 mb-6">
                Let's work together to bring your ideas to life with these technologies and skills.
              </p>
              <button className="bg-gradient-to-r from-primary-600 to-teal-600 hover:from-primary-700 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
