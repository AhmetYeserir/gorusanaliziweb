import React, { useEffect } from 'react';
import '../styles/About.css';
import { animateScroll as scroll } from "react-scroll";

const About = () => {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 0 // Sayfa yüklendiğinde anında en üste çık
    });
  }, []);
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">Proje Hakkında</h1>
        <div className="title-underline"></div>
        <p className="about-subtitle">TÜBİTAK Destekli Yenilikçi Algılama Teknolojileri</p>
      </div>
      
      <div className="about-content">
        <div className="project-card">
          <h2 className="project-title">
            Görüş Alanı Dışındaki Canlıların Lazer ve Ses Sinyalleri Kullanılarak 
            Yapay Zeka ile Tespiti
          </h2>
          
          <div className="project-details-grid">
            <div className="detail-card">
              <div className="detail-icon">📋</div>
              <div>
                <div className="detail-label">Proje Türü</div>
                <div className="detail-value">TÜBİTAK-1001 Bilimsel ve Teknolojik 
                  Araştırma Projelerini Destekleme Programı</div>
              </div>
            </div>
            
            <div className="detail-card">
              <div className="detail-icon">🔢</div>
              <div>
                <div className="detail-label">Proje No</div>
                <div className="detail-value">EEEAG-123E386</div>
              </div>
            </div>
            
            <div className="detail-card">
              <div className="detail-icon">👨‍🔬</div>
              <div>
                <div className="detail-label">Proje Yürütücüsü</div>
                <div className="detail-value">Prof. Dr. İbrahim TÜRKOĞLU</div>
              </div>
            </div>
            
            <div className="detail-card">
              <div className="detail-icon">📅</div>
              <div>
                <div className="detail-label">Proje Dönemi</div>
                <div className="detail-value">2023-Devam Ediyor</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="project-description">
          <div className="description-section">
            <h3 className="section-title purpose-title">
              <span className="section-icon">🎯</span>
              Proje Amacı ve Kapsamı
            </h3>
            <div className="section-content">
              <p>
                Bu proje, özel ihtiyaçları olan çocukların çevrelerindeki canlıları algılama yeteneklerini geliştirmek 
                amacıyla yenilikçi bir teknoloji sunmayı hedeflemektedir. Lazer ve ses sinyallerinin kombinasyonu ile 
                geliştirdiğimiz sistem, yapay zeka destekli analizler sayesinde:
              </p>
              <ul className="feature-list">
                <li>Görme engelli bireyler için çevresel farkındalık artırımı</li>
                <li>Otizm spektrum bozukluğu olan çocuklarda duyusal entegrasyon</li>
                <li>Özel eğitim süreçlerinde destekleyici teknoloji</li>
                <li>Rehabilitasyon süreçlerinde yardımcı araç</li>
              </ul>
            </div>
          </div>
                  {/* Güncellenmiş Diyagram Bölümü */}
        <div className="description-section diagram-section">
          <h3 className="section-title">
            <span className="section-icon">📐</span>
            Deneysel Düzenek Teknik Diyagramı
          </h3>
          
          <div className="diagram-container">
            <img 
              src={require("../assets/lab-photos/diagram.png")} 
              alt="Deneysel Düzenek Teknik Diyagramı" 
              className="project-diagram"
            />

          </div>
          </div>
          <div className="description-section">
            <h3 className="section-title">
              <span className="section-icon">⚙️</span>
              Teknik Yöntem ve Yaklaşım
            </h3>
            <div className="technical-methods">
              <div className="method-card">
                <h4 className="method-title">Lazer Tabanlı Algılama</h4>
                <p>
                  LIDAR benzeri bir sistemle çevresel tarama yaparak, nesne ve canlıların 
                  konum bilgisi mm hassasiyetinde tespit edilmektedir.
                </p>
              </div>
              <div className="method-card">
                <h4 className="method-title">Ses Sinyali Analizi</h4>
                <p>
                  Ultrasonik ve insan kulağının duyabileceği frekanslarda ses dalgaları ile 
                  canlı hareketlerinin karakteristik özellikleri çıkarılmaktadır.
                </p>
              </div>
              <div className="method-card">
                <h4 className="method-title">Yapay Zeka Entegrasyonu</h4>
                <p>
                  Derin öğrenme modelleri kullanılarak, çoklu sensör verileri entegre edilmekte 
                  ve gerçek zamanlı tespit algoritmaları geliştirilmektedir.
                </p>
              </div>
            </div>
          </div>
          
          <div className="description-section">
            <h3 className="section-title">
              <span className="section-icon">📈</span>
              Beklenen Çıktılar ve Etkiler
            </h3>
            <div className="expected-outcomes">
              <div className="outcome-card">
                <div className="outcome-header">Bilimsel</div>
                <ul>
                  <li>En az 3 SCI makale</li>
                  <li>2 uluslararası patent başvurusu</li>
                  <li>Yeni algoritmaların geliştirilmesi</li>
                </ul>
              </div>
              <div className="outcome-card">
                <div className="outcome-header">Teknolojik</div>
                <ul>
                  <li>Prototip cihaz geliştirilmesi</li>
                  <li>Yazılım paketi oluşturulması</li>
                  <li>Ölçüm ve değerlendirme modülleri</li>
                </ul>
              </div>
              <div className="outcome-card">
                <div className="outcome-header">Sosyal</div>
                <ul>
                  <li>Özel gereksinimli bireylerin yaşam kalitesinde artış</li>
                  <li>Eğitim kurumları için yeni araçlar</li>
                  <li>Toplumsal farkındalık oluşturma</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="description-section">
            <h3 className="section-title">
              <span className="section-icon">🤝</span>
              İş Birlikleri ve Destekler
            </h3>
            
            <div className="partners-grid">
              <div className="partner-card">
              <img 
                    src={require("../assets/tubitaklogo.jpg")} 
                    alt="TÜBİTAK Logo" 
                    className="partner-logo"
                  />
                <div className="partner-info">
                  <h4>TÜBİTAK 1001 Programı</h4>
                  <p>Proje No: EEEAG-123E386</p>
                  <p>2023-Devam Ediyor</p>
                </div>
              </div>
              
              <div className="partner-card">
              <img 
                    src={require("../assets/firatlogo.png")} 
                    alt="TÜBİTAK Logo" 
                    className="partner-logo"
                  />
                <div className="partner-info">
                  <h4>Fırat Üniversitesi</h4>
                  <p>Teknoloji Fakültesi</p>
                  <p>Laboratuvar Desteği</p>
                </div>
              </div>
              
              <div className="partner-card">
              <img 
                    src={require("../assets/turged-logo.jpg")} 
                    alt="TÜBİTAK Logo" 
                    className="partner-logo"
                  />
                <div className="partner-info">
                  <h4>Görme Engelliler Derneği</h4>
                  <p>Kullanıcı Deneyimi Testleri</p>
                  <p>Alan Araştırmaları</p>
                </div>
              </div>
            </div>
            <p className="additional-partners">
              Ayrıca çeşitli teknoloji firmalarıyla donanım ve yazılım alanında iş birlikleri yürütülmektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;