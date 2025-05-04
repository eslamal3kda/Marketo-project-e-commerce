import React from "react";
import Logo from "../Logo/Logo";

import LoginAndRegisterForm from "../LoginAndRegisterForm/LoginAndRegisterForm";

export default function LoginBox() {
    return (
        <div className="login-box">
            <div className="login-box-image">
                <img src="/images/pic_5.jpg" alt="" />
            </div>
            <div className="login-box-content">
                <Logo />
                <LoginAndRegisterForm />
            </div>
        </div>
    );
}
