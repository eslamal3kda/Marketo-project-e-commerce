import React, { useEffect, useState } from "react";
import CustomBTN from "../customBTN/CustomBTN";
import { IoCloseSharp } from "react-icons/io5";

export default function ProductPopUp({ setShowPopUp, showPopUp, productName, imageURL, productPrice, productOldPrice, details, rating }) {
    const [productCount,setProductCount] = useState(0)
    
    return (
        <>
            <section className={`pop-up ${showPopUp ? "" : "hidden"}`}>
                <div className="pup-up-product pup-up-product-box">
                    <div className="pup-up-product-img">
                        <img src={imageURL} alt="" />
                    </div>
                    <div className="pup-up-product-content">
                        <h3>{productName}</h3>
                        <div className="pup-up-product-content-details">
                            <p>Category: "category name"</p>
                            <p className="pup-up-product-content-details-product-details">{details}</p>
                            <div className="pup-up-product-content-details-product-price">
                                <sup>
                                    <del>{productOldPrice}</del>
                                </sup>
                                <span>{productPrice}</span>
                            </div>
                        </div>
                        <div className="cart-btns">
                            <div className="">
                                <span className="btns" onClick={()=>setProductCount(prev=> prev > 0 ? prev - 1 : 0)}>-</span>
                                <span>{productCount}</span>
                                <span className="btns" onClick={()=>setProductCount(prev=> prev + 1)}>+</span>
                            </div>
                            <CustomBTN title={"add to cart"} />
                        </div>
                        <IoCloseSharp onClick={() => setShowPopUp(false)} />
                    </div>
                </div>
            </section>
        </>
    );
}
