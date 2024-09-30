"use client";
import React from "react";
import Link from "next/link";
import { ButtonIcon } from '../../../global_components/Icons';


const HomeExpertSupport = () => {
    return (
      <section className="expert-support">
        <div className="expert-support__inner container">
            <h2>Get expert support for your business</h2>
            <p>Ready to navigate the complexities of compliance, legal services, and financial advisory? Contact us today for a consultation tailored to your industry needs.</p>
            <Link href="#" className="button">Get a Consultation 
                <ButtonIcon />
            </Link>
        </div>
      </section>
    );
  };
  
  export default HomeExpertSupport;