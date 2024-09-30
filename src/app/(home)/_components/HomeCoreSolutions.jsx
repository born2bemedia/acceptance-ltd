"use client";
import React from "react";
import Link from "next/link";
import { ButtonIcon, CompanyFormationIcon, FinancialAdvisoryIcon, AccountingTaxServicesIcon, BankingAccountManagementIcon, ComplianceLegalSupportIcon } from '../../../global_components/Icons';

const items = [
    {
      icon: <CompanyFormationIcon />,
      title: (
        <>
          Company Formation
        </>
      ),
      description: "Assistance in selecting the optimal jurisdiction and structuring for your business."
    },
    {
      icon: <FinancialAdvisoryIcon />,
      title: (
        <>
          Financial Advisory
        </>
      ),
      description: "Strategic advice on structuring financial flows and optimising business operations for efficiency and growth."
    },
    {
      icon: <AccountingTaxServicesIcon />,
      title: (
        <>
          Accounting & Tax Services
        </>
      ),
      description: "Accurate financial reporting and monitoring to meet tax obligations and regulatory standards."
    },
    {
      icon: <BankingAccountManagementIcon />,
      title: (
        <>
          Banking & Account <br /> Management
        </>
      ),
      description: "Support in opening, managing, and closing bank accounts based on your business needs and financial flows."
    },
    {
      icon: <ComplianceLegalSupportIcon />,
      title: (
        <>
          Compliance & <br /> Legal Support
        </>
      ),
      description: "Expert guidance in navigating regulatory requirements to ensure full compliance with local and international laws."
    },
  ];
  
  const HomeCoreSolutions = () => {
    return (
      <section className="core-solutions">
        <div className="core-solutions__inner container">
          <div className="col-content">
            <h3>Core Solutions for Your Business</h3>
            <p>Tailored compliance, legal, and financial services for smooth international operations, secure banking, and full regulatory compliance.</p>
            <Link href="/industries" className="button">
              Check Industries
              <ButtonIcon />
            </Link>
          </div>
          <div className="col-items">
            {items.map((item, index) => (
              <div className="item" key={index}>
                <div className="title">
                  <div className="icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HomeCoreSolutions;