import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'majda.aitlamouden@gmail.com',
      link: 'mailto:majda.aitlamouden@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Salé, Morocco',
      link: null
    },
    {
      icon: Phone,
      label: 'Available for',
      value: 'Remote & On-site opportunities',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/majda-aitlamouden',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/majda-aitlamouden',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      link: 'https://twitter.com/majda_aitlamouden',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:majda.aitlamouden@gmail.com',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-glow flex items-center justify-center">
                <MessageCircle size={32} className="text-primary-foreground animate-float" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text animate-gradient mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or simply chat about technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="glass hover-lift">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold gradient-text flex items-center gap-2">
                      <Send size={24} />
                      Send me a message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="glass hover-glow transition-all"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="glass hover-glow transition-all"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-foreground">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="glass hover-glow transition-all"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project, idea, or just say hello!"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="glass hover-glow transition-all resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full hover-glow"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Social */}
              <div className="space-y-8">
                
                {/* Contact Information */}
                <Card className="glass hover-lift">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold gradient-text">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                            <IconComponent size={16} className="text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{info.label}</p>
                            {info.link ? (
                              <a 
                                href={info.link} 
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="glass hover-lift">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold gradient-text">
                      Connect with me
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      Find me on these platforms
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-3 rounded-lg glass hover-lift transition-all group"
                          >
                            <IconComponent size={16} className={`transition-colors ${social.color}`} />
                            <span className="text-sm font-medium">{social.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Availability Status */}
                <Card className="glass hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Available for opportunities
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Currently seeking internships and entry-level positions in 
                      Data Engineering, AI/ML, and Software Development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Start a Conversation?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-glow" asChild>
                <a href="mailto:majda.aitlamouden@gmail.com">
                  <Mail size={16} className="mr-2" />
                  Email Me Directly
                </a>
              </Button>
              <Button variant="outline" size="lg" className="glass hover-lift" asChild>
                <a href="#contact-form" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Use Contact Form
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}