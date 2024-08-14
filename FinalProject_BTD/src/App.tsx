import '@splidejs/react-splide/css'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Index from './pages/index'
import Myformlog from './components/Myformlog'
import Findnotfound from './pages/Findnotfound'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Myformlog />} />
      <Route path="/*" element={<Findnotfound />} />
    </Routes>
    </>
  )
}

export default App