import Image from "next/image";
import "@/style/solutions.scss";
import SolutionsHero from "./_components/SolutionsHero";
import ExpertSupport from "@/global_components/ExpertSupport";
import RequestPopup from "@/global_components/RequestPopup";
import SolutionsLoop from "./_components/SolutionsLoop";
import OrderPopup from "@/global_components/OrderPopup";

export const metadata = {
  title: "Business Solutions | Aceptanta",
  description: "Get customised solutions for business setup, global compliance, legal advisory, and financial management, to optimise your operations.",
  openGraph: {
    title: "Business Solutions | Aceptanta",
    description: "Get customised solutions for business setup, global compliance, legal advisory, and financial management, to optimise your operations.",
  },
};

export default function solutions() {
  return (
    <>
      <SolutionsHero />
      <SolutionsLoop />
      <ExpertSupport
        title={"YOUR BUSINESS, <br/>YOUR SOLUTIONS"}
        text={
          "Our services are fully customizable to your business needs. Contact us to receive a personalized quote. You can also select additional services to create a solution tailored to your specific business needs. "
        }
      />
      <RequestPopup />
      <OrderPopup />
    </>
  );
}
