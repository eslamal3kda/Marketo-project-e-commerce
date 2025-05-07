import React, { useState } from "react";
import CustomBTN from "../customBTN/CustomBTN";
import { MdDelete } from "react-icons/md";

export default function WishlistTableRowComponent({ itemImg, itemName, itemPrice, itemStatus, wishlist }) {
    const [count,setCount] = useState(1)
    if (wishlist) {
        return (
            <>
            <tr>
                <td className="delete-item">
                    <MdDelete />
                </td>
                <td className="item-image">
                    <img src={itemImg} alt="" />
                </td>
                <td className="item-name">{itemName}</td>
                <td className="item-price">${itemPrice}</td>
                <td className={`item-status ${itemStatus ? "in-stock" : "out-of-stock"}`}>{itemStatus === true ? "In Stock" : "Out Of Stock"}</td>
                    <td className="item-action">
                        <CustomBTN title={"add to cart"} type={"button"} classes={"wishlist-btn"} />
                    </td>
            </tr>
        </>
        )
    }
    return (
        <>
            <tr>
                <td className="delete-item">
                    <MdDelete />
                </td>
                <td className="item-image">
                    <img src={itemImg} alt="" />
                </td>
                <td className="item-name">{itemName}</td>
                <td className="item-price">${itemPrice}</td>
                <td className="item-quantity">
                    <div className="quantity-btns">
                        <span onClick={()=> setCount(prev=> prev > 1 ? prev - 1 : 1)}>-</span>
                        <span>{count}</span>
                        <span onClick={()=> setCount(prev => prev + 1)}>+</span>
                    </div>
                </td>
                <td>${itemPrice * count }</td>
            </tr>
        </>
    );
}
