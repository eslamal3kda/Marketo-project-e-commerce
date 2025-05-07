import { BiWorld } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { IoIosArrowDown } from "react-icons/io";
// import Select from "react-select";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
// import GallerySubList from "../../components/GallerySubList/GallerySubList";
// import SearchBox from "../../components/searchBox/SearchBox";
import { HiOutlineMenu } from "react-icons/hi";
import NavMenu from "./NavMenu";
import { useState } from "react";

// const categoryOptions = [
//     { value: "electronics", label: "Electronics" },
//     { value: "menFashion", label: "Men's Fashion" },
//     { value: "womenFashion", label: "Women's Fashion" },
//     { value: "security", label: "Office & Security" },
//     { value: "camera", label: "Camera" },
//     { value: "drone", label: "Drone" },
//     { value: "gamepad", label: "Gamepad" },
//     { value: "mobile", label: "Mobile" },
//     { value: "speaker", label: "Speaker" },
// ];

export default function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <header>
            <nav className="">
                <div className="auth-section x-padding">
                    <div className="header-details">
                        <div className="delivery">
                            <TbTruckDelivery />
                            <span>Free Delivery</span>
                        </div>
                        <div className="Returns-Policy">
                            <BiWorld />
                            <span>Returns Policy</span>
                        </div>
                        <div className="social-media">
                            <span>Follow Us</span>
                            <IoLogoFacebook className="facebook" />
                            <IoLogoTwitter className="twitter" />
                            <IoLogoInstagram className="instagram" />
                        </div>
                    </div>
                    <div className="login-register" onClick={()=> navigate("/login")}>
                        <span>Login/Register</span>
                    </div>
                </div>
                <div className="nav-section x-padding">
                    <Logo />
                    <ul>
                        <li>
                            <NavLink to={"/"}>
                                Home <IoIosArrowDown />
                            </NavLink>
                        </li>
                        <li className="nav_lists">
                            {/* <NavLink to={"/pages"}> */}
                                <span>pages <IoIosArrowDown /></span>
                            {/* </NavLink> */}
                            <ul>
                                <li>
                                    <Link to={"about-us"}>About Us</Link>
                                </li>
                                <li>
                                    <Link to={"contact"}>Contact</Link>
                                </li>
                                <li>
                                    <Link to={"faq"}>FAQ</Link>
                                </li>
                                <li>
                                    <Link to={"terms-and-conditions"}>Terms and Conditions</Link>
                                </li>
                                <li>
                                    <Link to={"products"}>Products</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_lists">
                            <NavLink to={"/shop"}>
                                shop <IoIosArrowDown />
                            </NavLink>
                            <ul>
                                <li>
                                    <Link to={"shop"}>Shop</Link>
                                </li>
                                <li>
                                    <Link to={"wishlist"}>Wishlist</Link>
                                </li>
                                <li>
                                    <Link to={"shopping-cart"}>Shopping Cart</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_lists">
                            <NavLink to={"/blogs"}>
                                blogs <IoIosArrowDown />
                            </NavLink>
                            {/* <ul>
                                <li>
                                    <Link to={"blogs"}>Blogs</Link>
                                </li>
                                <li>
                                    <Link to={"/blogs/:blog-category/:id"}>Single Blog</Link>
                                </li>
                            </ul> */}
                        </li>
                        {/* <li className="nav_lists">
                            <NavLink to={"/dashboard"}>
                                Dashboard <IoIosArrowDown />
                            </NavLink>
                        </li> */}
                    </ul>
                    <div className="nav-icons">
                        <HiOutlineMenu className="menuIcon" onClick={()=>setIsMenuOpen(true)} />
                        <Link to={"wishlist"}>
                            <div className="liked-icon">
                                <div className="like-notify">0</div>
                                <FaRegHeart />
                            </div>
                        </Link>
                        <div className="cart-icon">
                            <div className="cart-notify">0</div>
                            <SlHandbag />
                        </div>
                    </div>
                </div>
                <div className="search-section x-padding">
                    <div className="select-category">
                        {/* <Select isMulti className="select_input" options={categoryOptions} placeholder='Categories'/> */}
                        <SelectMenu />
                    </div>
                    <div className="serach-items">
                        <SearchComponent />
                        {/* <SearchBox /> */}
                    </div>
                    <div className="black-friday">
                        <p>Black Friday</p>
                        <span>Get 45% Off!</span>
                    </div>
                </div>
            </nav>
            <NavMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </header>
    );
}
