import React from 'react';
import '../styles/Team.css';
import tubitakLogo from '../assets/tubitaklogo.jpg';
import universityLogo from '../assets/firatlogo.png';
import tgdLogo from '../assets/turged-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogleScholar, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
  return (
    <div className="team-unicorn-container">
      <div className="team-rainbow-header">
        <h1 className="team-sparkle-title">Proje Ekibi</h1>
        <div className="team-magic-divider"></div>
        <p className="team-crystal-text">
          Ekibimiz, yenilikçi teknolojiler geliştirmek için 
          farklı uzmanlık alanlarını bir araya getiriyor.
        </p>
      </div>

      <div className="team-galaxy-grid">
        {/* 1. YÜRÜTÜCÜ */}
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
              <a href="https://www.linkedin.com/in/ibrahimturkoglu/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://scholar.google.com/citations?user=ABC123" target="_blank" rel="noopener noreferrer" title="Google Scholar">
                <FontAwesomeIcon icon={faGoogleScholar} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Prof. Dr. İbrahim TÜRKOĞLU</h3>
          <p className="team-starlight-title">Proje Yürütücüsü</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Fırat Üniversitesi, Yazılım Mühendisliği Bölüm Başkanı
          </p>
          <div className="team-expertise-tags">
            <span>Yapay Zeka</span>
            <span>Bilgisayarlı Görü</span>
            <span>Patent Uzmanı</span>
          </div>
          <p className="team-meteor-bio">
            20+ yıllık akademik deneyim. 5 uluslararası patent, 100+ SCI indeksli yayın. 
            TÜBİTAK ve Avrupa Birliği proje deneyimi.
          </p>
          <div className="team-publications">
            <span>7 TÜBİTAK Projesi</span>
            <span>h-index: 28</span>
          </div>
        </div>

        {/* 2. ARAŞTIRMACI */}
        <div className="team-comet-card team-saturn-member">
          <div className="team-astro-photo">
            <img 
              src={require('../assets/nevzatolgun.jpg')} 
              alt="Dr. Öğr. Üyesi Nevzat OLGUN"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:nolgun@aku.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://www.researchgate.net/profile/Nevzat-Olgun" target="_blank" rel="noopener noreferrer" title="ResearchGate">
                <FontAwesomeIcon icon={faResearchgate} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Dr. Öğr. Üyesi Nevzat OLGUN</h3>
          <p className="team-starlight-title">Araştırmacı</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Afyon Kocatepe Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>Makine Öğrenmesi</span>
            <span>Python</span>
            <span>Veri Analizi</span>
          </div>
          <p className="team-meteor-bio">
            Doğal dil işleme ve duygu analizi uzmanı. 3 TÜBİTAK projesinde görev aldı. 
            15+ uluslararası yayın.
          </p>
        </div>

        {/* 3. ARAŞTIRMACI */}
        <div className="team-comet-card team-nebula-member">
          <div className="team-astro-photo">
            <img 
              src={require('../assets/mucahitcaliskan.jpg')} 
              alt="Dr. Öğr. Üyesi Mücahit ÇALIŞAN"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:mcalisan@bingol.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://scholar.google.com/citations?user=DEF456" target="_blank" rel="noopener noreferrer" title="Google Scholar">
                <FontAwesomeIcon icon={faGoogleScholar} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Dr. Öğr. Üyesi Mücahit ÇALIŞAN</h3>
          <p className="team-starlight-title">Araştırmacı</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Bingöl Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>Derin Öğrenme</span>
            <span>TensorFlow</span>
            <span>Medikal Görüntüleme</span>
          </div>
          <p className="team-meteor-bio">
            Özellikle retina tarama sistemleri üzerine uzmanlaşmıştır. 
            2 patent ve 10+ SCI yayını bulunmaktadır.
          </p>
        </div>

        {/* 4. ARAŞTIRMACI */}
        <div className="team-comet-card team-mars-member">
          <div className="team-astro-photo">
            <img 
              src={require('../assets/ferdidogan.jpg')} 
              alt="Dr. Öğr. Üyesi Ferdi DOĞAN"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:fdogan@adiyaman.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://www.linkedin.com/in/ferdidogan/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Dr. Öğr. Üyesi Ferdi DOĞAN</h3>
          <p className="team-starlight-title">Araştırmacı</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Adıyaman Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>Nesne Tanıma</span>
            <span>OpenCV</span>
            <span>C++</span>
          </div>
          <p className="team-meteor-bio">
            Gerçek zamanlı görüntü işleme sistemleri konusunda 8 yıllık deneyim. 
            Endüstriyel uygulamalar üzerine çalışmaları bulunmaktadır.
          </p>
        </div>

        {/* 5. ARAŞTIRMACI */}
        <div className="team-comet-card team-jupiter-member">
          <div className="team-astro-photo">
            <img 
              src={require('../assets/gurkangurgoze.jpg')} 
              alt="Dr. Gürkan GÜRGÖZE"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:ggurgoze@meb.gov.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Dr. Gürkan GÜRGÖZE</h3>
          <p className="team-starlight-title">Araştırmacı</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Elazığ Milli Eğitim Müdürlüğü
          </p>
          <div className="team-expertise-tags">
            <span>Eğitim Teknolojileri</span>
            <span>Kullanıcı Deneyimi</span>
            <span>Erişilebilirlik</span>
          </div>
          <p className="team-meteor-bio">
            Görme engellilerin teknoloji kullanımı üzerine 5 yıllık saha araştırması deneyimi. 
            Projenin kullanıcı testlerinden sorumlu.
          </p>
        </div>

        {/* 6. ARAŞTIRMACI */}
        <div className="team-comet-card team-venus-member">
          <div className="team-astro-photo">
            <img 
              src={require('../assets/mehmetnergiz.png')} 
              alt="Doç. Dr. Mehmet NERGİZ"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:mnergiz@dicle.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://scholar.google.com/citations?user=GHI789" target="_blank" rel="noopener noreferrer" title="Google Scholar">
                <FontAwesomeIcon icon={faGoogleScholar} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Doç. Dr. Mehmet NERGİZ</h3>
          <p className="team-starlight-title">Araştırmacı</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Dicle Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>Veri Güvenliği</span>
            <span>Blok Zinciri</span>
            <span>Linux</span>
          </div>
          <p className="team-meteor-bio">
            Sistem altyapısı ve veri güvenliği konusunda uzman. 3 uluslararası projede 
            görev almıştır.
          </p>
        </div>

        {/* 7. BURSİYER - DOKTORA */}
        <div className="team-comet-card team-bursiyer-member">
          <div className="team-astro-photo">
            <img 
              src={require('../assets/semracelebi.jpg')} 
              alt="Arş. Gör. Semra ÇELEBİ"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:semra.celebi@firat.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Arş. Gör. Semra ÇELEBİ</h3>
          <p className="team-starlight-title">Doktora Bursiyeri</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Fırat Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>Python</span>
            <span>Veri Seti Oluşturma</span>
            <span>Anlamsal Bölütleme</span>
          </div>
          <p className="team-meteor-bio">
            Projenin veri toplama ve etiketleme süreçlerinden sorumlu. 
            2 ulusal konferans bildirisi bulunmaktadır.
          </p>
        </div>

        {/* 8. BURSİYER - DOKTORA */}
        <div className="team-comet-card team-bursiyer-member">
          <div className="team-astro-photo">
            <img 
              src={require('../assets/alperendagdogen.jpg')} 
              alt="Arş. Gör. H. Alperen DAĞDÖĞEN"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:alperen.dagdogen@firat.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/alperendagdogen" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FontAwesomeIcon icon={faFileAlt} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Arş. Gör. H. Alperen DAĞDÖĞEN</h3>
          <p className="team-starlight-title">Doktora Bursiyeri</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Fırat Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>React.js</span>
            <span>Flask</span>
            <span>API Geliştirme</span>
          </div>
          <p className="team-meteor-bio">
            Sistemin frontend ve backend entegrasyonundan sorumlu. 
            Full-stack geliştirme deneyimine sahip.
          </p>
        </div>

        {/* 9. BURSİYER - YÜKSEK LİSANS */}
        <div className="team-comet-card team-bursiyer-member">
          <div className="team-astro-photo">
            <img 
              alt="Esma GÜRKAN"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:esma.gurkan@firat.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Esma GÜRKAN</h3>
          <p className="team-starlight-title">Yüksek Lisans Bursiyeri</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Fırat Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>Kullanıcı Testleri</span>
            <span>UI/UX</span>
            <span>Erişilebilirlik</span>
          </div>
          <p className="team-meteor-bio">
            Görme engelli kullanıcılarla çalışmalar yürütmektedir. 
            Sistemin kullanılabilirlik testlerini gerçekleştirir.
          </p>
        </div>

        {/* 10. BURSİYER - YÜKSEK LİSANS */}
        <div className="team-comet-card team-bursiyer-member">
          <div className="team-astro-photo">
            <img 
              alt="Yunus Emre ÇETİN"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:yunus.cetin@firat.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://www.linkedin.com/in/yunusemrecetin/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Yunus Emre ÇETİN</h3>
          <p className="team-starlight-title">Yüksek Lisans Bursiyeri</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Fırat Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>Python</span>
            <span>Veri Analizi</span>
            <span>Makine Öğrenmesi</span>
          </div>
          <p className="team-meteor-bio">
            Model eğitimi ve performans optimizasyonu üzerine çalışmaktadır. 
            Scikit-learn ve Pandas konusunda uzman.
          </p>
        </div>

        {/* 11. BURSİYER - DOKTORA */}
        <div className="team-comet-card team-bursiyer-member">
          <div className="team-astro-photo">
            <img 
              alt="Alperen KAÇAR"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:alperen.kacar@firat.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Alperen KAÇAR</h3>
          <p className="team-starlight-title">Doktora Bursiyeri</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Fırat Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>YOLOv8</span>
            <span>TensorRT</span>
            <span>Model Optimizasyonu</span>
          </div>
          <p className="team-meteor-bio">
            Nesne tanıma modellerinin optimizasyonu ve edge cihazlara entegrasyonu 
            üzerine çalışmaktadır.
          </p>
        </div>

        {/* 12. BURSİYER - LİSANS */}
        <div className="team-comet-card team-bursiyer-member">
          <div className="team-astro-photo">
            <img 
              alt="Merve CİN"
              className="team-nasa-image"
            />
            <div className="team-social-links">
              <a href="mailto:merve.cin@firat.edu.tr" title="E-posta">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <h3 className="team-supernova-name">Merve CİN</h3>
          <p className="team-starlight-title">Lisans Bursiyeri</p>
          <p className="team-institution">
            <FontAwesomeIcon icon={faGraduationCap} /> Fırat Üniversitesi
          </p>
          <div className="team-expertise-tags">
            <span>Veri Toplama</span>
            <span>Dokümantasyon</span>
            <span>Test Senaryoları</span>
          </div>
          <p className="team-meteor-bio">
            Proje dokümantasyonu ve test senaryolarının hazırlanmasından sorumlu. 
            Sistemin kullanım kılavuzunu hazırlamaktadır.
          </p>
        </div>
      </div>

      {/* EKİP İSTATİSTİKLERİ */}
      <div className="team-stats-section">
        <h3 className="team-blackhole-title">Ekip Yetkinlikleri</h3>
        <div className="team-partners-divider"></div>
        <div className="team-stats-grid">
          <div className="team-stat-item">
            <div className="team-stat-number">12</div>
            <div className="team-stat-label">Araştırmacı</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-number">7</div>
            <div className="team-stat-label">Üniversite</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-number">150+</div>
            <div className="team-stat-label">Bilimsel Yayın</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-number">5</div>
            <div className="team-stat-label">Patent</div>
          </div>
        </div>
      </div>

      {/* PROJE DESTEKÇİLERİ */}
      <div className="team-milkyway-partners">
        <h3 className="team-blackhole-title">Proje Destekçileri</h3>
        <div className="team-partners-divider"></div>
        <div className="team-quasar-logos">
          <div className="team-partner-logo">
            <img src={tubitakLogo} alt="TÜBİTAK" className="team-logo-image" />
            <p>TÜBİTAK 1001 Programı</p>
            <p>Proje No: 121E999</p>
          </div>
          <div className="team-partner-logo">
            <img src={universityLogo} alt="Fırat Üniversitesi" className="team-logo-image" />
            <p>Fırat Üniversitesi</p>
            <p>Teknoloji Transfer Ofisi</p>
          </div>
          <div className="team-partner-logo">
            <img src={tgdLogo} alt="Türk Görme Engelliler Derneği" className="team-logo-image" />
            <p>Türk Görme Engelliler Derneği</p>
            <p>Kullanıcı Test Destekçisi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;