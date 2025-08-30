import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
//import About from '../about.jsx'
//import About from '../../navigate/src/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Login />} />
          <Route path ="/app" element={<App />} />
          <Route path ="/login" element={<Login />} />
          {/* <Route path ="/about" element={<About />} /> */}
          
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
