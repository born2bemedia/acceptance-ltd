import Image from "next/image";
import React from "react";

const SolutionsHero = () => {
  return (
    <section className="solutions-hero">
      <div className="container">
        <Image
          className="fadeInUp"
          src="/images/solutions/solution-img.webp"
          width={1704}
          height={450}
        />
        <div className="col-01">
          <h1 className="fadeInUp">
            Expert Guidance <br />
            for Your Business <br />
            at Home and Abroad
          </h1>
          <span></span>
          <p className="fadeInUp">
            Comprehensive solutions for every phase of your business journey,
            from <br />
            company formation to closure. Whether you're expanding locally or{" "}
            <br />
            internationally, we are your trusted partner in ensuring smooth,
            compliant, <br />
            and efficient operations at every step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
