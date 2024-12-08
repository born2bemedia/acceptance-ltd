import Image from "next/image";
import "@/style/faq.scss";
import FaqHero from "./components/FaqHero";
import AccordionBlock from "./components/AccordionBlock";
import RequestPopup from "@/global_components/RequestPopup";

export default function faq() {
    return (
        <>
            <FaqHero />
            <AccordionBlock />
            <RequestPopup />
        </>
    );
  }