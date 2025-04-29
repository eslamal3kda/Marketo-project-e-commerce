import { FaArrowRightLong } from "react-icons/fa6";
import GallerySubList from "../../components/GallerySubList/GallerySubList";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="x-padding">
            <div className="footer-content">
                <div className="footer-content-sections">
                    <div className="footer-content-sections-single footer-content-sections-single-location">
                        <p className="location-title ">17 Princess Road, London, Greater London</p>
                    </div>
                    <div className="footer-content-sections-single footer-content-sections-single-details">
                        <p className="details-head">Got Question? Call us 24/7</p>
                        <p className="custom-header">
                            <span>[80] 1017 197</span>
                        </p>
                        <p className="location-title">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        <button>
                            {" "}
                            <IoLocationOutline />
                            View on map
                        </button>
                    </div>
                    <div className="footer-content-sections-single footer-content-sections-single-details">
                        <p className="details-head">We Using</p>
                        <p className="custom-header">Safe Payments</p>
                        <p className="secured-by">Secured by:</p>
                    </div>
                    <div className="footer-content-sections-single">
                        <GallerySubList
                            navigation
                            label={"Quick Links"}
                            page1={"Support Center"}
                            page2={"Term & Conditions"}
                            page3={"Shipping"}
                            page4={"Privacy Policy"}
                            page5={"Help"}
                            page6={"Products Return"}
                            page7={"FAQS"}
                        />
                    </div>
                    <div className="footer-content-sections-single">
                        <GallerySubList
                            label={"Our Stores"}
                            page1={"Alexandria"}
                            page2={"Cairo"}
                            page3={"Buhaira"}
                            page4={"Tanta"}
                            page5={"Zagazig"}
                            page6={"Mansoura"}
                            page7={"Damitta"}
                        />
                    </div>
                </div>
                <button className="back-top">
                    back top <FaArrowRightLong />
                </button>
            </div>
            <div className="copy-rights x-padding">
                <p> &copy; 2021 XpeedStudio All Rights Reserved </p>
                <p> Allow payment base on </p>
            </div>
        </footer>
    );
}
