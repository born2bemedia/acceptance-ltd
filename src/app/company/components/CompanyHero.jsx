import Image from "next/image";

const CompanyHero = () => {
    return (
        <section className="company-hero">
            <div className="company-hero__inner container">
                <div className="top">
                    <h1>Aceptanta</h1>
                    <hr />
                    <p>We assist businesses of all sizes: from startups to global brands.</p>
                </div>
                <Image
                    src="/images/company/company-hero-image.webp"
                    quality={100}
                    width={1704}
                    height={559}
                    alt="Hero image"
                    className="fadeInUp"
                />
            </div>
        </section>
    );
}

export default CompanyHero;