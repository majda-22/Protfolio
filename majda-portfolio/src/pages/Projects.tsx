import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Brain, Car, Home, TrendingUp, Database, Monitor } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Real-Time IoT Data Streaming and Dashboard',
      description: 'Built a real-time IoT data pipeline with Apache Kafka using Python producer and Node.js consumer. Developed an Angular dashboard to visualize live sensor data and perform basic analytics. Deployed Kafka with Docker for scalable, fault-tolerant streaming architecture.',
      image: '/api/placeholder/400/300',
      technologies: ['Apache Kafka', 'Docker', 'Python', 'Node.js', 'WebSocket', 'Angular'],
      category: 'Data Engineering',
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
      category: 'Artificial Intelligence',
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
      category: 'Machine Learning',
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
    'Data Engineering': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'Artificial Intelligence': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'Web Development': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Machine Learning': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse-glow flex items-center justify-center">
                <Brain size={32} className="text-primary-foreground animate-float" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text animate-gradient mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in AI, data engineering, and web development. 
              Each project represents a unique challenge and innovative solution.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:gap-12">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Card 
                    key={project.id} 
                    className={`glass hover-lift group overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="md:flex">
                      {/* Project Image Placeholder */}
                      <div className="md:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
                        <div className="aspect-video md:aspect-square flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-gradient"></div>
                          <div className="relative z-10 flex items-center justify-center">
                            <IconComponent size={80} className="text-primary/60 animate-float" />
                            <Monitor size={120} className="text-primary/20 absolute animate-pulse" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="md:w-1/2 p-6 md:p-8">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-2xl md:text-3xl font-bold gradient-text mb-3">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Key Highlights */}
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3 text-foreground">Key Highlights:</h4>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="hover-lift">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <Button variant="outline" size="sm" className="glass hover-glow">
                              <Github size={16} className="mr-2" />
                              View Code
                            </Button>
                            <Button size="sm" className="hover-glow">
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always excited to work on new challenges and innovative projects. 
              Let's build something amazing together!
            </p>
            <Button size="lg" className="hover-glow">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}