import Image from "next/image";
import "@/style/company.scss";
import CompanyHero from "./components/CompanyHero";
import WhyChoseUs from "./components/WhyChoseUs";
import OurBlock from "./components/OurBlock";
import RequestPopup from "@/global_components/RequestPopup";

export const metadata = {
    title: "About Us | Aceptanta",
    description: "Learn about Aceptanta’s commitment to providing expert business setup and operational support. Discover our mission, values, and how we help companies expand and operate efficiently worldwide.",
    openGraph: {
      title: "About Us | Aceptanta",
      description: "Learn about Aceptanta’s commitment to providing expert business setup and operational support. Discover our mission, values, and how we help companies expand and operate efficiently worldwide.",
    },
};

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
