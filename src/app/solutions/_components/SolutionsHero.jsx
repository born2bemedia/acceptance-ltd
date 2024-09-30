import Image from "next/image";
import React from "react";

const SolutionsHero = () => {
  return (
    <section className="solutions-hero">
      <div className="container">
        <div className="col-01">
          <h1 className="fadeInUp">
            Expert Guidance <br />
            for Your Business <br />
            at Home and Abroad
          </h1>
          <p className="fadeInUp">
            Comprehensive solutions for every phase of your business journey,
            from company formation to closure. Whether you're expanding locally
            or internationally, we are your trusted partner in ensuring smooth,
            compliant, and efficient operations at every step.
          </p>
        </div>
        <Image className="fadeInUp" src="/images/solutions/hero.png" width={840} height={360} />
      </div>
    </section>
  );
};

export default SolutionsHero;
