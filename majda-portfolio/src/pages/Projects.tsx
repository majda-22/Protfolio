import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Brain, Car, Home, TrendingUp, Database, Monitor, MessageCircle, Filter } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const cardRefs = useRef([]);

  const filterCategories = [
    'All',
    'AI & Machine Learning',
    'Web Development', 
    'Data Pipelines'
  ];

  const projects = [
    {
      id: 1,
      title: 'Real-Time IoT Data Streaming and Dashboard',
      description: 'Built a real-time IoT data pipeline with Apache Kafka using Python producer and Node.js consumer. Developed an Angular dashboard to visualize live sensor data and perform basic analytics. Deployed Kafka with Docker for scalable, fault-tolerant streaming architecture.',
      image: '/api/placeholder/400/300',
      technologies: ['Apache Kafka', 'Docker', 'Python', 'Node.js', 'WebSocket', 'Angular'],
      category: 'Data Pipelines',
      icon: Database,
      highlights: [
        'Real-time data processing with Apache Kafka',
        'Scalable microservices architecture',
        'Interactive dashboard with live updates',
        'Docker containerization for deployment'
      ]
    },
    {
      id: 2,
      title: 'Autonomous Car Driven by Artificial Intelligence',
      description: 'Simulated a self-driving vehicle capable of navigating without human intervention. Integrated object detection and decision-making using YOLOv8 and deep learning. Used the CARLA simulator for training and testing autonomous driving scenarios.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'CARLA', 'YOLOv8', 'Deep Learning', 'TensorFlow', 'Keras'],
      category: 'AI & Machine Learning',
      icon: Car,
      highlights: [
        'YOLOv8 object detection integration',
        'CARLA simulation environment',
        'Deep learning neural networks',
        'Autonomous navigation algorithms'
      ]
    },
    {
      id: 3,
      title: 'Animal Adoption Website Design And Development',
      description: 'Designed a fully responsive website prototype for animal adoption services. Developed the frontend using modern web technologies with a focus on user experience and accessibility. Created an intuitive interface for browsing and adopting pets.',
      image: '/api/placeholder/400/300',
      technologies: ['HTML', 'CSS', 'TypeScript', 'React', 'Figma'],
      category: 'Web Development',
      icon: Home,
      highlights: [
        'Responsive design for all devices',
        'User-centered design approach',
        'Modern React architecture',
        'Figma prototyping and design'
      ]
    },
    {
      id: 4,
      title: 'Real Estate Price Prediction with Genetic Algorithm',
      description: 'Preprocessed housing data including handling missing values, encoding, and scaling. Designed a custom fitness function and implemented a genetic algorithm for model optimization. Tracked fitness evolution and visualized MAE over generations.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      category: 'AI & Machine Learning',
      icon: TrendingUp,
      highlights: [
        'Custom genetic algorithm implementation',
        'Advanced data preprocessing',
        'Model optimization techniques',
        'Performance visualization and analysis'
      ]
    }
  ];

  const categoryColors = {
    'Data Pipelines': 'neon-border bg-blue-500/10 text-blue-300 hover:bg-blue-500/20',
    'AI & Machine Learning': 'neon-border bg-purple-500/10 text-purple-300 hover:bg-purple-500/20',
    'Web Development': 'neon-border bg-green-500/10 text-green-300 hover:bg-green-500/20'
  };

  const filterColors = {
    'All': 'bg-gradient-to-r from-primary to-accent text-white',
    'AI & Machine Learning': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'Web Development': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Data Pipelines': 'bg-blue-500/20 text-blue-300 border-blue-500/30'
  };

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-zoom-in');
            entry.target.classList.remove('opacity-0', 'scale-75');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  return (
    <div className="pt-16 min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="neural-network">
        {[...Array(20)].map((_, i) => (
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
      </div>
      
      <div className="data-particles">
        {[...Array(25)].map((_, i) => (
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
      
      <div className="quantum-field" />
      <div className="cyber-grid" />
      {/* Enhanced Header Section */}
      <section className="relative py-24 overflow-hidden perspective-container">
        <div className="energy-waves">
          <div className="energy-wave" />
        </div>
        <div className="matrix-rain">
          {[...Array(12)].map((_, i) => {
            const chars = ['<', '>', '{', '}', '(', ')', '[', ']', '=', '+', '-', '*'];
            return (
              <div 
                key={`code-${i}`}
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative ai-brain">
                <div className="w-20 h-20 rounded-full holographic animate-pulse-glow flex items-center justify-center perspective-card">
                  <Brain size={40} className="text-primary-foreground animate-float" />
                </div>
              </div>
            </div>
            
            <div className="relative mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text glow-text animate-slide-up">
                My Projects
              </h1>
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl opacity-70 animate-pulse" />
            </div>
            
            <div className="glass p-8 rounded-2xl hover-lift animate-fade-in" style={{animationDelay: '0.4s'}}>
              <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
                Innovative solutions in AI, data engineering, and web development. 
                Each project represents a journey through cutting-edge technology and creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Menu */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="glass p-4 rounded-2xl hover-lift">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Filter size={20} className="text-primary animate-pulse" />
                    <span>Filter Projects:</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {filterCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-3d ${
                          activeFilter === category
                            ? filterColors[category as keyof typeof filterColors] + ' neon-border shadow-lg scale-105'
                            : 'glass border border-primary/20 text-muted-foreground hover:text-foreground hover:border-primary/40'
                        }`}
                      >
                        {category}
                        {category !== 'All' && (
                          <span className="ml-2 text-xs opacity-70">
                            ({projects.filter(p => p.category === category).length})
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Grid */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div 
                    key={`${project.id}-${activeFilter}`}
                    ref={(el) => setCardRef(el, index)}
                    className="opacity-0 scale-75 transition-all duration-700 ease-out"
                    style={{transitionDelay: `${index * 100}ms`}}
                  >
                    <Card className="card-3d neon-border hover-3d group overflow-hidden h-full flex flex-col">
                      {/* Enhanced Project Visualization */}
                      <div className="relative overflow-hidden">
                        <div className="aspect-video flex items-center justify-center relative holographic">
                          {/* Animated Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
                            <div className="cyber-grid opacity-30" />
                            <div className="data-viz" />
                          </div>
                          
                          {/* 3D Project Icon */}
                          <div className="relative z-10 perspective-card group-hover:scale-110 transition-transform duration-500">
                            <div className="relative ai-brain">
                              <IconComponent size={60} className="text-primary/80 animate-float" />
                              <Monitor size={80} className="text-primary/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                            </div>
                          </div>
                          
                          {/* Floating Tech Icons */}
                          <div className="absolute inset-0">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <div 
                                key={tech}
                                className="absolute w-6 h-6 rounded-full glass flex items-center justify-center text-xs font-bold text-primary animate-float"
                                style={{
                                  left: `${20 + Math.random() * 60}%`,
                                  top: `${20 + Math.random() * 60}%`,
                                  animationDelay: `${i * 1.5}s`,
                                  animationDuration: `${3 + Math.random() * 2}s`
                                }}
                              >
                                {tech.slice(0, 2)}
                              </div>
                            ))}
                          </div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 right-4">
                            <Badge className={`${categoryColors[project.category as keyof typeof categoryColors]} transition-all duration-300`}>
                              {project.category}
                            </Badge>
                          </div>
                          
                          {/* Data Streams */}
                          <div className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
                            {[...Array(3)].map((_, i) => (
                              <div 
                                key={`stream-${i}`}
                                className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                                style={{
                                  left: `${10 + Math.random() * 80}%`,
                                  top: `${20 + Math.random() * 60}%`,
                                  width: `${30 + Math.random() * 40}%`,
                                  transform: `rotate(${Math.random() * 360}deg)`,
                                  animation: `data-stream 3s ease-in-out infinite`,
                                  animationDelay: `${Math.random() * 3}s`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Project Content */}
                      <div className="p-6 relative flex-1 flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <CardHeader className="p-0 mb-4 relative z-10">
                          <CardTitle className="text-xl font-bold gradient-text glow-text mb-2 leading-tight line-clamp-2">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="p-0 relative z-10 flex-1 flex flex-col">
                          <p className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-3 flex-1">
                            {project.description}
                          </p>

                          {/* Enhanced Key Highlights */}
                          <div className="mb-6">
                            <h4 className="font-bold mb-3 text-foreground text-sm flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {project.highlights.slice(0, 2).map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0 animate-sparkle" style={{animationDelay: `${idx * 0.5}s`}} />
                                  <span className="line-clamp-1">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Enhanced Technologies */}
                          <div className="mb-6">
                            <h4 className="font-bold mb-3 text-foreground text-sm flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, 4).map((tech, i) => (
                                <Badge 
                                  key={tech} 
                                  variant="outline" 
                                  className="neon-border hover-glow px-2 py-0.5 text-xs transition-all duration-300"
                                  style={{animationDelay: `${i * 0.1}s`}}
                                >
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 4 && (
                                <Badge variant="outline" className="px-2 py-0.5 text-xs opacity-60">
                                  +{project.technologies.length - 4}
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Enhanced Action Buttons */}
                          <div className="flex gap-3 mt-auto">
                            <Button variant="outline" size="sm" className="glass hover-3d group/btn flex-1">
                              <Github size={16} className="mr-2 group-hover/btn:animate-pulse" />
                              Code
                            </Button>
                            <Button size="sm" className="holographic hover-glow group/btn flex-1">
                              <ExternalLink size={16} className="mr-2 group-hover/btn:animate-pulse" />
                              Demo
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
            
            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="glass p-8 rounded-2xl max-w-md mx-auto">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full holographic animate-pulse-glow flex items-center justify-center">
                      <Filter size={24} className="text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-2">No Projects Found</h3>
                  <p className="text-muted-foreground">Try selecting a different filter category.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="energy-waves">
          <div className="energy-wave" style={{animationDuration: '10s'}} />
        </div>
        <div className="quantum-field" style={{opacity: 0.4}} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass p-12 rounded-3xl hover-lift relative overflow-hidden">
              <div className="absolute inset-0 neural-bg opacity-30" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="relative ai-brain">
                    <div className="w-16 h-16 rounded-full holographic animate-pulse-glow flex items-center justify-center">
                      <MessageCircle size={32} className="text-primary-foreground animate-float" />
                    </div>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold gradient-text glow-text mb-6">
                  Ready to Collaborate?
                </h2>
                
                <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  I'm always excited to work on innovative projects and explore new technologies. 
                  Let's create something extraordinary together!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="holographic hover-glow px-8 py-4 text-lg group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
                    <MessageCircle size={20} className="mr-3 relative z-10" />
                    <span className="relative z-10">Get In Touch</span>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="glass hover-3d px-8 py-4 text-lg border-primary/30 hover:border-primary">
                    <Github size={20} className="mr-3" />
                    View All Projects
                  </Button>
                </div>
              </div>
              
              {/* Floating collaboration icons */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => {
                  const icons = ['💡', '🚀', '⚡', '🔬', '🧠', '💻'];
                  return (
                    <div 
                      key={`collab-${i}`}
                      className="absolute text-2xl opacity-20 animate-float"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                      }}
                    >
                      {icons[i]}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}