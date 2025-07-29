import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SimpleDashboard from './pages/SimpleDashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background neural-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<SimpleDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
