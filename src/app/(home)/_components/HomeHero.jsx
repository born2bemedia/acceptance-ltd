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
          <h1>Expert Support for International Business Operations</h1>

          <div className="content">
            <p>
              Compliance, legal, and financial solutions for efficient global
              operations. Get expert help navigating regulations, managing
              financial flows, and optimising your business.
            </p>
            <RequestButton text={"Request a Consultation"} />
          </div>
        </div>

        <Image
          src="/images/hero-image.webp"
          quality={100}
          width={1704}
          height={450}
          alt="Hero image"
        />
      </div>
    </section>
  );
};

export default HomeHero;
