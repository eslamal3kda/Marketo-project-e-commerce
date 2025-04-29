import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function TodayGadgetsSection() {
    return (
        <section className=" today-gadget-section">
            <div className="container">
                <div className="today-gadget-header">
                    <h3>Today Gadgets & Mobile accessories</h3>
                    <div className="filter-taps">
                        <div className="tap-container active">
                            <span>On Sell</span>
                        </div>
                        <div className="tap-container">
                            <span>Hot Sell</span>
                        </div>
                        <div className="tap-container">
                            <span>Trend</span>
                        </div>
                        <div className="tap-container">
                            <span>Best Sell</span>
                        </div>
                    </div>
                </div>
                <div className="today-gadget-content">
                    <div className="today-gadget-content-products-without-offer">
                        <ProductCard
                            icons
                            title={"3d Glass Gamepad Google Glass"}
                            productName={"Mini 3D Glass"}
                            // productOldPrice={"270.00"}
                            productPrice={"220.00"}
                            imageURL={"./src/assets/images/Products/Mini3DGlass.png"}
                            rating={""}
                            discount={""}
                        />
                        <ProductCard
                            icons
                            title={"Drone Gamepad Laptop Mobile"}
                            productName={"Bluetooth Gamepad"}
                            productOldPrice={""}
                            productPrice={"199.00"}
                            imageURL={"./src/assets/images/Products/BluetoothGamepad.png"}
                            rating={""}
                            discount={""}
                        />
                        <ProductCard
                            icons
                            title={"Mobile"}
                            productName={"Apple iPhone 6s"}
                            productOldPrice={""}
                            productPrice={"299.00"}
                            imageURL={"./src/assets/images/Products/AppleIphone6s.png"}
                            rating={""}
                            discount={""}
                        />
                        <ProductCard
                            icons
                            title={"Headphone Laptop Mobile"}
                            productName={"Kotion Headset"}
                            productOldPrice={""}
                            productPrice={"29.00"}
                            imageURL={"./src/assets/images/Products/KotionHeadset.png"}
                            rating={""}
                            discount={""}
                        />
                    </div>
                    <div className="today-gadget-content-products-with-offer">
                        <ProductCard
                            icons
                            imageURL={"./src/assets/images/Products/WaterproofCamera.png"}
                            title={"Camera Drone Gamepad Mobile Speaker"}
                            productName={"Waterproof Camera"}
                            productOldPrice={"560.00"}
                            productPrice={"520.00"}
                            rating={""}
                            discount={"7"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
