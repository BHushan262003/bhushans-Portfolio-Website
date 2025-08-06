import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Globe, Database, Monitor, ExternalLink, Github, Star, Code } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "School Management System",
      period: "Nov 2023 - Feb 2024",
      description: "A comprehensive web application designed to help schools manage their daily operations efficiently. The system provides role-based access for admins, teachers, and students, ensuring secure and organized data management.",
      longDescription: "I developed a web application to help schools manage their daily tasks more easily. The system allows school staff to add, update, and delete student records, manage teacher details, and organize classes. It also includes different login roles for admin, teachers, and students to ensure that each user only sees what they need.",
      features: [
        "Student record management (Add, Update, Delete)",
        "Teacher profile management",
        "Class organization and scheduling",
        "Role-based authentication system",
        "Responsive design for mobile and desktop",
        "Secure data handling and validation"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      icon: <Monitor className="text-primary-600" size={24} />,
      category: "Full-Stack Web Development",
      challenges: "Implementing secure role-based authentication and ensuring data integrity across different user types",
      impact: "Streamlined school administration processes and improved data organization efficiency",
      status: "Completed",
      rating: 5,
      gradient: "from-primary-500 to-blue-600",
      bgGradient: "from-primary-50 to-blue-50"
    }
  ];

  const projectStats = [
    { 
      icon: <Monitor size={20} />, 
      label: "Projects Completed", 
      value: "1",
      color: "blue",
      description: "School Management System"
    },
    { 
      icon: <Database size={20} />, 
      label: "Database Integration", 
      value: "MySQL",
      color: "green",
      description: "Relational database"
    },
    { 
      icon: <Code size={20} />, 
      label: "Technologies Used", 
      value: "5",
      color: "purple",
      description: "Modern web technologies"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-teal-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-purple-100">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-purple-700 font-medium">My creative work</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Project
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-purple-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing my technical skills through a real-world project that solves practical problems and demonstrates my development capabilities.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {projectStats.map((stat, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-4 rounded-2xl bg-${stat.color}-100 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-${stat.color}-600`}>
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Project */}
          <div className="space-y-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className={`overflow-hidden bg-gradient-to-br ${project.bgGradient} border-2 border-white/50 hover:shadow-2xl transition-all duration-300 animate-fade-in backdrop-blur-sm`}>
                <CardHeader className="bg-white/30 backdrop-blur-sm border-b border-white/20">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl font-bold text-gray-900">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center gap-1">
                            {[...Array(project.rating)].map((_, i) => (
                              <Star key={i} size={16} className="text-yellow-500 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center text-gray-600 gap-4">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span>{project.period}</span>
                          </div>
                          <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary-200 text-primary-700 bg-white/80 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Description */}
                    <div className="space-y-6">
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          Project Overview
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                        <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
                      </div>

                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <span className="text-primary-600 mr-3 mt-1 text-lg">✓</span>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="bg-white/80 text-gray-700 border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Challenges & Solutions
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
                      </div>

                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          Impact & Results
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-6">{project.impact}</p>
                        
                        <div className="flex gap-3">
                          <Button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white flex items-center gap-2">
                            <ExternalLink size={16} />
                            View Project
                          </Button>
                          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                            <Github size={16} />
                            Source Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to start working together?</h3>
              <p className="text-gray-600 mb-6">
                I'm currently seeking new opportunities in Pune and would love to discuss how we can work together on exciting projects!
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white">
                  Contact Me
                </Button>
                <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
