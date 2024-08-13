import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Intersection } from '@splidejs/splide-extension-intersection'

const Splidehead = () => {
  return (
    <Splide 
    options={ { 
        rewind: true,
        autoplay: true,
        pauseOnHover: true,
        arrows: false,
        pagination: false,
        drag: 'snap',
        perPage: 3,
        type: 'loop',
        focus: 'center',
        autoWidth: true,
        height: '300px',
        extension: [ Intersection ],
        interval: 2000
    } }>
      <SplideSlide>
        <img src="https://pd.w.org/2024/08/57966b379515bf8a2.55687941-1024x683.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://pd.w.org/2024/08/67366b502277ce356.99477126-1024x683.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://pd.w.org/2024/07/66066aa300ad9d584.69841473-1024x683.jpg" alt="Image 2"/>
      </SplideSlide>
    </Splide>
  )
}

export default Splidehead