import React from 'react';
import { FaChartLine, FaUsers, FaLightbulb, FaGlobe, FaUniversity, FaMicroscope, FaHandsHelping, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Project-results.css';

const ProjectResults = () => {
  const outcomes = [
    {
      icon: <FaChartLine />,
      title: "Bilimsel Çıktılar",
      description: "3 adet SCI indeksli dergide yayınlanmış makale ve 2 uluslararası konferans bildirisi",
      stats: "5+ akademik yayın"
    },
    {
      icon: <FaUsers />,
      title: "Toplumsal Fayda",
      description: "Geliştirilen teknoloji ile engelli bireylerin günlük yaşamlarını kolaylaştıracak çözümler",
      stats: "10.000+ potansiyel kullanıcı"
    },
    {
      icon: <FaLightbulb />,
      title: "Teknolojik Kazanım",
      description: "Yerli ve milli yapay zeka algoritmalarının geliştirilmesi ve patent başvurusu",
      stats: "2 patent başvurusu"
    },
    {
      icon: <FaGlobe />,
      title: "Ekonomik Etki",
      description: "Savunma sanayii için yıllık 5M$ tasarruf potansiyeli sağlayan çözümler",
      stats: "5M$ yıllık tasarruf"
    }
  ];

  const partners = [
    { name: "Fırat Üniversitesi", icon: <FaUniversity /> },
    { name: "TÜBİTAK", icon: <FaMicroscope /> },
    { name: "ASELSAN", icon: <FaChartBar /> },
    { name: "Engelsiz Yaşam Derneği", icon: <FaHandsHelping /> }
  ];

  return (
    <div className="project-results">
      {/* Main Content */}
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Proje Sonuçları</h2>
          <div className="divider-animated"></div>
          <p className="subtitle">
            Projemizin tamamlanmasıyla elde edilen çıktılar ve topluma sağladığımız katkılar
          </p>
        </motion.div>

        <div className="results-grid">
          {outcomes.map((item, index) => (
            <motion.div 
              key={index}
              className="result-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="icon-wrapper pulse-animation">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="stats-badge">
                {item.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="impact-section">
          <div className="impact-content">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Uzun Vadeli Etkilerimiz
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Geliştirdiğimiz teknolojiler, önümüzdeki 5 yıl içinde sağlık sektöründe %30 verimlilik artışı sağlamayı,
              eğitimde erişilebilirliği artırmayı ve yerli teknoloji üretimine katkıda bulunmayı hedeflemektedir.
              Projemiz, TÜBİTAK 2023 vizyonuyla da uyumlu olarak ülkemizin teknoloji üretme kapasitesini güçlendirecektir.
            </motion.p>
          </div>
          <div className="impact-visual">
            <div className="impact-circle">
              <div className="impact-item">%30 Verimlilik</div>
              <div className="impact-item">10.000+ Kullanıcı</div>
              <div className="impact-item">5M$ Tasarruf</div>
              <div className="impact-item">5+ Yayın</div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="partners-section">
          <h3>Proje Ortaklarımız</h3>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                className="partner-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="partner-icon">
                  {partner.icon}
                </div>
                <span>{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section">
          <h3>Proje Süreci</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h4>Proje Başlangıç</h4>
                <p>Literatür araştırması ve teorik çalışmalar</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h4>Prototip Geliştirme</h4>
                <p>İlk prototipin oluşturulması ve testler</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h4>Pilot Uygulama</h4>
                <p>Gerçek ortam testleri ve iyileştirmeler</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h4>Sonuçlandırma</h4>
                <p>Patent başvuruları ve yayınlar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectResults;