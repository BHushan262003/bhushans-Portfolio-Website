
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
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "North Maharashtra University",
      period: "2021 – 2024",
      icon: <GraduationCap className="text-blue-400" size={20} />,
      grade: "First Class",
      color: "blue",
      location: "Jalgaon, Maharashtra"
    },
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
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced Digital Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        
        {/* Floating Digital Elements */}
        {digitalElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-60"
            style={{
              left: `${15 + index * 25}%`,
              top: `${20 + index * 10}%`,
              animationDelay: element.delay,
              animationDuration: '5s'
            }}
          >
            {element.icon}
          </div>
        ))}

        {/* Glowing Orbs */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Matrix Lines */}
        <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-blue-400/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 font-medium">Get to know me better</span>
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                About Me
              </h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-blue-500/20 border-blue-400/30 text-blue-300 hover:bg-blue-500/30">
                    <Download size={16} className="mr-2" />
                    Import from LinkedIn
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gray-900/95 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">Import LinkedIn Profile</DialogTitle>
                  </DialogHeader>
                  <LinkedInImporter onDataImported={handleLinkedInImport} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 mx-auto rounded-full mb-6 animate-pulse"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Exploring the digital frontier with passion and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text & Highlights */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300 hover:border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mr-3 flex items-center justify-center animate-pulse">
                    <span className="text-white text-sm font-bold">BA</span>
                  </div>
                  My Digital Journey
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  {profileData.about ? (
                    <p>{profileData.about}</p>
                  ) : (
                    <>
                      <p>
                        Computer Applications graduate from Jalgaon, Maharashtra with strong foundational knowledge of software development, 
                        Object-Oriented Programming, and web development.
                      </p>
                      <p>
                        Experienced in <span className="font-semibold text-blue-300">Java, PHP, HTML, CSS, JavaScript, and MySQL</span> through 
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
                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg">
                    <h4 className="text-blue-300 font-semibold mb-2">Imported LinkedIn Profile:</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Name:</span> {profileData.name}</p>
                      {profileData.title && <p><span className="font-medium">Title:</span> {profileData.title}</p>}
                      {profileData.location && <p><span className="font-medium">Location:</span> {profileData.location}</p>}
                      {profileData.skills.length > 0 && (
                        <div>
                          <span className="font-medium">Skills:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {profileData.skills.slice(0, 5).map((skill, index) => (
                              <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
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
                <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                    <MapPin size={16} className="mr-2 text-blue-400" />
                    <span className="font-medium">Seeking opportunities in Pune</span>
                  </div>
                  <div className="flex items-center text-gray-300 bg-green-500/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-400/20">
                    <Calendar size={16} className="mr-2 text-green-400" />
                    <span className="font-medium">Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/30">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm border border-white/10 group-hover:animate-pulse">
                          {highlight.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{highlight.title}</h4>
                          <p className="text-gray-300 text-sm">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <h3 className="font-heading text-2xl font-bold text-white mb-8 flex items-center">
                  <GraduationCap className="mr-3 text-blue-400" size={28} />
                  Educational Journey
                </h3>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 animate-pulse"></div>
                  
                  <div className="space-y-8">
                    {education.map((item, index) => (
                      <div key={index} className="relative pl-16">
                        {/* Timeline dot */}
                        <div className="absolute left-4 w-4 h-4 bg-white/10 backdrop-blur-sm border-4 border-blue-400 rounded-full shadow-lg animate-pulse"></div>
                        
                        <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/30">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                                  {item.icon}
                                </div>
                                <div>
                                  <h4 className="font-bold text-white text-lg">{item.degree}</h4>
                                  <p className="text-blue-300 font-semibold">{item.institution}</p>
                                  <p className="text-sm text-gray-400">{item.location}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-2 border border-blue-400/30">
                                  {item.grade}
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-300 flex items-center">
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
