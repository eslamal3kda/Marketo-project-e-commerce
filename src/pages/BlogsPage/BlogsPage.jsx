import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import ContactBar from "../../components/contactBar/ContactBar";
import { Swiper, SwiperSlide } from "swiper/react";
// import {EffectFade} from "swiper/modules";
// import "swiper/css";

export default function BlogsPage() {
    const blogs = [
        { id: 1, title: "", description: "", category: { path: "", label: "All" } },
        { id: 2, title: "", description: "", category: { path: "electeonicsBlog", label: "Electronics" } },
        { id: 3, title: "", description: "", category: { path: "securityBlogs", label: "Office & Security" } },
        { id: 4, title: "", description: "", category: { path: "menFashionBlogs", label: "Men's Fashion" } },
        { id: 5, title: "", description: "", category: { path: "womenFashionBlogs", label: "Women's Fashion" } },
    ];
    return (
        <main className="blogs-page">
            <div className="container">
                <div className="blogs-content-box">
                    <div className="blogs-filter">
                        <Swiper slidesPerView={"auto"} spaceBetween={"20"}>
                            {blogs.map((categ) => (
                                <SwiperSlide key={categ.id} style={{ width: "auto" }}>
                                    <div className="single-categ">{categ.category.label} Blogs</div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <Outlet />
                </div>
                <aside className="blogs-navigation">
                    <h2>Blog Categories</h2>
                    <ul>
                        {blogs.map((blog) => (
                            <li key={blog.id}>
                                <MdKeyboardArrowRight />
                                <NavLink to={blog.category.path} end>
                                    {blog.category.label} Blogs
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
            <ContactBar />
        </main>
    );
}
