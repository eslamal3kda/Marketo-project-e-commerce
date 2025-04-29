import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSectionSlide from "../HeroSectionSlider/HeroSectionSlide";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
export default function HeroSection() {
    const heroProducts = [
        { id: 1, imgOne: "./src/assets/images/headphone_1.png", imgTwo: "./src/assets/images/speaker_1.png" },
        { id: 2, imgOne: "./src/assets/images/watch_2.png", imgTwo: "./src/assets/images/speaker_2.png" },
        { id: 3, imgOne: "./src/assets/images/WaterproofCamera.png", imgTwo: "./src/assets/images/speaker_1.png" },
    ];
    return (
        <section className="hero-section">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                pagination={{clickable:true}}
                navigation={{prevEl:".swiper-btn-prev", nextEl:".swiper-btn-next"}}
                autoplay={{ delay: 6000 }}
                loop={true}
                slidesPerView={1}>
                {heroProducts.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <HeroSectionSlide imgOne={slide.imgOne} imgTwo={slide.imgTwo}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="navigation-btns">
                <HiArrowNarrowLeft className="swiper-btn-prev" />
                <HiArrowNarrowRight className="swiper-btn-next" />
            </div>
            {/* <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation={{ prevEl: ".swiper-btn-prev", nextEl: ".swiper-btn-next" }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                loop={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}>
                {heroProducts.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <HeroSectionSlide imgOne={slide.imgOne} imgTwo={slide.imgTwo} />
                    </SwiperSlide>
                ))}
            </Swiper> */}
            {/* <div className="nav-arrows">
                <HiArrowNarrowLeft className="swiper-btn-prev" />
                <HiArrowNarrowRight className="swiper-btn-next" />
            </div> */}
        </section>
    );
}
