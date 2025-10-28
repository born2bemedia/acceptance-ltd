"use client";
import OrderButton from "@/global_components/OrderButton";
import React from "react";
import SolutionTab from "./SolutionTab";

const SolutionsLoop = () => {
  const services = [
    {
      title: "Jurisdiction Selection for Company Registration",
      description:
        "Experts analyze your business goals and tax requirements to recommend the most suitable jurisdiction, ensuring favorable conditions and a smooth start for your operations.",
      includedServices: [
        "Analysis of business goals and tax requirements",
        "Recommendation of a Tax Appropriate Jurisdiction",
        "Summary of local incorporation and tax conditions",
      ],
    },
    {
      title: "Company Setup & Documentation",
      description:
        "We handle the full incorporation process – from preparing documents and filing applications to delivering a fully registered legal entity with all certificates.",
      includedServices: [
        "Preparation of founding documents",
        "Filing the registration application",
        "Obtaining registration certificates and permits",
      ],
    },
    {
      title: "Nominee Services",
      description:
        "We arrange vetted nominee directors or shareholders, ensuring that agreements are in place and that ongoing coordination with the client is maintained.",
      includedServices: [
        "Appointment of nominee director/shareholder",
        "Due diligence on nominees (no criminal record, impeccable reputation)",
        "Execution of required agreements and ongoing coordination",
      ],
    },
    {
      title: "Business Address Setup",
      description:
        "We assist with legal addresses or office rentals to establish your presence and meet local requirements.",
      includedServices: [
        "Provision of a legal address",
        "Assistance with office search and rental",
        "Jurisdiction-specific address documentation",
      ],
    },
    {
      title: "Accounting & Audit Services",
      description:
        "We work closely with local accountants and auditors to ensure accurate reporting, VAT handling, and preparation of annual financial statements.",
      includedServices: [
        "Engagement of local accounting firms",
        "Monthly reporting (e.g., VAT)",
        "Annual financial statements and audit coordination",
      ],
    },
    {
      title: "Banking Services",
      description:
        "We help open corporate accounts, connect payment providers, and issue business cards, ensuring smooth and efficient financial operations.",
      includedServices: [
        "Bank selection and corporate account opening",
        "KYC and business operations support",
        "PSP connection and corporate card issuance",
      ],
    },
    {
      title: "Company Management",
      description:
        "We provide ongoing support with license renewals, document updates, reporting, and fee payments throughout your company’s lifecycle.",
      includedServices: [
        "License and registration renewals",
        "Corporate document updates and filings",
        "Regular reporting and fee payments",
      ],
    },
    {
      title: "Company Liquidation",
      description:
        "We manage company liquidation, handling closing documents and final reporting to ensure a smooth and proper closure.",
      includedServices: [
        "Preparation of liquidation documents",
        "Adherence to legal formalities",
        "Filing of final reports",
      ],
    },
  ];

  return (
    <section className="solutions-loop">
      <div className="container">
        {services.map((service, index) => (
          <SolutionTab key={index} index={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default SolutionsLoop;
