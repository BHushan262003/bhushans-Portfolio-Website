
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Code, Globe, Award, TrendingUp } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "Intern Certify",
      period: "Sep 2024 - Mar 2025",
      location: "Remote",
      type: "Completed",
      icon: <Code className="text-primary-600" size={20} />,
      description: "Worked on Java-based backend development for web applications and applied OOP and data structures in real-world scenarios.",
      achievements: [
        "Developed Java backend services for web applications",
        "Applied Object-Oriented Programming principles",
        "Implemented data structures for optimal performance",
        "Collaborated with team on software engineering practices"
      ],
      technologies: ["Java", "OOP", "Data Structures", "Backend Development"],
      gradient: "from-primary-500 to-blue-600",
      bgGradient: "from-primary-50 to-blue-50"
    },
    {
      title: "Web Developer Intern",
      company: "Intern Certify",
      period: "Feb 2024 - Aug 2024",
      location: "Remote",
      type: "Completed",
      icon: <Globe className="text-teal-500" size={20} />,
      description: "Gained comprehensive training and hands-on experience in full-stack web development fundamentals and reusable component creation.",
      achievements: [
        "Trained in HTML, CSS, JavaScript, PHP, and MySQL",
        "Built responsive web applications",
        "Developed reusable UI components",
        "Gained full-stack development experience"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      gradient: "from-teal-500 to-green-600",
      bgGradient: "from-teal-50 to-green-50"
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
      icon: <TrendingUp className="text-green-500" size={20} />,
      label: "Months of Experience",
      value: "12",
      color: "green"
    },
    {
      icon: <Code className="text-blue-500" size={20} />,
      label: "Technologies Learned",
      value: "10+",
      color: "blue"
    },
    {
      icon: <Award className="text-purple-500" size={20} />,
      label: "Projects Completed",
      value: "1",
      color: "purple"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-16 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-16 left-16 w-64 h-64 bg-gradient-to-br from-teal-200/25 to-green-200/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-blue-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-700 font-medium">My professional journey</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-teal-500 to-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey through internships and project experiences that have shaped my development skills.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-teal-500 to-green-500 rounded-full"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-500 rounded-full shadow-lg z-10"></div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className={`bg-gradient-to-br ${exp.bgGradient} border-2 border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in backdrop-blur-sm`} style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${exp.gradient} shadow-lg`}>
                              <div className="text-white">
                                {exp.icon}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-heading text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                              <p className="text-lg font-semibold text-primary-600">{exp.company}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-blue-500 text-blue-700 bg-blue-50">
                            {exp.type}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center bg-white/60 rounded-lg px-3 py-1">
                            <Calendar size={14} className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center bg-white/60 rounded-lg px-3 py-1">
                            <MapPin size={14} className="mr-2" />
                            {exp.location}
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                        
                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-gray-700">
                                <span className="text-primary-600 mr-2 mt-1">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-white/80 text-gray-700 border-gray-200 hover:bg-gray-100">
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
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 text-center">Additional Achievements</h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900 text-lg">{achievement.title}</h4>
                          <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
                            {achievement.category}
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-3">{achievement.description}</p>
                        <div className="text-sm font-medium text-green-600 bg-green-50 rounded-lg px-3 py-1 inline-block">
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
