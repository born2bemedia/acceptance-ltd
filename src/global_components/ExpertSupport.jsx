import React from "react";
import { ButtonIcon } from "./Icons";
import Link from "next/link";
import RequestButton from "./RequestButton";

const ExpertSupport = ({ title, text }) => {
  return (
    <section className="expert-support">
      <div className="expert-support__inner container">
        <h2 className="fadeInUp">{title}</h2>
        <p className="fadeInUp">{text}</p>
        <RequestButton />
      </div>
    </section>
  );
};

export default ExpertSupport;
