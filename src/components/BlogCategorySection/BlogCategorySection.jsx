import React from "react";
import BlogCard from "../BlogCard/BlogCard";

export default function BlogCategorySection() {
    const blogs = [
        {
            id: 1,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "./src/assets/images/blogs/blog_1.jpg",
            date: { day: 26, month: "feb" },
        },
        {
            id: 2,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "./src/assets/images/blogs/blog_2.jpg",
            date: { day: 19, month: "may" },
        },
        {
            id: 3,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "./src/assets/images/blogs/blog_3.jpg",
            date: { day: 23, month: "mar" },
        },
        {
            id: 4,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "./src/assets/images/blogs/blog_4.jpg",
            date: { day: 9, month: "Apr" },
        },
        {
            id: 5,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "./src/assets/images/blogs/post-1.jpg",
            date: { day: 10, month: "Sep" },
        },
        {
            id: 6,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "./src/assets/images/blogs/post-2.jpg",
            date: { day: 2, month: "aug" },
        },
        {
            id: 7,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "./src/assets/images/blogs/post-3.jpg",
            date: { day: 16, month: "Jan" },
        },
    ];
    return (
        <section className="blogs-container">
            {blogs.map((blog)=><BlogCard key={blog.id} title={blog.title} description={blog.description} imgURL={blog.imgURL} date={blog.date}/>)}
        </section>
    );
}
