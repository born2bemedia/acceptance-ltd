import Image from "next/image";
import "@/style/contact-us.scss";
import ContactForm from "./components/ContactForm";

export default function contactUs() {
    return (
        <>
        <section class="contact-aceptanta">
            <div className="contact-aceptanta__inner container">
                <div className="col col-content">
                    <h2>Contact Aceptanta</h2>
                    <p>Specialised help for your business.</p>

                    <Image
                        src="/images/contacts/image-contacts.webp"
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
                </div>
            </div>
        </section>

        <section className="more-ways">
            <div className="more-ways__inner container">
                <h2>More Ways to Connect</h2>

                <div className="cols">
                    <div className="col col-email">
                        <a href="mailto:info@aceptanta.com">
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

                    <div className="col col-addess">
                        <div className="item">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <rect width="64" height="64" rx="8" fill="#E7E7E7"/>
                                <g clip-path="url(#clip0_2643_3318)">
                                <path d="M31.5 31.8125C30.5883 31.8125 29.714 31.4503 29.0693 30.8057C28.4247 30.161 28.0625 29.2867 28.0625 28.375C28.0625 27.4633 28.4247 26.589 29.0693 25.9443C29.714 25.2997 30.5883 24.9375 31.5 24.9375C32.4117 24.9375 33.286 25.2997 33.9307 25.9443C34.5753 26.589 34.9375 27.4633 34.9375 28.375C34.9375 28.8264 34.8486 29.2734 34.6758 29.6905C34.5031 30.1075 34.2499 30.4865 33.9307 30.8057C33.6115 31.1249 33.2325 31.3781 32.8155 31.5508C32.3984 31.7236 31.9514 31.8125 31.5 31.8125ZM31.5 18.75C28.9473 18.75 26.4991 19.7641 24.6941 21.5691C22.8891 23.3741 21.875 25.8223 21.875 28.375C21.875 35.5938 31.5 46.25 31.5 46.25C31.5 46.25 41.125 35.5938 41.125 28.375C41.125 25.8223 40.1109 23.3741 38.3059 21.5691C36.5009 19.7641 34.0527 18.75 31.5 18.75Z" fill="#143F34"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2643_3318">
                                <rect width="28" height="28" fill="white" transform="translate(18 18)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                Registration <br />Address:
                            </span>

                            <Image
                                src="/images/contact-us/Rectangle.webp"
                                quality={100}
                                width={490}
                                height={157}
                                alt="Address image"
                                className="fadeInUp"
                            />
                        </div>

                        <div className="item">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <rect width="64" height="64" rx="8" fill="#E7E7E7"/>
                                <g clip-path="url(#clip0_2643_3318)">
                                <path d="M31.5 31.8125C30.5883 31.8125 29.714 31.4503 29.0693 30.8057C28.4247 30.161 28.0625 29.2867 28.0625 28.375C28.0625 27.4633 28.4247 26.589 29.0693 25.9443C29.714 25.2997 30.5883 24.9375 31.5 24.9375C32.4117 24.9375 33.286 25.2997 33.9307 25.9443C34.5753 26.589 34.9375 27.4633 34.9375 28.375C34.9375 28.8264 34.8486 29.2734 34.6758 29.6905C34.5031 30.1075 34.2499 30.4865 33.9307 30.8057C33.6115 31.1249 33.2325 31.3781 32.8155 31.5508C32.3984 31.7236 31.9514 31.8125 31.5 31.8125ZM31.5 18.75C28.9473 18.75 26.4991 19.7641 24.6941 21.5691C22.8891 23.3741 21.875 25.8223 21.875 28.375C21.875 35.5938 31.5 46.25 31.5 46.25C31.5 46.25 41.125 35.5938 41.125 28.375C41.125 25.8223 40.1109 23.3741 38.3059 21.5691C36.5009 19.7641 34.0527 18.75 31.5 18.75Z" fill="#143F34"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2643_3318">
                                <rect width="28" height="28" fill="white" transform="translate(18 18)"/>
                                </clipPath>
                                </defs>
                                </svg>

                                Office<br />Address:
                            </span>

                            <Image
                                src="/images/contact-us/Rectangle.webp"
                                quality={100}
                                width={490}
                                height={157}
                                alt="Address image"
                                className="fadeInUp"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
  }