import React from 'react';
import '../styles/Team.css';
import tubitakLogo from '../assets/tubitaklogo.jpg';
import universityLogo from '../assets/firatlogo.png';
import tgdLogo from '../assets/turged-logo.jpg';

const Team = () => {
  return (
    <div className="team-unicorn-container">
      <div className="team-rainbow-header">
        <h1 className="team-sparkle-title">Proje Ekibi</h1>
        <div className="team-magic-divider"></div>
        <p className="team-crystal-text">
          Disiplinlerarası ekibimiz, yenilikçi teknolojiler geliştirmek için 
          farklı uzmanlık alanlarını bir araya getiriyor.
        </p>
      </div>

      <div className="team-galaxy-grid">
        {/* 1. Üye */}
        <div className="team-comet-card team-rocket-member">
          <div className="team-astro-photo">
            <img 
              src={require('../assets/ibrahimhocalogo.jpg')} 
              alt="Prof. Dr. Ali Yılmaz"
              className="team-nasa-image"
            />
          </div>
          <h3 className="team-supernova-name">Prof. Dr. İbrahim TÜRKOĞLU</h3>
          <p className="team-starlight-title">Proje Yöneticisi</p>
          <p className="team-meteor-bio">
          Elektrik-Elektronik Mühendisliği alanında 15+ yıllık deneyime sahip olup, sensör sistemleri, lazer teknolojileri ve yapay zeka uygulamaları konusunda uzmandır.
          </p>
        </div>

        {/* 2. Üye */}
        <div className="team-comet-card team-saturn-member">
          <div className="team-astro-photo">
            {/* Fotoğraf eklenebilir */}
          </div>
          <h3 className="team-supernova-name">Dr. Ayşe Öztürk</h3>
          <p className="team-starlight-title">Yapay Zeka Uzmanı</p>
          <p className="team-meteor-bio">
            Derin Öğrenme | Sinyal İşleme | MIT Mezunu | 
            3 Patent Sahibi
          </p>
        </div>

        {/* 3. Üye */}
        <div className="team-comet-card team-nebula-member">
          <div className="team-astro-photo">
            {/* Fotoğraf eklenebilir */}
          </div>
          <h3 className="team-supernova-name">Mehmet Demir</h3>
          <p className="team-starlight-title">Lazer Sistemleri Uzmanı</p>
          <p className="team-meteor-bio">
            LIDAR Teknolojileri | 10+ yıl endüstri deneyimi | 
            Sistem Mimarisi
          </p>
        </div>
      </div>

      {/* İşbirlikçi Kurumlar */}
      <div className="team-milkyway-partners">
        <h3 className="team-blackhole-title">Proje Ortaklarımız</h3>
        <div className="team-partners-divider"></div>
        <div className="team-quasar-logos">
          <div className="team-partner-logo">
            <img 
              src={tubitakLogo} 
              alt="TÜBİTAK" 
              className="team-logo-image"
            />
          </div>
          <div className="team-partner-logo">
            <img 
              src={universityLogo} 
              alt="Fırat Üniversitesi" 
              className="team-logo-image"
            />
          </div>
          <div className="team-partner-logo">
            <img 
              src={tgdLogo} 
              alt="Türk Görme Engelliler Derneği" 
              className="team-logo-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;