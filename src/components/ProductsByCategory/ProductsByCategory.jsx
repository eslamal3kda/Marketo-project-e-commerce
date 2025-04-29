import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function ProductsByCategory({categoryName,categoryClass}) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <div className="products-by-category">
                <div className={`category-name ${categoryClass}`}>
                    
                    <div className="overlay"><h2>{categoryName}</h2></div>
                </div>
                <div className="category-pics">
                    <Swiper className="swiper" modules={[Pagination]} pagination={{clickable:true,el:".swiper-pagination"}}>
                        <SwiperSlide className="swiper-slide">
                            <img src="./src/assets/images/speaker_2.png" alt="No pic" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./src/assets/images/speaker_2.png" alt="No pic" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="./src/assets/images/speaker_2.png" alt="No pic" />
                        </SwiperSlide>
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </div>
                <div className="category-products">
                    {arr.map((product) => <ProductCard key={product} productName={"Test "} imageURL={"./src/assets/images/game_controller_31.png"} productPrice={"20"} productOldPrice={"30"} />).slice(0, 8)}
                </div>
            </div>
        </>
    );
}
