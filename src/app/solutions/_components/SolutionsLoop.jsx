"use client";
import OrderButton from "@/global_components/OrderButton";
import React from "react";
import SolutionTab from "./SolutionTab";

const SolutionsLoop = () => {
  const services = [
    {
      title: "Compliance & Legal Services",
      description:
        "Ensuring your business operates within legal boundaries, reducing risks, and maintaining compliance across jurisdictions. Knowing that all regulations are met, you'll have peace of mind, minimizing exposure to penalties or legal issues.",
      includedServices: [
        "Risk assessments",
        "Compliance advisory",
        "Legal documentation management",
      ],
    },
    {
      title: "Company Formation",
      description:
        "A properly structured business setup, tailored to your needs, ensuring smooth operations and favorable conditions from the start. You gain access to the most suitable jurisdiction, streamlining tax and operational efficiency.",
      includedServices: [
        "Jurisdiction selection",
        "Business registration",
        "Initial legal documentation",
        "Company Formation and Structuring",
      ],
    },
    {
      title: "Bank Account Opening",
      description:
        "Opening 4 to 6 bank accounts to ensure seamless transactions via SEPA, SWIFT, and UK Local systems. We conduct 10 to 12 verification processes with financial institutions to secure accounts that meet your business needs, optimizing financial operations and payment flexibility.",
      includedServices: [
        "Multiple account openings (SEPA, SWIFT, local systems)",
        "Verification assistance",
        "Ongoing banking relationship management",
        "Bank account closure assistance",
        "Financial flow analysis",
        "Client-based banking strategy support",
        "Compliance monitoring for banking",
      ],
    },
    {
      title: "Financial Advisory",
      description:
        "Actionable financial strategies to optimize cash flow, reduce operational costs, and improve overall financial health. Your business benefits from expert insights that help achieve growth and stability.",
      includedServices: [
        "Financial risk management",
        "Profitability optimization",
        "Investment strategy advisory",
        "Legal support",
      ],
    },
    {
      title: "Underwriting",
      description:
        "Accurate risk assessments that support your financial decisions and secure better financial outcomes. You’ll make informed choices with minimized risk and enhanced growth potential.",
      includedServices: [
        "Creditworthiness analysis",
        "Risk mitigation plans",
        "Financial agreement assessments",
      ],
    },
    {
      title: "Accounting Services",
      description:
        "Ensuring your financial records are accurately maintained, tax obligations are met, and reporting is flawless. You’ll have timely, detailed financial data to make informed business decisions.",
      includedServices: [
        "Bookkeeping",
        "Financial reporting",
        "Payroll management",
        "Tax compliance management",
      ],
    },
    {
      title: "Compliance Monitoring",
      description:
        "Consistent oversight of your company’s operations ensures full regulatory compliance, avoiding legal pitfalls. You benefit from ongoing monitoring and proactive risk management.",
      includedServices: [
        "Regular compliance reviews",
        "Risk assessments",
        "Documentation audits",
      ],
    },
    {
      title: "Tax Reporting",
      description:
        "Your tax filings are timely and error-free, ensuring full compliance with local and international tax laws. This service reduces your tax liabilities and ensures all reporting is accurate.",
      includedServices: [
        "Tax filings",
        "Compliance with tax authorities",
        "Deduction optimization",
      ],
    },
    {
      title: "Document Management",
      description:
        "Maintain a well-organised, secure system for critical documents, ensuring they are up-to-date and readily available for legal and financial purposes. This service ensures compliance and efficient access to necessary records.",
      includedServices: [
        "Document organisation",
        "Secure archiving",
        "Regular updates and renewals",
      ],
    },
    {
      title: "Company Closure Assistance",
      description:
        "A structured and compliant process for winding down your business operations, ensuring all legal and financial matters are handled efficiently. You can close the company without lingering liabilities.",
      includedServices: [
        "Legal compliance",
        "Financial settlement support",
        "Final documentation filing",
      ],
    },
    {
      title: "Dispute Resolution with Financial Institutions",
      description:
        "Resolve any banking or financial disputes with expert support, ensuring minimal disruption to your business. You get swift, professional solutions to any issues with financial institutions.",
      includedServices: [
        "Dispute mediation",
        "Negotiation with financial institutions",
        "Legal representation if needed",
      ],
    },
    {
      title: "Director and Responsible Person Support",
      description:
        "Receive ongoing support for directors and responsible persons, ensuring they are fully compliant and prepared for regulatory interviews or challenges. You get expert guidance throughout.",
      includedServices: [
        "Director training",
        "Interview preparation",
        "Compliance guidance",
        "Selection and support of nominee directors",
        "Selection and support of responsible persons",
      ],
    },
    {
      title: "Company Support",
      description:
        "Ensure seamless business operations with full reporting, tax compliance, and proper company management. We handle all necessary filings, renewals, and legal formalities, allowing you to focus on business growth while staying compliant. If a company ceases operations, we oversee the legal closure process, ensuring all obligations are met.",
      includedServices: [
        "Submission and maintenance of required reports",
        "Tax and fee payments management",
        "Timely company renewals and data updates in corporate registers",
        "Legal closure of companies, including final reporting and payments",
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
