"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import RequestButton from "@/global_components/RequestButton";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__inner container">
        <div className="home-hero__top">
          <h1 className="fadeInUp">
            Expert Support for International Business Operations
          </h1>

          <div className="content fadeInUp">
            <p>
              Comprehensive solutions for business setup and coordination across
              52 jurisdictions. From company formation to banking and ongoing
              management, we help streamline your operations worldwide.
            </p>
            <RequestButton text={"Request a Consultation"} />
          </div>
        </div>

        <Image
          src="/images/home-hero.webp"
          quality={100}
          width={1704}
          height={450}
          alt="Hero image"
          className="fadeInUp"
        />
      </div>
    </section>
  );
};

export default HomeHero;
