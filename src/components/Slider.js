import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import HotelCard from "./HotelCard";

const Slider = (props) => {
     return(
          <>
          <Swiper
        slidesPerView="1.3"
        spaceBetween={20}
        className="mySwiper"
      >
        {props.children}
      </Swiper>
          </>
     )
}

export default Slider;