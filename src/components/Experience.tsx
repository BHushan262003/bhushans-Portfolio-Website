
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Code, Globe, Award, TrendingUp, Database, Cpu, Zap } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "Intern Certify",
      period: "Sep 2024 - Mar 2025",
      location: "Remote",
      type: "Completed",
      icon: <Code className="text-blue-400" size={20} />,
      description: "Worked on Java-based backend development for web applications and applied OOP and data structures in real-world scenarios.",
      achievements: [
        "Developed Java backend services for web applications",
        "Applied Object-Oriented Programming principles",
        "Implemented data structures for optimal performance",
        "Collaborated with team on software engineering practices"
      ],
      technologies: ["Java", "OOP", "Data Structures", "Backend Development"],
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Web Developer Intern",
      company: "Intern Certify",
      period: "Feb 2024 - Aug 2024",
      location: "Remote",
      type: "Completed",
      icon: <Globe className="text-teal-400" size={20} />,
      description: "Gained comprehensive training and hands-on experience in full-stack web development fundamentals and reusable component creation.",
      achievements: [
        "Trained in HTML, CSS, JavaScript, PHP, and MySQL",
        "Built responsive web applications",
        "Developed reusable UI components",
        "Gained full-stack development experience"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      gradient: "from-teal-500 to-green-600",
      bgGradient: "from-teal-500/10 to-green-500/10"
    }
  ];

  const achievements = [
    {
      title: "AI Awareness Field Project",
      description: "Conducted a fieldwork project focusing on increasing awareness about Artificial Intelligence during the final year of BCA. Organized seminars and workshops to educate participants on the basics of AI, its applications, and its potential impact across various industries. Developed materials and resources to simplify AI concepts for diverse audiences.",
      icon: "🎓",
      impact: "Reached 100+ participants",
      category: "Academic Project"
    }
  ];

  const stats = [
    {
      icon: <TrendingUp className="text-green-400" size={20} />,
      label: "Months of Experience",
      value: "12",
      color: "green"
    },
    {
      icon: <Code className="text-blue-400" size={20} />,
      label: "Technologies Learned",
      value: "10+",
      color: "blue"
    },
    {
      icon: <Award className="text-purple-400" size={20} />,
      label: "Projects Completed",
      value: "1",
      color: "purple"
    }
  ];

  const digitalElements = [
    { icon: <Code className="text-blue-400" size={16} />, delay: "0s" },
    { icon: <Database className="text-green-400" size={14} />, delay: "1s" },
    { icon: <Cpu className="text-purple-400" size={18} />, delay: "2s" },
    { icon: <Zap className="text-yellow-400" size={12} />, delay: "3s" },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced Digital Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
        
        {/* Floating Digital Elements */}
        {digitalElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-60"
            style={{
              left: `${12 + index * 20}%`,
              top: `${18 + index * 15}%`,
              animationDelay: element.delay,
              animationDuration: '7s'
            }}
          >
            {element.icon}
          </div>
        ))}

        {/* Glowing Orbs */}
        <div className="absolute top-16 right-16 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-16 left-16 w-64 h-64 bg-gradient-to-br from-teal-500/15 to-green-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Matrix Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/25 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/25 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-blue-400/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 font-medium">My professional digital journey</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Experience & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mx-auto rounded-full mb-6 animate-pulse"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My digital evolution through internships and project experiences that have shaped my development journey.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/30">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className={`p-3 rounded-full bg-${stat.color}-500/20 backdrop-blur-sm border border-${stat.color}-400/30`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 animate-pulse">{stat.value}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            <h3 className="font-heading text-2xl font-bold text-white mb-8 text-center">Professional Experience</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full animate-pulse"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white/10 backdrop-blur-sm border-4 border-blue-400 rounded-full shadow-lg z-10 animate-pulse"></div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className={`bg-gradient-to-br ${exp.bgGradient} border-2 border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in backdrop-blur-sm hover:border-blue-400/30`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${exp.gradient} shadow-lg border border-white/20`}>
                              <div className="text-white">
                                {exp.icon}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-heading text-xl font-bold text-white mb-1">{exp.title}</h4>
                              <p className="text-lg font-semibold text-blue-300">{exp.company}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-blue-400/50 text-blue-300 bg-blue-500/20 backdrop-blur-sm">
                            {exp.type}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                            <Calendar size={14} className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                            <MapPin size={14} className="mr-2" />
                            {exp.location}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                        
                        <div className="mb-6">
                          <h5 className="font-semibold text-white mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-gray-300">
                                <span className="text-blue-400 mr-2 mt-1">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-white mb-3">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 backdrop-blur-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Achievements */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-8 text-center">Additional Achievements</h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-400/30">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-white text-lg">{achievement.title}</h4>
                          <Badge variant="outline" className="border-purple-400/50 text-purple-300 bg-purple-500/20 backdrop-blur-sm">
                            {achievement.category}
                          </Badge>
                        </div>
                        <p className="text-gray-300 mb-3">{achievement.description}</p>
                        <div className="text-sm font-medium text-green-300 bg-green-500/20 backdrop-blur-sm rounded-lg px-3 py-1 inline-block border border-green-400/30">
                          {achievement.impact}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
