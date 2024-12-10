import Image from "next/image";
import "@/style/industries.scss";
import IndustriesHero from "./_components/IndustriesHero";
import ExpertSupport from "@/global_components/ExpertSupport";
import OrderPopup from "@/global_components/OrderPopup";
import RequestPopup from "@/global_components/RequestPopup";
import IndustriesLoop from "./_components/IndustriesLoop";

export const metadata = {
  title: "Industry-Specific Solutions| Aceptanta",
  description: "Explore how Aceptanta delivers tailored compliance, legal, and financial advisory solutions for various industries, ensuring global business success and regulatory alignment.",
  openGraph: {
    title: "Industry-Specific Solutions| Aceptanta",
    description: "Explore how Aceptanta delivers tailored compliance, legal, and financial advisory solutions for various industries, ensuring global business success and regulatory alignment.",
  },
};

export default function Industries() {
  return (
    <>
      <IndustriesHero />
      <IndustriesLoop />
      <ExpertSupport
        title={"CUSTOM SOLUTIONS FOR UNIQUE BUSINESSES"}
        text={
          "If your industry is not listed or if you have specific needs, our services are fully customizable to meet any business challenge. Contact us to discuss a solution tailored to your business's unique needs."
        }
      />
      
      <RequestPopup />
      <OrderPopup />
    </>
  );
}
