"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonIcon } from '../../../global_components/Icons';


const items = [
    {
      title: "Deep Expertise in CIS and Eastern European Markets",
      description: "Years of experience working with businesses from CIS countries and Eastern Europe give us a unique understanding of regional challenges and opportunities. We tailor solutions to meet your specific needs, ensuring seamless international expansion."
    },
    {
      title: "Comprehensive Support from Start to Finish",
      description: "We assist with company formation, account management, legal matters, and financial operations, ensuring your business operates smoothly. Our support extends throughout your business's lifecycle, including dispute resolution and company closure if needed."
    },
    {
      title: "Transparent and Reliable Partnership",
      description: "Our commitment to transparency means you’ll always be informed at every step. We provide clear guidance and ensure that all documentation and compliance processes are handled efficiently and in full accordance with regulations."
    },
    {
      title: "Proven Success in Risk Mitigation",
      description: "We proactively monitor your business's compliance, financial reporting, and regulatory standing, helping you avoid legal complications and unnecessary costs. Our expertise ensures your business meets all regulatory requirements with minimal risk."
    },
    {
      title: "Tailored Business Solutions for Global Success",
      description: "We offer custom strategies based on your business model and financial flows. From selecting the proper jurisdiction to optimising tax structures, our solutions are designed to minimise risks and maximise efficiency."
    },
    {
      title: "Strong Relationships with Financial Institutions",
      description: "Our established partnerships with banks and payment systems across multiple jurisdictions help you navigate account openings, manage financial flows, and resolve banking challenges quickly and effectively."
    },
  ];
  
  const HomeWhyChoseUs = () => {
    return (
      <section className="why-chose-us">
        <div className="why-chose-us__inner container">
          <div className="why-chose-us__top">
            <h2>Why Choose us</h2>
          </div>
  
          <div className="why-chose-us__content">
            <div className="why-chose-us__items">
              {items.map((item, index) => (
                <div key={index} className="why-chose-us__item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
  
            <div className="col">
                    <Image
                        src="/images/why-choose-us-image.webp"
                        quality={100}
                        width={696}
                        height={570}
                        alt="WHY CHOOSE US image"
                    />
                    <Link href="#" className="button">
                        Get Assistance
                        <ButtonIcon />
                    </Link>
                </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HomeWhyChoseUs;