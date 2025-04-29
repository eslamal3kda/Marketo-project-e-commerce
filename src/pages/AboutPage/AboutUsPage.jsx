import React from "react";
import ContactBar from "../../components/contactBar/ContactBar";
import AboutPageSection from "../../components/AboutPageContent/AboutPageSection";

export default function AboutUsPage() {
    return (
        <main className="about-page ">
            <AboutPageSection
                history
                heading={"history"}
                headingTitle={"Creative and renovate fashion trends"}
                aboutImg={"./src/assets/images/about_us_img_1.png"}
                aboutParg={
                    "Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI."
                }
            />

            <AboutPageSection
                vision
                heading={"vision"}
                headingTitle={"We are marketpress"}
                aboutImg={"./src/assets/images/about_us_img_2.png"}
                aboutParg={"Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI."}
            />
            <AboutPageSection team heading={"team"} headingTitle={"Meet with our Team"} />
            <ContactBar />
        </main>
    );
}
