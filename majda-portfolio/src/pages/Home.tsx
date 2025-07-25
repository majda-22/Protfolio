import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Brain, Database, Cloud, Code2, Sparkles, Star, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Apache Kafka', category: 'Data' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'YOLOv8', category: 'AI/ML' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Deep Learning', category: 'AI/ML' },
    { name: 'Big Data', category: 'Data' },
    { name: 'Cloud Computing', category: 'Cloud' },
    { name: 'TypeScript', category: 'Programming' },
  ];

  const achievements = [
    { title: 'Bachelor\'s Degree', desc: 'Mathematical and Computer Sciences - Graduated with Honors', year: '2024' },
    { title: 'Engineering Student', desc: 'Big Data & Cloud Computing at Higher Normal School', year: '2027' },
    { title: 'JLM Member', desc: 'Jeunes Leaders Marocains', year: 'Current' },
    { title: 'GDG Member', desc: 'Google Developer Groups', year: 'Current' },
  ];

  return (
    <div className="pt-16 min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="neural-network">
        {[...Array(15)].map((_, i) => (
          <div 
            key={`node-${i}`}
            className="neural-node" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div 
            key={`connection-${i}`}
            className="neural-connection" 
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              width: `${100 + Math.random() * 200}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="data-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>
      
      <div className="floating-shapes">
        {[...Array(10)].map((_, i) => {
          const shapes = ['triangle', 'circle', 'square'];
          const shape = shapes[Math.floor(Math.random() * shapes.length)];
          return (
            <div 
              key={`shape-${i}`}
              className={`geometric-shape shape-${shape}`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`
              }}
            />
          );
        })}
      </div>
      
      <div className="quantum-field" />
      <div className="cyber-grid" />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden perspective-container">
        <div className="energy-waves">
          <div className="energy-wave" />
        </div>
        <div className="matrix-rain">
          {[...Array(15)].map((_, i) => {
            const chars = ['0', '1', 'λ', 'π', '∑', '∆', '∇', 'α', 'β', 'γ'];
            return (
              <div 
                key={`matrix-${i}`}
                className="matrix-char" 
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              >
                {chars[Math.floor(Math.random() * chars.length)]}
              </div>
            );
          })}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Side-by-Side Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Side - Avatar */}
              <div className="relative flex justify-center md:justify-start perspective-container animate-slide-left">
                <div className="relative ai-brain">
                  <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full holographic animate-pulse-glow flex items-center justify-center relative overflow-hidden perspective-card">
                    <div className="absolute inset-0 data-viz" />
                    
                    {/* Avatar Image */}
                    <div className="relative z-20 w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/avatar-majda.png" 
                        alt="Majda Ait Lamouden" 
                        className="w-full h-full object-cover animate-float"
                      />
                    </div>
                    
                    {/* Floating Data Nodes */}
                    <div className="absolute top-8 right-8 w-8 h-8 rounded-full bg-accent animate-sparkle neon-border" />
                    <div className="absolute bottom-12 left-12 w-6 h-6 rounded-full bg-primary animate-sparkle" style={{animationDelay: '1s'}} />
                    <div className="absolute top-1/2 left-4 w-4 h-4 rounded-full bg-secondary animate-sparkle" style={{animationDelay: '2s'}} />
                    <div className="absolute top-1/4 right-12 w-7 h-7 rounded-full bg-chart-1 animate-sparkle" style={{animationDelay: '0.5s'}} />
                    
                    {/* Neural Connections */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <div 
                          key={`connection-${i}`}
                          className="absolute w-px h-16 bg-gradient-to-b from-primary to-transparent"
                          style={{
                            left: `${15 + Math.random() * 70}%`,
                            top: `${15 + Math.random() * 70}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            animation: `pulse-connection 2s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="space-y-8 text-center md:text-left animate-slide-right">
                {/* Enhanced Name and Title */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text glow-text animate-slide-up">
                    Majda Ait Lamouden
                  </h1>
                  <div className="relative">
                    <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light animate-slide-up" style={{animationDelay: '0.2s'}}>
                      Big Data & Cloud Computing Engineering Student
                    </p>
                    <div className="absolute -inset-2 blur-xl opacity-50" />
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <Badge variant="secondary" className="neon-border hover-3d px-4 py-2 text-sm">
                      <Database size={16} className="mr-2" />
                      Data Engineering
                    </Badge>
                    <Badge variant="secondary" className="neon-border hover-3d px-4 py-2 text-sm">
                      <Brain size={16} className="mr-2" />
                      Artificial Intelligence
                    </Badge>
                    <Badge variant="secondary" className="neon-border hover-3d px-4 py-2 text-sm">
                      <Cloud size={16} className="mr-2" />
                      Cloud Computing
                    </Badge>
                  </div>
                </div>

                {/* Enhanced Description */}
                <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="glass p-6 md:p-8 rounded-2xl hover-lift relative overflow-hidden">
                    <div className="absolute inset-0" />
                    <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed relative z-10">
                      Passionate Big Data and Cloud Computing student with strong mathematical and computer science skills. 
                      Experienced in real-time data streaming, web development, and AI/ML technologies. Quick learner with 
                      a focus on building scalable, modern solutions that push the boundaries of technology.
                    </p>
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-scale-in" style={{animationDelay: '0.8s'}}>
                  <Link to="/projects">
                    <Button size="lg" className="holographic hover-glow px-8 py-4 text-lg group relative overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" />
                      <span className="relative z-10">View My Projects</span>
                      <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2 relative z-10" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="glass hover-3d px-8 py-4 text-lg border-primary/30 hover:border-primary">
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Expertise Section with Circular Skills */}
      <section className="py-24 relative overflow-hidden">
        <div className="neural-network">
          {[...Array(10)].map((_, i) => (
            <div 
              key={`skill-node-${i}`}
              className="neural-node" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="relative inline-block mb-6">
                <h2 className="text-4xl md:text-6xl font-bold gradient-text glow-text">
                  Technical Expertise
                </h2>
                <div className="absolute -inset-4 blur-2xl opacity-60" />
              </div>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Cutting-edge technologies powering the future of AI and data science
              </p>
            </div>

            <div className="perspective-container">
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {skills.map((skill, index) => {
                  const delay = index * 0.1;
                  return (
                    <div 
                      key={skill.name} 
                      className="animate-slide-up"
                      style={{animationDelay: `${delay}s`}}
                    >
                      <div className="skill-circle group">
                        <div className="text-center">
                          <Code2 size={20} className="text-primary mb-2 group-hover:animate-pulse transition-colors duration-300" />
                          <h3 className="font-bold text-xs text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Tech Stack Visualization */}
            <div className="mt-20 text-center">
              <div className="glass p-8 rounded-3xl max-w-4xl mx-auto hover-lift relative overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-30" />
                <h3 className="text-2xl font-bold gradient-text mb-6">AI/ML Technology Stack</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Python', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'OpenCV', 'YOLO', 'Pandas', 'NumPy'].map((tech, i) => (
                    <div key={tech} className="relative group">
                      <Badge 
                        variant="secondary" 
                        className="holographic px-4 py-2 text-sm hover-glow cursor-pointer"
                        style={{animationDelay: `${i * 0.1}s`}}
                      >
                        {tech}
                      </Badge>
                      <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="neural-network">
          {[...Array(8)].map((_, i) => (
            <div 
              key={`featured-node-${i}`}
              className="neural-node" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="relative inline-block mb-6">
                <h2 className="text-4xl md:text-6xl font-bold gradient-text glow-text">
                  Featured Projects
                </h2>
                <div className="absolute -inset-4 blur-2xl opacity-60" />
              </div>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                Showcasing innovative solutions in AI, Data Engineering, and Web Development
              </p>
            </div>

            <div className="perspective-container">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Real-Time IoT Data Streaming and Dashboard',
                    description: 'Built a real-time IoT data pipeline with Apache Kafka using Python producer and Node.js consumer. Developed an Angular dashboard to visualize live sensor data and perform basic analytics.',
                    technologies: ['Apache Kafka', 'Docker', 'Python', 'Node.js', 'Angular'],
                    category: 'Data Engineering',
                    icon: Database
                  },
                  {
                    title: 'Autonomous Car Driven by Artificial Intelligence',
                    description: 'Simulated a self-driving vehicle capable of navigating without human intervention. Integrated object detection and decision-making using YOLOv8 and deep learning.',
                    technologies: ['Python', 'CARLA', 'YOLOv8', 'Deep Learning', 'TensorFlow'],
                    category: 'Artificial Intelligence',
                    icon: Car
                  }
                ].map((project, index) => {
                  const delay = index * 0.3;
                  const IconComponent = project.icon;
                  return (
                    <div 
                      key={project.title} 
                      className="featured-project animate-slide-up"
                      style={{animationDelay: `${delay}s`}}
                    >
                      <Card className="featured-card neon-border hover-3d group relative overflow-hidden h-full">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Project Glow Effect */}
                        <div className="absolute top-4 right-4 w-16 h-16 rounded-full blur-xl" />
                        
                        <CardHeader className="relative z-10">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full holographic flex items-center justify-center perspective-card group-hover:scale-110 transition-transform duration-500">
                              <IconComponent size={20} className="text-primary-foreground animate-float" />
                            </div>
                            <div className="flex-1">
                              <Badge variant="outline" className="glass px-3 py-1 text-xs font-medium mb-2">
                                {project.category}
                              </Badge>
                              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                                {project.title}
                              </CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="relative z-10">
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs px-2 py-1 glass">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <Button variant="outline" className="glass hover-3d w-full">
                            View Project
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
                          
                          {/* Floating Project Particles */}
                          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {[...Array(4)].map((_, i) => (
                              <div 
                                key={`project-particle-${i}`}
                                className="absolute w-1.5 h-1.5 bg-accent rounded-full animate-sparkle"
                                style={{
                                  left: `${10 + Math.random() * 80}%`,
                                  top: `${10 + Math.random() * 80}%`,
                                  animationDelay: `${Math.random() * 3}s`
                                }}
                              />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Journey Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="energy-waves">
          <div className="energy-wave" style={{animationDuration: '12s'}} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="relative inline-block mb-6">
                <h2 className="text-4xl md:text-6xl font-bold gradient-text glow-text">
                  Academic Journey
                </h2>
                <div className="absolute -inset-6 blur-3xl opacity-70" />
              </div>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                Building expertise through academic excellence and professional development
              </p>
            </div>

            <div className="perspective-container">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {achievements.map((achievement, index) => {
                  const delay = index * 0.3;
                  return (
                    <div 
                      key={achievement.title} 
                      className="perspective-card animate-slide-up"
                      style={{animationDelay: `${delay}s`}}
                    >
                      <Card className="card-3d neon-border hover-3d group relative overflow-hidden h-full">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Achievement Glow Effect */}
                        <div className="absolute top-4 right-4 w-16 h-16 rounded-full blur-xl" />
                        
                        <CardContent className="p-8 relative z-10">
                          <div className="flex items-start gap-6">
                            {/* 3D Achievement Icon */}
                            <div className="relative flex-shrink-0">
                              <div className="w-16 h-16 rounded-full holographic flex items-center justify-center perspective-card group-hover:scale-110 transition-transform duration-500">
                                <Star size={24} className="text-primary-foreground animate-float" />
                                
                                {/* Orbiting Elements */}
                                <div className="absolute inset-0">
                                  {[...Array(3)].map((_, i) => (
                                    <div 
                                      key={`orbit-${i}`}
                                      className="absolute w-2 h-2 bg-accent rounded-full"
                                      style={{
                                        animation: `orbit 4s linear infinite`,
                                        animationDelay: `${i * 1.33}s`,
                                        transformOrigin: '32px 32px'
                                      }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                                  {achievement.title}
                                </h3>
                                <Badge variant="outline" className="glass px-3 py-1 text-sm font-medium">
                                  {achievement.year}
                                </Badge>
                              </div>
                              
                              <p className="text-muted-foreground leading-relaxed mb-4">
                                {achievement.desc}
                              </p>
                              
                              {/* Progress Visualization */}
                              <div className="relative">
                                <div className="h-1 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full rounded-full"
                                    style={{
                                      width: achievement.year === 'Current' ? '100%' : 
                                            achievement.year === '2027' ? '60%' : '100%',
                                      background: 'linear-gradient(to right, oklch(75% .25 285), oklch(65% .2 295), oklch(18% .12 275))',
                                      animation: 'progress-fill 2s ease-out forwards'
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Floating Achievement Particles */}
                          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={`achievement-particle-${i}`}
                                className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-sparkle"
                                style={{
                                  left: `${10 + Math.random() * 80}%`,
                                  top: `${10 + Math.random() * 80}%`,
                                  animationDelay: `${Math.random() * 3}s`
                                }}
                              />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Academic Timeline Visualization */}
            <div className="mt-20">
              <div className="glass p-8 rounded-3xl hover-lift relative overflow-hidden">
                <div className="absolute inset-0 neural-bg opacity-20" />
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold gradient-text">Educational Timeline</h3>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full" style={{background: 'linear-gradient(to bottom, oklch(75% .25 285), oklch(65% .2 295), oklch(18% .12 275))'}} />
                  
                  <div className="space-y-8">
                    {[
                      { year: '2020-2021', event: 'High School Diploma - Physical Science', status: 'completed' },
                      { year: '2021-2024', event: 'Bachelor\'s in Mathematical & Computer Sciences', status: 'completed' },
                      { year: '2024-2027', event: 'Engineering in Big Data & Cloud Computing', status: 'current' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-center relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full holographic animate-pulse-glow" />
                        <div className={`max-w-xs p-4 glass rounded-lg ${i % 2 === 0 ? 'mr-auto' : 'ml-auto'} hover-lift`}>
                          <div className="text-sm font-bold text-primary">{item.year}</div>
                          <div className="text-sm text-foreground">{item.event}</div>
                          <Badge variant={item.status === 'current' ? 'default' : 'secondary'} className="mt-2 text-xs">
                            {item.status === 'current' ? 'In Progress' : 'Completed'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Languages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="data-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={`lang-particle-${i}`}
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`
              }}
            />
          ))}
        </div>
        
        <div className="quantum-field" style={{opacity: 0.3}} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-12">
              <h2 className="text-4xl md:text-6xl font-bold gradient-text glow-text">
                Global Communication
              </h2>
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl opacity-80 animate-pulse" />
            </div>
            
            <div className="perspective-container">
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { lang: 'English', level: 'Fluent', flag: '🇬🇧', proficiency: 95 },
                  { lang: 'French', level: 'Native', flag: '🇫🇷', proficiency: 100 },
                  { lang: 'Arabic', level: 'Native', flag: '🇲🇦', proficiency: 100 }
                ].map((language, index) => {
                  const delay = index * 0.4;
                  return (
                    <div 
                      key={language.lang} 
                      className="perspective-card animate-scale-in"
                      style={{animationDelay: `${delay}s`}}
                    >
                      <div className="card-3d neon-border hover-3d group relative overflow-hidden">
                        <div className="glass p-8 rounded-2xl relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Language Flag/Icon */}
                          <div className="text-4xl mb-4 animate-float group-hover:scale-110 transition-transform duration-300">
                            {language.flag}
                          </div>
                          
                          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {language.lang}
                          </h3>
                          
                          <Badge variant="secondary" className="mb-4 glass px-3 py-1">
                            {language.level}
                          </Badge>
                          
                          {/* Proficiency Visualization */}
                          <div className="relative mt-4">
                            <div className="text-xs text-muted-foreground mb-2">Proficiency</div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: `${language.proficiency}%`,
                                  animation: 'progress-fill 2s ease-out forwards'
                                }}
                              />
                            </div>
                            <div className="text-xs text-primary mt-1 font-medium">
                              {language.proficiency}%
                            </div>
                          </div>
                          
                          {/* Floating Language Particles */}
                          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {[...Array(4)].map((_, i) => (
                              <div 
                                key={`lang-spark-${i}`}
                                className="absolute w-1 h-1 bg-accent rounded-full animate-sparkle"
                                style={{
                                  left: `${15 + Math.random() * 70}%`,
                                  top: `${15 + Math.random() * 70}%`,
                                  animationDelay: `${Math.random() * 2}s`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Communication Network Visualization */}
            <div className="mt-16">
              <div className="glass p-8 rounded-3xl hover-lift relative overflow-hidden max-w-2xl mx-auto">
                <div className="absolute inset-0 neural-bg opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold gradient-text mb-4">Cross-Cultural Collaboration</h3>
                  <p className="text-muted-foreground">
                    Bridging cultures and technologies through multilingual communication 
                    in international tech environments.
                  </p>
                  
                  {/* Connection Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div 
                        key={`connection-${i}`}
                        className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: `${20 + Math.random() * 60}%`,
                          width: `${30 + Math.random() * 40}%`,
                          transform: `rotate(${Math.random() * 360}deg)`,
                          animation: `data-stream 4s ease-in-out infinite`,
                          animationDelay: `${Math.random() * 4}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}