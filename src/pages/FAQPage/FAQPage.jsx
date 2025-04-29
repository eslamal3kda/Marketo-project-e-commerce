import React from "react";
import ContactBar from "../../components/contactBar/ContactBar";

export default function FAQPage() {
    const FAQ = [
        {
            id: 1,
            faqTitle: "What is marketpress.com?",
            faqDescription:
                "marketpress is the leading Business to Consumer e-commerce site. It is an online retail that enables anyone from anywhere in Bangladesh and from around the world to purchase different items/products through online.",
        },
        {
            id: 2,
            faqTitle: "Why my card payment is failing?",
            faqDescription:
                "marketpress is the leading Business to Consumer e-commerce site. It is an online retail that enables anyone from anywhere in Bangladesh and from around the world to purchase different items/products through online.",
        },
        {
            id: 3,
            faqTitle: "I need to sign up before buying any Offer/Product?",
            faqDescription:
                "marketpress is the leading Business to Consumer e-commerce site. It is an online retail that enables anyone from anywhere in Bangladesh and from around the world to purchase different items/products through online.",
        },
        {
            id: 4,
            faqTitle: "How do I create an marketpress.com account?",
            faqDescription:
                "marketpress is the leading Business to Consumer e-commerce site. It is an online retail that enables anyone from anywhere in Bangladesh and from around the world to purchase different items/products through online.",
        },
        {
            id: 5,
            faqTitle: "What type of products do you sell online?",
            faqDescription:
                "marketpress is the leading Business to Consumer e-commerce site. It is an online retail that enables anyone from anywhere in Bangladesh and from around the world to purchase different items/products through online.",
        },
        {
            id: 6,
            faqTitle: "Am I billed as soon as I join marketpress.com?",
            faqDescription:
                "marketpress is the leading Business to Consumer e-commerce site. It is an online retail that enables anyone from anywhere in Bangladesh and from around the world to purchase different items/products through online.",
        },
        {
            id: 7,
            faqTitle: "Is my info safe?",
            faqDescription:
                "marketpress is the leading Business to Consumer e-commerce site. It is an online retail that enables anyone from anywhere in Bangladesh and from around the world to purchase different items/products through online.",
        },
        {
            id: 8,
            faqTitle: "Why should I subscribe newsletter?",
            faqDescription:
                "marketpress is the leading Business to Consumer e-commerce site. It is an online retail that enables anyone from anywhere in Bangladesh and from around the world to purchase different items/products through online.",
        },
    ];
    return (
        <main className="faq-page">
            <div className="container">
                <ol>
                    {FAQ.map((faq) => (
                        <div className="list-container">
                            <li>{faq.faqTitle}</li>
                            <p>{faq.faqDescription}</p>
                        </div>
                    ))}
                </ol>
            </div>
            <ContactBar />
        </main>
    );
}
