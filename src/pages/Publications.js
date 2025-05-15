import React, { useState } from 'react';
import { FaFilePdf, FaBook, FaSearch, FaFilter, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import '../styles/Publications.css';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const publications = [
    {
      id: 1,
      type: 'journal',
      title: 'Lazer ve Ses Sinyalleri ile Yapay Zeka Uygulamaları',
      authors: 'Yeşeriroğlu, A., Türkoğlu, İ.',
      journal: 'Journal of Advanced Technology',
      year: 2023,
      volume: '12',
      issue: '3',
      pages: '45-62',
      doi: '10.1234/56789',
      abstract: 'Bu çalışmada, lazer ve ses sinyallerinin yapay zeka ile entegrasyonu incelenmiştir. Geliştirilen yöntemlerin performans analizi sunulmuştur.',
      keywords: ['yapay zeka', 'lazer', 'ses işleme', 'makine öğrenmesi'],
      pdf: '/publications/makale1.pdf',
      citations: 24,
      impactFactor: 3.45
    },
    {
      id: 2,
      type: 'journal',
      title: 'Eğitim Teknolojilerinde Yenilikçi Yaklaşımlar',
      authors: 'Yeşeriroğlu, A., Demir, M., Kaya, S.',
      journal: 'International Journal of Educational Technology',
      year: 2023,
      volume: '8',
      issue: '2',
      pages: '112-130',
      doi: '10.9876/54321',
      abstract: 'Eğitim teknolojilerinde son dönemde geliştirilen yenilikçi yaklaşımlar karşılaştırmalı olarak değerlendirilmiştir.',
      keywords: ['eğitim teknolojileri', 'dijital dönüşüm', 'öğrenme yönetim sistemleri'],
      pdf: '/publications/makale2.pdf',
      citations: 18,
      impactFactor: 2.78
    },
    {
      id: 3,
      type: 'conference',
      title: 'Algılama Yetenekleri ve Yapay Zeka Entegrasyonu',
      authors: 'Türkoğlu, İ., Yeşeriroğlu, A., Öztürk, A.',
      conference: 'IEEE International Conference on AI',
      year: 2023,
      location: 'İstanbul, Türkiye',
      date: '15-17 Mayıs 2023',
      proceedings: 'Proceedings of IEEE ICAI 2023',
      pages: '234-241',
      abstract: 'Bu bildiride, çeşitli algılama yeteneklerinin yapay zeka sistemleri ile entegrasyonu ele alınmıştır.',
      keywords: ['yapay zeka', 'algılama sistemleri', 'sensör ağları'],
      pdf: '/publications/bildiri1.pdf',
      award: 'En İyi Bildiri Ödülü'
    },
    {
      id: 4,
      type: 'conference',
      title: 'Derin Öğrenme ile Görüntü İşleme Teknikleri',
      authors: 'Yeşeriroğlu, A., Şahin, E., Demirci, M.',
      conference: 'Uluslararası Bilgisayar Bilimleri Konferansı',
      year: 2022,
      location: 'Ankara, Türkiye',
      date: '10-12 Kasım 2022',
      proceedings: 'UBBK 2022 Bildiriler Kitabı',
      pages: '78-85',
      abstract: 'Derin öğrenme tabanlı yeni görüntü işleme teknikleri sunulmuş ve performans değerlendirmesi yapılmıştır.',
      keywords: ['derin öğrenme', 'görüntü işleme', 'konvolüsyonel sinir ağları'],
      pdf: '/publications/bildiri2.pdf'
    },
    {
      id: 5,
      type: 'book',
      title: 'Modern Yapay Zeka Uygulamaları',
      authors: 'Yeşeriroğlu, A., Türkoğlu, İ., Demir, M.',
      publisher: 'Bilimsel Yayınlar',
      year: 2023,
      edition: '1. Baskı',
      isbn: '978-605-123-456-7',
      pages: 342,
      abstract: 'Bu kitapta, modern yapay zeka uygulamaları teorik temelleriyle birlikte detaylı olarak ele alınmıştır.',
      keywords: ['yapay zeka', 'makine öğrenmesi', 'derin öğrenme', 'uygulamalı yapay zeka'],
      pdf: '/publications/kitap1.pdf'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredPublications = publications
    .filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilter = filter === 'all' || pub.type === filter;
      
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => b.year - a.year);

  const publicationStats = {
    total: publications.length,
    journals: publications.filter(pub => pub.type === 'journal').length,
    conferences: publications.filter(pub => pub.type === 'conference').length,
    books: publications.filter(pub => pub.type === 'book').length
  };

  return (
    <div className="publications-page">
      <div className="publications-container">
        <header className="publications-header">
          <div className="header-content">
            <div className="header-icon">
              <FaBook />
            </div>
            <h1>Akademik Yayınlar</h1>
            <p className="header-description">
              Proje kapsamında üretilen bilimsel çalışmaların akademik çıktıları
            </p>
          </div>
        </header>

        <div className="controls-section">
        <div className="search-filter-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Başlık, yazar veya anahtar kelime ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-dropdown">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Tüm Yayınlar</option>
            <option value="journal">Dergi Makaleleri</option>
            <option value="conference">Konferans Bildirileri</option>
            <option value="book">Kitaplar</option>
          </select>
          <FaFilter className="filter-icon" />
        </div>
      </div>
      </div>

        <div className="stats-grid">
          <div className="stat-card total">
            <span className="stat-number">{publicationStats.total}</span>
            <span className="stat-label">Toplam Yayın</span>
          </div>
          <div className="stat-card journals">
            <span className="stat-number">{publicationStats.journals}</span>
            <span className="stat-label">Dergi Makalesi</span>
          </div>
          <div className="stat-card conferences">
            <span className="stat-number">{publicationStats.conferences}</span>
            <span className="stat-label">Konferans Bildirisi</span>
          </div>
          <div className="stat-card books">
            <span className="stat-number">{publicationStats.books}</span>
            <span className="stat-label">Kitap</span>
          </div>
        </div>

        {filteredPublications.length > 0 ? (
          <div className="publications-list">
            {filteredPublications.map((pub) => (
              <div key={pub.id} className={`publication-card ${pub.type} ${expandedId === pub.id ? 'expanded' : ''}`}>
                <div className="publication-header">
                  <div className="publication-icon">
                    {pub.type === 'journal' ? <FaBook /> : 
                     pub.type === 'conference' ? <BsFillCalendarEventFill /> : <FaBook />}
                  </div>
                  <div className="publication-title-authors">
                    <h3>{pub.title}</h3>
                    <p className="authors">{pub.authors}</p>
                  </div>
                  <div className="publication-year">
                    {pub.year}
                  </div>
                </div>

                <div className="publication-details">
                  {pub.type === 'journal' && (
                    <div className="detail-row">
                      <span className="detail-label">Dergi:</span>
                      <span className="detail-value">{pub.journal}, Cilt {pub.volume}({pub.issue}), Sayfa {pub.pages}</span>
                    </div>
                  )}
                  
                  {pub.type === 'conference' && (
                    <div className="detail-row">
                      <span className="detail-label">Konferans:</span>
                      <span className="detail-value">{pub.conference}, {pub.location} ({pub.date})</span>
                    </div>
                  )}
                  
                  {pub.type === 'book' && (
                    <div className="detail-row">
                      <span className="detail-label">Yayınevi:</span>
                      <span className="detail-value">{pub.publisher}, {pub.edition}, {pub.pages} sayfa</span>
                    </div>
                  )}
                  
                  {pub.doi && (
                    <div className="detail-row">
                      <span className="detail-label">DOI:</span>
                      <span className="detail-value">
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                          {pub.doi} <FaExternalLinkAlt className="external-link-icon" />
                        </a>
                      </span>
                    </div>
                  )}
                  
                  {pub.type === 'journal' && pub.impactFactor && (
                    <div className="detail-row">
                      <span className="detail-label">Etki Faktörü:</span>
                      <span className="detail-value">{pub.impactFactor}</span>
                    </div>
                  )}
                  
                  {pub.type === 'journal' && pub.citations && (
                    <div className="detail-row">
                      <span className="detail-label">Atıf Sayısı:</span>
                      <span className="detail-value">{pub.citations}</span>
                    </div>
                  )}
                  
                  {pub.award && (
                    <div className="detail-row">
                      <span className="detail-label award">Ödül:</span>
                      <span className="detail-value award">{pub.award}</span>
                    </div>
                  )}
                </div>

                {expandedId === pub.id && (
                  <div className="publication-expanded-content">
                    <div className="abstract-section">
                      <h4><FaQuoteLeft className="quote-icon" /> Özet</h4>
                      <p>{pub.abstract}</p>
                    </div>
                    
                    <div className="keywords-section">
                      <h4>Anahtar Kelimeler:</h4>
                      <div className="keywords-list">
                        {pub.keywords.map((keyword, index) => (
                          <span key={index} className="keyword-tag">{keyword}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="publication-actions">
                  <button 
                    className="toggle-abstract-btn"
                    onClick={() => toggleExpand(pub.id)}
                  >
                    {expandedId === pub.id ? 'Özeti Gizle' : 'Özeti Göster'}
                  </button>
                  
                  <a 
                    href={pub.pdf} 
                    className="pdf-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaFilePdf /> Tam Metin (PDF)
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>Aramanızla eşleşen yayın bulunamadı. Lütfen farklı bir arama terimi deneyin.</p>
          </div>
        )}

        <div className="publications-footer">
          <div className="footer-content">
            <p>
              Daha fazla bilgi için lütfen <a href="/contact">iletişim</a> sayfamızı ziyaret edin veya doğrudan e-posta gönderin.
            </p>
            <div className="citation-info">
              <p>Bu yayınlara atıf yapmak için lütfen orijinal kaynakları kullanınız.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;