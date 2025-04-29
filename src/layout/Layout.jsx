import Navbar from "./1-Navbar/Navbar";
import Footer from "./2-Footer/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
