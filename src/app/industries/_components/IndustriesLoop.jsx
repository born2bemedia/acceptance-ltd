import OrderButton from "@/global_components/OrderButton";
import React from "react";

const IndustriesLoop = () => {
  const services = [
    {
      title:
        "Business Consulting (Personnel Management, Marketing, HR, Real Estate)",
      description:
        "For consulting firms, we ensure smooth, compliant operations and optimise financial flows to support expansion and client trust. Our services include regulatory compliance, tax optimization, and legal structuring.",
      expertise: [
        "Ensuring compliance with labour and employment regulations in HR consulting.",
        "Optimising financial structures for real estate and marketing agencies.",
        "Providing legal advisory on contracts and personnel management.",
      ],
    },
    {
      title: "Tax, Insurance & Financial Consulting",
      description:
        "We assist financial consulting firms by streamlining compliance with tax regulations and optimising insurance underwriting processes. Our expertise allows companies to focus on core services while we manage legal and financial complexities.",
      expertise: [
        "Tax compliance and reporting for financial advisory firms.",
        "Ensuring legal compliance with insurance underwriting processes.",
        "Financial restructuring for optimal growth in consulting services.",
      ],
    },
    {
      title: "Marketing & PR Consulting (Digital Marketing, PR, Advertising)",
      description:
        "Marketing and PR firms face unique challenges in compliance and regulatory standards. Our services ensure your campaigns and contracts adhere to legal standards, enabling efficient financial growth.",
      expertise: [
        "Ensuring compliance with advertising and PR industry regulations.",
        "Legal structuring of contracts for digital marketing campaigns.",
        "Financial advisory on project profitability and scalability.",
      ],
    },
    {
      title: "E-commerce (Basic & High-Ticket)",
      description:
        "In the fast-paced e-commerce sector, we ensure legal and financial compliance across jurisdictions, especially for high-ticket transactions. Our services help streamline operations, manage financial flows, and provide legal protection.",
      expertise: [
        "Cross-border compliance for international e-commerce operations.",
        "Financial advisory and tax structuring for online retail businesses.",
        "Legal protection and advisory for high-ticket transactions.",
      ],
    },
    {
      title: "Health & Wellness Services (Dietetics, Nutrition, Astrology)",
      description:
        "The health and wellness industry requires careful legal compliance and financial management. We help businesses in this sector adhere to industry-specific regulations and optimise financial performance.",
      expertise: [
        "Compliance with health and wellness regulations, including dietetics and nutrition.",
        "Financial optimization for service scalability and growth.",
        "Legal advisory for partnerships and service contracts.",
      ],
    },
    {
      title:
        "Writing & Content Creation (Ghostwriting, Autobiography, Copywriting)",
      description:
        "We provide tailored compliance and financial advisory services for content creators and agencies to ensure growth without legal risk. We focus on structuring contracts and managing financial flows effectively.",
      expertise: [
        "Ensuring compliance with intellectual property and copyright laws.",
        "Optimising financial structures for content creation agencies.",
        "Legal advisory for ghostwriting and publishing contracts.",
      ],
    },
    {
      title:
        "IT & Software Services (IT Consulting, CRM Development, Software Reselling)",
      description:
        "IT and software companies face a complex regulatory landscape. Our advisory services ensure these businesses remain compliant while optimising their financial performance and scalability.",
      expertise: [
        "Navigating data privacy laws and IT regulations.",
        "Financial optimization for software development and reselling.",
        "Legal advisory for software licensing and CRM development.",
      ],
    },
    {
      title:
        "Web & Digital & Cybersecurity Services (Web Development, Cybersecurity Solutions)",
      description:
        "Web and digital companies need a balance of legal compliance and financial health to thrive. Our services support managing regulatory risks, protecting sensitive data, and optimising financial operations.",
      expertise: [
        "Ensuring compliance with data security and privacy regulations.",
        "Financial structuring for web development and digital services.",
        "Legal advisory on cybersecurity solutions and contracts.",
      ],
    },
  ];

  return (
    <section className="solutions-loop">
      <div className="container">
        {services.map((service, index) => (
          <div className="solution" key={index}>
            <div className="solution-top">
              <h4>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{service.title}</span>
              </h4>
              <img src="/images/tabArrow.svg" />
            </div>
            <div className="solution-info">
              <div>
                <p>{service.description}</p>
                <h4>Included Services:</h4>
                <ul>
                  {service.expertise.map((expertiseService, i) => (
                    <li key={i}>{expertiseService}</li>
                  ))}
                </ul>
              </div>
              <OrderButton serviceName={service.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesLoop;
