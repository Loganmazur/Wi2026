import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import BasicGrid from './components/BasicGrid';
import FullWidth from './components/FullWidth';
import Gallery from './components/Gallery';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import NamePopup from './components/NamePopup';
import CookieBanner from './components/CookieBanner';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [userName, setUserName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showCookie, setShowCookie] = useState(() => {
  return !localStorage.getItem('cookieAccepted');
});

function handleCookieAccept() {
  localStorage.setItem('cookieAccepted', 'true');
  setShowCookie(false);
}

  useEffect(() => {
    if (window.$) {
      window.$(window).trigger('resize');
    }
    setTimeout(() => {
      setShowPopup(true);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {showPopup && (
        <NamePopup onSubmit={(name) => {
          setUserName(name);
          setShowPopup(false);
        }} />
      )}
      <Navbar userName={userName} />
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
      <a id="backtotop" href="#top"><i className="fa fa-chevron-up"></i></a>
      {/* COOKIE CONSENT BANNER */}
      {showCookie && <CookieBanner onAccept={handleCookieAccept} />}
    </BrowserRouter>
  );
}

export default App;