import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './Component/Login/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Component/NavBar/About';
import Contact from './Component/NavBar/Contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/app" element={<App />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
