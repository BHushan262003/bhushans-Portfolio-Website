
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Code, Globe, Award, TrendingUp, Briefcase, Building } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "Intern Certify",
      period: "Sep 2024 - Mar 2025",
      location: "Remote",
      type: "Completed",
      icon: <Code className="text-blue-600" size={20} />,
      description: "Worked on Java-based backend development for web applications and applied OOP and data structures in real-world scenarios.",
      achievements: [
        "Gained exposure to Java-based backend development for live web applications during internship.",
        "Practiced OOP and data structures to understand business logic during internship."
      ],
      technologies: ["Java", "OOP", "Data Structures", "Backend Development"],
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50"
    },
    {
      title: "Web Developer Intern",
      company: "Intern Certify",
      period: "Feb 2024 - Aug 2024",
      location: "Remote",
      type: "Completed",
      icon: <Globe className="text-green-600" size={20} />,
      description: "Gained comprehensive training and hands-on experience in full-stack web development fundamentals and reusable component creation.",
      achievements: [
        "Learned full-stack fundamentals using HTML, CSS, JavaScript, PHP, and MySQL during internship training.",
        "Studied reusable component design and front-end performance concepts."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      gradient: "from-green-600 to-green-800",
      bgColor: "bg-green-50"
    }
  ];

  const achievements = [
    {
      title: "AI Awareness Field Project",
      description: "Conducted a fieldwork project focusing on increasing awareness about Artificial Intelligence during the final year of BCA. Organized seminars and workshops to educate participants on the basics of AI, its applications, and its potential impact across various industries. Developed materials and resources to simplify AI concepts for diverse audiences.",
      icon: <Award className="text-purple-600" size={24} />,
      impact: "Reached 100+ participants",
      category: "Academic Project"
    }
  ];

  const stats = [
    {
      icon: <TrendingUp className="text-green-600" size={20} />,
      label: "Months of Experience",
      value: "12",
      color: "green"
    },
    {
      icon: <Code className="text-blue-600" size={20} />,
      label: "Technologies Learned",
      value: "10+",
      color: "blue"
    },
    {
      icon: <Award className="text-purple-600" size={20} />,
      label: "Projects Completed",
      value: "1",
      color: "purple"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-6 border border-blue-100">
              <Briefcase className="text-primary mr-2" size={20} />
              <span className="text-primary font-medium">Professional Journey</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience & Achievements
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional development through internships and project experiences that have shaped my career journey.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
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
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <Building className="mr-3 text-blue-600" size={28} />
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg z-10"></div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className={`bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 ${exp.bgColor} hover:border-blue-300`}>
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
                              <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-blue-600 text-blue-700 bg-blue-50">
                            {exp.type}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
                            <Calendar size={14} className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
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
                                <span className="text-blue-600 mr-2 mt-1 text-sm">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
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
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <Award className="mr-3 text-purple-600" size={28} />
              Additional Achievements
            </h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="p-3 bg-purple-100 rounded-full">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900 text-lg">{achievement.title}</h4>
                          <Badge variant="outline" className="border-purple-600 text-purple-700 bg-purple-50">
                            {achievement.category}
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-3">{achievement.description}</p>
                        <div className="text-sm font-medium text-green-700 bg-green-100 rounded-lg px-3 py-1 inline-block">
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
