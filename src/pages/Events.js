import React from 'react';
import '../styles/Events.css';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaRegClock, FaTicketAlt } from 'react-icons/fa';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Teknoloji Zirvesi 2023",
      date: "15 Eylül 2023",
      time: "09:00 - 17:00",
      location: "Fırat Üniversitesi Kongre Merkezi",
      description: "Yapay zeka, nesnelerin interneti ve dijital dönüşüm üzerine ulusal çapta bir etkinlik. Alanında uzman konuşmacılar ve workshoplar.",
      category: "konferans",
      featured: true,
      attendees: 250,
      image: "etkinlikfoto1.jpg"
    },
    {
      id: 2,
      title: "Hackathon: Akıllı Şehirler",
      date: "28-29 Ekim 2023",
      time: "10:00 - 18:00",
      location: "FÜ Teknoket",
      description: "48 saat sürecek bu maratonda akıllı şehir çözümleri geliştireceğiz. Büyük ödüller ve mentorluk desteği sizleri bekliyor!",
      category: "yarışma",
      featured: false,
      attendees: 100,
      image: "image3.jpg"
    },
    {
      id: 3,
      title: "Proje Tanıtım Semineri",
      date: "10 Kasım 2023",
      time: "14:00 - 16:00",
      location: "Mühendislik Fakültesi D1",
      description: "Projemizin teknik detaylarını, geliştirme sürecini ve elde edilen sonuçları paylaşacağımız özel bir seminer.",
      category: "seminer",
      featured: true,
      attendees: 80,
      image: "etkinlikfoto2.jpg"
    },
    {
      id: 4,
      title: "Açık Kaynak Günü",
      date: "15 Aralık 2023",
      time: "13:00 - 18:00",
      location: "Bilgisayar Mühendisliği Binası",
      description: "Açık kaynak proje geliştirme, katkı süreçleri ve topluluk oluşturma üzerine interaktif bir etkinlik.",
      category: "workshop",
      featured: false,
      attendees: 60,
      image: "image2.jpg"
    }
  ];

  const categories = [
    { id: "all", name: "Tümü" },
    { id: "konferans", name: "Konferanslar" },
    { id: "seminer", name: "Seminerler" },
    { id: "workshop", name: "Workshoplar" },
    { id: "yarışma", name: "Yarışmalar" }
  ];

  return (
    <div className="events-container">
      <div className="events-header">
        <h1 className="events-title">
          <FaCalendarAlt className="header-icon" /> Etkinlik Takvimi
        </h1>
        <div className="events-divider"></div>
        <p className="events-subtitle">
          Projemiz kapsamında düzenlenen etkinlikler, seminerler ve özel programlar.
          <br />Katılımınız bizim için değerli!
        </p>
      </div>

      <div className="events-filters">
        <div className="filter-group">
          <label htmlFor="category-filter">Kategori:</label>
          <select id="category-filter" className="filter-select">
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="date-filter">Tarih:</label>
          <select id="date-filter" className="filter-select">
            <option value="all">Tüm Tarihler</option>
            <option value="upcoming">Yaklaşan Etkinlikler</option>
            <option value="past">Geçmiş Etkinlikler</option>
          </select>
        </div>
      </div>
      <div className="featured-events">
        <h2 className="section-title">
          <MdOutlineFeaturedPlayList className="section-icon" /> Öne Çıkan Etkinlikler
        </h2>
        <div className="featured-grid">
          {events.filter(event => event.featured).map(event => (
            <div key={event.id} className="featured-card">
              <div className="featured-image" style={{ backgroundImage: `url(${require(`../assets/${event.image}`)})` }}>
                <div className="category-badge">{event.category}</div>
              </div>
              <div className="featured-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{event.date}</span>
                  </div>
                  <div className="meta-item">
                    <FaRegClock className="meta-icon" />
                    <span>{event.time}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{event.location}</span>
                  </div>
                  <div className="meta-item">
                    <FaUsers className="meta-icon" />
                    <span>{event.attendees} katılımcı</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <button className="event-button">
                  <FaTicketAlt className="button-icon" /> Katıl
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="all-events">
        <h2 className="section-title">Tüm Etkinlikler</h2>
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className={`event-card ${event.featured ? 'featured-event' : ''}`}>
              <div className="event-date">
                <div className="date-day">{event.date.split(' ')[0]}</div>
                <div className="date-month">{event.date.split(' ')[1]}</div>
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <div className="meta-item">
                    <FaRegClock className="meta-icon" />
                    <span>{event.time}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-footer">
                  <span className="event-category">{event.category}</span>
                  <button className="event-button">
                    <FaTicketAlt className="button-icon" /> Detaylar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="events-newsletter">
        <h3>Etkinliklerimizden Haberdar Olun</h3>
        <p>Yeni etkinlikler duyurulduğunda e-posta ile bilgilendirilmek ister misiniz?</p>
        <div className="newsletter-form">
          <input type="email" placeholder="E-posta adresiniz" />
          <button>Abone Ol</button>
        </div>
      </div>
    </div>
  );
};

export default Events;