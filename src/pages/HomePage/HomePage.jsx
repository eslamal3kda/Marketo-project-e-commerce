import BestDeals from "../../components/BestDeals/BestDeals";
import ContactBar from "../../components/contactBar/ContactBar";
import DealOfTheDaySection from "../../components/DealOfTheDaySection/DealOfTheDaySection";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import HeroSection from "../../components/HeroSection/HeroSection";
import PaginationSection from "../../components/paginationSection/PaginationSection";
import Sponsors from "../../components/sponsors/Sponsors";
import TodayGadgetsSection from "../../components/TodayGadgetsSection/TodayGadgetsSection";

export default function HomePage() {
    return (
        <>
            <main className="home-page ">
                <HeroSection />
                <FeaturedProducts />
                <BestDeals />
                <DealOfTheDaySection />
                <TodayGadgetsSection />
                <PaginationSection />
                <Sponsors />
                <ContactBar homePageContactBar />
            </main>
        </>
    );
}
