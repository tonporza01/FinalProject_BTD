import '@splidejs/react-splide/css'
import Splidehead from './components/Splidehead'
import HeroSec_I from './components/HeroSec_I'
import { Drawer } from '@mui/material'
import Videoscon from './components/Videoscon'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])

function App() {
  return (
    <>
    <Drawer/>
    <Splidehead/>
    <HeroSec_I/>
    <Videoscon/>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App