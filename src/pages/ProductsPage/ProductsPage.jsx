import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductsByCategory from "../../components/ProductsByCategory/ProductsByCategory";
import ContactBar from "../../components/contactBar/ContactBar";

export default function ProductsPage() {
    const categorie = ["Electronics", "Men's Fashion", "Women's Fashion", "Office & Security", "Camera", "Drone", "Gamepad", "Mobile", "Speaker"];
    const categories = [
        { id: 1, name: "Computer", class: "computer",inStock:3,active:true },
        { id: 2, name: "Men's Fashion", class: "men-fashion",inStock:6,active:false },
        { id: 3, name: "Women's Fashion", class: "women-fashion",inStock:8 ,active:false},
        { id: 4, name: "Mobile", class: "mobile",inStock:1,active:false },
        { id: 5, name: "Watch", class: "watch",inStock:4,active:false},
        { id: 6, name: "Camera", class: "camera",inStock:8,active:false },
        { id: 7, name: "Speaker", class: "speaker",inStock:5,active:false },
    ];
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <main className="products-page ">
            <div className="container">
                <h2>Products</h2>
                <div className="categories-tabs">
                    <div className="single-tabs-container">
                        {categories.map((categ) => (
                            <div key={categ.id} className={`single-tab ${categ.active && "active"}`}>
                              <p>{categ.name}</p>
                            <span>{`${categ.inStock} Items Available`}</span>
                            </div>
                        ))}
                    </div>
                    <div className="category-tabs-products">
                      <ProductCard imageURL={"./src/assets/images/gaming_console.png"}  productName={"kjdf ehfi hfu"} productPrice={45} />
                      <ProductCard imageURL={"./src/assets/images/gaming_console.png"}  productName={"kjdf ehfi hfu"} productPrice={45} />
                      <ProductCard imageURL={"./src/assets/images/gaming_console.png"}  productName={"kjdf ehfi hfu"} productPrice={45} />
                      <ProductCard imageURL={"./src/assets/images/gaming_console.png"}  productName={"kjdf ehfi hfu"} productPrice={45} />
                      <ProductCard imageURL={"./src/assets/images/gaming_console.png"}  productName={"kjdf ehfi hfu"} productPrice={45} />
                    </div>
                </div>
                <div className="products-container">
                  <h2>Products By Category</h2>
                    {categories.map((categ) => (
                        <ProductsByCategory key={categ.id} categoryName={categ.name} categoryClass={categ.class} />
                    ))}
                </div>
            </div>
            <ContactBar />
        </main>
    );
}
