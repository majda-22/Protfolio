import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain, Code, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Simple analytics tracking
  useEffect(() => {
    // Track page views when location changes
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
        [location.pathname]: (currentAnalytics.pageViews[location.pathname] || 0) + 1
      }
    };

    localStorage.setItem('majda_portfolio_analytics', JSON.stringify(updatedAnalytics));
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/', icon: Brain },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (clickTimeout) {
      clearTimeout(clickTimeout);
    }
    
    const newClickCount = logoClicks + 1;
    setLogoClicks(newClickCount);
    
    if (newClickCount >= 5) {
      // Navigate to dashboard after 5 clicks
      navigate('/dashboard');
      setLogoClicks(0);
    } else {
      // Reset clicks after 2 seconds if less than 5
      const timeout = setTimeout(() => {
        setLogoClicks(0);
      }, 2000);
      setClickTimeout(timeout);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div onClick={handleLogoClick} className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg holographic animate-pulse-glow flex items-center justify-center hover-3d transition-all duration-300">
                <div className="text-primary-foreground font-bold text-lg">M</div>
                {logoClicks > 0 && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                    {logoClicks}
                  </div>
                )}
              </div>
            </div>
            <span className="text-xl font-bold gradient-text glow-text group-hover:scale-105 transition-transform duration-300">Majda</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 hover-lift ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    <Icon size={16} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover-glow"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={16} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}