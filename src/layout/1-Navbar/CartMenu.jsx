import React from "react";
import { MdClose } from "react-icons/md";
import CartProduct from "../../components/CartProduct/CartProduct";
import CustomBTN from "../../components/customBTN/CustomBTN";
import { Link } from "react-router-dom";

export default function CartMenu({ isCartMenuOpen, setIsCartMenuOpen }) {
    const products = [
        {
            id: 1,
            productName: "Portable Speaker",
            stockStatus: true,
            imageURL: "./src/assets/images/products/portable-speaker.jpg",
            productPrice: "12.00",
            productOldPrice: "15.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 2,
            productName: "LED Projector",
            stockStatus: true,
            imageURL: "./src/assets/images/products/LED-Projector.jpg",
            productPrice: "30.00",
            productOldPrice: "40.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 3,
            productName: "LED Television",
            stockStatus: true,
            imageURL: "./src/assets/images/products/LED-Television.png",
            productPrice: "569.00",
            productOldPrice: "670.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 4,
            productName: "3D Glass",
            stockStatus: true,
            imageURL: "./src/assets/images/products/3D-VR-Glass.jpg",
            productPrice: "540.00",
            productOldPrice: "640.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 5,
            productName: "Gamming Headphone",
            stockStatus: true,
            imageURL: "./src/assets/images/products/pink-gaming-headphone.jpg",
            productPrice: "42.00",
            productOldPrice: "69.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 6,
            productName: "Touchscreen Laptop",
            stockStatus: true,
            imageURL: "./src/assets/images/products/touchscreen-laptop.jpg",
            productPrice: "540.00",
            productOldPrice: "640.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 7,
            productName: "Portable Speaker",
            stockStatus: true,
            imageURL: "./src/assets/images/products/portable-speaker.jpg",
            productPrice: "12.00",
            productOldPrice: "15.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 8,
            productName: "LED Projector",
            stockStatus: false,
            imageURL: "./src/assets/images/products/LED-Projector.jpg",
            productPrice: "30.00",
            productOldPrice: "40.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 9,
            productName: "LED Television",
            stockStatus: true,
            imageURL: "./src/assets/images/products/LED-Television.png",
            productPrice: "569.00",
            productOldPrice: "670.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 10,
            productName: "3D Glass",
            stockStatus: true,
            imageURL: "./src/assets/images/products/3D-VR-Glass.jpg",
            productPrice: "540.00",
            productOldPrice: "640.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 11,
            productName: "Gamming Headphone",
            stockStatus: false,
            imageURL: "./src/assets/images/products/pink-gaming-headphone.jpg",
            productPrice: "42.00",
            productOldPrice: "69.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
        {
            id: 12,
            productName: "Touchscreen Laptop",
            stockStatus: true,
            imageURL: "./src/assets/images/products/touchscreen-laptop.jpg",
            productPrice: "540.00",
            productOldPrice: "640.00",
            quantity: 0,
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
    ];
    return (
        <div className={`cart-menu  ${isCartMenuOpen ? "show" : "hidden"}`}>
            <div className="cart-menu-header">
                <MdClose onClick={() => setIsCartMenuOpen(false)} />
                <h3>shopping Cart</h3>
            </div>
            <div className={`cart-menu-content `}>
                {products.map((product) => (
                    <CartProduct cartMenu productImg={product.imageURL} productName={product.productName} productPrice={product.productPrice} quantity={product.quantity + 1} />
                ))}

                <p className="subtotal"><span>subtotal :</span> <strong>00$</strong></p>
              <CustomBTN  title={"view cart"}/>
            </div>
        </div>
    );
}
