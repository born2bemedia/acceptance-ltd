"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "@/style/header.scss";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open', 'no-scroll');
        } else {
            document.body.classList.remove('menu-open', 'no-scroll');
        }
    }, [isMenuOpen]);

    return (
        <header className="header"> 
            <div className="header__inner container">
                <Link href="/" className="logo">
                    <img src="/images/Acceptance-logo.svg" width={128} alt="logo" />
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link href="/solutions">Solutions</Link>
                        </li>
                        <li>
                            <Link href="/industries">Industries</Link>
                        </li>
                        <li>
                            <Link href="/company">Company</Link>
                        </li>
                        <li>
                            <Link href="/insights">Insights</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                    </ul>
                </nav>

                <Link href="/contact-us" className="button-header button">Contact us</Link>

                <div className={`hamburger_button ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                    <div className={`line-1 ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line-2 ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line-3 ${isMenuOpen ? 'open' : ''}`}></div>
                </div>

                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu__inner">
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/solutions">Solutions</Link>
                                </li>
                                <li>
                                    <Link href="/industries">Industries</Link>
                                </li>
                                <li>
                                    <Link href="/company">Company</Link>
                                </li>
                                <li>
                                    <Link href="/insights">Insights</Link>
                                </li>
                                <li>
                                    <Link href="/faq">FAQ</Link>
                                </li>
                            </ul>
                        </nav>

                        <Link href="/contact-us" className="button-header button">Contact us</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
