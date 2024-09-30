"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonIcon } from '../../../global_components/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const HomeInsights = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="home-insights">
      <div className="home-insights__inner container">
        <div className="top fadeInUp">
          <h3>Latest company insights</h3>
          <Link href="#" className="button">More Insights
            <ButtonIcon />
          </Link>
        </div>

        <div className="home-insights-slider">
          {isMobile ? (
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              loop={true}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className="item fadeInUp">
                  <Image
                    src="/images/insight-img.svg"
                    quality={100}
                    width={840}
                    height={340}
                    alt="Blog post image"
                  />
                  <div className="content">
                    <h4>Heading</h4>
                    <p>Preview</p>
                    <Link href="#" className="insight-button">Read
                      <ButtonIcon />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item fadeInUp">
                  <Image
                    src="/images/insight-img.svg"
                    quality={100}
                    width={408}
                    height={340}
                    alt="Blog post image"
                  />
                  <div className="content">
                    <h4>Heading</h4>
                    <p>Preview</p>
                    <Link href="#" className="insight-button">Read
                      <ButtonIcon />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item fadeInUp">
                  <Image
                    src="/images/insight-img.svg"
                    quality={100}
                    width={408}
                    height={340}
                    alt="Blog post image"
                  />
                  <div className="content">
                    <h4>Heading</h4>
                    <p>Preview</p>
                    <Link href="#" className="insight-button">Read
                      <ButtonIcon />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="items">
              <div className="item fadeInUp">
                <Image
                  src="/images/insight-img.svg"
                  quality={100}
                  width={840}
                  height={340}
                  alt="Blog post image"
                />
                <div className="content">
                  <h4>Heading</h4>
                  <p>Preview</p>
                  <Link href="#" className="insight-button">Read
                    <ButtonIcon />
                  </Link>
                </div>
              </div>

              <div className="item fadeInUp">
                <Image
                  src="/images/insight-img.svg"
                  quality={100}
                  width={408}
                  height={340}
                  alt="Blog post image"
                />
                <div className="content">
                  <h4>Heading</h4>
                  <p>Preview</p>
                  <Link href="#" className="insight-button">Read
                    <ButtonIcon />
                  </Link>
                </div>
              </div>

              <div className="item fadeInUp">
                <Image
                  src="/images/insight-img.svg"
                  quality={100}
                  width={408}
                  height={340}
                  alt="Blog post image"
                />
                <div className="content">
                  <h4>Heading</h4>
                  <p>Preview</p>
                  <Link href="#" className="insight-button">Read
                    <ButtonIcon />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeInsights;
