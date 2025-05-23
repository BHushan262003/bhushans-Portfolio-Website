
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Code, Globe } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "Intern Certify",
      period: "Sep 2024 - Mar 2025",
      location: "Remote",
      type: "Internship",
      icon: <Code className="text-primary-600" size={20} />,
      description: "Working on Java-based backend development for web applications and applying OOP and data structures in real-world scenarios.",
      achievements: [
        "Developed Java backend services for web applications",
        "Applied Object-Oriented Programming principles",
        "Implemented data structures for optimal performance",
        "Collaborated with team on software engineering practices"
      ],
      technologies: ["Java", "OOP", "Data Structures", "Backend Development"]
    },
    {
      title: "Web Developer Intern",
      company: "Intern Certify",
      period: "Feb 2024 - Aug 2024",
      location: "Remote",
      type: "Internship",
      icon: <Globe className="text-teal-500" size={20} />,
      description: "Gained comprehensive training and hands-on experience in full-stack web development fundamentals and reusable component creation.",
      achievements: [
        "Trained in HTML, CSS, JavaScript, PHP, and MySQL",
        "Built responsive web applications",
        "Developed reusable UI components",
        "Gained full-stack development experience"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  const achievements = [
    {
      title: "AI Awareness Field Project",
      description: "Organized seminars and created learning materials to promote AI awareness. Educated participants on AI basics and its industry impact.",
      icon: "🎓"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey through internships and project experiences that have shaped my development skills.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary-500 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <div className="mt-1 p-2 rounded-full bg-primary-50">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="font-heading text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                        <p className="text-lg font-semibold text-primary-600 mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary-200 text-primary-700 bg-primary-50">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-teal-100 text-teal-700 border-teal-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Achievements */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8">Additional Achievements</h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-secondary-500 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                        <p className="text-gray-700">{achievement.description}</p>
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
