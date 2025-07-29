import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Database, Car, Home, TrendingUp, Brain } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  icon: LucideIcon;
  highlights: string[];
}

interface ProjectsContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: number, project: Partial<Project>) => void;
  deleteProject: (id: number) => void;
  getProjectsByCategory: (category: string) => Project[];
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

// Default projects
const defaultProjects: Project[] = [
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

// Icon mapping for serialization
const iconMap: Record<string, LucideIcon> = {
  Database,
  Car,
  Home,
  TrendingUp,
  Brain
};

interface ProjectsProviderProps {
  children: ReactNode;
}

export function ProjectsProvider({ children }: ProjectsProviderProps) {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);

  useEffect(() => {
    // Load projects from localStorage
    const storedProjects = localStorage.getItem('majda_portfolio_projects');
    if (storedProjects) {
      try {
        const parsed = JSON.parse(storedProjects);
        // Restore icon references
        const projectsWithIcons = parsed.map((project: any) => ({
          ...project,
          icon: iconMap[project.iconName] || Brain
        }));
        setProjects([...defaultProjects, ...projectsWithIcons]);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    }
  }, []);

  const saveProjects = (updatedProjects: Project[]) => {
    // Separate default projects from custom ones
    const customProjects = updatedProjects.filter(p => p.id > 1000);
    
    // Serialize custom projects (replace icon with iconName)
    const serializedProjects = customProjects.map(project => ({
      ...project,
      iconName: Object.keys(iconMap).find(key => iconMap[key] === project.icon) || 'Brain'
    }));
    
    localStorage.setItem('majda_portfolio_projects', JSON.stringify(serializedProjects));
    setProjects(updatedProjects);
  };

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now(), // Use timestamp as ID for custom projects
    };
    const updatedProjects = [...projects, newProject];
    saveProjects(updatedProjects);
  };

  const updateProject = (id: number, projectData: Partial<Project>) => {
    const updatedProjects = projects.map(project =>
      project.id === id ? { ...project, ...projectData } : project
    );
    saveProjects(updatedProjects);
  };

  const deleteProject = (id: number) => {
    // Only allow deletion of custom projects (id > 1000)
    if (id > 1000) {
      const updatedProjects = projects.filter(project => project.id !== id);
      saveProjects(updatedProjects);
    }
  };

  const getProjectsByCategory = (category: string) => {
    if (category === 'All') return projects;
    return projects.filter(project => project.category === category);
  };

  return (
    <ProjectsContext.Provider value={{
      projects,
      addProject,
      updateProject,
      deleteProject,
      getProjectsByCategory
    }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
}