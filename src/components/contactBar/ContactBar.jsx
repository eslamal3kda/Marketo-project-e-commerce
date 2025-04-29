import React from "react";
import EmailSubmitInput from "../EmailSubmitInput/EmailSubmitInput";
import ContactBarContent from "../ContactBarContent/ContactBarContent";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

export default function ContactBar({ homePageContactBar }) {
    if (homePageContactBar) {
        return (
            <section className="contact-bar x-padding " >
                <div className="contact-bar-layout send-email">
                    <ContactBarContent title={"Get Latest Update"} header={"Newsletter Subscribe"} description={"& receive $20 coupon for first shopping"} />
                    <EmailSubmitInput />
                </div>
                <div className="contact-bar-layout">
                    <ContactBarContent title={"Read Our News"} header={"Follow Us"} description={"First to find out about our news and promotions"} />
                    <div className="contact-bar-layout-social-media">
                        <a href="https://www.facebook.com/eslamal3kda" target="_blank">
                            <div className="contact-bar-layout-social-media-icons">
                                <FaFacebook className="face" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/eslamal3kda" target="_blank">
                            <div className="contact-bar-layout-social-media-icons">
                                <FaInstagram className="insta" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/eslamal3kda/" target="_blank">
                            <div className="contact-bar-layout-social-media-icons">
                                <FaLinkedin className="linkedin" />
                            </div>
                        </a>
                        <a href="https://wa.me/message/Y4GTQK45IOWFM1 " target="_blank">
                            <div className="contact-bar-layout-social-media-icons">
                                <FaWhatsapp className="whatsapp" />
                            </div>
                        </a>
                        <a href="" target="_blank">
                            <div className="contact-bar-layout-social-media-icons">
                                <FaTelegram className="telegram" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <section className="global-contact-bar">
            <div className="container">
                <div className="global-contact-bar-header">
                    <h3>Newsletter & Get Updates</h3>
                    <p>Sign up for our newsletter to get up-to-date from us</p>
                </div>
                <div className="global-contact-bar-form">
                    <EmailSubmitInput />
                </div>
            </div>
        </section>
    );
}
