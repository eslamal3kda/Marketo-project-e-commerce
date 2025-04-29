import React from "react";
import OfferComponent from "../OfferComponent/OfferComponent";

export default function FeaturedProducts() {
    return (
        <>
            <section className="featured-products-section x-padding page-test">
                <div className="featured-products">
                    <div className="featured-products-header">
                        <p>Marketo Collections</p>
                        <h2>
                            <strong>Featured Products</strong>
                        </h2>
                    </div>
                    <div className="featured-products-content">
                        <div className="featured-products-content-offer">
                            <div className="featured-products-content-offer-product">
                                <div className="featured-products-content-header">
                                    <p>Featured Product Laptop</p>
                                    <h4>
                                        <strong>Xpeed Laptop</strong>
                                    </h4>
                                </div>
                                <img src="./src/assets/images/FeaturedProducts/laptop_features_1.jpg" alt="" />
                                <OfferComponent discount={15} />
                            </div>
                        </div>
                        <div className="featured-products-content-noOffer">
                            <div className="featured-products-content-noOffer-product">
                                <div className="featured-products-content-header">
                                    <p>FMinimal Product</p>
                                    <h6>
                                        <strong>Jhasu Bottle</strong>
                                    </h6>
                                </div>
                                <img src="./src/assets/images/FeaturedProducts/Jhasu-Bottle.png" alt="" />
                            </div>
                            <div className="featured-products-content-noOffer-product">
                                <div className="featured-products-content-header">
                                    <p>Future Product</p>
                                    <h6>
                                        <strong>Zhndu Mobile</strong>
                                    </h6>
                                </div>
                                <img src="./src/assets/images/FeaturedProducts/Zhndu-Mobile-1.png" alt="" />
                            </div>
                            <div className="featured-products-content-noOffer-product">
                                <div className="featured-products-content-header">
                                    <p>Minimal Furniture</p>
                                    <h6>
                                        <strong>Ximax Chair</strong>
                                    </h6>
                                </div>
                                <img src="./src/assets/images/FeaturedProducts/Ximax-Chair.png" alt="" />
                            </div>
                            <div className="featured-products-content-noOffer-product">
                                <div className="featured-products-navigation-button">All Products</div>
                                <img src="./src/assets/images/FeaturedProducts/pattern_bg.jpg" alt="" />
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </>
    );
}
