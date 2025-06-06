import React from 'react';
import { FaFlask, FaMicrochip, FaRobot, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Lab.css';

// Fotoğrafları import edin (örnek isimlendirme ile)
import labPhoto1 from '../assets/lab-photos/lab 4.jpeg';
import labPhoto2 from '../assets/lab-photos/lab 1.jpeg';
import labPhoto3 from '../assets/lab-photos/lab 2.jpeg';
import labPhoto4 from '../assets/lab-photos/lab 3.jpeg';

const Lab = () => {
  const equipment = [
    {
      id: 1,
      title: "Yapay Zeka Modeli Eğitim İstasyonu",
      description: "NVIDIA DGX A100 sistemleri ile donatılmış yüksek performanslı AI eğitim istasyonu",
      icon: <FaMicrochip />,
      specs: [
        "8x NVIDIA A100 80GB GPU",
        "AMD EPYC 7742 64-Core işlemci",
        "1TB DDR4 RAM",
        "10TB NVMe depolama"
      ],
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Lazer ve Ses Sensörleri",
      description: "Yüksek hassasiyetli veri toplama sistemleri",
      icon: <FaFlask />,
      specs: [
        "LIDAR sensör ağları",
        "3B ses haritalama sistemleri",
        "Mikrofon dizileri",
        "Gerçek zamanlı veri işleme"
      ],
      color: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
    },
    {
      id: 3,
      title: "Veri Toplama ve Analiz Sistemleri",
      description: "Büyük veri analizi için optimize edilmiş sistemler",
      icon: <FaChartLine />,
      specs: [
        "Petabyte ölçekli veri depolama",
        "Apache Spark kümeleri",
        "Gerçek zamanlı veri pipeline'ları",
        "Veri görselleştirme araçları"
      ],
      color: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
      id: 4,
      title: "Robotik Test Platformu",
      description: "Algılama sistemlerinin test edildiği entegre platform",
      icon: <FaRobot />,
      specs: [
        "6 eksenli robot kollar",
        "Hareket takip sistemleri",
        "Çevresel simülasyon ortamı",
        "Otonom navigasyon test alanı"
      ],
      color: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
    }
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="lab-page">
      <div className="lab-container">
        <header className="lab-header">
          <div className="lab-content">
            <motion.div 
              className="header-icon"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <FaFlask />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Laboratuvar ve Ekipmanlar
            </motion.h1>
            <motion.p 
              className="header-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Projemizin gelişiminde kullandığımız ileri teknoloji laboratuvar altyapısı
            </motion.p>
          </div>
        </header>

        {/* Ekipman Kartları */}
        <div className="equipment-grid">
          {equipment.map((item, index) => (
            <motion.div 
              key={item.id}
              className="equipment-card"
              style={{ background: item.color }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={index}
            >
              <div className="equipment-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p className="equipment-description">{item.description}</p>
              <div className="specs-list">
                <h4>Teknik Özellikler:</h4>
                <ul>
                  {item.specs.map((spec, i) => (
                    <li key={i}>
                      <FaArrowRight className="spec-icon" /> {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-overlay"></div>
            </motion.div>
          ))}
        </div>
                <motion.div 
          className="lab-intro"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p>
            Araştırmalarımızı yürüttüğümüz laboratuvar ortamı, en son teknoloji ekipmanlarla donatılmış olup
            yapay zeka, sensör teknolojileri ve veri bilimi alanlarında çığır açan çalışmalara ev sahipliği yapmaktadır.
          </p>
        </motion.div>
        
       {/* Laboratuvar Fotoğrafları */}
        <div className="lab-photos">
          <h2>Laboratuvar Fotoğrafları</h2>
          <div className="lab-photo-grid">
            {[labPhoto1, labPhoto2, labPhoto3, labPhoto4].map((photo, index) => (
              <motion.div 
                key={index}
                className="lab-photo-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img src={photo} alt={`Laboratuvar Fotoğrafı ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="lab-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>
            Laboratuvarımız hakkında daha fazla bilgi için lütfen <a href="/contact">iletişim</a> sayfamızı ziyaret edin.
          </p>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Lab;
