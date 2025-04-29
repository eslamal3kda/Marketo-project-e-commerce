import React from 'react'
import "./customBTN.css"

export default function CustomBTN({title,type,classes}) {
  return (
    <>
        <button type={type} className={`custom-btn ${classes} `}>{title}</button>
    </>
  )
}
