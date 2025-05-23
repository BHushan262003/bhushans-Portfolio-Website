
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Globe, Database, Monitor } from 'lucide-react';

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
      impact: "Streamlined school administration processes and improved data organization efficiency"
    }
  ];

  const projectStats = [
    { icon: <Globe size={20} />, label: "Web Applications", value: "5+" },
    { icon: <Database size={20} />, label: "Database Projects", value: "3+" },
    { icon: <Users size={20} />, label: "Team Projects", value: "2+" },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing my technical skills through real-world projects that solve practical problems and demonstrate my development capabilities.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {projectStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-3 text-primary-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Project */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 animate-fade-in">
                <CardHeader className="bg-gradient-to-r from-primary-50 to-teal-50 border-b border-gray-100">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-white shadow-md">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center text-gray-600">
                          <Calendar size={16} className="mr-2" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary-200 text-primary-700 bg-primary-50">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Description */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Project Overview</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
                        <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <span className="text-primary-600 mr-2 mt-1">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Challenges & Solutions</h4>
                        <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Impact & Results</h4>
                        <p className="text-gray-700 leading-relaxed">{project.impact}</p>
                      </div>

                      <div className="pt-4">
                        <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                          View Project Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
            <Button variant="outline" size="lg" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
