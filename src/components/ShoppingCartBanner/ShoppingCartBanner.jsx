import React from "react";
import CustomBTN from "../customBTN/CustomBTN";

export default function ShoppingCartBanner() {
    return (
        <>
            <div className="shopping-cart-banner">
                <div className="banner">
                    <p>
                        <span>subtotel:</span>
                        <strong>$32</strong>
                    </p>
                    <p>
                        <span>descount:</span>
                        <strong>15%</strong>
                    </p>
                    <p>
                        <span>shopping:</span>
                        <strong>free</strong>
                    </p>
                    <p>
                        <span>total</span>
                        <strong>$0</strong>
                    </p>
                    <CustomBTN title={"proceed to checkout"} />
                </div>
            </div>
        </>
    );
}
