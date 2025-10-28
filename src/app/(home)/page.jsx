import Image from "next/image";
import "@/style/home.scss";
import HomeHero from "./_components/HomeHero";
import HomeCoreSolutions from "./_components/HomeCoreSolutions";
import HomeIndustriesWeServe from "./_components/HomeIndustriesWeServe";
import HomeExpertSupport from "./_components/HomeExpertSupport";
import HomeInsights from "./_components/HomeInsights";
import HomeWhyChoseUs from "./_components/HomeWhyChoseUs";
import ExpertSupport from "@/global_components/ExpertSupport";
import RequestPopup from "@/global_components/RequestPopup";

export const metadata = {
  title: "Business Setup & International Assistance | Aceptanta",
  description: "Get expert support for company formation, management, and coordination across 52 jurisdictions. Aceptanta helps you establish and operate your business globally with confidence.",
  openGraph: {
    title: "Business Setup & International Assistance | Aceptanta",
    description: "Get expert support for company formation, management, and coordination across 52 jurisdictions. Aceptanta helps you establish and operate your business globally with confidence.",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCoreSolutions />
      <HomeIndustriesWeServe />
      <HomeWhyChoseUs />
      <HomeInsights/>
      <ExpertSupport
        title={"Get expert support for your business"}
        text={
          "Ready to navigate the complexities of compliance, legal services, and financial advisory? Contact us today for a consultation tailored to your industry needs."
        }
      />
      <RequestPopup />
    </>
  );
}
