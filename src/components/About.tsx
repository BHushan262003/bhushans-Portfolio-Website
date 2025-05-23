
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "North Maharashtra University",
      period: "2021 – 2024",
      icon: <GraduationCap className="text-primary-600" size={20} />
    },
    {
      degree: "HSC (Commerce)",
      institution: "Adv. S.A. Baheti College",
      period: "2020 – 2021",
      icon: <GraduationCap className="text-secondary-500" size={20} />
    },
    {
      degree: "SSC",
      institution: "Balmohan Madhyamik School",
      period: "2018 – 2019",
      icon: <GraduationCap className="text-teal-500" size={20} />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-700 leading-relaxed">
                Computer Applications graduate with strong foundational knowledge of software development, 
                Object-Oriented Programming, and full-stack web development. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Experienced in <span className="font-semibold text-primary-600">Java, PHP, HTML, CSS, JavaScript, and MySQL</span> through 
                internships and academic projects. Passionate about writing clean code, solving real-world problems, 
                and collaborating in team environments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I demonstrate eagerness to learn, adapt, and grow in professional software engineering roles, 
                always staying current with the latest technologies and best practices.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2 text-primary-600" />
                  <span>Maharashtra, India</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2 text-primary-600" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-primary-500 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="mt-1">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.degree}</h4>
                          <p className="text-gray-600 mb-2">{item.institution}</p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {item.period}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
