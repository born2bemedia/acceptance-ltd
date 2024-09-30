import Image from "next/image";
import "@/style/solutions.scss";
import SolutionsHero from "./_components/SolutionsHero";
import ExpertSupport from "@/global_components/ExpertSupport";
import RequestPopup from "@/global_components/RequestPopup";
import SolutionsLoop from "./_components/SolutionsLoop";
import OrderPopup from "@/global_components/OrderPopup";

export default function solutions() {
  return (
    <>
      <SolutionsHero />
      <SolutionsLoop />
      <ExpertSupport
        title={"YOUR BUSINESS,YOUR SOLUTIONS"}
        text={
          "The services and solutions outlined above are customizable to meet your business's unique needs. This is not an exhaustive list of services included in each solution. If you require further details or have specific requirements, please request a consultation with one of our experts."
        }
      />
      <RequestPopup />
      <OrderPopup />
    </>
  );
}
