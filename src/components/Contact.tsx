
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
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
      link: "mailto:bamrutkar85@gmail.com"
    },
    {
      icon: <Phone className="text-teal-500" size={24} />,
      label: "Phone",
      value: "+91-8483933461",
      link: "tel:+918483933461"
    },
    {
      icon: <ExternalLink className="text-secondary-500" size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/bhushan-amrutkar",
      link: "https://linkedin.com/in/bhushan-amrutkar"
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      label: "Location",
      value: "Maharashtra, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, or simply connect with fellow developers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Ready to bring your ideas to life? Whether you need a Java backend solution, 
                  a full-stack web application, or want to discuss potential opportunities, 
                  I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-l-4 border-l-primary-500 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-gray-50">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.label}</h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-gray-600">{info.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-lg p-6 border border-primary-100">
                <h4 className="font-semibold text-gray-900 mb-3">Looking for opportunities in:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    Java Backend Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    Software Engineering Roles
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    Freelance Projects
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary-50 to-teal-50">
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Send className="mr-3 text-primary-600" size={24} />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Project Discussion"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
