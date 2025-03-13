import OrderButton from "@/global_components/OrderButton";
import React, { useState } from "react";

const SolutionTab = ({ service, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="solution fadeInUp" key={index}>
      <div className="solution-top" onClick={handleClick}>
        <h3>{String(index + 1).padStart(2, "0")}</h3>
        <h4>
          <span>{service.title}</span>
        </h4>
        {isOpen ? (
          <img src="/images/solutions/opened.svg" />
        ) : (
          <img src="/images/solutions/closed.svg" />
        )}
      </div>
      <div
        className="solution-info"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div>
          <p>{service.description}</p>
          <div>
            <h4>Included Services:</h4>
            <ul>
              {service.includedServices.map((includedService, i) => (
                <li key={i}>{includedService}</li>
              ))}
            </ul>
          </div>
        </div>
        <OrderButton serviceName={service.title} />
      </div>
    </div>
  );
};

export default SolutionTab;
