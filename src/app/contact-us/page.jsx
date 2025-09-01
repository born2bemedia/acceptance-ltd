import Image from "next/image";
import "@/style/contact-us.scss";
import ContactForm from "./components/ContactForm";

export const metadata = {
    title: "Contact Us | Aceptanta",
    description: "Contact the Aceptanta expert team. Feel free to share your issues or ask questions. Get a free consultation within 48 business hours.",
    openGraph: {
      title: "Contact Us | Aceptanta",
      description: "Contact the Aceptanta expert team. Feel free to share your issues or ask questions. Get a free consultation within 48 business hours.",
    },
};

export default function contactUs() {
    return (
        <>
        <section class="contact-aceptanta">
            <div className="contact-aceptanta__inner container">
                <div className="col col-content">
                    <h2>Contact Aceptanta</h2>
                    <p>Specialised help for your business.</p>

                    <Image
                        src="/images/contact-us/Frame195.webp"
                        quality={100}
                        width={795}
                        height={361}
                        alt="image contacts"
                        className="fadeInUp"
                    />
                </div>

                <div className="col col-form">
                    <h2>Why Choose us</h2>

                    <ContactForm />

                    <hr />
                    <h2>More Ways to Connect</h2>

                    <a href="mailto:info@aceptanta.com" className="email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <rect width="64" height="64" rx="8" fill="#E7E7E7"/>
                        <g clip-path="url(#clip0_2643_3308)">
                        <path d="M40.5423 22.1665H22.459C21.4313 22.1665 20.4456 22.5748 19.7189 23.3015C18.9922 24.0282 18.584 25.0138 18.584 26.0415V38.9582C18.584 39.9859 18.9922 40.9715 19.7189 41.6982C20.4456 42.4249 21.4313 42.8332 22.459 42.8332H40.5423C41.57 42.8332 42.5557 42.4249 43.2824 41.6982C44.0091 40.9715 44.4173 39.9859 44.4173 38.9582V26.0415C44.4173 25.0138 44.0091 24.0282 43.2824 23.3015C42.5557 22.5748 41.57 22.1665 40.5423 22.1665ZM40.5423 24.7498L32.1465 30.5236C31.9501 30.637 31.7274 30.6966 31.5007 30.6966C31.2739 30.6966 31.0512 30.637 30.8548 30.5236L22.459 24.7498H40.5423Z" fill="#143F34"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2643_3308">
                        <rect width="28" height="28" fill="white" transform="translate(18 18)"/>
                        </clipPath>
                        </defs>
                        </svg>

                        info@aceptanta.com
                    </a>
                </div>
            </div>
        </section>

        </>
    );
  }