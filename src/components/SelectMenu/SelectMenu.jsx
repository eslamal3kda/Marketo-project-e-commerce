import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

export default function SelectMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Categories");

    const customOptions = ["All Categories","Electronics", "Men's Fashion", "Women's Fashion",'Office & Security','Camera','Drone','Gamepad','Mobile','Speaker'];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <>
            <div className="dropdown">
                <div className="dropdown-header" onClick={toggleDropdown}>
                <TiThMenu />
                    {selectedOption}
                    <span className={`arrow ${isOpen ? "open" : ""}`}></span>
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        {customOptions.map((option, index) => (
                            <div key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
