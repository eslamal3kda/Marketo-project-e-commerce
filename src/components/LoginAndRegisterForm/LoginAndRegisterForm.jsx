import { Formik } from "formik";
import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import WrapperInput from "../WrapperInput/WrapperInput";

export default function LoginAndRegisterForm() {
    const [isRegister, setIsRegister] = useState(false);
    if (isRegister) {
        return (
            <>
                <div className="login-form">
                    <h4>login</h4>
                    <Formik>
                        {() => (
                            <Form>
                                <div className="login-form-fullname">
                                    <WrapperInput label={"first name"} name={"firstName"} placeholder={"First Name"} />
                                    <WrapperInput label={"last name"} name={"lastName"} placeholder={"Last Name"} />
                                </div>
                                <WrapperInput label={"username"} name={"username"} placeholder={"Enter Your Email Or Username"} />
                                <WrapperInput label={"password"} name={"password"} placeholder={"Enter Your Password"} />
                            </Form>
                        )}
                    </Formik>
                    <p className="switch-form">
                        already have an account? <span onClick={() => setIsRegister(false)}>sign in</span>
                    </p>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="login-form">
                <h4>login</h4>
                <Formik>
                    {() => (
                        <Form>
                            <WrapperInput label={"username"} name={"username"} placeholder={"Enter Your Email Or Username"} />
                            <WrapperInput label={"password"} name={"password"} placeholder={"Enter Your Password"} />
                        </Form>
                    )}
                </Formik>
                <Link>forget password ?</Link>
                <p className="switch-form">
                    don't have an account? <span onClick={() => setIsRegister(true)}>sign up</span>
                </p>
            </div>
        </>
    );
}
