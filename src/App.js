import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import BasicGrid from './components/BasicGrid';
import FullWidth from './components/FullWidth';
import Gallery from './components/Gallery';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    if (window.$) {
      window.$(window).trigger('resize');
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basic-grid" element={<BasicGrid />} />
        <Route path="/full-width" element={<FullWidth />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sidebar-left" element={<SidebarLeft />} />
        <Route path="/sidebar-right" element={<SidebarRight />} />
      </Routes>
      <Footer />
      {/* BACK TO TOP BUTTON */}
      <a id="backtotop" href="#top"><i className="fa fa-chevron-up"></i></a>
    </BrowserRouter>
  );
}

export default App;