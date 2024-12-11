"use client";
import { useRef } from "react";
import Link from "next/link";
import { ButtonIcon } from "../../../global_components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const PostsSlider = ({ posts }) => {
  const swiperRef = useRef(null);

  return (
    <section className="posts-slider">
      <div className="posts-slider__inner container">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.slug}>
              <Link
                href={`/insights/${post.slug}`}
                className="insights-post__wrapper"
              >
                <div className="insights-post">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="post-image"
                    />
                  )}
                  <div className="content">
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                    <div className="insights-post__link">
                      Read
                      <ButtonIcon />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="bottom">
          <button
            className="slider-button prev-button"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none"><rect x="47.5" y="48" width="47" height="47" rx="23.5" transform="rotate(180 47.5 48)" fill="white"></rect><rect x="47.5" y="48" width="47" height="47" rx="23.5" transform="rotate(180 47.5 48)" stroke="#143F34"></rect><path d="M15.636 23.7931C15.4486 23.9807 15.3433 24.235 15.3433 24.5001C15.3433 24.7653 15.4486 25.0196 15.636 25.2071L21.293 30.8641C21.3853 30.9597 21.4956 31.0358 21.6176 31.0882C21.7396 31.1407 21.8709 31.1682 22.0036 31.1694C22.1364 31.1705 22.2681 31.1452 22.391 31.095C22.5139 31.0447 22.6256 30.9704 22.7194 30.8765C22.8133 30.7826 22.8876 30.671 22.9379 30.5481C22.9882 30.4252 23.0135 30.2935 23.0123 30.1607C23.0111 30.028 22.9836 29.8967 22.9312 29.7747C22.8787 29.6527 22.8026 29.5424 22.707 29.4501L18.757 25.5001L32 25.5001C32.2653 25.5001 32.5196 25.3948 32.7072 25.2073C32.8947 25.0197 33 24.7654 33 24.5001C33 24.2349 32.8947 23.9806 32.7072 23.793C32.5196 23.6055 32.2653 23.5001 32 23.5001L18.757 23.5001L22.707 19.5501C22.8892 19.3615 22.99 19.1089 22.9877 18.8467C22.9854 18.5845 22.8803 18.3337 22.6949 18.1483C22.5095 17.9629 22.2586 17.8577 21.9964 17.8555C21.7343 17.8532 21.4817 17.954 21.293 18.1361L15.636 23.7931Z" fill="#143F34"></path></svg>
          </button>
          
          <Link href="/insights" className="button fadeInUp">
            More Insights
          </Link>

          <button
            className="slider-button next-button"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none"><rect x="0.5" y="1" width="47" height="47" rx="23.5" fill="white"></rect><rect x="0.5" y="1" width="47" height="47" rx="23.5" stroke="#143F34"></rect><path d="M32.364 25.2069C32.5515 25.0193 32.6568 24.765 32.6568 24.4999C32.6568 24.2347 32.5515 23.9804 32.364 23.7929L26.707 18.1359C26.6148 18.0403 26.5044 17.9642 26.3824 17.9118C26.2604 17.8593 26.1292 17.8318 25.9964 17.8306C25.8636 17.8295 25.7319 17.8548 25.609 17.905C25.4861 17.9553 25.3745 18.0296 25.2806 18.1235C25.1867 18.2174 25.1125 18.329 25.0622 18.4519C25.0119 18.5748 24.9866 18.7065 24.9877 18.8393C24.9889 18.972 25.0165 19.1033 25.0689 19.2253C25.1213 19.3473 25.1975 19.4576 25.293 19.5499L29.243 23.4999L16 23.4999C15.7348 23.4999 15.4804 23.6052 15.2929 23.7927C15.1054 23.9803 15 24.2346 15 24.4999C15 24.7651 15.1054 25.0194 15.2929 25.207C15.4804 25.3945 15.7348 25.4999 16 25.4999L29.243 25.4999L25.293 29.4499C25.1108 29.6385 25.01 29.8911 25.0123 30.1533C25.0146 30.4155 25.1198 30.6663 25.3052 30.8517C25.4906 31.0371 25.7414 31.1423 26.0036 31.1445C26.2658 31.1468 26.5184 31.046 26.707 30.8639L32.364 25.2069Z" fill="#143F34"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PostsSlider;
