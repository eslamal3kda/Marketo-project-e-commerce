import React from 'react'

export default function OfferComponent({discount}) {
  return (
    <>
        <div className='offer'>
            <strong>{discount}%</strong>
            <span>offer</span>
        </div>
    </>
  )
}
