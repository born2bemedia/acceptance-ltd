import OrderButton from "@/global_components/OrderButton";
import React from "react";

const IndustriesLoop = () => {
  const services = [
    {
      title: "Business Consulting",
      business: [
        "Business Consulting (including Personnel Management, Marketing, HR, Real Estate)",
        "Tax & Insurance Consulting",
        "Marketing Consulting (Digital Advertising)",
        "PR Agency / PR Consulting / Digital Marketing",
      ],
      description:
        "For consulting firms, we ensure smooth, compliant operations and optimize financial flows to support expansion and client trust. Our expertise helps consulting businesses maintain transparency, meet regulatory requirements, and structure their financial activities effectively to avoid compliance risks and operational inefficiencies.",
      expertise: [
        "<b>Regulatory Compliance & Risk Management</b> – Ensuring compliance with labor, employment, and industry-specific regulations for HR, real estate, and marketing consultancies.",
        "<b>Optimizing Financial Structures</b> – Developing stable financial frameworks to support long-term partnerships and ensure proper tax planning and reporting.",
        "<b>Legal Structuring & Contract Advisory</b> – Assisting with contract negotiations, personnel management, and agreements to secure smooth business operations.",
        "<b>Banking & Transaction Management</b> – Supporting consulting firms in setting up banking structures aligned with their financial flows and business needs.",
        "<b>Tax Planning & Reporting</b> – Helping firms maintain transparent financial reporting and tax compliance to avoid regulatory risks.",
      ],
    },
    {
      title: "E-commerce Basic",
      business: [
        "Financial Education",
        "Dietetics / Nutriciology",
        "Astrology Services",
        "GhostWriting / Autobiography",
        "Software Reseller (including 3D)",
      ],
      description:
        "E-commerce businesses must navigate financial regulations, manage high transaction volumes, and ensure operational stability. We help companies maintain legal and financial compliance, optimize payment structures, and address banking challenges efficiently. Our expertise supports businesses that rely on payment processors, B2B transactions, and customer payment accounts, ensuring smooth financial operations and risk mitigation.",
      expertise: [
        "<b>Regulatory Compliance & Risk Management</b> – Ensuring adherence to financial and payment regulations to prevent account closures and maintain operational continuity.",
        "<b>Financial Flow Optimization</b> – Structuring transactions efficiently, minimizing chargeback risks, and ensuring stable payment processing.",
        "<b>Tax Structuring & Reporting</b> – Supporting tax compliance and planning for online retail businesses to optimize financial performance.",
        "<b>Legal Advisory & Dispute Resolution</b> – Assisting with contractual matters, resolving customer disputes, and managing reputational risks.",
        "<b>Banking & Payment Account Management</b> – Helping e-commerce businesses establish and maintain payment accounts while addressing potential provider concerns",
      ],
    },
    {
      title: "E-commerce High-Ticket",
      business: [
        "IT Consulting / CRM Development",
        "GhostWriting / Autobiography / Copywriting",
        "Web Development / Web Design",
        "Cybersecurity Services",
      ],
      description:
        "Companies selling high-value goods and services directly to consumers face unique financial and operational risks. Payment processors and financial institutions scrutinize large transactions more closely, increasing the likelihood of account reviews, chargeback disputes, and compliance challenges. We help businesses operating in high-ticket e-commerce structure their financial flows, maintain banking stability, and navigate legal and regulatory complexities.",
      expertise: [
        "<b>Regulatory Compliance & Risk Mitigation</b> – Ensuring businesses comply with payment regulations, reducing the risk of account freezes and transaction disputes.",
        "<b>Managing Large Transaction Volumes</b> – Structuring financial operations to support high-value payments while minimizing fraud and chargeback risks.",
        "<b>Banking & Payment Account Support</b> – Assisting in opening and maintaining banking relationships, ensuring uninterrupted payment processing.",
        "<b>Tax Structuring & Financial Reporting</b> – Advising on tax planning and compliance to optimize cash flow and meet jurisdictional requirements.",
        "<b>Legal Advisory & Dispute Resolution</b> – Addressing contract-related issues, managing consumer complaints, and handling payment disputes effectively.",
      ],
    },
  ];

  return (
    <section className="industries-loop">
      <div className="container">
        {services.map((service, index) => (
          <div className="solution fadeInUp" key={index}>
            <div className="solution-top">
              <h4>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{service.title}</span>
              </h4>
              <img src="/images/downArrow.svg" />
            </div>
            <h2 className="title">
              <b>{String(index + 1).padStart(2, "0")}</b>
            </h2>
            <div className="solution-info">
              <div className="left">
                <h4 className="title">
                  <span>{service.title}</span>
                </h4>
                <h5>Businesses:</h5>
                <ul>
                  {service.business.map((businessService, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: businessService }}
                    />
                  ))}
                </ul>
                <p>{service.description}</p>
              </div>
              <div className="right">
                <h5>Our Expertise:</h5>
                <ul>
                  {service.expertise.map((expertiseService, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: expertiseService }}
                    />
                  ))}
                </ul>
              </div>
              <div className="solution-bottom">
                <OrderButton serviceName={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesLoop;
