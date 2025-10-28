// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. IMPORTA EL CSS DE BOOTSTRAP (¡OBLIGATORIO!)
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Importa tus estilos personalizados (reemplaza index.css si es necesario)
// Usaremos "App.css" para nuestros estilos.
import './App.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)