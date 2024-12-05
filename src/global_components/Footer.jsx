"use client";
import React from "react";
import "@/style/footer.scss";
import Link from "next/link";
import { EmailIcon } from '../global_components/Icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="footer__inner container">
            <div className="footer__col-logo">
                <Link href="/" className="logo">
                    <img src="/images/Acceptance-logo.svg" width={128} alt="logo" />
                </Link>
            </div>

            <div className="col">

                <div className="menu-primary item">
                    <h3>More about Acceptance LTD</h3>

                    <ul>
                        <li>
                            <Link href="/company">Company</Link>
                        </li>
                        <li>
                            <Link href="/solutions">Solutions</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/industries">Industries</Link>
                        </li>
                        <li>
                            <Link href="/insights">Insights</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-legal item">
                    <h3>Legal</h3>

                    <ul>
                        <li>
                            <Link href="/terms-of-use">Terms of Use</Link>
                        </li>
                        <li>
                            <Link href="/cookie-policy">Cookie Policy</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-contacts item">
                    <div className="email">
                        <Link href="mailto:info@aceptanta.com"><EmailIcon/>info@aceptanta.com</Link>
                    </div>
                    <div className="copiright">
                        <p>© {currentYear} Acceptance LTD. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
      </footer>

    );
  }
  
  export default Footer;