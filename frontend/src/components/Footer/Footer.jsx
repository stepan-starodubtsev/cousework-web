import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h5>Національна бібліотека Ревуцького</h5>
                    <p>
                        Всі права зарезервовані Ревуцький inc. Будь яке викривлення, або зловживання інформацією - заборонено!
                    </p>
                </div>
                <div className="footer-section">
                    <h5>Quick Links</h5>
                    <ul className="footer-links">
                        <li><Link to={"/"}>Головна</Link></li>
                        <li><Link to={"/about"}>Про нас</Link></li>
                        <li><Link to={"/gallery"}>Галерея</Link></li>
                        <li><Link to={"/news"}>Новини</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h5>Follow Us</h5>
                    <ul className="footer-socials">
                        <li>
                            <a href="https://facebook.com">
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <FontAwesomeIcon icon={faTwitter} /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com">
                                <FontAwesomeIcon icon={faInstagram} /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
