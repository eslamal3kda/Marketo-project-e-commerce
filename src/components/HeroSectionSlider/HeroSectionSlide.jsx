import React from "react";
import CustomBTN from "../customBTN/CustomBTN";

export default function HeroSectionSlide({ imgOne, imgTwo }) {
    return (
        <>
            <div className="container">
                <div className="hero-section-content">
                    <div className="img-one">
                        <img src={imgOne} alt="" />
                    </div>
                    <div className="hero-section-content-title">
                        <span>Entire Big Collection</span>
                        <h3>SHOP WISE WITH PRICE COMPARISONS</h3>
                        <div className="hero-section-content-btns">
                            <CustomBTN classes="btn-one" title="view collections" />
                            <CustomBTN classes="btn-two" title="categories" />
                        </div>
                    </div>
                    <div className="img-two">
                        <img src={imgTwo} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
