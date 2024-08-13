import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Splidehead = () => {
  return (
    <Splide options={ { rewind: true } } aria-label="React Splide Example">
      <SplideSlide>
        <img src="https://wordpress.org/photos/photo/55166b5172/" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://wordpress.org/photos/photo/63166a8d4f/" alt="Image 2"/>
      </SplideSlide>
    </Splide>
  )
}

export default Splidehead