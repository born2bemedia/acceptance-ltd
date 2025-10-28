import OrderButton from "@/global_components/OrderButton";
import React from "react";

const IndustriesLoop = () => {
  const services = [
    {
      title: "E-Commerce & Digital Business",
      description:
        "E-commerce businesses operate in fast-paced, competitive markets where payment processing and operational efficiency are critical. Our services help online stores, marketplaces, and service platforms manage regulatory obligations, streamline transactions, and establish a reliable presence abroad.",
      expertise: [
        "Structuring cross-border operations to comply with local and international tax requirements.",
        "Assistance with opening corporate bank accounts and integrating payment systems.",
        "Support in establishing legal addresses, offices, and corporate representation."
      ],
    },
    {
      title: "IT, Startups & Technology",
      description:
        "IT firms and startups, including SaaS providers and AI-driven projects, need flexible, scalable solutions that balance regulatory alignment with innovation. We help technology companies navigate legal, financial, and operational challenges when expanding internationally.",
      expertise: [
        "Ensuring adherence to data protection, intellectual property, and cybersecurity regulations.",
        "Corporate structuring and financial planning for software development and tech services.",
        "Legal support for contracts, partnerships, and licensing agreements.",
        "Assistance with international incorporation and ongoing administrative support.",
      ],
    },
    {
      title: "Consulting & Professional Services",
      description:
        "Consulting and professional services firms rely on credibility, trust, and smooth operations to build their reputation. We provide solutions that secure proper legal structure, financial clarity, and efficient corporate administration across borders.",
      expertise: [
        "Guidance on international business registration and licensing requirements.",
        "Support for financial oversight, reporting, and auditing.",
        "Legal advisory for contracts, agreements, and corporate governance.",
        "Nominee and administrative services to meet regulatory requirements in foreign jurisdictions.",
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
