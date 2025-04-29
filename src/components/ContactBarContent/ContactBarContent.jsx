import React from 'react'

export default function ContactBarContent({title,header,description}) {
  return (
    <>
        <div className="contact-bar-layout-content">
              <p>{ title}</p>
            <h3>{header}</h3>
            <span>{description}</span>
        </div>
    </>
  )
}
