import React, { useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import HomePaginationItem from "../homePaginationItem/HomePaginationItem";

export default function SinglePaginationContainer({ title, oldPrice }) {
    const data = [1, 2, 3, 4, 5, 6];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const theOldPrice = oldPrice;
    return (
        <>
            <div className="single-pagination-container">
                <div className="single-pagination-header">
                    <div className="single-pagination-header-title">
                        <strong>{title}</strong>
                    </div>
                    <div className="single-pagination-header-buttons">
                        <button className={`swiper-button-prev`} onClick={() => setCurrentPage((prev) => Math.max(prev - 1), 1)} disabled={currentPage === 1}>
                            <FaRegArrowAltCircleLeft />
                        </button>
                        <button className={`swiper-button-next`} onClick={() => setCurrentPage((prev) => prev - 1)} disabled={data.length < itemsPerPage}>
                            <FaRegArrowAltCircleRight />
                        </button>
                    </div>
                </div>
                <div className="single-pagination-content">
                    {data
                        .map((item) => <HomePaginationItem key={item} oldprice={theOldPrice} productName="product name" productPrice="$ price" productImage="./src/assets/images/Heaadphone.png" />)
                        .slice(startIndex, endIndex)}
                </div>
            </div>
        </>
    );
}
