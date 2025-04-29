import React, { useEffect, useState } from "react";

import { TbAdjustmentsHorizontal } from "react-icons/tb";
import FilterCategory from "../../components/filterCategory/FilterCategory";
import { CgMenu, CgMenuGridR } from "react-icons/cg";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductPopUp from "../../components/ProductPopUp/ProductPopUp";

export default function ShopPage() {
    const filterCategories = [
        { id: 1, category: "name", active: true },
        { id: 2, category: "price", active: false },
        { id: 3, category: "rate", active: false },
        { id: 4, category: "category", active: false },
    ];
    const [filterMenu,setFilterMenu] = useState([...filterCategories]) 
    const handleMenu = (id) => {
        setFilterMenu(filterMenu.map((categ)=> categ.id == id ? ({...categ, active:! categ.active}): categ ))
    }
    const products = [
        { id: 1, productName: "Portable Speaker", imageURL: "./src/assets/images/products/portable-speaker.jpg", productPrice: "12.00", productOldPrice: "15.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 2, productName: "LED Projector", imageURL: "./src/assets/images/products/LED-Projector.jpg", productPrice: "30.00", productOldPrice: "40.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 3, productName: "LED Television", imageURL: "./src/assets/images/products/LED-Television.png", productPrice: "569.00", productOldPrice: "670.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 4, productName: "3D Glass", imageURL: "./src/assets/images/products/3D-VR-Glass.jpg", productPrice: "540.00", productOldPrice: "640.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 5, productName: "Gamming Headphone", imageURL: "./src/assets/images/products/pink-gaming-headphone.jpg", productPrice: "42.00", productOldPrice: "69.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 6, productName: "Touchscreen Laptop", imageURL: "./src/assets/images/products/touchscreen-laptop.jpg", productPrice: "540.00", productOldPrice: "640.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 7, productName: "Portable Speaker", imageURL: "./src/assets/images/products/portable-speaker.jpg", productPrice: "12.00", productOldPrice: "15.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 8, productName: "LED Projector", imageURL: "./src/assets/images/products/LED-Projector.jpg", productPrice: "30.00", productOldPrice: "40.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 9, productName: "LED Television", imageURL: "./src/assets/images/products/LED-Television.png", productPrice: "569.00", productOldPrice: "670.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 10, productName: "3D Glass", imageURL: "./src/assets/images/products/3D-VR-Glass.jpg", productPrice: "540.00", productOldPrice: "640.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 11, productName: "Gamming Headphone", imageURL: "./src/assets/images/products/pink-gaming-headphone.jpg", productPrice: "42.00", productOldPrice: "69.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
        { id: 12, productName: "Touchscreen Laptop", imageURL: "./src/assets/images/products/touchscreen-laptop.jpg", productPrice: "540.00", productOldPrice: "640.00",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates quaerat porro. Excepturi molestiae inventore at commodi modi. Atque quo sit omnis deserunt dignissimos qui molestias iusto reprehenderit, dolore possimus." },
    ];
    const [displayGrid, setDisplayGrid] = useState(true);
    const [range, setRange] = useState(600);
    const handleRange = (event) => {
        setRange(event.target.value);
    };
    const [filterProducts,setFilterProducts] = useState([...products])
    const [searchValue,setSearchValue] = useState("")
    useEffect(() => {
            const filterData = products.filter((ele)=> ele.productName.toLowerCase().includes(searchValue.toLowerCase()) )
            setFilterProducts(filterData);
    },[searchValue])

    return (
        <main className="shop-page page-test">
            <div className="shop-page-container container">
                <div className="filter-menu-container">
                    <div className="filter-heading">
                        <TbAdjustmentsHorizontal />
                        <h2>filter</h2>
                    </div>
                    <div className="filter-content">
                        {filterMenu.map((item) => (
                            <FilterCategory key={item.id} categ={item.category} active={item.active} range={range} handleRange={handleRange} handleMenu={handleMenu} item={item} searchValue={searchValue} setSearchValue={setSearchValue}  />
                        ))}
                    </div>
                </div>
                <div className="shop-page-content">
                    <div className="shop-page-content-header">
                        <div className="display-btn">
                            <CgMenu className={`${displayGrid ? "" : "active"}`} onClick={() => setDisplayGrid(false)} />
                            <CgMenuGridR className={`${displayGrid ? "active" : ""}`} onClick={() => setDisplayGrid(true)} />
                        </div>
                        <div className="heading">
                            <h4>shop</h4>
                        </div>
                    </div>
                    <div className="shop-page-content-products-box">
                        <div className={`shop-page-content-products ${displayGrid ? "display-grid" : "display-block"}`}>
                            {filterProducts.length<= 0 ? <p>No Products Match</p> :filterProducts.map((prod) => (
                                <ProductCard
                                    key={prod.id}
                                    imageURL={prod.imageURL}
                                    productName={prod.productName}
                                    productPrice={prod.productPrice}
                                    productOldPrice={prod.productOldPrice}
                                    details={prod.details}
                                    icons
                                    rating
                                />
                            ))}
                        </div>
                            <div className="pagination-btns-container">
                                <span className="pagination-btn">previous</span>
                                <div className="pagination-page-num">
                                    <span className="active">1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>...</span>
                                </div>
                                <span className="pagination-btn">next</span>
                            </div>
                    </div>
                    <ProductPopUp />
                </div>
            </div>
        </main>
    );
}
