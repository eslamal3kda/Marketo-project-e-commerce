import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({title,description,imgURL,date}) {
    return (
        <div className="blog-card">
            <Link>
                <div className="blog-image">
                    <img src={imgURL} alt="" />
                    <div className="blog-date">
                        <span>{date.day}</span>
                        <span>{date.month}</span>
                    </div>
                </div>
            </Link>
            <div className="blog-content">
                <Link><h3>{title}</h3></Link>
                <p>{description}</p>
            </div>
        </div>
    );
}
