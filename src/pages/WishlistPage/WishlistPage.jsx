import React from "react";
import WishlistTableRowComponent from "../../components/wishlistTableRowComponent/WishlistTableRowComponent";
import ContactBar from "../../components/contactBar/ContactBar";
import CartProduct from "../../components/CartProduct/CartProduct";

export default function WishlistPage() {
    const products = [
        {
            id: 1,
            productName: "Portable Speaker",
            stockStatus: true,
            imageURL: "./src/assets/images/products/portable-speaker.jpg",
            productPrice: "12.00",
            productOldPrice: "15.00",
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
            details:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus.",
        },
    ];
    return (
        <main className="wishlist-page">
            <div className="container">
                <h2>my wishlist</h2>
                <div className="wishlist-table">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>product name</th>
                                <th>unit price</th>
                                <th>stock status</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <WishlistTableRowComponent itemName={product.productName} itemPrice={product.productPrice} itemStatus={product.stockStatus} itemImg={product.imageURL} wishlist/>
                            ))}
                        </tbody>
                    </table>
                </div>
                {products.map((product)=> <CartProduct key={product.id} productImg={product.imageURL} productName={product.productName} productPrice={product.productPrice} itemStatus={product.stockStatus} wishlist />)}
                
            </div>
            <ContactBar />
        </main>
    );
}
