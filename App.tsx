
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import About from './pages/About';
import Contact from './pages/Contact';
import CarDetails from './pages/CarDetails';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* S7I7: min-h-screen w-full overflow-x-hidden (Step 2) */}
      <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col selection:bg-primary selection:text-white bg-transparent">
        <Navbar />
        <main className="flex-grow w-full relative touch-pan-y">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/laflotte" element={<Fleet />} />
              <Route path="/histoire" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/car/:id" element={<CarDetails />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
