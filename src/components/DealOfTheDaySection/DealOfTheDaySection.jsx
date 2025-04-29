import React from "react";
import DealOfTheDaySlide from "./DealOfTheDaySlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

export default function DealOfTheDaySection() {
    return (
        <section className="deal-of-the-day-section ">
            <Swiper modules={{ Navigation }} navigation={{ prevEl: ".swiper-btn-prev", nextEl: ".swiper-btn-next" }} slidesPerView={1}>
                <SwiperSlide>
                    <DealOfTheDaySlide
                        slideImage={"./src/assets/images/game_controller_31.png"}
                        title={"computer accessories"}
                        productName={"game controller"}
                        oldPrice={"60.00"}
                        dealPrice={"40.00"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <DealOfTheDaySlide
                        slideImage={"./src/assets/images/gaming_console.png"}
                        title={"gamepad, gaming accessories"}
                        productName={"camera drone"}
                        oldPrice={"60.00"}
                        dealPrice={"40.00"}
                    />
                </SwiperSlide>
            </Swiper>
            <div className="watermark">deal of the day</div>
            <div className="navigation-btns">
                <ImArrowLeft2 className="swiper-btn-prev" />
                <ImArrowRight2 className="swiper-btn-next" />
            </div>
        </section>
    );
}
