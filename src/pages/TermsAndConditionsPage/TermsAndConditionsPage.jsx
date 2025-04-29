import React from "react";
import ContactBar from "../../components/contactBar/ContactBar";

export default function TermsAndConditionsPage() {
    return (
        <main className="terms-and-conditions-page  ">
            <div className="container">
                <div className="terms-and-conditions-container">
                    <h6>Types of Personal Information We Collect</h6>
                    <p>
                        Personal Information is information that can be used to identify, locate, or contact an individual.It also includes other information that may be associated with Personal
                        Information. We collect the following types of Personal Information:
                    </p>
                    <p>
                        {" "}
                        <strong>Contact Information</strong> that allows us to communicate with you, such as your name, postal addresses, email addresses, social media website user account names,
                        telephone numbers, or other addresses at which you receive communications from or on behalf of marketpress.
                    </p>
                    <p>
                        {" "}
                        <strong>Transaction Information</strong> about how you purchase and redeem
                    </p>
                    <p>
                        {" "}
                        <strong>Financial Account Information</strong> as needed to process payments for marketpress.com that you buy, such as your credit or debit card number, expiration date.
                    </p>
                    <p>
                        <strong>How marketpress.com Collects Personal Information</strong>
                    </p>
                    <p>We ask you for Personal Information when you register, subscribe, create an account, order a deal, or otherwise interact with the Sites or contact.</p>
                    <p>
                        <strong>How marketpress.com Uses Personal Information</strong>
                    </p>
                    <p>
                        You may correct your information by signing in your account. Or you may also email to info@example.com. If you want to close your account or have other questions or requests,
                        please contact us: +8 0 11 223 456
                    </p>
                </div>
            </div>
            <ContactBar />
        </main>
    );
}
