import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAnalytics } from '@/contexts/AnalyticsContext';
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
  Users,
  TrendingUp,
  LogOut,
  Shield
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  icon: string;
  highlights: string[];
}

interface LoginFormProps {
  onLogin: (password: string) => void;
  loginError: boolean;
}

function LoginForm({ onLogin, loginError }: LoginFormProps) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

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
        
        <form onSubmit={handleSubmit} className="space-y-6">
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

export default function Dashboard() {
  const { isAuthenticated, login, logout, loading } = useAuth();
  const { analytics } = useAnalytics();
  const [loginError, setLoginError] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    description: '',
    category: 'AI & Machine Learning',
    technologies: [],
    highlights: [],
    image: '/api/placeholder/400/300',
    icon: 'Brain'
  });

  // Load projects from localStorage
  useEffect(() => {
    const storedProjects = localStorage.getItem('majda_portfolio_projects');
    if (storedProjects) {
      try {
        setProjects(JSON.parse(storedProjects));
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    }
  }, []);

  const handleLogin = (password: string) => {
    const success = login(password);
    if (!success) {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 3000);
    }
  };

  const saveProjects = (updatedProjects: Project[]) => {
    localStorage.setItem('majda_portfolio_projects', JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.description) return;

    const project: Project = {
      id: Date.now(),
      title: newProject.title,
      description: newProject.description,
      category: newProject.category || 'AI & Machine Learning',
      technologies: newProject.technologies || [],
      highlights: newProject.highlights || [],
      image: newProject.image || '/api/placeholder/400/300',
      icon: newProject.icon || 'Brain'
    };

    saveProjects([...projects, project]);
    setNewProject({
      title: '',
      description: '',
      category: 'AI & Machine Learning',
      technologies: [],
      highlights: [],
      image: '/api/placeholder/400/300',
      icon: 'Brain'
    });
    setIsAddingProject(false);
  };

  const handleEditProject = (project: Project) => {
    const updatedProjects = projects.map(p => p.id === project.id ? project : p);
    saveProjects(updatedProjects);
    setEditingProject(null);
  };

  const handleDeleteProject = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      saveProjects(projects.filter(p => p.id !== id));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} loginError={loginError} />;
  }

  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const todayViews = analytics.dailyViews[today] || 0;
  const yesterdayViews = analytics.dailyViews[yesterday] || 0;

  return (
    <div className="min-h-screen relative overflow-hidden">
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
          <Button onClick={logout} variant="outline" className="glass hover-3d">
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
              <p className="text-xs text-muted-foreground">
                Since launch
              </p>
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
              <p className="text-xs text-muted-foreground">
                Active projects
              </p>
            </CardContent>
          </Card>

          <Card className="card-3d neon-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Most Visited Page</CardTitle>
              <Globe className="h-4 w-4 text-primary animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold gradient-text">
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
        <Card className="card-3d neon-border mb-8">
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
                  {editingProject?.id === project.id ? (
                    <div className="space-y-4">
                      <Input
                        value={editingProject.title}
                        onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                        className="glass border-primary/30"
                      />
                      <Textarea
                        value={editingProject.description}
                        onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                        className="glass border-primary/30"
                        rows={2}
                      />
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleEditProject(editingProject)}
                          size="sm"
                          className="holographic"
                        >
                          <Save size={16} className="mr-1" />
                          Save
                        </Button>
                        <Button 
                          onClick={() => setEditingProject(null)}
                          size="sm"
                          variant="outline"
                          className="glass"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
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
                          onClick={() => setEditingProject(project)}
                          size="sm"
                          variant="outline"
                          className="glass"
                        >
                          <Edit size={16} />
                        </Button>
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
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}