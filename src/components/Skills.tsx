
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Settings, Users } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="text-primary-600" size={24} />,
      skills: ["Java", "PHP", "HTML5", "CSS3", "JavaScript", "SQL", "Python"],
      color: "primary"
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="text-secondary-500" size={24} />,
      skills: ["VS Code", "MySQL", "MS Office", "MS Excel", "Ticketing Tools"],
      color: "secondary"
    },
    {
      title: "Development",
      icon: <Settings className="text-teal-500" size={24} />,
      skills: ["OOP", "Data Structures", "Full-Stack Development", "Responsive Design", "Backend Development"],
      color: "teal"
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-accent" size={24} />,
      skills: ["Problem Solving", "Communication", "Time Management", "Team Collaboration", "Agile Learning"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary-200 bg-primary-50 hover:shadow-primary-100",
      secondary: "border-secondary-200 bg-secondary-50 hover:shadow-secondary-100",
      teal: "border-teal-200 bg-teal-50 hover:shadow-teal-100",
      accent: "border-red-200 bg-red-50 hover:shadow-red-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getSkillBadgeColor = (color: string) => {
    const colorMap = {
      primary: "bg-primary-100 text-primary-700 border-primary-200",
      secondary: "bg-secondary-100 text-secondary-700 border-secondary-200",
      teal: "bg-teal-100 text-teal-700 border-teal-200",
      accent: "bg-red-100 text-red-700 border-red-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and methodologies that I use to build exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`${getColorClasses(category.color)} border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-3 rounded-full bg-white shadow-md">
                      {category.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${getSkillBadgeColor(category.color)} transition-all duration-200 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
