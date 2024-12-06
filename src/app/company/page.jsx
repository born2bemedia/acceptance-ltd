import Image from "next/image";
import "@/style/company.scss";
import CompanyHero from "./components/CompanyHero";
import WhyChoseUs from "./components/WhyChoseUs";
import OurBlock from "./components/OurBlock";
import RequestPopup from "@/global_components/RequestPopup";

export default function company() {
    return (
        <>
            <CompanyHero />
            <WhyChoseUs />
            <OurBlock />
            <RequestPopup />
        </>
    );
}
