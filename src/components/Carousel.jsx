
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      className="my-8"
    >
      <SwiperSlide>
        <div className="bg-gray-700 text-white h-64 flex items-center justify-center">
          <h2 className="text-3xl font-bold">Welcome to Our Barbershop</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gray-700 text-white h-64 flex items-center justify-center">
          <h2 className="text-3xl font-bold">Style That Defines You</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-gray-700 text-white h-64 flex items-center justify-center">
          <h2 className="text-3xl font-bold">Professional Barbers</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
