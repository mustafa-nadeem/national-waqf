import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './MainLayout.css';

export default function MainLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__content" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
