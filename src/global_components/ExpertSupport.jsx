import React from "react";
import { ButtonIcon } from "./Icons";
import Link from "next/link";
import RequestButton from "./RequestButton";

const ExpertSupport = ({ title, text }) => {
  return (
    <section className="expert-support">
      <div className="expert-support__inner container">
        <h2>Get expert support for your business</h2>
        <p>
          Ready to navigate the complexities of compliance, legal services, and
          financial advisory? Contact us today for a consultation tailored to
          your industry needs.
        </p>
        <RequestButton />
      </div>
    </section>
  );
};

export default ExpertSupport;
