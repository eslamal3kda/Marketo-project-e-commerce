import { Form, Formik } from "formik";
import React from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import MapComponent from "../../components/MapComponent/MapComponent";
import CustomBTN from "../../components/customBTN/CustomBTN";
import toast, { Toaster } from "react-hot-toast";
import WrapperInput from "../../components/WrapperInput/WrapperInput";

export default function ContactPage() {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        description: "",
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().email("Please enter a valid email address").required("Email is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
        subject: Yup.string().min(6, "Please enter more than 6 characters").required("Subject is required"),
        description: Yup.string().min(15, "Oops! That’s a bit short. Try writing at least 15 characters.").required("Description is required"),
    });

    const onSubmit = (values, { resetForm, setSubmitting}) => {
        emailjs
            .send(
                "service_r4v08np", //serviceID
                "template_c60bijw", //templateID
                {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    fullName:`${values.firstName} ${values.lastName}`,
                    email: values.email,
                    phoneNumber: values.phoneNumber,
                    subject: values.subject,
                    description: values.description,
                },
                "ZroUViHnwbEe3EUu5", //Public Key
            )
            .then(() => {
                toast.success("Email has been sent");
                resetForm();
            })
            .catch(() => {
                toast.error("Something wrong.");
            })
            .finally(() => {
                setSubmitting(false);
            });
    };


    return (
        <main className="contact-page container">
            <h2>Get in touch</h2>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} key={"contactFormKey"}>
                {(contactForm) => (
                    <Form>
                        <WrapperInput label={"First Name"} name={"firstName"} placeholder={"Your First Name"} />
                        <WrapperInput label={"Last Name"} name={"lastName"} placeholder={"Your Last Name"} />
                        <WrapperInput label={"Email"} name={"email"} placeholder={"Your Email"} />
                        <WrapperInput label={"Phone"} name={"phoneNumber"} placeholder={"Enter Phone"} />
                        <WrapperInput label={"Subject"} name={"subject"} placeholder={"Subject Title"} />
                        <WrapperInput label={"Description"} name={"description"} placeholder={"Enter Your Message"} isTextarea />
                        <CustomBTN type="submit" title={contactForm.isSubmitting ? "Sending..." : "Get Query"} />
                    </Form>
                )}
            </Formik>
            <MapComponent />
            <Toaster position="bottom-center" reverseOrder={false} />
        </main>
    );
}
