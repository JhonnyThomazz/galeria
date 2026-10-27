"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slideImages } from "../data/slideData";
import Cards from "./card";

export default function Carousel() {
  return (
    <div className="w-1/2 mx-auto py-65">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}       // Mostra apenas 1 slide por vez
        spaceBetween={20}
        centeredSlides={true}  // Centraliza o slide ativo
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="rounded-2xl"
      >
        {slideImages.map((card) => (
          <SwiperSlide key={card.id}>
            <Cards title={card.title} details={card.desc} img={card.img}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}