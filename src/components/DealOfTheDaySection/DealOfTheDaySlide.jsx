import React from "react";
import CustomBTN from "../customBTN/CustomBTN";

export default function DealOfTheDaySlide({ slideImage, title, productName, dealPrice, oldPrice }) {
    return (
        <div className="deal-of-the-day-content container">
            <div className="deal-of-the-day-content-image">
                <img src={slideImage} alt="" />
            </div>
            <div className="deal-of-the-day-content-details">
                <span className="product-title">{title}</span>
                <h3 className="product-name">{productName}</h3>
                <div className="price-details">
                    <del className="old-price">${oldPrice}</del>
                    <span className="recent-price">${dealPrice} </span>
                </div>
                <div className="deal-content-btns">
                    <CustomBTN classes={"buy-now"} title={"buy now"}/>
                    <CustomBTN classes={"view-collections"} title={"view collections"}/>
                </div>
            </div>
        </div>
    );
}
