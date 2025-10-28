import Image from "next/image";

const WhyChoseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us__inner container">
        <div className="top fadeInUp">
          <h2>Why your business needs us</h2>
        </div>
        <div className="items">
          <div className="item fadeInUp">
            <h4>Expert Guidance for Your Industry</h4>
            <p>
              We help e-commerce, IT, startups, and consulting firms navigate
              tax, licensing, and corporate regulations.
            </p>
          </div>

          <div className="item fadeInUp">
            <h4>Focus on Growth</h4>
            <p>
              We handle registration, regulatory matters, legal documents,
              financial reporting, and ongoing administration across 52
              jurisdictions, so you can concentrate on growing your business.
            </p>
          </div>

          <div className="item fadeInUp">
            <h4>Operate Confidentially</h4>
            <p>
              Stay compliant and reduce risks with support for bank accounts,
              payment integration, nominee services, and legal addresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoseUs;
