import React, { useState } from 'react';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Proje hakkında nasıl daha fazla bilgi alabilirim?",
      answer: "Projemizle ilgili detaylı bilgi için web sitemizin 'Hakkında' bölümünü inceleyebilir veya iletişim formunu doldurarak bizimle iletişime geçebilirsiniz."
    },
    {
      question: "Laboratuvar ziyareti yapabilir miyim?",
      answer: "Evet, laboratuvarımız önceden randevu alınmak kaydıyla ziyaret edilebilir. Lütfen iletişim formu üzerinden randevu talebinizi iletin."
    },
    {
      question: "Projeye katkıda bulunmak istersem ne yapmalıyım?",
      answer: "Projemize katkıda bulunmak isterseniz lütfen iletişim formu üzerinden bize ulaşın. Uzmanlık alanınıza göre sizi yönlendireceğiz."
    },
    {
      question: "Yapay zeka modellerinizi test etmek mümkün mü?",
      answer: "Evet, belirli modellerimiz demo amaçlı kullanıma açıktır. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
    }
  ];

  const contactCards = [
    {
      icon: <FaPhone />,
      title: "Telefon",
      content: "+90 555 123 45 67",
      color: "#5BC0DE"
    },
    {
      icon: <FaEnvelope />,
      title: "E-posta",
      content: "info@nlos1001.com",
      color: "#D9534F"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Adres",
      content: "Fırat Üniversitesi Teknoloji Fakültesi, Elazığ",
      color: "#5CB85C"
    }
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Adınızı giriniz";
    if (!formData.email.trim()) {
      errors.email = "E-posta giriniz";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Geçerli bir e-posta adresi giriniz";
    }
    if (!formData.message.trim()) errors.message = "Mesajınızı giriniz";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mrbqvqwg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'NLOS1001 Web Sitesinden Yeni Mesaj'
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form gönderilemedi');
      }
    } catch (error) {
      console.error('Hata:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>İletişim</h1>
          <p className="subtitle">
            Projemiz hakkında daha fazla bilgi almak veya bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="contact-info">
              {contactCards.map((card, index) => (
                <motion.div 
                  key={index}
                  className="info-card"
                  whileHover={{ y: -5 }}
                  style={{ borderTop: `4px solid ${card.color}` }}
                >
                  <div className="info-icon" style={{ color: card.color }}>
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.content}</p>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Bize Mesaj Gönderin</h2>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="form-alert success"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheckCircle className="alert-icon" />
                  <span>Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="form-alert error"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaTimesCircle className="alert-icon" />
                  <span>Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.</span>
                </motion.div>
              )}

              <div className="form-group">
                <label htmlFor="name">Adınız *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : ''}
                  placeholder="Adınız ve soyadınız"
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                  placeholder="email@ornek.com"
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                  rows="5"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>

              <motion.button 
                type="submit" 
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <>
                    <FaPaperPlane className="send-icon" /> Gönder
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className="faq-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2>Sıkça Sorulan Sorular</h2>
            <p className="faq-subtitle">Aklınıza takılan soruların cevaplarını aşağıda bulabilirsiniz.</p>
            
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.01 }}
                  style={{ 
                    borderLeft: `4px solid ${activeIndex === index ? "#D9534F" : "#5BC0DE"}`,
                    backgroundColor: activeIndex === index ? "#F9F9F9" : "white"
                  }}
                >
                  <div className="faq-question">
                    <h3>{faq.question}</h3>
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {activeIndex === index && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;