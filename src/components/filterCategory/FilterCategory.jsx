import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import SingleCategory from "../SingelCategory/SingleCategory";

export default function FilterCategory({ categ, active, handleRange, range, handleMenu, item,searchValue,setSearchValue }) {
    const categoryOptions = [
        { id: 1, value: "allCategories", label: "All Categories", count: 1499 },
        { id: 2, value: "electronics", label: "Electronics", count: 139 },
        { id: 3, value: "menFashion", label: "Men's Fashion", count: 304 },
        { id: 4, value: "womenFashion", label: "Women's Fashion", count: 232 },
        { id: 5, value: "security", label: "Office & Security", count: 455 },
        { id: 6, value: "camera", label: "Camera", count: 132 },
        { id: 7, value: "drone", label: "Drone", count: 36 },
        { id: 8, value: "gamepad", label: "Gamepad", count: 62 },
        { id: 9, value: "mobile", label: "Mobile", count: 54 },
        { id: 10, value: "speaker", label: "Speaker", count: 85 },
    ];
    const rating = [
        { id: 1, rate: 1, value: "rate-one" },
        { id: 2, rate: 2, value: "rate-two" },
        { id: 3, rate: 3, value: "rate-three" },
        { id: 4, rate: 4, value: "rate-four" },
        { id: 5, rate: 5, value: "rate-five" },
    ];
    return (
        <>
            <div className="filter-content-categories">
                <div className={`filter-content-categories-heading ${active ? "active" : ""}`} onClick={() => handleMenu(item.id)}>
                    <h4>{categ}</h4>
                    {active ? <IoIosArrowDown /> : <MdArrowForwardIos />}
                </div>
                {categ == "name" && active && (
                    <div className="filter-content-categories-items">
                        <div className="filter-content-categories-items-name">
                            <label htmlFor="productName">Product:</label>
                            <input id="productName" name="productName" type="text" placeholder="Enter Product Name" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}  />
                        </div>
                    </div>
                )}
                {categ == "price" && active && (
                    <div className="filter-content-categories-items">
                        <div className="filter-content-categories-items-price">
                            <input type="range" value={range} max={1000} onChange={(e) => handleRange(e)} />
                            <span>price : 0$ - {range}$</span>
                        </div>
                    </div>
                )}
                {categ == "category" && active && (
                    <div className="filter-content-categories-items">
                        <div className="filter-content-categories-items-category">
                            {categoryOptions.map((categ) => (
                                <SingleCategory key={categ.id} value={categ.value} label={categ.label} count={categ.count} />
                            ))}
                        </div>
                    </div>
                )}
                {categ == "rate" && active && (
                    <div className="filter-content-categories-items">
                        <div className="filter-content-categories-items-rate">
                            {rating.map((rate) => (
                                <SingleCategory key={rate.id} value={rate.value} rate={rate.rate} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
