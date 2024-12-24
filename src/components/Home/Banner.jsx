import React from "react";

import BannerImage from "../../assets/images/banner.jpg";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      className="w-full"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      
    >
      <SwiperSlide>
        <img
          src={BannerImage}
          alt="BannerImage"
          className=" w-full h-auto block"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={BannerImage}
          alt="BannerImage"
          className=" w-full h-auto block"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={BannerImage}
          alt="BannerImage"
          className=" w-full h-auto block"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;