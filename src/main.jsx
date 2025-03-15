import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Gallery from './Pages/Gallery'
import FAQ from './Pages/FAQ'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
// import NSHR from './Services_Pages/NSHR'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="home" element={ <Home /> } />
      <Route path="about-us" element={ <About /> } />
      <Route path="services" element={ <Services /> } />
      {/* <Route path="services" element={ <NSHR/> }/> */}
      <Route path="gallery" element={ <Gallery /> } />
      <Route path="faq" element={ <FAQ /> } />
      <Route path="blog" element={ <Blog /> } />
      <Route path="contact-us" element={ <Contact /> } />
    </Routes>
    </BrowserRouter>    
  </StrictMode>,
)
