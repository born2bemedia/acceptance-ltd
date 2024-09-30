import Image from "next/image";
import React from "react";

const SolutionsHero = () => {
  return (
    <section className="solutions-hero">
      <div className="container">
        <div className="col-01">
          <h1>
            Expert Guidance <br />
            for Your Business <br />
            at Home and Abroad
          </h1>
          <p>
            Comprehensive solutions for every phase of your business journey,
            from company formation to closure. Whether you're expanding locally
            or internationally, we are your trusted partner in ensuring smooth,
            compliant, and efficient operations at every step.
          </p>
        </div>
        <Image src="/images/solutions/hero.png" width={840} height={360} />
      </div>
    </section>
  );
};

export default SolutionsHero;
