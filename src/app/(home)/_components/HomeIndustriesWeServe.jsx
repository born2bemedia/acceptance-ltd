"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  ButtonIcon,
  ArrowPrevIcon,
  ArrowNextIcon,
} from "../../../global_components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slidesData = [
  {
    title: "E-Commerce & Digital Business",
    text: "From online stores to global marketplaces and SaaS platforms – tailored support for fast-growing businesses entering international markets.",
    color: "#F4F4F4",
    textColor: "#0A0A0A",
    numberColor: "#47B782",
  },
  {
    title: "IT, Startups & Technology",
    text: "Comprehensive solutions for software companies, AI projects, and tech startups seeking efficient structures, banking, and operational support worldwide.",
    color: "#143F34",
    textColor: "#FFFFFF",
    numberColor: "#47B782",
  },
  {
    title: "Consulting & Professional Services",
    text: "End-to-end assistance for business consultants, service providers, and advisory firms expanding across borders with secure and compliant operations. ",
    color: "#F4F4F4",
    textColor: "#0A0A0A",
    numberColor: "#47B782",
  },
];

const HomeIndustriesWeServe = () => {
  const swiperRef = useRef(null); // Создаем реф для Swiper

  return (
    <section className="industries-we-serve">
      <div className="industries-we-serve__inner container">
        <h2 className="fadeInUp">Industries We Serve</h2>

        <div className="custom-navigation"></div>

        <Swiper
          className="fadeInUp"
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Привязываем реф к Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} style={{ backgroundColor: slide.color }}>
              <div className="industries-we-serve__slider-item">
                <div style={{ color: slide.numberColor }} className="number">
                  {index + 1}
                </div>{" "}
                {/* Выводим номер слайда */}
                <h4
                  style={{ color: slide.textColor }}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p style={{ color: slide.textColor }}>{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="botton">
          <button
            className="prev-btn btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowPrevIcon />
          </button>

          <Link href="/industries" className="button fadeInUp">
            Check Industries
            <ButtonIcon />
          </Link>

          <button
            className="next-btn btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowNextIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeIndustriesWeServe;
