import React, { useState } from "react";
import OfferComponent from "../OfferComponent/OfferComponent";
import { FaRegStar, FaStar } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import ProductPopUp from "../ProductPopUp/ProductPopUp";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard({ title, productName, productOldPrice, productPrice, imageURL, rating, discount, icons, details }) {
    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate()
    return (
        <>
            <ProductPopUp
                setShowPopUp={setShowPopUp}
                showPopUp={showPopUp}
                productName={productName}
                imageURL={imageURL}
                productPrice={productPrice}
                productOldPrice={productOldPrice}
                rating={rating}
                details={details}
            />
            <div className="product-card">
                        {rating && (
                            <div className="product-card-rating">
                                {Array.from({ length: 5 }, (_, index) => <span className="rating-icons"> {(index < rating ? <FaStar key={index} /> : <FaRegStar key={index} /> )}</span>)}
                            </div>
                        )}
                    <div className="product-card-image" >
                        <Link to={"/products/id/product-category"}>
                            <img src={imageURL} alt="" />
                        </Link>
                        {icons && (
                            <div className="product-card-image-icons">
                                <div className="single-icon">
                                    <AiOutlineShoppingCart />
                                </div>
                                <div className="single-icon" onClick={() => setShowPopUp(!showPopUp)}>
                                    <MdOutlineRemoveRedEye />
                                </div>
                                <div className="single-icon">
                                    <IoHeartOutline />
                                </div>
                            </div>
                        )}
                    </div>
                <div className="product-card-content">
                    {title && <span className="product-card-content-title">{title}</span>}
                    {productName && <strong onClick={()=>navigate("/products/id/product-category")}>{productName}</strong>}
                    <div className="product-card-content-price">
                        {productOldPrice && <del>{productOldPrice}$</del>}
                        {productPrice && <p className="product-card-content-price-current">{productPrice}$</p>}
                    </div>
                    {details && <p className="product-card-content-details">{details}</p>}
                </div>
                {discount && <OfferComponent discount={discount} />}
            </div>
        </>
    );
}
