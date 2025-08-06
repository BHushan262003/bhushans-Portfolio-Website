import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { GraduationCap, Calendar, MapPin, Award, Target, Lightbulb, Code, Database, Cpu, Zap, Download, Star, BookOpen, Trophy } from 'lucide-react';
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
  };

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "North Maharashtra University",
      period: "2021 – 2025",
      icon: <GraduationCap className="text-blue-400" size={24} />,
      grade: "First Class",
      color: "blue",
      location: "Jalgaon, Maharashtra",
      description: "Comprehensive study of software development, programming languages, and computer applications."
    },
    {
      degree: "HSC (Commerce)",
      institution: "Adv. S.A. Baheti College",
      period: "2020 – 2021",
      icon: <BookOpen className="text-purple-400" size={24} />,
      grade: "Distinction",
      color: "purple",
      location: "Jalgaon, Maharashtra",
      description: "Strong foundation in analytical thinking and problem-solving methodologies."
    },
    {
      degree: "SSC",
      institution: "Balmohan Madhyamik School",
      period: "2018 – 2019",
      icon: <Trophy className="text-teal-400" size={24} />,
      grade: "First Class",
      color: "teal",
      location: "Jalgaon, Maharashtra",
      description: "Built fundamental academic skills and discipline for future learning."
    }
  ];

  const highlights = [
    {
      icon: <Award className="text-blue-400" size={28} />,
      title: "Academic Excellence",
      description: "Consistent high performance throughout educational journey with focus on practical application",
      color: "blue"
    },
    {
      icon: <Target className="text-purple-400" size={28} />,
      title: "Goal-Oriented Mindset",
      description: "Focused on continuous learning and professional growth in software engineering",
      color: "purple"
    },
    {
      icon: <Lightbulb className="text-teal-400" size={28} />,
      title: "Innovative Problem Solver",
      description: "Passionate about finding elegant solutions to complex technical challenges",
      color: "teal"
    }
  ];

  const digitalElements = [
    { icon: <Code className="text-blue-400" size={20} />, delay: "0s" },
    { icon: <Database className="text-emerald-400" size={18} />, delay: "1s" },
    { icon: <Cpu className="text-purple-400" size={22} />, delay: "2s" },
    { icon: <Zap className="text-yellow-400" size={16} />, delay: "3s" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
        
        {/* Floating Digital Elements */}
        {digitalElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-20"
            style={{
              left: `${15 + index * 20}%`,
              top: `${20 + index * 15}%`,
              animationDelay: element.delay,
              animationDuration: '8s'
            }}
          >
            {element.icon}
          </div>
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/15 to-teal-200/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-large border border-blue-200/50">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 animate-pulse"></div>
              <span className="text-blue-700 font-semibold text-lg">Discover My Journey</span>
            </div>
            <div className="flex items-center justify-center gap-6 mb-8">
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-gray-900">
                About Me
              </h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white shadow-medium transition-all duration-300 hover:scale-105">
                    <Download size={20} className="mr-3" />
                    Import LinkedIn
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-white border-2 border-gray-200 shadow-terminal">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-gray-900">Import LinkedIn Profile</DialogTitle>
                  </DialogHeader>
                  <LinkedInImporter onDataImported={handleLinkedInImport} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating elegant solutions and building meaningful experiences through code.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Content & Highlights */}
            <div className="space-y-10 animate-fade-in">
              {/* Main About Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-large border border-gray-200/50 hover:shadow-terminal transition-all duration-300">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mr-4 flex items-center justify-center shadow-medium">
                    <span className="text-white text-lg font-bold">BA</span>
                  </div>
                  My Journey in Tech
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  {profileData.about ? (
                    <p>{profileData.about}</p>
                  ) : (
                    <>
                      <p>
                        Computer Applications graduate from Jalgaon, Maharashtra with strong foundational knowledge of 
                        software development, <span className="font-semibold text-blue-600">Object-Oriented Programming</span>, 
                        and modern web development practices.
                      </p>
                      <p>
                        Experienced in <span className="font-semibold text-purple-600">Java, PHP, HTML5, CSS3, JavaScript, and MySQL</span> through 
                        hands-on internships and comprehensive academic projects. I'm passionate about writing clean, 
                        efficient code and solving real-world problems through innovative software solutions.
                      </p>
                      <p>
                        Currently seeking opportunities in <span className="font-semibold text-teal-600">Pune</span>, 
                        demonstrating eagerness to learn, adapt, and grow in professional software engineering roles. 
                        Always staying current with the latest technologies and industry best practices.
                      </p>
                    </>
                  )}
                </div>

                {/* LinkedIn Import Display */}
                {profileData.name && (
                  <div className="mt-8 p-6 bg-blue-50/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl">
                    <h4 className="text-blue-700 font-bold mb-4 text-lg">Imported LinkedIn Profile:</h4>
                    <div className="space-y-3">
                      <p><span className="font-semibold">Name:</span> {profileData.name}</p>
                      {profileData.title && <p><span className="font-semibold">Title:</span> {profileData.title}</p>}
                      {profileData.location && <p><span className="font-semibold">Location:</span> {profileData.location}</p>}
                      {profileData.skills.length > 0 && (
                        <div>
                          <span className="font-semibold">Skills:</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {profileData.skills.slice(0, 6).map((skill, index) => (
                              <span key={index} className="bg-blue-500/20 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Contact Status */}
                <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-gray-200">
                  <div className="flex items-center text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-6 py-3 border-2 border-gray-200 shadow-medium">
                    <MapPin size={20} className="mr-3 text-blue-500" />
                    <span className="font-semibold">Seeking opportunities in Pune</span>
                  </div>
                  <div className="flex items-center text-gray-700 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl px-6 py-3 border-2 border-emerald-200 shadow-medium">
                    <Calendar size={20} className="mr-3 text-emerald-600" />
                    <span className="font-semibold">Available immediately</span>
                  </div>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 hover:shadow-large transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br from-${highlight.color}-100 to-${highlight.color}-200 border-2 border-${highlight.color}-200/50 group-hover:scale-110 transition-transform duration-300`}>
                          {highlight.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-3 text-xl">{highlight.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced Education Timeline */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-large border border-gray-200/50">
                <h3 className="font-heading text-3xl font-bold text-gray-900 mb-10 flex items-center">
                  <GraduationCap className="mr-4 text-blue-500" size={32} />
                  Educational Journey
                </h3>
                
                <div className="relative">
                  {/* Enhanced Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 rounded-full"></div>
                  
                  <div className="space-y-10">
                    {education.map((item, index) => (
                      <div key={index} className="relative pl-20">
                        {/* Enhanced Timeline dot */}
                        <div className="absolute left-6 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-large z-10"></div>
                        
                        <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:shadow-large transition-all duration-300 hover:scale-105 group">
                          <CardContent className="p-8">
                            <div className="flex items-start justify-between mb-6">
                              <div className="flex items-center space-x-4">
                                <div className={`p-3 rounded-2xl bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 border-2 border-${item.color}-200/50 group-hover:scale-110 transition-transform duration-300`}>
                                  {item.icon}
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900 text-xl mb-1">{item.degree}</h4>
                                  <p className="text-blue-600 font-semibold text-lg">{item.institution}</p>
                                  <p className="text-gray-600">{item.location}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className={`bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 text-${item.color}-700 px-4 py-2 rounded-full text-sm font-bold mb-2 border border-${item.color}-300/50`}>
                                  {item.grade}
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                            <p className="text-sm text-gray-500 flex items-center">
                              <Calendar size={16} className="mr-2" />
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