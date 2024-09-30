import Image from "next/image";
import "@/style/home.scss";
import HomeHero from "./_components/HomeHero";
import HomeCoreSolutions from "./_components/HomeCoreSolutions";
import HomeIndustriesWeServe from "./_components/HomeIndustriesWeServe";
import HomeExpertSupport from "./_components/HomeExpertSupport";
import HomeInsights from "./_components/HomeInsights";
import HomeWhyChoseUs from "./_components/HomeWhyChoseUs";

export default function Home() {
    return (
        <>
        <HomeHero />
        <HomeCoreSolutions />
        <HomeIndustriesWeServe />
        <HomeWhyChoseUs />
        <HomeInsights />
        <HomeExpertSupport />
        </>
    );
  }