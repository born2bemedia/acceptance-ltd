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
        { title: "What types of companies can Aceptanta help establish?", content: "Aceptanta assists with setting up a wide range of businesses across various industries. We conduct market research, analyse different company structures, and suggest the most suitable options for your business goals. Our expert insights ensure you make informed decisions and choose the best setup for your venture." },
        { title: "Can I order individual services rather than a complete solution?", content: "Absolutely. You can request any specific service from our listed solutions. Once you send us your inquiry, our team will reach out to understand your requirements, perform an analysis, and design an optimised offer tailored to your needs. You only pay for the services you choose, and we do not force any pre-set packages or solutions, ensuring flexibility and efficiency." },
        { title: "Do you offer pre-packaged compliance solutions?", content: "No, we do not offer off-the-shelf compliance solutions. Instead, we take a bespoke approach, analysing your case thoroughly and selecting the solution that best fits your business needs. This method ensures cost optimization and maximises effectiveness, as you receive tailored tools designed to work specifically for your company’s unique challenges and requirements." },
        { title: "How do you determine the best jurisdiction for setting up a company?", content: "We conduct comprehensive research and analysis based on your business activities, goals, and relevant legal or tax considerations. This ensures we recommend the most suitable jurisdiction to meet your needs and optimise your operations." },
        { title: "Do you offer ongoing support for your services?", content: "Yes, we provide ongoing, month-by-month support as an option. Our experts can assist you continuously, whether you need compliance monitoring, legal support, or other services. This flexible arrangement allows you to benefit from expert guidance and stay proactive in managing your business needs." },
        { title: "Can Aceptanta assist with banking solutions for my new company?", content: "Yes, we help facilitate the process of opening and managing bank accounts. Our team works closely with financial institutions to ensure your business banking needs are met, providing tailored support throughout the process." },
    ];

    return (
        <section className="accordion-block">
            <div className="accordion-block__inner container">
                <div className="col col-image">
                    <Image
                        src="/images/faq/faq-image.webp"
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
                            const contentRef = useRef(null); // Создаем ref для каждого элемента
                            return (
                                <div
                                    key={index}
                                    className={`accordion-item fadeInUp ${activeIndex === index ? "active" : ""}`}
                                >
                                    <div
                                        className="accordion-header"
                                        onClick={() => handleAccordionClick(index)}
                                    >
                                        <h3>{item.title}</h3>
                                        <div className="accordion-icon">
                                            {activeIndex === index ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                <circle cx="18" cy="18" r="18" fill="#143F34"/>
                                                <path d="M23.0146 21.3978L21.0268 23.3037L12.9324 14.8621L14.9202 12.9561L23.0146 21.3978ZM23.0284 15.3449L14.7277 23.3041L12.6757 21.164L20.9764 13.2049L23.0284 15.3449Z" fill="#FFFCFC"/>
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                <circle cx="18" cy="18" r="18" fill="#143F34"/>
                                                <path d="M23.6953 16.6992V19.4531H12V16.6992H23.6953ZM19.3359 12V24.4219H16.3711V12H19.3359Z" fill="#FFFCFC"/>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="accordion-content"
                                        ref={contentRef}
                                        style={{
                                            maxHeight: activeIndex === index ? `${contentRef.current?.scrollHeight}px` : "0",
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
