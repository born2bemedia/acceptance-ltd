"use client";
import React from "react";
import "@/style/footer.scss";
import Link from "next/link";
import { EmailIcon } from "../global_components/Icons";

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
            <h3>More about Aceptanta</h3>

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
            </ul>
          </div>
          <div className="menu-legal item">
            <h3>Contacts</h3>

            <ul className="contacts-menu">
              <li>
                <Link href="mailto:info@aceptanta.com">
                  <EmailIcon />
                  info@aceptanta.com
                </Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="13.5"
                    stroke="#143F34"
                  />
                  <path
                    d="M6 20.4001H7.6M7.6 20.4001H11.6M7.6 20.4001V10.1603C7.6 9.26417 7.6 8.81579 7.77439 8.47354C7.92779 8.17248 8.17238 7.92788 8.47344 7.77449C8.8157 7.6001 9.26407 7.6001 10.1602 7.6001H11.4402C12.3362 7.6001 12.7837 7.6001 13.1259 7.77449C13.427 7.92788 13.6724 8.17248 13.8258 8.47354C14 8.81546 14 9.26329 14 10.1576V12.4003M11.6 20.4001H20.4M11.6 20.4001V15.8946C11.6 15.4743 11.6 15.2641 11.6504 15.0681C11.6951 14.8943 11.7686 14.7296 11.868 14.5802C11.98 14.4118 12.1369 14.2708 12.4492 13.9903L14.2905 12.3361C14.8943 11.7936 15.1964 11.5222 15.538 11.4192C15.8391 11.3285 16.1606 11.3285 16.4617 11.4192C16.8036 11.5223 17.1061 11.7939 17.7109 12.3372L19.5509 13.9903C19.8636 14.2711 20.0196 14.4117 20.1317 14.5802C20.2311 14.7296 20.3046 14.8943 20.3492 15.0681C20.3996 15.2641 20.4 15.4743 20.4 15.8946V20.4001M20.4 20.4001H22"
                    stroke="#143F34"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Registered Address: Hamilton Development, Unit B, Charlestown,
                Nevis, West Indies
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="13.5"
                    stroke="#143F34"
                  />
                  <path
                    d="M6 20.4001H7.6M7.6 20.4001H11.6M7.6 20.4001V10.1603C7.6 9.26417 7.6 8.81579 7.77439 8.47354C7.92779 8.17248 8.17238 7.92788 8.47344 7.77449C8.8157 7.6001 9.26407 7.6001 10.1602 7.6001H11.4402C12.3362 7.6001 12.7837 7.6001 13.1259 7.77449C13.427 7.92788 13.6724 8.17248 13.8258 8.47354C14 8.81546 14 9.26329 14 10.1576V12.4003M11.6 20.4001H20.4M11.6 20.4001V15.8946C11.6 15.4743 11.6 15.2641 11.6504 15.0681C11.6951 14.8943 11.7686 14.7296 11.868 14.5802C11.98 14.4118 12.1369 14.2708 12.4492 13.9903L14.2905 12.3361C14.8943 11.7936 15.1964 11.5222 15.538 11.4192C15.8391 11.3285 16.1606 11.3285 16.4617 11.4192C16.8036 11.5223 17.1061 11.7939 17.7109 12.3372L19.5509 13.9903C19.8636 14.2711 20.0196 14.4117 20.1317 14.5802C20.2311 14.7296 20.3046 14.8943 20.3492 15.0681C20.3996 15.2641 20.4 15.4743 20.4 15.8946V20.4001M20.4 20.4001H22"
                    stroke="#143F34"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Office Address: Floor 3, Office No. 359, Tomasza Zana 32A,
                20-400 Lublin, Poland
              </li>
              <li>
                <Link href="tel:+48573587868">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="27"
                      height="27"
                      rx="13.5"
                      stroke="#143F34"
                    />
                    <path
                      d="M12.335 8.83815C12.1325 8.33193 11.6422 8 11.097 8H9.26316C8.56554 8 8 8.5654 8 9.26302C8 15.1928 12.8072 20 18.737 20C19.4346 20 20 19.4344 20 18.7368L20.0003 16.9026C20.0003 16.3574 19.6685 15.8672 19.1622 15.6648L17.4046 14.962C16.9499 14.7801 16.4322 14.8619 16.056 15.1755L15.6023 15.5538C15.0726 15.9953 14.2931 15.9601 13.8055 15.4725L12.5281 14.194C12.0405 13.7064 12.0045 12.9276 12.446 12.3978L12.8242 11.9442C13.1377 11.568 13.2203 11.0501 13.0384 10.5954L12.335 8.83815Z"
                      stroke="#143F34"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  +48573587868
                </Link>
              </li>
              <li>Registration Number: L23233</li>
            </ul>

            <Link href="/contact-us">Contact us</Link>
          </div>

          <div className="col-contacts item">
            <h3>Legal</h3>

            <ul className="legal-menu">
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
            <div className="copiright">
              <p>© {currentYear} Acceptance Solutions Group LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
