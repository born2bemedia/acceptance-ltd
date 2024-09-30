"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { ButtonIcon, ArrowPrevIcon, ArrowNextIcon } from '../../../global_components/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slidesData = [
    {
    title: "Business Consulting",
    text: "Expert support for personnel management, marketing, HR, and real estate firms, focusing on compliance and efficient operations tailored to client needs.",
    color: "#F4F4F4",
    textColor: "#0A0A0A",
    numberColor: "#47B782",
    },
    {
    title: "Tax, Insurance & Finance",
    text: "Guidance for businesses navigating tax regulations, insurance requirements, and financial planning to optimise financial structure and minimise risks.",
    color: "#143F34",
    textColor: "#FFFFFF",
    numberColor: "#47B782",
    },
    {
    title: "Marketing & PR Consulting",
    text: "Specialised solutions for digital marketing, public relations, and advertising agencies to enhance their operational efficiency and compliance with regulations.",
    color: "#F4F4F4",
    textColor: "#0A0A0A",
    numberColor: "#47B782",
    },
    {
    title: "Local and Global E-commerce",
    text: "Comprehensive services for both basic and high-ticket e-commerce businesses, ensuring streamlined financial operations and customer satisfaction.",
    color: "#47B782",
    textColor: "#FFFFFF",
    numberColor: "#8AEE99",
    },
    {
    title: "Consulting Services",
    text: "Consulting services for organizations to streamline processes, improve efficiency, and drive business growth.",
    color: "#F4F4F4",
    textColor: "#0A0A0A",
    numberColor: "#47B782",
    },
    {
    title: "Financial Planning",
    text: "Strategic financial planning services for businesses to ensure financial stability and growth.",
    color: "#143F34",
    textColor: "#FFFFFF",
    numberColor: "#47B782",
    }
];

const HomeIndustriesWeServe = () => {
  const swiperRef = useRef(null); // Создаем реф для Swiper

  return (
    <section className="industries-we-serve">
      <div className="industries-we-serve__inner container">
        <h2>Industries We Serve</h2>

        <div className="custom-navigation">
          
          
        </div>

        <Swiper
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
              slidesPerView: 4,
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} style={{ backgroundColor: slide.color }}>
              <div className="industries-we-serve__slider-item">
                <div style={{ color: slide.numberColor }} className="number">{index + 1}</div> {/* Выводим номер слайда */}
                <h4 style={{ color: slide.textColor }}>{slide.title}</h4>
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

            <Link href="/industries" className="button">
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
