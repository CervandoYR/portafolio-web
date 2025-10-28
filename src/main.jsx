// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// IMPORT CSS DE BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// Usaremos "App.css" para nuestros estilos.
import './App.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)