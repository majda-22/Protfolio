import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AnalyticsData {
  totalViews: number;
  dailyViews: Record<string, number>;
  pageViews: Record<string, number>;
  lastUpdated: string;
}

interface AnalyticsContextType {
  analytics: AnalyticsData;
  trackPageView: (page: string) => void;
  getAnalytics: () => AnalyticsData;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

const defaultAnalytics: AnalyticsData = {
  totalViews: 0,
  dailyViews: {},
  pageViews: {},
  lastUpdated: new Date().toISOString()
};

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [analytics, setAnalytics] = useState<AnalyticsData>(defaultAnalytics);

  useEffect(() => {
    // Load analytics from localStorage
    const storedAnalytics = localStorage.getItem('majda_portfolio_analytics');
    if (storedAnalytics) {
      try {
        const parsed = JSON.parse(storedAnalytics);
        setAnalytics(parsed);
      } catch (error) {
        console.error('Error parsing analytics data:', error);
      }
    }

    // Track initial page load
    trackPageView(window.location.pathname);
  }, []);

  const trackPageView = (page: string) => {
    const today = new Date().toISOString().split('T')[0];
    
    setAnalytics(prev => {
      const updated = {
        ...prev,
        totalViews: prev.totalViews + 1,
        dailyViews: {
          ...prev.dailyViews,
          [today]: (prev.dailyViews[today] || 0) + 1
        },
        pageViews: {
          ...prev.pageViews,
          [page]: (prev.pageViews[page] || 0) + 1
        },
        lastUpdated: new Date().toISOString()
      };

      // Save to localStorage
      localStorage.setItem('majda_portfolio_analytics', JSON.stringify(updated));
      return updated;
    });
  };

  const getAnalytics = () => analytics;

  return (
    <AnalyticsContext.Provider value={{ analytics, trackPageView, getAnalytics }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}