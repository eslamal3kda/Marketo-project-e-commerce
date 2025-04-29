import { Field, Form, Formik } from "formik";
import React from "react";
import CustomBTN from "../customBTN/CustomBTN";
import { useNavigate } from "react-router-dom";
import "./emailSubmitInput.css"

export default function EmailSubmitInput() {
  const navigate = useNavigate()
  const onSubmit = () => {
    navigate("/contact")
  }
    return (
        <>
            <div className="email-submit-input">
                <Formik initialValues={{name:""}} onSubmit={onSubmit}>
                    {() => (
                        <Form>
                            <Field type="text" name="email" placeholder="Enter Email.." />
                            <CustomBTN title="submit" type={"submit"}/>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}
