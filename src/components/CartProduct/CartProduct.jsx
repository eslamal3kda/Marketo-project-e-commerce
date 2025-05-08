import React, { useState } from "react";
import CustomBTN from "../customBTN/CustomBTN";
import { MdDelete } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function CartProduct({ productImg, productName, productPrice, wishlist, itemStatus, cartMenu,quantity }) {
    const [count, setCount] = useState(1);
    if (wishlist) {
        return (
            <div className="cart-product">
                <div className="cart-product-image">
                    <img src={productImg} alt="" />
                </div>
                <p className="cart-product-name">{productName}</p>
                <span className={`item-status ${itemStatus ? "in-stock" : "out-of-stock"}`}>{itemStatus === true ? "In Stock" : "Out Of Stock"}</span>
                <span className="cart-product-price">${productPrice}</span>
                <CustomBTN title={"add to cart"} />
                <MdDelete />
            </div>
        );
    }
    if (cartMenu) {
        return (
            <div className="cart-product-menu">
                <div className="cart-product-menu-image">
                    <img src={productImg} alt="" />
                </div>
                <div className="cart-product-menu-heading">
                    <p className="cart-product-menu-name">{productName}</p>
                    <p>
                        {quantity} x<span className="cart-product-menu-price"> ${productPrice}</span>
                    </p>
                </div>
                <IoCloseCircleOutline />
            </div>
        );
    }
    return (
        <div className="cart-product">
            <div className="cart-product-image">
                <img src={productImg} alt="" />
            </div>
            <p className="cart-product-name">{productName}</p>
            <span className="cart-product-price">${productPrice}</span>
            <div className="quantity-btns">
                <span onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}>-</span>
                <span>{count}</span>
                <span onClick={() => setCount((prev) => prev + 1)}>+</span>
            </div>
            <MdDelete />
        </div>
    );
}
