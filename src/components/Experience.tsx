import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Code, Database, Globe, Users, Target, Award, Briefcase, Star } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Solutions Pvt. Ltd.",
      period: "June 2024 - August 2024",
      location: "Jalgaon, Maharashtra",
      type: "Internship",
      description: "Gained hands-on experience in full-stack web development, working on real-world projects and learning industry best practices.",
      achievements: [
        "Developed a comprehensive School Management System using PHP and MySQL",
        "Implemented role-based authentication and secure data handling",
        "Collaborated with senior developers on code reviews and optimization",
        "Learned agile development methodologies and version control with Git"
      ],
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Git"],
      icon: <Code className="text-blue-500" size={24} />,
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Academic Projects",
      company: "North Maharashtra University",
      period: "2021 - Present",
      location: "Jalgaon, Maharashtra",
      type: "Academic",
      description: "Completed various academic projects demonstrating proficiency in software development and problem-solving skills.",
      achievements: [
        "Designed and implemented object-oriented programming solutions in Java",
        "Created responsive web interfaces using modern HTML5 and CSS3",
        "Developed database-driven applications with efficient SQL queries",
        "Participated in coding competitions and hackathons"
      ],
      technologies: ["Java", "Python", "HTML5", "CSS3", "JavaScript", "MySQL"],
      icon: <Building className="text-purple-500" size={24} />,
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const skills = [
    {
      category: "Backend Development",
      icon: <Database className="text-blue-400" size={20} />,
      items: ["Java", "PHP", "MySQL", "RESTful APIs"],
      color: "blue"
    },
    {
      category: "Frontend Development",
      icon: <Globe className="text-emerald-400" size={20} />,
      items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      color: "emerald"
    },
    {
      category: "Tools & Technologies",
      icon: <Code className="text-purple-400" size={20} />,
      items: ["Git", "VS Code", "MySQL Workbench", "Postman"],
      color: "purple"
    }
  ];

  const digitalElements = [
    { icon: <Code className="text-blue-400" size={16} />, delay: "0s" },
    { icon: <Database className="text-emerald-400" size={14} />, delay: "1s" },
    { icon: <Globe className="text-purple-400" size={18} />, delay: "2s" },
    { icon: <Briefcase className="text-yellow-400" size={12} />, delay: "3s" },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:120px_120px] animate-pulse"></div>
        
        {/* Floating Digital Elements */}
        {digitalElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + index * 25}%`,
              top: `${15 + index * 20}%`,
              animationDelay: element.delay,
              animationDuration: '10s'
            }}
          >
            {element.icon}
          </div>
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-emerald-200/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-large border border-purple-200/50">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-4 animate-pulse"></div>
              <span className="text-purple-700 font-semibold text-lg">Professional Journey</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Experience & Growth
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My journey in software development, from academic foundations to practical industry experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Experience Timeline */}
            <div className="lg:col-span-2 space-y-12">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 rounded-full"></div>
                
                <div className="space-y-16">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-20 animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-6 h-6 bg-white border-4 border-purple-500 rounded-full shadow-large z-10"></div>
                      
                      <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 hover:shadow-terminal transition-all duration-300 hover:scale-105 group">
                        <CardContent className="p-8">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center space-x-4">
                              <div className={`p-4 rounded-2xl bg-gradient-to-br ${exp.gradient} shadow-large group-hover:scale-110 transition-transform duration-300 border-2 border-white/20`}>
                                <div className="text-white">
                                  {exp.icon}
                                </div>
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900 text-2xl mb-1">{exp.title}</h3>
                                <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                                <div className="flex items-center gap-4 mt-2">
                                  <div className="flex items-center text-gray-600">
                                    <Calendar size={16} className="mr-2" />
                                    <span className="text-sm">{exp.period}</span>
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <MapPin size={16} className="mr-2" />
                                    <span className="text-sm">{exp.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Badge 
                              variant="outline" 
                              className={`border-${exp.color}-500 text-${exp.color}-700 bg-${exp.color}-50 px-4 py-2 text-sm font-semibold`}
                            >
                              {exp.type}
                            </Badge>
                          </div>

                          {/* Description */}
                          <p className="text-gray-700 leading-relaxed mb-6 text-lg">{exp.description}</p>

                          {/* Achievements */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                              <Target size={18} className="mr-2 text-emerald-500" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                  <Star size={16} className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                                  <span className="leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                              <Code size={18} className="mr-2 text-blue-500" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {exp.technologies.map((tech, i) => (
                                <Badge 
                                  key={i} 
                                  variant="secondary" 
                                  className="bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 transition-colors duration-200 px-3 py-1"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Sidebar */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-large border border-gray-200/50">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <Award className="mr-3 text-purple-500" size={28} />
                  Core Competencies
                </h3>
                
                <div className="space-y-8">
                  {skills.map((skill, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-xl bg-${skill.color}-100 border border-${skill.color}-200 mr-3`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900">{skill.category}</h4>
                      </div>
                      <div className="space-y-2">
                        {skill.items.map((item, i) => (
                          <div key={i} className={`px-3 py-2 bg-${skill.color}-50 border border-${skill.color}-200 rounded-lg text-${skill.color}-700 text-sm font-medium`}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 shadow-large text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                <p className="mb-6 opacity-90 leading-relaxed">
                  I'm passionate about creating innovative solutions and would love to contribute to your team's success.
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-medium w-full">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};