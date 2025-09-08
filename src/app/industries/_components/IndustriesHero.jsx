"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const IndustriesHero = () => {
  return (
    <section className="industries-hero">
      <div className="industries-hero__inner container">
        <div className="industries-hero__top">
          <h1 className="fadeInUp">
            Comprehensive Expertise Across Leading Industries
          </h1>
          <hr />
          <div className="content">
            <p className="fadeInUp">
              Specialised solutions tailored to the unique industry challenges.
              We ensure your business is equipped to succeed on the global
              stage, from IT and e-commerce to consulting and finance.
            </p>
          </div>
        </div>

        <Image
          src="/images/industries/industries-img.webp"
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

export default IndustriesHero;
