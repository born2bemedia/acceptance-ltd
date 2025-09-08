"use client";
import Image from "next/image";
import RequestButton from "@/global_components/RequestButton";

const OurBlock = () => {
    return (    
        <section className="our-block">
            <div className="our-block__inner container">
                <div className="col-image">
                    <Image
                        src="/images/company/Company-our.webp"
                        quality={100}
                        width={826}
                        height={537}
                        alt="Our block image"
                        className="fadeInUp"
                    />
                    <RequestButton text={"Connect with the Team"} />
                </div>

                <div className="col">
                    <div className="items">
                        <div className="item fadeInUp">
                            <h3>Our mission</h3>
                            <p>To provide expert legal, financial, and compliance solutions, helping e-commerce, IT, startups, and consulting firms operate efficiently and securely worldwide.</p>
                        </div>
                        <hr />
                        <div className="item fadeInUp">
                            <h3>Our vision</h3>
                            <p>To be the trusted partner for businesses across industries, simplifying regulations and ensuring seamless international operations.</p>
                        </div>
                    </div>

                    <RequestButton text={"Connect with the Team"} />
                </div>
            </div>
        </section>
    );
}

export default OurBlock;