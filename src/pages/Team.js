import React from 'react';
import '../styles/Team.css';
import tubitakLogo from '../assets/tubitaklogo.jpg';
import universityLogo from '../assets/firatlogo.png';
import tgdLogo from '../assets/turged-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

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
        {/* 1. Üye - Geliştirilmiş */}
        <div className="team-comet-card team-rocket-member">
          <div className="team-astro-photo">
            <img 
              src={require('../assets/ibrahimhocalogo.jpg')} 
              alt="Prof. Dr. İbrahim TÜRKOĞLU"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:ibrahim.turkoglu@firat.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="#" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" title="Akademik Profil">
                <FontAwesomeIcon icon={faGoogleScholar} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Prof. Dr. İbrahim TÜRKOĞLU</h3>
          <p className="team-starlight-title">Proje Yöneticisi</p>
          <div className="team-expertise-tags">
            <span>Sensör Sistemleri</span>
            <span>Lazer Teknolojileri</span>
            <span>Yapay Zeka</span>
          </div>
          <p className="team-meteor-bio">
            Elektrik-Elektronik Mühendisliği alanında 15+ yıllık deneyime sahip olup, 
            50+ bilimsel yayın ve 5 patent sahibidir. Fırat Üniversitesi'nde öğretim 
            üyesi olarak görev yapmaktadır.
          </p>
          <div className="team-publications">
            <span>25+ Makale</span>
            <span>3 Patent</span>
            <span>2 Ödül</span>
          </div>
        </div>

        {/* 2. Üye - Geliştirilmiş */}
        <div className="team-comet-card team-saturn-member">
          <div className="team-astro-photo">
            <div className="team-placeholder-photo">AY</div>
          </div>
          <h3 className="team-supernova-name">Dr. Ayşe Öztürk</h3>
          <p className="team-starlight-title">Yapay Zeka Uzmanı</p>
          <div className="team-expertise-tags">
            <span>Derin Öğrenme</span>
            <span>Sinyal İşleme</span>
            <span>Nöromorfik Hesaplama</span>
          </div>
          <p className="team-meteor-bio">
            MIT'de doktorasını tamamladıktan sonra 3 yıl Google AI'da çalıştı. 
            Projemizde nesne tanıma ve ses işleme algoritmalarının geliştirilmesinden sorumlu.
          </p>
          <div className="team-publications">
            <span>25+ Makale</span>
            <span>3 Patent</span>
            <span>2 Ödül</span>
          </div>
        </div>

        {/* 3. Üye - Geliştirilmiş */}
        <div className="team-comet-card team-nebula-member">
          <div className="team-astro-photo">
            <div className="team-placeholder-photo">MD</div>
          </div>
          <h3 className="team-supernova-name">Mehmet Demir</h3>
          <p className="team-starlight-title">Lazer Sistemleri Uzmanı</p>
          <div className="team-expertise-tags">
            <span>LIDAR Teknolojileri</span>
            <span>Sistem Mimarisi</span>
            <span>Optik Mühendisliği</span>
          </div>
          <p className="team-meteor-bio">
            10+ yıllık endüstri deneyimiyle lazer tabanlı ölçüm sistemleri konusunda 
            uzmanlaşmıştır. Projemizin donanım altyapısının geliştirilmesinden sorumlu.
          </p>
          <div className="team-experience">
            <span>ASELSAN (5 yıl)</span>
            <span>ROKETSAN (3 yıl)</span>
          </div>
        </div>
      </div>

      {/* Ekip İstatistikleri */}
      <div className="team-stats-section">
        <h3 className="team-blackhole-title">Ekip Özetimiz</h3>
        <div className="team-partners-divider"></div>
        <div className="team-stats-grid">
          <div className="team-stat-item">
            <div className="team-stat-number">8</div>
            <div className="team-stat-label">Uzman</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-number">75+</div>
            <div className="team-stat-label">Yayın</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-number">12</div>
            <div className="team-stat-label">Patent</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-number">100+</div>
            <div className="team-stat-label">Yıllık Deneyim</div>
          </div>
        </div>
      </div>

      {/* İşbirlikçi Kurumlar - Geliştirilmiş */}
      <div className="team-milkyway-partners">
        <h3 className="team-blackhole-title">Proje Ortaklarımız ve Destekçilerimiz</h3>
        <div className="team-partners-divider"></div>
        <p className="partner-description">
          Yenilikçi projemiz, aşağıdaki prestijli kurum ve kuruluşlar tarafından desteklenmektedir:
        </p>
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