import React from "react";
import { ButtonIcon } from "./Icons";
import Link from "next/link";
import RequestButton from "./RequestButton";

const ExpertSupport = ({ title, text }) => {
  return (
    <section className="expert-support">
      <div className="expert-support__inner container">
        <h2 className="fadeInUp" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="fadeInUp" dangerouslySetInnerHTML={{ __html: text }} />
        <RequestButton />
      </div>
    </section>
  );
};

export default ExpertSupport;
