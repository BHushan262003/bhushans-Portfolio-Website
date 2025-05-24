
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ExternalLink, MessageCircle, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Your actual EmailJS credentials
      const serviceId = 'service_mzx1q8q';
      const templateId = 'template_lgormwk';
      const publicKey = 'Zr2YbVVdyQT31J32t';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Bhushan Aher',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/25 to-purple-200/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-200/20 to-teal-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-blue-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-700 font-medium">Let's start a conversation</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 via-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, or simply connect with fellow developers.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {quickStats.map((stat, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg mr-3 flex items-center justify-center">
                    <MessageCircle className="text-white" size={16} />
                  </div>
                  Get In Touch
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Ready to bring your ideas to life? Whether you need a Java backend solution, 
                  a full-stack web application, or want to discuss potential opportunities, 
                  I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-${info.color}-100 shadow-sm`}>
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-gray-900">{info.label}</h4>
                              <span className="text-xs text-gray-500">{info.description}</span>
                            </div>
                            {info.link ? (
                              <a 
                                href={info.link}
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className={`text-${info.color}-600 hover:text-${info.color}-700 transition-colors duration-200 font-medium`}
                              >
                                {info.value}
                              </a>
                            ) : (
                              <span className="text-gray-600 font-medium">{info.value}</span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-100/50 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-6 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg mr-3 flex items-center justify-center">
                    <CheckCircle className="text-white" size={12} />
                  </div>
                  Looking for opportunities in:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Java Backend Development",
                    "Full-Stack Web Development", 
                    "Software Engineering Roles",
                    "Freelance Projects"
                  ].map((opportunity, i) => (
                    <div key={i} className="flex items-center bg-white/60 rounded-lg p-3 hover:bg-white/80 transition-colors duration-200">
                      <span className="text-primary-600 mr-3 text-lg">•</span>
                      <span className="text-gray-700 font-medium">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form with EmailJS Integration */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary-50/80 to-blue-50/80 backdrop-blur-sm border-b border-white/20">
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500 to-blue-500 mr-3 shadow-lg">
                    <Send className="text-white" size={20} />
                  </div>
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="border-gray-200 focus:border-primary-500 focus:ring-primary-500 bg-white/80 backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="border-gray-200 focus:border-primary-500 focus:ring-primary-500 bg-white/80 backdrop-blur-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="border-gray-200 focus:border-primary-500 focus:ring-primary-500 bg-white/80 backdrop-blur-sm"
                      placeholder="Project Discussion / Job Opportunity"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                      rows={5}
                      className="border-gray-200 focus:border-primary-500 focus:ring-primary-500 bg-white/80 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 hover:from-primary-700 hover:via-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-green-50/80 backdrop-blur-sm rounded-lg border border-green-200">
                  <p className="text-sm text-green-700 text-center">
                    <CheckCircle className="inline mr-1" size={16} />
                    I typically respond within 24 hours
                  </p>
                </div>

                {/* EmailJS Status */}
                <div className="mt-6 p-4 bg-blue-50/80 backdrop-blur-sm rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700 text-center">
                    <MessageCircle className="inline mr-1" size={16} />
                    EmailJS integration active - Messages will be sent to your Gmail
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
