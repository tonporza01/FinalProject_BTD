import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Footer from './components/footer.tsx'
import Nav from './components/Nav.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <App />
    <Footer />
  </StrictMode>,
)
