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
      type: 'conference',
      title: 'Location Detection of an Object Non Line of Sight with Audio Signal',
      authors: 'Olgun, N., & Çalışan, M.',
      conference: '2024 8th International Artificial Intelligence and Data Processing Symposium (IDAP)',
      year: 2024,
      location: 'IEEE',
      date: 'September 2024',
      proceedings: 'Proceedings of IDAP 2024',
      pages: '1-4',
      abstract: 'Bu bildiride, görüş alanı dışında yer alan nesnelerin ses sinyalleri kullanılarak konum tespiti yapılması incelenmiştir.',
      keywords: ['non line of sight', 'ses sinyali', 'konum tespiti', 'yapay zeka'],
      pdf: '/publications/real_paper.pdf',
      doi: '10.1109/IDAP64064.2024.10710798'
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
            <h1>Proje Yayınları</h1>
            <p className="publications-description">
              Bu bölümde proje kapsamında üretilen akademik yayınlar listelenmiştir.
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
                <option value="conference">Konferans Bildirileri</option>
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
          <div className="stat-card conferences">
            <span className="stat-number">{publicationStats.conferences}</span>
            <span className="stat-label">Konferans Bildirisi</span>
          </div>
        </div>

        {filteredPublications.length > 0 ? (
          <div className="publications-list">
            {filteredPublications.map((pub) => (
              <div key={pub.id} className={`publication-card ${pub.type} ${expandedId === pub.id ? 'expanded' : ''}`}>
                <div className="publication-header">
                  <div className="publication-icon">
                    <BsFillCalendarEventFill />
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
                  <div className="detail-row">
                    <span className="detail-label">Konferans:</span>
                    <span className="detail-value">{pub.conference}, {pub.location} ({pub.date})</span>
                  </div>

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
              <p>Bu yayına atıf yapmak için lütfen orijinal kaynağı kullanınız.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
