import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Switch yerine Routes kullanıyoruz
import Header from "./components/Header"; // Header componenti
import Home from "./pages/Home"; // Ana sayfa componenti
import About from "./pages/About"; // Hakkında sayfası
import Team from "./pages/Team"; // Proje ekibi sayfası
import Calendar from "./pages/Calendar"; // Proje takvimi sayfası
import Events from "./pages/Events"; // Etkinlikler sayfası
import Publications from "./pages/Publications"; // Yayınlar sayfası
import Lab from "./pages/Lab"; // Laboratuvar sayfası
import Contact from "./pages/Contact"; // İletişim sayfası
import ProjectResults from "./pages/Project-results"; // Proje Sonuçları Sayfası
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      {/* Header, her sayfada üstte olacak */}
      <Header />
      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={<Home />} />
        {/* Diğer Sayfalar */}
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/events" element={<Events />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-results" element={<ProjectResults />} />
        {/* 404 Sayfa */}
        <Route path="*" element={<h1>Sayfa Bulunamadı!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
