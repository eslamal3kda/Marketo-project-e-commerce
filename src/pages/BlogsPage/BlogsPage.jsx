import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { NavLink, Outlet } from 'react-router-dom'
import ContactBar from '../../components/contactBar/ContactBar'

export default function BlogsPage() {
  return (
    <main className='blogs-page'>
        <div className="container">
            <Outlet />
            <aside className='blogs-navigation'>
                <h2>Blog Categories</h2>
                <ul>
                    <li><MdKeyboardArrowRight /><NavLink to={"allBlogs"} end>All Blogs</NavLink></li>
                    <li><MdKeyboardArrowRight /><NavLink to={"electeonicsBlog"} >Electronics Blogs</NavLink></li>
                    <li><MdKeyboardArrowRight /><NavLink to={"securityBlogs"} >Office & Security Blogs</NavLink></li>
                    <li><MdKeyboardArrowRight /><NavLink to={"menFashionBlogs"} >Men's Fashion Blogs</NavLink></li>
                    <li><MdKeyboardArrowRight /><NavLink to={"womenFashionBlogs"} >Women's Fashion Blogs</NavLink></li>
                </ul>
            </aside>
        </div>
        <ContactBar />
    </main>
  )
}
