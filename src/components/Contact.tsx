
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, ExternalLink, MessageCircle, Clock, CheckCircle, Zap, Code, Database, Cpu } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary-600" size={24} />,
      label: "Email",
      value: "bamrutkar85@gmail.com",
      link: "mailto:bamrutkar85@gmail.com",
      color: "primary",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="text-teal-500" size={24} />,
      label: "Phone",
      value: "+91-8483933461",
      link: "tel:+918483933461",
      color: "teal",
      description: "Call for urgent matters"
    },
    {
      icon: <ExternalLink className="text-blue-500" size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/bhushan-amrutkar",
      link: "https://linkedin.com/in/bhushan-amrutkar",
      color: "blue",
      description: "Let's connect professionally"
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      label: "Location",
      value: "Pune, India",
      link: null,
      color: "red",
      description: "Available for remote work"
    }
  ];

  const quickStats = [
    {
      icon: <MessageCircle className="text-green-500" size={20} />,
      label: "Response Time",
      value: "< 24 hrs",
      description: "Usually within hours"
    },
    {
      icon: <CheckCircle className="text-blue-500" size={20} />,
      label: "Project Success",
      value: "100%",
      description: "Completed on time"
    },
    {
      icon: <Clock className="text-purple-500" size={20} />,
      label: "Available",
      value: "Mon-Fri",
      description: "9 AM - 6 PM IST"
    }
  ];

  const digitalElements = [
    { icon: <Code className="text-blue-400" size={16} />, delay: "0s" },
    { icon: <Database className="text-green-400" size={14} />, delay: "1s" },
    { icon: <Cpu className="text-purple-400" size={18} />, delay: "2s" },
    { icon: <Zap className="text-yellow-400" size={12} />, delay: "3s" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced Digital Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Digital Elements */}
        {digitalElements.map((element, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-70"
            style={{
              left: `${20 + index * 20}%`,
              top: `${10 + index * 15}%`,
              animationDelay: element.delay,
              animationDuration: '4s'
            }}
          >
            {element.icon}
          </div>
        ))}

        {/* Glowing Orbs with Digital Effect */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-500/15 to-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Matrix-like Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-blue-400/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 font-medium">Let's start a conversation</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-6 animate-pulse"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, or simply connect with fellow developers.
            </p>
          </div>

          {/* Quick Stats with Digital Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {quickStats.map((stat, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center group hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-3 group-hover:animate-bounce">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information with Enhanced Digital Design */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-blue-400 rounded-lg mr-3 flex items-center justify-center animate-pulse">
                  <MessageCircle className="text-white" size={16} />
                </div>
                Get In Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-center">
                Ready to bring your ideas to life? Whether you need a Java backend solution, 
                a full-stack web application, or want to discuss potential opportunities, 
                I'd love to hear from you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gradient-to-r from-white/10 to-gray-900/20 backdrop-blur-sm border-white/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-${info.color}-500/20 shadow-sm group-hover:animate-pulse`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">{info.label}</h4>
                            <span className="text-xs text-gray-400">{info.description}</span>
                          </div>
                          {info.link ? (
                            <a 
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className={`text-${info.color}-400 hover:text-${info.color}-300 transition-colors duration-200 font-medium hover:underline`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-gray-300 font-medium">{info.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Opportunities Section with Digital Effects */}
            <div className="mt-8 bg-gradient-to-br from-primary-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-400/20 shadow-lg">
              <h4 className="font-semibold text-white mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-blue-400 rounded-lg mr-3 flex items-center justify-center animate-pulse">
                  <CheckCircle className="text-white" size={12} />
                </div>
                Looking for opportunities in:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Java Backend Development",
                  "Full-Stack Web Development", 
                  "Software Engineering Roles",
                  "Freelance Projects"
                ].map((opportunity, i) => (
                  <div key={i} className="flex items-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                    <span className="text-primary-400 mr-3 text-lg group-hover:animate-bounce">•</span>
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
