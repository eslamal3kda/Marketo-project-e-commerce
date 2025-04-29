import React from 'react'

export default function HomePaginationItem({productName,productPrice,productImage ,oldprice}) {
  return (
    <>
        <div className="home-pagination-card">
            <div className="home-pagination-card-image">
                <img src={productImage} alt="card image" />
            </div>
            <div className="home-pagination-card-details">
                <b>{productName}</b>
                <div className="price">
                    {oldprice && <del>{oldprice}</del>}
                    <span>{productPrice}</span>
                </div>
            </div>
        </div>
    </>
  )
}
