import React from "react";

export default function SpecialHeading({ heading, title }) {
    return (
        <div className="special-heading">
            <h2>our {heading}</h2>
            <h3>{title}</h3>
            <span>{heading}</span>
        </div>
    );
}
