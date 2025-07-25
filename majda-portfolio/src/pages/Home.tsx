import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Brain, Database, Cloud, Code2, Sparkles, Star } from 'lucide-react';
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
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 neural-bg opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image Placeholder */}
            <div className="relative mb-8 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary via-accent to-secondary animate-pulse-glow flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-gradient"></div>
                <Brain size={48} className="text-primary-foreground animate-float" />
                <div className="absolute top-2 right-2 w-4 h-4 bg-accent rounded-full animate-sparkle"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text animate-gradient">
                Majda Ait Lamouden
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Big Data & Cloud Computing Engineering Student
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Badge variant="secondary" className="flex items-center gap-1 hover-lift">
                  <Database size={14} />
                  Data Engineering
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1 hover-lift">
                  <Brain size={14} />
                  Artificial Intelligence
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1 hover-lift">
                  <Cloud size={14} />
                  Cloud Computing
                </Badge>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate Big Data and Cloud Computing student with strong mathematical and computer science skills. 
                Experienced in real-time data streaming, web development, and AI/ML technologies. Quick learner with 
                a focus on building scalable, modern solutions that push the boundaries of technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/projects">
                <Button size="lg" className="group hover-glow">
                  <span>View My Projects</span>
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="glass hover-lift">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Technical Expertise
              </h2>
              <p className="text-muted-foreground text-lg">
                Technologies and tools I work with
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="glass hover-lift group" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Code2 size={20} className="text-primary group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold text-sm">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Education & Achievements
              </h2>
              <p className="text-muted-foreground text-lg">
                My academic journey and accomplishments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={achievement.title} className="glass hover-lift" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Star size={16} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <Badge variant="outline">{achievement.year}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{achievement.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-muted/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
              Languages
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['English', 'French', 'Arabic'].map((language, index) => (
                <Badge key={language} variant="secondary" className="text-lg py-2 px-4 hover-lift" style={{animationDelay: `${index * 0.3}s`}}>
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}