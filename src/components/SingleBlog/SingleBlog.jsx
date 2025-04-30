import { Field, Form, Formik } from "formik";
import React from "react";
import WrapperInput from "../WrapperInput/WrapperInput";
import CustomBTN from "../customBTN/CustomBTN";
import * as Yup from "yup"

export default function SingleBlog() {
  const initialValues = {
    fullName:"",
    email:"",
    comment:""
  }
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Please Enter Your name"),
    email: Yup.string().email("Enter valid mail").required("Enter Your Email"),
    comment: Yup.string().required("Enter your comment")
  })
  const onSubmit = () => console.log(initialValues) ;
    return (
        <section className="single-blog">
            <div className="single-blog-image">
                <img src="/images/blogs/post-1.jpg" alt="" />
            </div>
            <div className="single-blog-content-container">
                <div className="single-blog-header">
                    <div className="date">
                        <span>22</span>
                        <span>feb</span>
                    </div>
                    <div className="title">
                        <h2>top new collection</h2>
                        <span>o comments</span>
                    </div>
                </div>
                <div className="single-blog-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, et, nisi officiis distinctio omnis dolorum perspiciatis atque, excepturi unde porro neque illum nemo eaque quas
                        blanditiis id! Vitae praesentium sed cum obcaecati quo, laboriosam sunt, similique unde, delectus aperiam at?
                    </p>
                    <div className="details">
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum vitae eum? Dolorum totam, qui provident tempora tenetur expedita vel!</p>
                    </div>
                    <div className="details">
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum vitae eum? Dolorum totam, qui provident tempora tenetur expedita vel!</p>
                    </div>
                    <div className="details">
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum vitae eum? Dolorum totam, qui provident tempora tenetur expedita vel!</p>
                    </div>
                </div>
            </div>
            <div className="single-blog-form">
                <h5>leave a comment</h5>
                <span>Your email address will not be published.</span>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {() => (
                        <Form>
                            <div>
                                <WrapperInput key={11} label={"Enter Your Name"} name={"fullName"} placeholder={"Your Name"} />
                                <WrapperInput key={12} label={"Enter Your Email"} name={"email"} placeholder={"Your Email"} />
                                <WrapperInput key={13} isTextarea label={"Enter comment"} name={"comment"} placeholder={"Message"} />
                            </div>
                            <CustomBTN type={"submit"} title={"post comment"} />
                            <span>Please note, comments must be approved before they are published.</span>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}
