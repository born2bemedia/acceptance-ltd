import Image from "next/image";
import "@/style/faq.scss";
import FaqHero from "./components/FaqHero";
import AccordionBlock from "./components/AccordionBlock";
import RequestPopup from "@/global_components/RequestPopup";

export const metadata = {
    title: "Frequently Asked Questions | Aceptanta",
    description: "Find answers to common questions about Aceptanta’s business setup and operational support services.",
    openGraph: {
      title: "Frequently Asked Questions | Aceptanta",
      description: "Find answers to common questions about Aceptanta’s business setup and operational support services.",
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