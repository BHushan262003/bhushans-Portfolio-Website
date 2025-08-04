
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { GraduationCap, Calendar, MapPin, Award, Target, Lightbulb, Code, Database, Cpu, Zap, Download } from 'lucide-react';
import { LinkedInImporter } from './LinkedInImporter';

export const About = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    title: '',
    location: '',
    about: '',
    experience: [] as Array<{ title: string; company: string; }>,
    skills: [] as string[]
  });

  const handleLinkedInImport = (data: any) => {
    setProfileData(data);
    // Here you could also update other components with the imported data
  };

  const education = [
    {
      degree: "HSC (Commerce)",
      institution: "Adv. S.A. Baheti College",
      period: "2020 – 2021",
      icon: <GraduationCap className="text-purple-400" size={20} />,
      grade: "Distinction",
      color: "purple",
      location: "Jalgaon, Maharashtra"
    },
    {
      degree: "SSC",
      institution: "Balmohan Madhyamik School",
      period: "2018 – 2019",
      icon: <GraduationCap className="text-teal-400" size={20} />,
      grade: "First Class",
      color: "teal",
      location: "Jalgaon, Maharashtra"
    }
  ];

  const highlights = [
    {
      icon: <Award className="text-blue-400" size={24} />,
      title: "Academic Excellence",
      description: "Consistent high performance throughout educational journey"
    },
    {
      icon: <Target className="text-purple-400" size={24} />,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and professional growth"
    },
    {
      icon: <Lightbulb className="text-teal-400" size={24} />,
      title: "Problem Solver",
      description: "Passionate about finding innovative solutions to challenges"
    }
  ];

  const digitalElements = [
    { icon: <Code className="text-blue-400" size={16} />, delay: "0s" },
    { icon: <Database className="text-green-400" size={14} />, delay: "1s" },
    { icon: <Cpu className="text-purple-400" size={18} />, delay: "2s" },
    { icon: <Zap className="text-yellow-400" size={12} />, delay: "3s" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-6 border border-blue-100">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
              <span className="text-primary font-medium">Get to know me better</span>
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
                About Me
              </h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Download size={16} className="mr-2" />
                    Import from LinkedIn
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white border border-gray-200">
                  <DialogHeader>
                    <DialogTitle className="text-gray-900">Import LinkedIn Profile</DialogTitle>
                  </DialogHeader>
                  <LinkedInImporter onDataImported={handleLinkedInImport} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about creating elegant solutions and building meaningful experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text & Highlights */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white rounded-2xl p-8 shadow-medium border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-lg mr-3 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">BA</span>
                  </div>
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {profileData.about ? (
                    <p>{profileData.about}</p>
                  ) : (
                    <>
                      <p>
                        Computer Applications graduate from Jalgaon, Maharashtra with strong foundational knowledge of software development, 
                        Object-Oriented Programming, and web development.
                      </p>
                      <p>
                        Experienced in <span className="font-semibold text-primary">Java, PHP, HTML, CSS, JavaScript, and MySQL</span> through 
                        internships and academic projects. Passionate about writing clean code, solving real-world problems, 
                        and collaborating in team environments.
                      </p>
                      <p>
                        Currently seeking opportunities in Pune, demonstrating eagerness to learn, adapt, and grow in professional software engineering roles, 
                        always staying current with the latest technologies and best practices.
                      </p>
                    </>
                  )}
                </div>

                {/* Display imported LinkedIn data */}
                {profileData.name && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="text-primary font-semibold mb-2">Imported LinkedIn Profile:</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Name:</span> {profileData.name}</p>
                      {profileData.title && <p><span className="font-medium">Title:</span> {profileData.title}</p>}
                      {profileData.location && <p><span className="font-medium">Location:</span> {profileData.location}</p>}
                      {profileData.skills.length > 0 && (
                        <div>
                          <span className="font-medium">Skills:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {profileData.skills.slice(0, 5).map((skill, index) => (
                              <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
                    <MapPin size={16} className="mr-2 text-primary" />
                    <span className="font-medium">Seeking opportunities in Pune</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-green-50 rounded-lg px-4 py-2 border border-green-200">
                    <Calendar size={16} className="mr-2 text-green-600" />
                    <span className="font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="bg-white border border-gray-200 hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
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
              <div className="bg-white rounded-2xl p-8 shadow-medium border border-gray-100">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <GraduationCap className="mr-3 text-primary" size={28} />
                  Educational Journey
                </h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary"></div>
                  
                  <div className="space-y-8">
                    {education.map((item, index) => (
                      <div key={index} className="relative pl-16">
                        {/* Timeline dot */}
                        <div className="absolute left-4 w-4 h-4 bg-white border-4 border-primary rounded-full shadow-soft"></div>
                        
                        <Card className="bg-gray-50 border border-gray-200 hover:shadow-medium transition-all duration-300 hover:scale-105">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                                  {item.icon}
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900 text-lg">{item.degree}</h4>
                                  <p className="text-primary font-semibold">{item.institution}</p>
                                  <p className="text-sm text-gray-600">{item.location}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2 border border-primary/20">
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
