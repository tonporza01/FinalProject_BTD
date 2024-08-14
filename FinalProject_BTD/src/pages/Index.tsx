import '@splidejs/react-splide/css'
import { Drawer } from '@mui/material'
import Splidehead from '../components/Splidehead'
import HeroSec_I from '../components/HeroSec_I'
import Videoscon from '../components/Videoscon'



const index = () => {
  return (
    <>
    <Drawer/>
    <Splidehead/>
    <HeroSec_I/>
    <Videoscon/>
    </>
  )
}

export default index