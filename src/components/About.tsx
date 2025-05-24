
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award, Target, Lightbulb } from 'lucide-react';

export const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "North Maharashtra University",
      period: "2021 – 2024",
      icon: <GraduationCap className="text-primary-600" size={20} />,
      grade: "First Class",
      color: "primary",
      location: "Jalgaon, Maharashtra"
    },
    {
      degree: "HSC (Commerce)",
      institution: "Adv. S.A. Baheti College",
      period: "2020 – 2021",
      icon: <GraduationCap className="text-secondary-500" size={20} />,
      grade: "Distinction",
      color: "secondary",
      location: "Jalgaon, Maharashtra"
    },
    {
      degree: "SSC",
      institution: "Balmohan Madhyamik School",
      period: "2018 – 2019",
      icon: <GraduationCap className="text-teal-500" size={20} />,
      grade: "First Class",
      color: "teal",
      location: "Jalgaon, Maharashtra"
    }
  ];

  const highlights = [
    {
      icon: <Award className="text-primary-600" size={24} />,
      title: "Academic Excellence",
      description: "Consistent high performance throughout educational journey"
    },
    {
      icon: <Target className="text-teal-600" size={24} />,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and professional growth"
    },
    {
      icon: <Lightbulb className="text-secondary-600" size={24} />,
      title: "Problem Solver",
      description: "Passionate about finding innovative solutions to challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-primary-100">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-primary-700 font-medium">Get to know me better</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-teal-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text & Highlights */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-teal-500 rounded-lg mr-3 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">BA</span>
                  </div>
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Computer Applications graduate from Jalgaon, Maharashtra with strong foundational knowledge of software development, 
                    Object-Oriented Programming, and web development.
                  </p>
                  <p>
                    Experienced in <span className="font-semibold text-primary-600">Java, PHP, HTML, CSS, JavaScript, and MySQL</span> through 
                    internships and academic projects. Passionate about writing clean code, solving real-world problems, 
                    and collaborating in team environments.
                  </p>
                  <p>
                    Currently seeking opportunities in Pune, demonstrating eagerness to learn, adapt, and grow in professional software engineering roles, 
                    always staying current with the latest technologies and best practices.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg px-4 py-2">
                    <MapPin size={16} className="mr-2 text-primary-600" />
                    <span className="font-medium">Seeking opportunities in Pune</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-green-50 rounded-lg px-4 py-2">
                    <Calendar size={16} className="mr-2 text-green-600" />
                    <span className="font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-gray-50 shadow-sm">
                          {highlight.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                          <p className="text-gray-600 text-sm">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <GraduationCap className="mr-3 text-primary-600" size={28} />
                  Educational Journey
                </h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-teal-500 to-secondary-500"></div>
                  
                  <div className="space-y-8">
                    {education.map((item, index) => (
                      <div key={index} className="relative pl-16">
                        {/* Timeline dot */}
                        <div className="absolute left-4 w-4 h-4 bg-white border-4 border-primary-500 rounded-full shadow-lg"></div>
                        
                        <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-primary-50">
                                  {item.icon}
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900 text-lg">{item.degree}</h4>
                                  <p className="text-primary-600 font-semibold">{item.institution}</p>
                                  <p className="text-sm text-gray-500">{item.location}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                                  {item.grade}
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 flex items-center">
                              <Calendar size={14} className="mr-2" />
                              {item.period}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
