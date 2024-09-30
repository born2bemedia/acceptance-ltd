"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const IndustriesHero = () => {
  return (
    <section className="industries-hero">
      <div className="industries-hero__inner container">
        <div className="industries-hero__top">
          <h1>Comprehensive Expertise Across Leading Industries</h1>

          <div className="content">
            <p>
              Specialised solutions tailored to the unique challenges of diverse
              industries. From consulting and marketing to IT and wellness, our
              expertise ensures your business is equipped to succeed in every
              sector.
            </p>
          </div>
        </div>

        <Image
          src="/images/industries/hero-image.webp"
          quality={100}
          width={1704}
          height={450}
          alt="Hero image"
        />
      </div>
    </section>
  );
};

export default IndustriesHero;
