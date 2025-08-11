import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './index.css';
import { carouselList } from "../../constant/carouselList";

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
        {carouselList.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperComponent
