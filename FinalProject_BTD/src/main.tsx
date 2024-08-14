import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './components/footer.tsx'
import Header from './components/Header.tsx'
import WrappedRoute from './components/WrappedRoute.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
     <WrappedRoute/>
    <Footer />
  </StrictMode>,
)
