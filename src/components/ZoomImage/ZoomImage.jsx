import React, { useRef } from "react";
import './ZoomImage.css'; 

export default function ZoomImage({imageUrl }) {
    // const containerRef = useRef(null);

    // const handleMouseMove = (e) => {
    //     const container = containerRef.current;
    //     const rect = container.getBoundingClientRect();

    //     const x = e.clientX - rect.left;
    //     const y = e.clientY - rect.top;

    //     const xPercent = 100 - (x / rect.width) * 100;
    //     const yPercent = 100 - (y / rect.height) * 100;

    //     container.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    // };

    // const handleMouseLeave = () => {
    //     const container = containerRef.current;
    //     container.style.backgroundPosition = "center";
    // };
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
  
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const xPercent = (x / rect.width) * 100;   
      const yPercent = (y / rect.height) * 100;
  
      container.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    };
  
    const handleMouseLeave = () => {
      const container = containerRef.current;
      container.style.backgroundPosition = 'center';
    };
    return <div
        ref={containerRef}
        className="zoom-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}></div>;
}
