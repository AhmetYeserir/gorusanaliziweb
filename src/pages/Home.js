import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';
import "../styles/Home.css";
import heroImage from "../assets/image1.webp";
import heroImage2 from "../assets/image2.jpg";
import heroImage3 from "../assets/image3.jpg";
import heroImage4 from "../assets/image4.jpg";
import heroImage5 from "../assets/image5.jpg";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const images = [heroImage, heroImage5, heroImage3, heroImage4];
  const { t } = useTranslation();

  const goToNext = () => {
    setCurrent((prevState) => (prevState + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrent((prevState) => (prevState === 0 ? images.length - 1 : prevState - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <div className="home-page">
      {/* Carousel Section */}
      <section className="home-carousel">
        <div className="carousel-container">
          <img 
            src={images[current]} 
            alt={`carousel ${current}`} 
            className="carousel-image"
            loading="lazy"
          />
          <div className="carousel-controls">
            <button className="carousel-prev" onClick={goToPrevious} aria-label="Previous slide">
              &#10094;
            </button>
            <button className="carousel-next" onClick={goToNext} aria-label="Next slide">
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* Project About Section */}
      <section className="home-about-section">
        <div className="home-about-container">
          <h2 className="home-about-title">Proje Hakkında</h2>
          <div className="home-about-content">
            <p className="home-about-text">
              "Görüş Alanı Dışındaki Canlıların Lazer ve Ses Sinyalleri Kullanılarak Yapay Zeka ile Tespiti" 
              projesi, TÜBİTAK-1001 Bilimsel ve Teknolojik Araştırma Projelerini Destekleme Programı 
              kapsamında (Proje No: EEEAG-123E386) yürütülmektedir. Bu yenilikçi proje, özel gereksinimli 
              bireylerin çevrelerindeki canlıları algılama yeteneklerini geliştirmeyi hedeflemektedir.
            </p>
            <p className="home-about-text">
              Projemiz, İstanbul Üniversitesi Mühendislik Fakültesi ve Türkiye Görme Engelliler Derneği 
              işbirliğiyle geliştirilmekte olup, 2023 yılından bu yana aktif olarak çalışmalarına devam 
              etmektedir. Temel amacımız, yapay zeka destekli bir sistemle eğitim süreçlerini daha verimli 
              hale getirmek ve toplumsal fayda sağlamaktır.
            </p>
          </div>
        </div>

        <div className="home-goals-container">
          <div className="home-goal-card">
            <i className="fa fa-bullseye" aria-hidden="true"></i>
            <h3>Proje Amacı</h3>
            <p>
              Lazer ve ses sinyalleri kullanarak görüş alanı dışındaki canlıların 
              yapay zeka ile tespitini sağlamayı amaçlıyoruz. Bu teknoloji özellikle
              görme engelli bireyler için çevresel farkındalığı artırmayı hedefliyor.
            </p>
          </div>

          <div className="home-goal-card">
            <i className="fa fa-cogs" aria-hidden="true"></i>
            <h3>Teknolojik Altyapı</h3>
            <p>
              LIDAR benzeri lazer sistemleri ve ultrasonik ses teknolojisini 
              makine öğrenmesi algoritmalarıyla entegre ediyoruz. Sistemimiz
              gerçek zamanlı veri işleme kapasitesine sahiptir.
            </p>
          </div>

          <div className="home-goal-card">
            <i className="fa fa-users" aria-hidden="true"></i>
            <h3>Toplumsal Etki</h3>
            <p>
              Özel gereksinimli bireylerin yaşam kalitesini artırmanın yanı sıra,
              çevresel koruma ve biyolojik çeşitlilik çalışmalarına katkı sağlamayı
              hedefliyoruz.
            </p>
          </div>
        </div>

        <div className="home-about-footer">
          <Link 
            to="/about" 
            className="home-detail-button"
            onClick={scrollToTop}
          >
            Detaylı Bilgi İçin Tıklayın
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;