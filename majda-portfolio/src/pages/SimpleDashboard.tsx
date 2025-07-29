import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  Calendar, 
  Globe, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  BarChart3, 
  LogOut,
  Shield
} from 'lucide-react';

// Simple password-based auth
const ADMIN_PASSWORD = 'majda2024admin';

interface SimpleProject {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  highlights: string[];
}

interface AnalyticsData {
  totalViews: number;
  dailyViews: Record<string, number>;
  pageViews: Record<string, number>;
}

export default function SimpleDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [projects, setProjects] = useState<SimpleProject[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalViews: 0,
    dailyViews: {},
    pageViews: {}
  });
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProject, setNewProject] = useState<Partial<SimpleProject>>({
    title: '',
    description: '',
    category: 'AI & Machine Learning',
    technologies: [],
    highlights: []
  });

  // Check authentication on load
  useEffect(() => {
    const authStatus = localStorage.getItem('majda_admin_auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }

    // Load projects
    const storedProjects = localStorage.getItem('majda_portfolio_projects_simple');
    if (storedProjects) {
      try {
        setProjects(JSON.parse(storedProjects));
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    }

    // Load analytics
    const storedAnalytics = localStorage.getItem('majda_portfolio_analytics');
    if (storedAnalytics) {
      try {
        setAnalytics(JSON.parse(storedAnalytics));
      } catch (error) {
        console.error('Error loading analytics:', error);
      }
    }

    // Track page view
    trackPageView('/dashboard');
  }, []);

  const trackPageView = (page: string) => {
    const today = new Date().toISOString().split('T')[0];
    const currentAnalytics = JSON.parse(localStorage.getItem('majda_portfolio_analytics') || JSON.stringify({
      totalViews: 0,
      dailyViews: {},
      pageViews: {}
    }));

    const updatedAnalytics = {
      ...currentAnalytics,
      totalViews: currentAnalytics.totalViews + 1,
      dailyViews: {
        ...currentAnalytics.dailyViews,
        [today]: (currentAnalytics.dailyViews[today] || 0) + 1
      },
      pageViews: {
        ...currentAnalytics.pageViews,
        [page]: (currentAnalytics.pageViews[page] || 0) + 1
      }
    };

    localStorage.setItem('majda_portfolio_analytics', JSON.stringify(updatedAnalytics));
    setAnalytics(updatedAnalytics);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('majda_admin_auth', 'authenticated');
      setLoginError(false);
    } else {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 3000);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('majda_admin_auth');
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.description) return;

    const project: SimpleProject = {
      id: Date.now(),
      title: newProject.title,
      description: newProject.description,
      category: newProject.category || 'AI & Machine Learning',
      technologies: newProject.technologies || [],
      highlights: newProject.highlights || []
    };

    const updatedProjects = [...projects, project];
    setProjects(updatedProjects);
    localStorage.setItem('majda_portfolio_projects_simple', JSON.stringify(updatedProjects));
    
    setNewProject({
      title: '',
      description: '',
      category: 'AI & Machine Learning',
      technologies: [],
      highlights: []
    });
    setIsAddingProject(false);
  };

  const handleDeleteProject = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(p => p.id !== id);
      setProjects(updatedProjects);
      localStorage.setItem('majda_portfolio_projects_simple', JSON.stringify(updatedProjects));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
          {[...Array(15)].map((_, i) => (
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
        
        <div className="glass p-8 rounded-3xl w-full max-w-md mx-4 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative ai-brain">
              <div className="w-16 h-16 rounded-full holographic animate-pulse-glow flex items-center justify-center">
                <Shield size={32} className="text-primary-foreground animate-float" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold gradient-text glow-text text-center mb-6">
            Admin Access
          </h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
                required
              />
              {loginError && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                  <X size={16} />
                  Invalid password. Please try again.
                </p>
              )}
            </div>
            
            <Button 
              type="submit" 
              className="w-full holographic hover-glow py-3 text-lg"
            >
              <Shield size={20} className="mr-2" />
              Access Dashboard
            </Button>
          </form>
          
          <p className="text-muted-foreground text-center text-sm mt-6">
            Authorized access only
          </p>
        </div>
      </div>
    );
  }

  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const todayViews = analytics.dailyViews[today] || 0;
  const yesterdayViews = analytics.dailyViews[yesterday] || 0;

  return (
    <div className="min-h-screen relative overflow-hidden pt-16">
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
      </div>
      
      <div className="data-particles">
        {[...Array(10)].map((_, i) => (
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
      
      <div className="quantum-field opacity-30" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold gradient-text glow-text mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your portfolio and view analytics</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="glass hover-3d">
            <LogOut size={20} className="mr-2" />
            Logout
          </Button>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-3d neon-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-primary animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold gradient-text">{analytics.totalViews}</div>
              <p className="text-xs text-muted-foreground">Since launch</p>
            </CardContent>
          </Card>

          <Card className="card-3d neon-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Views</CardTitle>
              <Calendar className="h-4 w-4 text-primary animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold gradient-text">{todayViews}</div>
              <p className="text-xs text-muted-foreground">
                {todayViews > yesterdayViews ? '+' : ''}{todayViews - yesterdayViews} from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="card-3d neon-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold gradient-text">{projects.length}</div>
              <p className="text-xs text-muted-foreground">Active projects</p>
            </CardContent>
          </Card>

          <Card className="card-3d neon-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Most Visited</CardTitle>
              <Globe className="h-4 w-4 text-primary animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold gradient-text">
                {Object.entries(analytics.pageViews).length > 0 
                  ? Object.entries(analytics.pageViews).sort(([,a], [,b]) => b - a)[0][0]
                  : 'N/A'
                }
              </div>
              <p className="text-xs text-muted-foreground">
                {Object.entries(analytics.pageViews).length > 0 
                  ? Object.entries(analytics.pageViews).sort(([,a], [,b]) => b - a)[0][1] + ' views'
                  : 'No data'
                }
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Management */}
        <Card className="card-3d neon-border">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="gradient-text text-2xl">Project Management</CardTitle>
              <Button 
                onClick={() => setIsAddingProject(true)}
                className="holographic hover-glow"
              >
                <Plus size={20} className="mr-2" />
                Add Project
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Add Project Form */}
            {isAddingProject && (
              <div className="glass p-6 rounded-xl mb-6">
                <h3 className="font-bold mb-4 gradient-text">Add New Project</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Project Title"
                    value={newProject.title || ''}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="glass border-primary/30"
                  />
                  <select
                    value={newProject.category || 'AI & Machine Learning'}
                    onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                    className="glass border border-primary/30 rounded-md px-3 py-2 bg-background text-foreground"
                  >
                    <option>AI & Machine Learning</option>
                    <option>Web Development</option>
                    <option>Data Pipelines</option>
                  </select>
                  <div className="md:col-span-2">
                    <Textarea
                      placeholder="Project Description"
                      value={newProject.description || ''}
                      onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                      className="glass border-primary/30"
                      rows={3}
                    />
                  </div>
                  <Input
                    placeholder="Technologies (comma separated)"
                    value={newProject.technologies?.join(', ') || ''}
                    onChange={(e) => setNewProject({...newProject, technologies: e.target.value.split(', ').filter(t => t.trim())})}
                    className="glass border-primary/30"
                  />
                  <Input
                    placeholder="Highlights (comma separated)"
                    value={newProject.highlights?.join(', ') || ''}
                    onChange={(e) => setNewProject({...newProject, highlights: e.target.value.split(', ').filter(h => h.trim())})}
                    className="glass border-primary/30"
                  />
                </div>
                <div className="flex gap-4 mt-4">
                  <Button onClick={handleAddProject} className="holographic hover-glow">
                    <Save size={16} className="mr-2" />
                    Save Project
                  </Button>
                  <Button 
                    onClick={() => setIsAddingProject(false)} 
                    variant="outline" 
                    className="glass"
                  >
                    <X size={16} className="mr-2" />
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {/* Projects List */}
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="glass p-4 rounded-xl hover-lift">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-bold gradient-text mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex gap-2 mb-2">
                        <Badge className="neon-border bg-primary/10 text-primary">
                          {project.category}
                        </Badge>
                        <Badge variant="outline">
                          {project.technologies.length} technologies
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button 
                        onClick={() => handleDeleteProject(project.id)}
                        size="sm"
                        variant="outline"
                        className="glass hover:bg-red-500/20"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              {projects.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No custom projects yet. Add your first project!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}