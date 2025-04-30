import React from "react";
import BlogCard from "../BlogCard/BlogCard";

export default function BlogCategorySection() {
    const blogs = [
        {
            id: 1,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "/images/blogs/blog_1.jpg",
            date: { day: 26, month: "feb" },
            category: { path: "electeonicsBlog", label: "Electronics" },
        },
        {
            id: 2,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "/images/blogs/blog_2.jpg",
            date: { day: 19, month: "may" },
            category: { path: "menFashionBlogs", label: "Men's Fashion" },
        },
        {
            id: 3,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "/images/blogs/blog_3.jpg",
            date: { day: 23, month: "mar" },
            category: { path: "electeonicsBlog", label: "Electronics" },
        },
        {
            id: 4,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "/images/blogs/blog_4.jpg",
            date: { day: 9, month: "Apr" },
            category: { path: "securityBlogs", label: "Office & Security" },
        },
        {
            id: 5,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "/images/blogs/post-1.jpg",
            date: { day: 10, month: "Sep" },
            category: { path: "securityBlogs", label: "Office & Security" },
        },
        {
            id: 6,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "/images/blogs/post-2.jpg",
            date: { day: 2, month: "aug" },
            category: { path: "womenFashionBlogs", label: "Women's Fashion" },
        },
        {
            id: 7,
            title: "blog title",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia eveniet maiores! Reiciendis nostrum, mollitia cumque quae illo nesciunt qui!",
            imgURL: "/images/blogs/post-3.jpg",
            date: { day: 16, month: "Jan" },
            category: { path: "securityBlogs", label: "Office & Security" },
        },
    ];
    const blogCateg = [
        { id: 1, blogCategLabel: "All" },
        { id: 2, blogCategLabel: "Electronics" },
        { id: 3, blogCategLabel: "Office & Security" },
        { id: 4, blogCategLabel: "Men's Fashion" },
        { id: 5, blogCategLabel: "Women's Fashion" },
    ];
    return (
        <>
            <section className="blogs-container">

                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} id={blog.id} title={blog.title} description={blog.description} imgURL={blog.imgURL} date={blog.date} categ={blog.category} />
                    ))}
            </section>
        </>
    );
}
