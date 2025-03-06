import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './src/styles/index.css'
import './src/styles/mediaPhone.css';
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './src/components/noPage.jsx';
import Header from './src/components/header.jsx';
import Main from './src/components/main.jsx';
import Footer from './src/components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/header" element={<Header />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
