import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

export default function SingleCategory({ label, count, value, rate }) {
    if (rate) {
        return (
            <>
                <div className="filter-content-categories-items-rate-single-rate">
                    <input type="radio" id={value} name="rating" />
                    <label htmlFor={value}>{Array.from({ length: 5 }, (_, index) => <label htmlFor={value}> {(index < rate ? <FaStar key={index} /> : <FaRegStar key={index} /> )}</label>)}</label>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="filter-content-categories-items-category-single-category">
                <div class="filter-content-categories-items-category-single-category-category-name">
                    <input type="checkbox" id={value} name={value} />
                    <label htmlFor={value}>{label}</label>
                </div>
                <span>({count})</span>
            </div>
        </>
    );
}
