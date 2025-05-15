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
              TÜBİTAK-1001 Bilimsel ve Teknolojik Araştırma Projelerini Destekleme Programı kapsamında desteklenen “Görüş Alanı Dışındaki Canlıların Lazer ve Ses Sinyalleri Kullanılarak Yapay Zeka ile Tespiti” başlıklı proje, deprem arama-kurtarma ekipleri için yenilikçi çözümler üretmeyi hedeflemektedir. Fırat Üniversitesi’nin koordinasyonunda ve Afyon Kocatepe, Bingöl, Dicle ve Adıyaman Üniversitelerinin iş birliğiyle yürütülen bu proje, görüş hattı olmayan (Non-Line-of-Sight, NLOS) görüntüleme teknolojisine odaklanmaktadır. Engellerin arkasındaki nesnelerin tespitine olanak sağlayan bu gelişmekte olan teknoloji, mevcut yöntemlerin uzun sürmesi gibi dezavantajlarını gidermeyi amaçlamaktadır. Bu bağlamda, lazer ve ses dalga yansımalarının yapay zeka ile analiz edilmesine dayalı bir yöntem geliştirilmesi planlanmaktadır.
            </p>
            <p className="home-about-text">
              Proje, arama-kurtarma ekiplerinin enkaz altındaki bireylere hızlı ve etkili bir şekilde ulaşmasını sağlamayı hedeflemektedir. Geliştirilecek görüş alanı dışında canlı tespit sistemi, kritik olan ilk 72 saat içerisinde daha fazla hayat kurtarılmasına olanak tanıyacaktır. Ayrıca, bu yapay zeka tabanlı yöntem, deprem sonrası arama-kurtarma süreçlerine yeni bir perspektif kazandıracaktır. Proje kapsamında, görüş alanı dışı ortamların analizi ve anlamlandırılmasına yönelik bir laboratuvar kurulmuştur. Bu laboratuvar, lisansüstü öğrencilerin ve nitelikli araştırmacıların yetiştirilmesine katkı sunacaktır. 
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