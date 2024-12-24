import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Carousel.css';
import BookButton from './BookButton';
import 'animate.css';
import slide1 from '../assets/slide-1.jpg';
import slide2 from '../assets/slide-2.jpg';
import slide3 from '../assets/slide-3.jpg';

function Carousel() {
  return (
    <div className="w-full h-[80vh] bg-prime-dark">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-10 md:px-20 text-white">
              <div className="animate__animated animate__fadeInUp ml-4 sm:ml-10 md:ml-20">
                <p className="text-xs sm:text-sm mb-2 sm:mb-3 max-w-xl capitalize">Its not just a haircut, its an experience</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">Welcome to Mane&apos;s Barbershop</h1>
                <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-3 max-w-xl">Experience the finest grooming services in town</p>
                <p className="text-xs sm:text-sm md:text-md mb-4 sm:mb-8 max-w-xl">Professional barbers for the modern gentleman</p>
                <BookButton />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-10 md:px-20 text-white">
              <div className="animate__animated animate__fadeInUp ml-4 sm:ml-10 md:ml-20">
                <p className="text-xs sm:text-sm mb-2 sm:mb-3 max-w-xl capitalize">Classic Hair Styles & Shaves</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">Expert Barbers</h1>
                <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-3 max-w-xl">Precision cuts and traditional techniques</p>
                <p className="text-xs sm:text-sm md:text-md mb-4 sm:mb-8 max-w-xl">Creating the perfect style for every client</p>
                <BookButton />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-4 sm:px-10 md:px-20 text-white">
              <div className="animate__animated animate__fadeInUp ml-4 sm:ml-10 md:ml-20">
                <p className="text-xs sm:text-sm mb-2 sm:mb-3 max-w-xl capitalize">Luxury Grooming Experience</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6">Premium Service</h1>
                <p className="text-sm sm:text-base md:text-xl mb-2 sm:mb-3 max-w-xl">Indulge in our signature grooming treatments</p>
                <p className="text-xs sm:text-sm md:text-md mb-4 sm:mb-8 max-w-xl">Elevate your style with our premium services</p>
                <BookButton />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
