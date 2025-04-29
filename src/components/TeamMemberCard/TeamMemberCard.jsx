import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function TeamMemberCard({ memberImg, memberJobTitle, memberName }) {
    return (
        <div className="team-member-card">
            <div className="team-member-image">
                <img src={memberImg} alt="" />
                <div className="overlay">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
            <span className="job-title">{memberJobTitle}</span>
            <span className="team-member-name">{memberName}</span>
        </div>
    );
}
