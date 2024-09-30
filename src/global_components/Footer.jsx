import React from "react";
import "@/style/footer.scss";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="footer__inner container">
            <div className="footer__content">
                <div className="footer__col-logo">
                    <Link href="/" className="logo">
                        <img src="/images/Acceptance-logo.svg" width={128} alt="logo" />
                    </Link>
                </div>

                <div className="footer__col-menu">
                    <div className="more-menu">
                        <h3>More about Acceptance LTD</h3>

                        <ul>
                            <li>
                                <Link href="/company">Company</Link>
                            </li>
                            <li>
                                <Link href="/insights">Insights</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/solutions">Solutions</Link>
                            </li>
                            <li>
                                <Link href="/industries">Industries </Link>
                            </li>
                            <li>
                                <Link href="/contact-us">Contact us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="menu-legal">
                        <h3>Legal</h3>

                        <ul>
                            <li>
                                <Link href="#">Terms of Use</Link>
                            </li>
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#">Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-contacts">
                        <h3>Contacts</h3>

                        <ul>
                            <li>
                                <Link href="#">Email</Link>
                            </li>
                            <li>
                                <Link href="#">Phone</Link>
                            </li>
                            <li>
                                Address
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© {currentYear} Acceptance LTD. All rights reserved.</p>
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;