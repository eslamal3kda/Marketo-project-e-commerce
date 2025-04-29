import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

export default function SearchComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Categories");

    const customOptions = ["All Categories","Electronics", "Men's Fashion", "Women's Fashion", "Office & Security", "Camera", "Drone", "Gamepad", "Mobile", "Speaker"];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <>
            <div className="search_bar">
                <input type="text" placeholder="Find Your Product"/>
            </div>
            <div className="dropdown_search">
                <div className="dropdown_search-header" onClick={toggleDropdown}>
                    {selectedOption}
                    <TiThMenu />
                </div>
                {isOpen && (
                    <div className="dropdown_search-menu">
                        {customOptions.map((option, index) => (
                            <div key={index} className="dropdown_search-item" onClick={() => handleOptionClick(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="search-button">
                <FaSearch />
            </div>
        </>
    );
}
