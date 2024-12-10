import Image from "next/image";
import "@/style/faq.scss";
import FaqHero from "./components/FaqHero";
import AccordionBlock from "./components/AccordionBlock";
import RequestPopup from "@/global_components/RequestPopup";

export const metadata = {
    title: "Frequently Asked Questions | Aceptanta",
    description: "Find answers to common questions about our compliance and business support services at Aceptanta.",
    openGraph: {
      title: "Frequently Asked Questions | Aceptanta",
      description: "Find answers to common questions about our compliance and business support services at Aceptanta.",
    },
};

export default function faq() {
    return (
        <>
            <FaqHero />
            <AccordionBlock />
            <RequestPopup />
        </>
    );
  }