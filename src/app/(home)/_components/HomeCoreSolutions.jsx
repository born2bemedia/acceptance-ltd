"use client";
import React from "react";
import Link from "next/link";
import { ButtonIcon, CompanyFormationIcon, FinancialAdvisoryIcon, AccountingTaxServicesIcon, BankingAccountManagementIcon, ComplianceLegalSupportIcon } from '../../../global_components/Icons';

const items = [
    {
      icon: <CompanyFormationIcon />,
      title: (
        <>
          Company <br/>Setup
        </>
      ),
      description: "Guidance in choosing the most suitable country and tax regime, followed by complete company incorporation with all required documents."
    },
    {
      icon: <FinancialAdvisoryIcon />,
      title: (
        <>
          Nominee & Address
        </>
      ),
      description: "Provision of trusted nominee directors or shareholders, along with legal address or office arrangements in the chosen jurisdiction."
    },
    {
      icon: <AccountingTaxServicesIcon />,
      title: (
        <>
          Banking & Payments
        </>
      ),
      description: "Support in opening corporate accounts, passing compliance checks, connecting payment providers, and issuing business cards."
    },
    {
      icon: <BankingAccountManagementIcon />,
      title: (
        <>
          Accounting & <br/>Audit Support
        </>
      ),
      description: "Coordination with reliable local partners for bookkeeping, VAT reporting, annual financial statements, and audit services."
    },
    {
      icon: <ComplianceLegalSupportIcon />,
      title: (
        <>
          Corporate <br/>Maintenance
        </>
      ),
      description: "Full administrative support for renewals, document updates, reporting, fee payments, and company liquidation when needed."
    },
  ];
  
  const HomeCoreSolutions = () => {
    return (
      <section className="core-solutions">
        <div className="core-solutions__inner container">
          <div className="col-content fadeInUp">
            <h3>Core Solutions for Global Business</h3>
            <p>End-to-end support for company formation, banking, accounting, and compliance – everything you need to establish, run, and scale your business internationally. </p>
            <Link href="/industries" className="button">
              Check Industries
              <ButtonIcon />
            </Link>
          </div>
          <div className="col-items">
            {items.map((item, index) => (
              <div className="item fadeInUp" key={index}>
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