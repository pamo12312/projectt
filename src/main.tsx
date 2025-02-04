import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { init } from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

init('rZdSpOcs2R_pzt02M'); // Replace with your EmailJS public key

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);