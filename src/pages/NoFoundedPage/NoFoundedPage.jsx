import React from "react";
import { Link } from "react-router-dom";

export default function NoFoundedPage() {
    return (
        <main className="no-founded-page">
            <div className="no-founded-page-title">
                <h2>oops..! <span>404</span></h2>
                <h2>page no founded </h2>
            </div>
            <Link to={"/"}>go to home page</Link>
        </main>
    );
}
