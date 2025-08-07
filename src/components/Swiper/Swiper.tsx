import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css';
import slide_image_audi from "../../assets/Audi.jpg";
import slide_image_facebook from "../../assets/facebook.jpg";
import slide_image_netflix from "../../assets/netflix.jpg";
import slide_image_spotify from "../../assets/spotify.jpg";
import slide_image_starbucks from "../../assets/starbucks.jpg";
import slide_image_youtube from "../../assets/youtube.jpg";
import slide_image_cocacola from "../../assets/cocacola.jpg";

const SwiperComponent = () => {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }
        }
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_audi} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_cocacola} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_facebook} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_youtube} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_starbucks} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_spotify} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_netflix} alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperComponent
