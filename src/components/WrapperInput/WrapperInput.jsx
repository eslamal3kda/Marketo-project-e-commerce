import { ErrorMessage, Field } from "formik";
import React from "react";

export default function WrapperInput({label,name,placeholder,isTextarea}) {
    return (
        <div className=" wrapper-input">
            <label htmlFor={name}>{label}</label>
            {isTextarea ? <Field name={name} as="textarea" placeholder={placeholder} id={name} /> : <Field name={name} placeholder={placeholder} id={name} />}
            <ErrorMessage component={"div"} name={name} className="error-message" />
        </div>
    );
}
