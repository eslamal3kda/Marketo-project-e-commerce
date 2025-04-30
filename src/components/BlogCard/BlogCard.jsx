import React from "react";
import { Link} from "react-router-dom";

export default function BlogCard({id,title,description,imgURL,date,categ}) {
    return (
        <div className="blog-card">
            <Link to={`/blogs/${categ.path}/${id}`}>
                <div className="blog-image">
                    <img src={imgURL} alt="" />
                    <div className="blog-date">
                        <span>{date.day}</span>
                        <span>{date.month}</span>
                    </div>
                </div>
            </Link>
            <div className="blog-content">
                <Link to={`/blogs/${categ.path}/${id}`}><h3>{title}</h3></Link>
                <p>{description}</p>
            </div>
        </div>
    );
}
