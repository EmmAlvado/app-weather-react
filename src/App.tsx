import './i18n';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './pages/page';
import CitySelect from './components/molecules/citySelect';

function App() {
  const { t } = useTranslation([]);

  return (
    <Router>
      <div className="App">
        <h1>{t('welcomeTitle')}</h1>
        <CitySelect />
        <Routes>
          <Route path="/" element={<Page/>} />
          <Route path="/:city" element={<Page/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
