import Image from "next/image";
import "@/style/contact-us.scss";
import ContactForm from "./components/ContactForm";

export const metadata = {
  title: "Contact Us | Aceptanta",
  description:
    "Contact the Aceptanta expert team. Feel free to share your issues or ask questions. Get a free consultation within 48 business hours.",
  openGraph: {
    title: "Contact Us | Aceptanta",
    description:
      "Contact the Aceptanta expert team. Feel free to share your issues or ask questions. Get a free consultation within 48 business hours.",
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
              src="/images/contact-us/contact.webp"
              quality={100}
              width={795}
              height={361}
              alt="image contacts"
              className="fadeInUp"
            />
          </div>

          <div className="col col-form">
            <h2>Why Choose Us</h2>

            <ContactForm />

            <hr />
            <h2>More Ways to Connect</h2>

            <div className="contacts-row">
              <a href="mailto:info@aceptanta.com" className="email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <rect width="64" height="64" rx="8" fill="#E7E7E7" />
                  <g clip-path="url(#clip0_2643_3308)">
                    <path
                      d="M40.5423 22.1665H22.459C21.4313 22.1665 20.4456 22.5748 19.7189 23.3015C18.9922 24.0282 18.584 25.0138 18.584 26.0415V38.9582C18.584 39.9859 18.9922 40.9715 19.7189 41.6982C20.4456 42.4249 21.4313 42.8332 22.459 42.8332H40.5423C41.57 42.8332 42.5557 42.4249 43.2824 41.6982C44.0091 40.9715 44.4173 39.9859 44.4173 38.9582V26.0415C44.4173 25.0138 44.0091 24.0282 43.2824 23.3015C42.5557 22.5748 41.57 22.1665 40.5423 22.1665ZM40.5423 24.7498L32.1465 30.5236C31.9501 30.637 31.7274 30.6966 31.5007 30.6966C31.2739 30.6966 31.0512 30.637 30.8548 30.5236L22.459 24.7498H40.5423Z"
                      fill="#143F34"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2643_3308">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="translate(18 18)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                info@aceptanta.com
              </a>
              <a href="tel:+48573587868" className="email">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="64" height="64" rx="8" fill="#E7E7E7" />
                  <path
                    d="M42.4355 37.8034L39.4722 37.4651C39.1238 37.4241 38.7706 37.4627 38.4392 37.5779C38.1078 37.6931 37.8068 37.8818 37.5589 38.1301L35.4122 40.2767C32.1005 38.592 29.4086 35.9001 27.7239 32.5884L29.8822 30.4301C30.3839 29.9284 30.6289 29.2284 30.5472 28.5167L30.2089 25.5767C30.143 25.0075 29.8699 24.4824 29.4417 24.1016C29.0136 23.7207 28.4602 23.5108 27.8872 23.5117H25.8689C24.5505 23.5117 23.4539 24.6084 23.5355 25.9267C24.1539 35.8901 32.1222 43.8467 42.0739 44.4651C43.3922 44.5467 44.4889 43.4501 44.4889 42.1317V40.1134C44.5005 38.9351 43.6139 37.9434 42.4355 37.8034Z"
                    fill="#143F34"
                  />
                </svg>
                +48573587868
              </a>
            </div>
            <div className="maps-row">
              <div>
                <span>Registration Address</span>
                <h3>
                  Hamilton Development, Unit B, Charlestown, Nevis, West Indies
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18135.90614132039!2d-62.620544912142165!3d17.140775286039457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c123d5a1ad0fe87%3A0x279aaa2b967add2d!2sCarino%20Hamilton%20Development!5e0!3m2!1sen!2sua!4v1757346615007!5m2!1sen!2sua"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
              <div>
                <span>Office Address</span>
                <h3>
                  Floor 3, Office No. 359, Tomasza Zana 32A, 20-400 Lublin,
                  Poland
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.893685819796!2d22.52305747614721!3d51.239452830243096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472259d437a4b07b%3A0xb0a98cfdb5d9b03e!2sGray%20Office%20A%2C%20Tomasza%20Zana%2032A%2C%2020-400%20Lublin%2C%20Poland!5e0!3m2!1sen!2sua!4v1757346516992!5m2!1sen!2sua"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
