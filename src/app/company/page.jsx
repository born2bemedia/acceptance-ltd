import Image from "next/image";
import "@/style/company.scss";
import CompanyHero from "./components/CompanyHero";
import WhyChoseUs from "./components/WhyChoseUs";
import OurBlock from "./components/OurBlock";
import RequestPopup from "@/global_components/RequestPopup";

export const metadata = {
    title: "About Us | Aceptanta",
    description: "Learn about Aceptanta's commitment to delivering expert compliance and legal and business support services. Discover our mission, values, and how we empower businesses to thrive.",
    openGraph: {
      title: "About Us | Aceptanta",
      description: "Learn about Aceptanta's commitment to delivering expert compliance and legal and business support services. Discover our mission, values, and how we empower businesses to thrive.",
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
