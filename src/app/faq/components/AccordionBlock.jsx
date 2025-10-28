"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import RequestButton from "@/global_components/RequestButton";

const AccordionBlock = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What types of companies can Aceptanta help establish?",
      content:
        "Aceptanta helps establish businesses across e-commerce, IT, startups, consulting, and other industries. We analyse company structures, market conditions, and your goals to recommend the most suitable setup, ensuring informed decisions and a strong start for your venture.",
    },
    {
      title: "Can I order individual services rather than a complete solution?",
      content:
        "Yes. You can choose any service from our offerings. We’ll analyse your needs and create a tailored solution, so you only pay for what you use, with complete flexibility and no pre-set packages.",
    },
    {
      title: "Do you offer pre-packaged solutions?",
      content:
        "No. We provide tailored solutions, analysing your needs to select the most effective approach. This ensures cost efficiency and addresses your company’s unique challenges.",
    },
    {
      title: "Do you offer ongoing support for your services?",
      content:
        "Yes. Our experts provide flexible, month-to-month support, including regulatory monitoring, legal guidance, and other services, helping you stay proactive in managing your business.",
    },
    {
      title:
        "How do you determine the best jurisdiction for setting up a company?",
      content:
        "We analyse your business goals, industry, and tax requirements to recommend the most suitable jurisdiction. Our approach ensures full legal conformity, optimal tax conditions, and a smooth start for your international operations.",
    },

    {
      title: "Can Aceptanta assist with banking solutions for my new company?",
      content:
        "Yes. We help open and manage corporate bank accounts, liaising with financial institutions and providing tailored support to meet your business banking needs.",
    },
    {
      title: "In which countries does Aceptanta provide assistance?",
      content:
        "Aceptanta operates across 52 jurisdictions, including key regions in Europe, Asia, and selected offshore territories. We assist clients with company formation, banking, accounting, and ongoing business management through trusted local partners in each jurisdiction.",
    },
    {
      title: "In what languages do you provide consultations and support?",
      content:
        "Our team offers consultations and support in English and Russian. This ensures clear communication and personalized guidance for clients from CIS countries, Eastern Europe, and other international markets.",
    },
  ];

  return (
    <section className="accordion-block">
      <div className="accordion-block__inner container">
        <div className="col col-image">
          <Image
            src="/images/faq/Frame195.webp"
            quality={100}
            width={826}
            height={537}
            alt="FAQ image"
            className="fadeInUp"
          />
          <RequestButton text={"Get a Consultation"} />
        </div>
        <div className="col col-accordion">
          <div className="accordion">
            {accordionItems.map((item, index) => {
              const contentRef = useRef(null);
              return (
                <div
                  key={index}
                  className={`accordion-item fadeInUp ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => handleAccordionClick(index)}
                  >
                    <h3>{item.title}</h3>
                    <div className="accordion-icon">
                      {activeIndex === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx="18" cy="18" r="18" fill="#143F34" />
                          <path
                            d="M23.0146 21.3978L21.0268 23.3037L12.9324 14.8621L14.9202 12.9561L23.0146 21.3978ZM23.0284 15.3449L14.7277 23.3041L12.6757 21.164L20.9764 13.2049L23.0284 15.3449Z"
                            fill="#FFFCFC"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx="18" cy="18" r="18" fill="#143F34" />
                          <path
                            d="M23.6953 16.6992V19.4531H12V16.6992H23.6953ZM19.3359 12V24.4219H16.3711V12H19.3359Z"
                            fill="#FFFCFC"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div
                    className="accordion-content"
                    ref={contentRef}
                    style={{
                      maxHeight:
                        activeIndex === index
                          ? `${contentRef.current?.scrollHeight}px`
                          : "0",
                      opacity: activeIndex === index ? "1" : "0",
                      transition: "max-height 0.3s ease, opacity 0.3s ease",
                    }}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <RequestButton text={"Get a Consultation"} />
        </div>
      </div>
    </section>
  );
};

export default AccordionBlock;
