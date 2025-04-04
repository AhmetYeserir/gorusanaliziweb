import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Header
          "home": "Home",
          "project": "Project",
          "about": "About",
          "team": "Team",
          "calendar": "Calendar",
          "events": "Events",
          "publications": "Publications",
          "lab": "Laboratory",
          "contact": "Contact",
          
          // Pages
          "welcome": "Welcome to Our Project",
          "page_not_found": "Page Not Found",
          "learn_more": "Learn More",
          // Diğer tüm çeviriler...
        }
      },
      tr: {
        translation: {
          // Header
          "home": "Ana Sayfa",
          "project": "Proje",
          "about": "Hakkında",
          "team": "Proje Ekibi",
          "calendar": "Proje Takvimi",
          "events": "Etkinlikler",
          "publications": "Yayınlar",
          "lab": "Laboratuvar",
          "contact": "İletişim",
          
          // Pages
          "welcome": "Projemize Hoş Geldiniz",
          "page_not_found": "Sayfa Bulunamadı",
          "learn_more": "Daha Fazla Bilgi",
          // Diğer tüm çeviriler...
        }
      }
    },
    lng: localStorage.getItem('selectedLanguage') || 'tr',
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;