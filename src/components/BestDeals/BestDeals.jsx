import React from "react";
import FilterTabs from "../FilterTabs/FilterTabs";
import ProductCard from "../ProductCard/ProductCard";

export default function BestDeals() {
    const products = [
        { id: 1, productName: "Portable Speaker", imageURL: "./src/assets/images/products/portable-speaker.jpg", productPrice: "12.00", productOldPrice: "15.00" },
        { id: 2, productName: "LED Projector", imageURL: "./src/assets/images/products/LED-Projector.jpg", productPrice: "30.00", productOldPrice: "40.00" },
        { id: 3, productName: "LED Television", imageURL: "./src/assets/images/products/LED-Television.png", productPrice: "569.00", productOldPrice: "670.00" },
        { id: 4, productName: "3D Glass", imageURL: "./src/assets/images/products/3D-VR-Glass.jpg", productPrice: "540.00", productOldPrice: "640.00" },
        { id: 5, productName: "Gamming Headphone", imageURL: "./src/assets/images/products/pink-gaming-headphone.jpg", productPrice: "42.00", productOldPrice: "69.00" },
        { id: 6, productName: "Touchscreen Laptop", imageURL: "./src/assets/images/products/touchscreen-laptop.jpg", productPrice: "540.00", productOldPrice: "640.00" },
    ];
    return (
        <>
            <section className=" best-deals-section">
                <div className="container best-deals-container">
                    <div className="best-deals-banner">
                        <img src="./src/assets/images/feature_banner.png" alt="" />
                    </div>
                    <div className="best-deals-products">
                        <FilterTabs title="best deals" />
                        <div className="best-deals-products-container">
                            {products.map((product)=><ProductCard
                                productOldPrice={product.productOldPrice}
                                productPrice={product.productPrice}
                                rating
                                icons
                                imageURL={product.imageURL}
                                productName={product.productName}
                            />)}
                            {/* <ProductCard
                                productOldPrice={"15.00"}
                                productPrice={"12.00"}
                                rating
                                icons
                                imageURL={"./src/assets/images/products/portable-speaker.jpg"}
                                productName={"portable speaker"}
                            />

                            <ProductCard
                                productPrice={"30.00"}
                                productOldPrice={"40.00"}
                                rating={""}
                                icons
                                imageURL={"./src/assets/images/products/LED-Projector.jpg"}
                                productName={"LED projector"} />

                            <ProductCard
                                productOldPrice={"670.00"}
                                productPrice={"569.00"}
                                rating={""}
                                icons
                                imageURL={"./src/assets/images/products/LED-Television.png"}
                                productName={"LED Television"}
                            />

                            <ProductCard productOldPrice={"640.00"} productPrice={"540.00"} rating={""} icons imageURL={"./src/assets/images/products/3D-VR-Glass.jpg"} productName={"3D Glass"} />

                            <ProductCard
                                productOldPrice={"69.00"}
                                productPrice={"42.00"}
                                rating={""}
                                icons
                                imageURL={"./src/assets/images/products/pink-gaming-headphone.jpg"}
                                productName={"gamming headphone"}
                            />
                            <ProductCard
                                productOldPrice={"640.00"}
                                productPrice={"540.00"}
                                rating={""}
                                icons
                                imageURL={"./src/assets/images/products/touchscreen-laptop.jpg"}
                                productName={"touchscreen laptop"}
                            /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
