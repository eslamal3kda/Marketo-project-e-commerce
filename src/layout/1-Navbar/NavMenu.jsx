import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function NavMenu({isMenuOpen,setIsMenuOpen}) {
    const [ispagesMenu,setIspagesMenu] = useState(null)
    const navigate = useNavigate()

    const handleMenu = (item) => {
        setIspagesMenu((prev)=> prev === item ? null: item)
    }
    const handleNavigation = (path) => {
        navigate(path)
        setIspagesMenu(null)
        setIsMenuOpen(false)
    }
    
    
    return (
        <div className={`nav-menu-box ${isMenuOpen? "show": "hidden"}`}>
            <div className="nav-menu-box-header">
                <Logo />
                <div className="icon" onClick={()=>setIsMenuOpen(false)}>
                    <IoClose />
                </div>
            </div>
            <div className="nav-menu-box-content">
                <ul className="mobile-menu">
                    <li onClick={()=>handleNavigation("/")}>
                        <Link >
                            <span>home</span> <span>&gt;</span>
                        </Link>
                    </li>
                    <li>
                        <div onClick={()=>handleMenu("pages")}>
                            <span>pages</span> <button >{ispagesMenu === "pages"?'-':'+'}</button>
                        </div>
                        <ul className={`sub-menu ${ispagesMenu === "pages" ?"open":""}`}>
                            <li onClick={()=>handleNavigation("/about-us")}>
                                <Link >
                                    <span>about us</span> <span>&gt;</span>
                                </Link>
                            </li>
                            <li onClick={()=>handleNavigation("/contact")}>
                                <Link >
                                    <span>contact</span> <span>&gt;</span>
                                </Link>
                            </li>
                            <li onClick={()=>handleNavigation("/faq")}>
                                <Link >
                                    <span>faq</span> <span>&gt;</span>
                                </Link>
                            </li>
                            <li onClick={()=>handleNavigation("/terms-and-conditions")}>
                                <Link >
                                    <span>Terms and Conditions</span> <span>&gt;</span>
                                </Link>
                            </li>
                            <li onClick={()=>handleNavigation("/products")}>
                                <Link >
                                    <span>products</span> <span>&gt;</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div onClick={()=>handleMenu("shop")}>
                            <span>shop</span> <button >{ispagesMenu === "shop"?'-':'+'}</button>
                        </div>
                        <ul className={`sub-menu ${ispagesMenu === 'shop' ?"open":""}`}>
                            <li onClick={()=>handleNavigation("/shop")}>
                                <Link >
                                    <span>shop</span> <span>&gt;</span>
                                </Link>
                            </li>
                            <li onClick={()=>handleNavigation("/wishlist")}>
                                <Link >
                                    <span>wishlist</span> <span>&gt;</span>
                                </Link>
                            </li>
                            <li onClick={()=>handleNavigation("/shopping-cart")}>
                                <Link >
                                    <span>Shopping Cart</span> <span>&gt;</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li onClick={()=>handleNavigation("/blogs")}>
                        <Link >
                            <span>blogs</span> <span>&gt;</span>
                        </Link>
                    </li>
                    <li onClick={()=>handleNavigation("/login")}>
                        <Link >
                            <span>login/register</span> <span>&gt;</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
