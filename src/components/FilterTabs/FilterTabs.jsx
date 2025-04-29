import React from "react";

export default function FilterTabs({title}) {
    return (
        <>
            <div className="filter-tabs">
                <h3>{title}</h3>
                <div className="filter-taps">
                    <div className="tap-container active">
                        <span>On Sell</span>
                    </div>
                    <div className="tap-container">
                        <span>Hot Sell</span>
                    </div>
                    <div className="tap-container">
                        <span>Trend</span>
                    </div>
                    <div className="tap-container">
                        <span>Best Sell</span>
                    </div>
                </div>
            </div>
        </>
    );
}
