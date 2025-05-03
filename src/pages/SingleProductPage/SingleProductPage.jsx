import React, { useState } from "react";
import CustomBTN from "../../components/customBTN/CustomBTN";
import ZoomImage from "../../components/ZoomImage/ZoomImage";
import { FaGooglePlusG, FaHeart, FaInstagram, FaRegHeart, FaStar } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";

export default function SingleProductPage() {
    const [count, setCount] = useState(0);
    return (
        <main className="single-product-page">
            <div className="container">
                <section className="single-product-container">
                    <div className="single-product-image">
                        <ZoomImage imageUrl={"/images/watch_2.png"} />
                    </div>
                    <div className="single-product-info">
                        <div className="single-product-info-header">
                            <h2>product name</h2>
                            <div className="rating">
                                <span className="stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>{" "}
                                <span className="review">{`(6 reviews)`}</span>
                            </div>
                        </div>
                        <div className="single-product-info-details">
                            <div className="price">
                                <del>$658</del>
                                <span>$589</span>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur ullam placeat, fugiat facilis minus et voluptatibus excepturi vitae quibusdam porro accusamus
                                distinctio ipsum sunt perferendis eius maxime, dicta temporibus. Dolor nihil architecto totam quibusdam repellat iusto, iure facilis veritatis dignissimos consequuntur
                                ipsam accusamus fugit recusandae labore nesciunt voluptatem rem.
                            </p>
                        </div>
                        <div className="single-product-info-more-details">
                            <p>
                                <span>sku: </span>
                                <strong>3423645</strong>
                            </p>
                            <p>
                                <span>category: </span> <strong>electoric</strong>
                            </p>
                            <p>
                                <span>tags: </span> <strong>pc , laptop</strong>
                            </p>
                        </div>
                        <div className="single-product-info-btns">
                            <div className="single-product-info-btns-count">
                                <span onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>-</span>
                                <span>{count}</span>
                                <span onClick={() => setCount((prev) => prev + 1)}>+</span>
                            </div>
                            <div className="single-product-info-btns-add-to-cart">
                                <CustomBTN title={"Add to card"} />
                            </div>
                        </div>
                        <div className="single-product-info-social">
                            <div className="single-product-info-social-icons">
                            <a href="">
                                <div className="icon">
                                    <BsFacebook />
                                </div>
                            </a>
                            <a href="">
                                <div className="icon">
                                    <FaXTwitter />
                                </div>
                            </a>
                            <a href="">
                                <div className="icon">
                                    <FaInstagram />
                                </div>
                            </a>
                            <a href="">
                                <div className="icon">
                                    <FaGooglePlusG />
                                </div>
                            </a>

                            </div>
                            <div className="add-to-wishlist">
                                <span>
                                    {" "}
                                    <FaRegHeart /> Add to Wishlist
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
