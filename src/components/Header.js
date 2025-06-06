import React, { useState, useEffect } from "react";
import logo from "../assets/proje_logo2.jpg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleProjectDropdown = () => {
    setIsProjectOpen(!isProjectOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Üst Bilgi Çubuğu - Sadece masaüstünde gösterilecek */}
      <div className="top-bar">
        <div className="top-bar-right">
          <div className="contact-info">
            <a href="tel:+905437623434" className="phone-link">
              <i className="fa-solid fa-phone"></i>
              <span className="phone-number">+90 543 762 34 34</span>
            </a>
          </div>
          <div className="divider"></div>

          <div className="contact-info">
            <a href="mailto:info@proje.com">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
          
          <div className="divider"></div>
          
          <div className="social-media">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <div className="divider"></div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="header-container">
          {/* Logo - Sol Tarafta */}
          <div className="logo-container">
            <img src={logo} alt="Proje Logosu" className="logo" />
            <div className="logo-text">
              <span className="logo-main-text">GÖRÜŞ ANALİZİ</span>
              <span className="logo-sub-text">Akıllı Analiz Platformu</span>
            </div>
          </div>

          {/* Mobil Menü Toggle */}
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>

          {/* Navigasyon - Sağ Tarafta */}
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/" className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('home')}</Link>
              </li>
              
              <li 
                className="dropdown"
                onMouseEnter={() => setIsProjectOpen(true)}
                onMouseLeave={() => setIsProjectOpen(false)}
                onClick={() => setIsProjectOpen(!isProjectOpen)}
              >
                <div className="menu-item">
                  {t('project')} 
                  <i className="fa fa-caret-down dropdown-icon"></i>
                </div>
                {isProjectOpen && (
                  <div className="dropdown-menu">
                    <Link to="/about" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>{t('about')}</Link>
                    <Link to="/team" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>{t('team')}</Link>
                    <Link to="/calendar" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>{t('calendar')}</Link>
                    <Link to="/project-results" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>{t('Proje Sonuçları ve Etkileri')}</Link>
                  </div>
                )}
              </li>
              
              <li><Link to="/events" className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('events')}</Link></li>
              <li><Link to="/publications" className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('publications')}</Link></li>
              <li><Link to="/lab" className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('lab')}</Link></li>
              <li><Link to="/contact" className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('contact')}</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;