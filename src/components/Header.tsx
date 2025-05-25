import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitch from './LanguageSwitch';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/img/logo.png" 
              alt="Logo" 
              className="h-12 w-auto"
            />
    <Logo />


          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {isHome && (
              <>
                <a href="#advantages" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  {t('nav.advantages')}
                </a>
                <a href="#team" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  {t('nav.team')}
                </a>
                <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  {t('nav.services')}
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  {t('nav.testimonials')}
                </a>
                <a href="#gallery" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  {t('nav.gallery')}
                </a>
              </>
            )}
            <Link to="/qvivarium" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {t('nav.qvivarium')}
            </Link>
            <LanguageSwitch />
            {isHome ? (
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                {t('nav.contact')}
              </a>
            ) : (
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                {t('nav.contact')}
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitch />
            <button className="text-gray-700" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {isHome && (
              <>
                <a
                  href="#advantages"
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.advantages')}
                </a>
                <a
                  href="#team"
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.team')}
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.services')}
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.testimonials')}
                </a>
                <a
                  href="#gallery"
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  onClick={toggleMenu}
                >
                  {t('nav.gallery')}
                </a>
              </>
            )}
            <Link
              to="/qvivarium"
              className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
              onClick={toggleMenu}
            >
              {t('nav.qvivarium')}
            </Link>
            {isHome ? (
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.contact')}
              </a>
            ) : (
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
                onClick={toggleMenu}
              >
                {t('nav.contact')}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;