import React, { useState, useEffect } from "react";
import logo from "../assets/proje_logo2.jpg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  const toggleProjectDropdown = () => {
    setIsProjectOpen(!isProjectOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('selectedLanguage', lng);
    setIsLangOpen(false);
  };

  return (
    <>
      <div className="top-bar">
        <div className="contact-info">
          <a href="tel:+905437623434" className="phone-link">
            <i className="fa-solid fa-phone"></i>
            <span className="phone-number">+90 543 762 34 34</span>
          </a>
        </div>
        <div className="divider"></div>

        <div className="contact-info">
          <a href="mailto:info@proje.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <div className="divider"></div>

        <div className="contact-info">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube" aria-hidden="true"></i>
          </a>
        </div>
        <div className="divider"></div>

        <div className="contact-info">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div className="divider"></div>

        <div className="language-dropdown-container">
          <div className="language" onClick={toggleLangDropdown}>
            <i className="fa fa-globe" aria-hidden="true"></i>
            <span className="language-text">{i18n.language.toUpperCase()}</span>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
            {isLangOpen && (
              <ul className="language-select">
                <li 
                  className={i18n.language === 'tr' ? 'active' : ''}
                  onClick={() => changeLanguage('tr')}
                >
                  TR
                </li>
                <li 
                  className={i18n.language === 'en' ? 'active' : ''}
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <header className="header">
      <div className="logo-container">
          <img src={logo} alt="Proje Logosu" className="logo" />
          <div className="logo-text">
            <span className="logo-main-text" style={{ color: '#555' }}>GÖRÜŞ ANALİZİ</span>
            <span className="logo-sub-text" style={{ color: '#777' }}>Akıllı Analiz Platformu</span>
          </div>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="menu-item">{t('home')}</Link>
            </li>
            
            <li 
              className="dropdown"
              onMouseEnter={() => setIsProjectOpen(true)}
              onMouseLeave={() => setIsProjectOpen(false)}
            >
              <div className="menu-item">{t('project')}</div>
              {isProjectOpen && (
                <div className="dropdown-menu">
                  <Link to="/about" className="dropdown-item">{t('about')}</Link>
                  <Link to="/team" className="dropdown-item">{t('team')}</Link>
                  <Link to="/calendar" className="dropdown-item">{t('calendar')}</Link>
                </div>
              )}
            </li>
            
            <li><Link to="/events" className="menu-item">{t('events')}</Link></li>
            <li><Link to="/publications" className="menu-item">{t('publications')}</Link></li>
            <li><Link to="/lab" className="menu-item">{t('lab')}</Link></li>
            <li><Link to="/contact" className="menu-item">{t('contact')}</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;