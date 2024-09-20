import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Access from './Access';
import AboutFont from './AboutFont';
import Footer from './components/Footer';
import Header from './components/Header';

function useScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);  // ページ遷移ごとにトップにスクロール
  }, [pathname]);
}

function App() {
  useScrollToTop();  // ページ遷移時にトップへスクロール

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/access" element={<Access />} />
        <Route path="/aboutfont" element={<AboutFont />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function MainApp() {
  return (
    <Router>  {/* App全体をRouterでラップ */}
      <App />
    </Router>
  );
}
