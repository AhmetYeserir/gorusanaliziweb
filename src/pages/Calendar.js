import React from 'react';
import '../styles/Calendar.css';
import { FaCalendarAlt, FaCheckCircle, FaSpinner, FaClock, FaChartBar, FaCode, FaUsers, FaFileAlt } from 'react-icons/fa';

const Calendar = () => {
  const milestones = [
    {
      date: "15 Ocak 2023",
      title: "Proje Başlangıcı",
      description: "Proje ekibinin oluşturulması, görev dağılımlarının yapılması ve ilk planlama toplantıları gerçekleştirildi.",
      icon: <FaCode className="timeline-icon" />,
      status: "completed",
      details: [
        "Ekip üyelerinin belirlenmesi",
        "Proje yönetim araçlarının kurulumu",
        "İlk teknik değerlendirme toplantısı"
      ]
    },
    {
      date: "28 Şubat 2023",
      title: "Konsept Onayı",
      description: "Proje konsepti ve mimari tasarımın detaylandırılması ve paydaşlarla değerlendirilmesi.",
      icon: <FaChartBar className="timeline-icon" />,
      status: "completed",
      details: [
        "Teknik şartname hazırlandı",
        "Mimari diyagramlar oluşturuldu",
        "Risk analizi tamamlandı"
      ]
    },
    {
      date: "15 Nisan 2023",
      title: "İlk Prototip",
      description: "Temel fonksiyonların implementasyonu ve ilk testlerin gerçekleştirilmesi.",
      icon: <FaCode className="timeline-icon" />,
      status: "completed",
      details: [
        "Çekirdek modüller geliştirildi",
        "Birim testleri yapıldı",
        "Performans ölçümleri alındı"
      ]
    },
    {
      date: "30 Haziran 2023",
      title: "Ara Sunum",
      description: "TÜBİTAK'a ara rapor sunumu ve değerlendirme toplantısı gerçekleştirilecek.",
      icon: <FaFileAlt className="timeline-icon" />,
      status: "in-progress",
      details: [
        "Ara rapor hazırlıkları",
        "Demo hazırlığı",
        "Sunum materyalleri"
      ]
    },
    {
      date: "15 Eylül 2023",
      title: "Beta Sürüm",
      description: "Geliştirilen sistemin pilot kullanıcılarla test edilmesi ve geri bildirimlerin toplanması.",
      icon: <FaUsers className="timeline-icon" />,
      status: "pending",
      details: [
        "Kullanıcı test planı",
        "Geri bildirim mekanizmaları",
        "Hata yönetimi"
      ]
    },
    {
      date: "20 Aralık 2023",
      title: "Proje Tamamlanması",
      description: "Final raporunun hazırlanması, sonuçların paylaşılması ve proje kapanış toplantısı.",
      icon: <FaCheckCircle className="timeline-icon" />,
      status: "pending",
      details: [
        "Nihai rapor hazırlığı",
        "Teslimat dokümantasyonu",
        "Proje değerlendirme"
      ]
    }
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1 className="calendar-title">
          <FaCalendarAlt className="header-icon" /> Proje Yol Haritası
        </h1>
        <div className="calendar-divider"></div>
        <p className="calendar-subtitle">
          Projemizin gelişim sürecini ve kilometre taşlarını detaylarıyla inceleyin.
          <br />Renk kodlarıyla gösterilen durumlar sayesinde ilerlemeyi takip edebilirsiniz.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline">
          {milestones.map((item, index) => (
            <div key={index} className={`timeline-item ${item.status}`}>
              <div className="timeline-marker">
                <div className="timeline-icon-container">
                  {item.icon}
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
                
                <div className="timeline-details">
                  <h4>Detaylar:</h4>
                  <ul>
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="timeline-status">
                  {item.status === "completed" && (
                    <>
                      <FaCheckCircle className="status-icon" /> Tamamlandı
                    </>
                  )}
                  {item.status === "in-progress" && (
                    <>
                      <FaSpinner className="status-icon spin" /> Devam Ediyor
                    </>
                  )}
                  {item.status === "pending" && (
                    <>
                      <FaClock className="status-icon" /> Planlanan
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="calendar-progress-container">
        <div className="calendar-progress">
          <h3>Proje İlerleme Durumu</h3>
          <div className="progress-stats">
            <div className="progress-stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Tamamlanan</div>
            </div>
            <div className="progress-stat">
              <div className="stat-number">1</div>
              <div className="stat-label">Devam Eden</div>
            </div>
            <div className="progress-stat">
              <div className="stat-number">2</div>
              <div className="stat-label">Kalan</div>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '65%' }}>
              <span>65%</span>
            </div>
          </div>
          <p className="progress-text">Proje şu anda ara sunum aşamasında aktif olarak çalışılmaktadır.</p>
        </div>

        <div className="calendar-legend">
          <h3>Durum Göstergeleri</h3>
          <div className="legend-items">
            <div className="legend-item">
              <div className="legend-color completed"></div>
              <span>Tamamlanan Aşamalar</span>
            </div>
            <div className="legend-item">
              <div className="legend-color in-progress"></div>
              <span>Devam Eden Aşamalar</span>
            </div>
            <div className="legend-item">
              <div className="legend-color pending"></div>
              <span>Planlanan Aşamalar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;