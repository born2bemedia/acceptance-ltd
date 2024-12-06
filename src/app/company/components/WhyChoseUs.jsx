import Image from "next/image";

const WhyChoseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="why-choose-us__inner container">
                <div className="top fadeInUp">
                    <h2>Why choose us</h2>
                </div>
                <div className="items">
                    <div className="item fadeInUp">
                        <h4>Get the Expertise You Need</h4>
                        <p>Our experts guide you through the complexities of local and international regulations, including tax compliance, licensing requirements, and corporate governance.</p>
                    </div>

                    <div className="item fadeInUp">
                        <h4>Focus on What Matters</h4>
                        <p>We’ll manage your compliance filings, legal documentation, and financial reporting, allowing you to focus on growing your business and serving your customers.</p>
                    </div>

                    <div className="item fadeInUp">
                        <h4>Stay Compliant and Avoid Risks</h4>
                        <p>We help you understand and comply with relevant laws, reducing the risk of fines and legal issues so you can operate confidently.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChoseUs;