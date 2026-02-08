import { FiGithub, FiMail, FiPhone, FiHeart, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Carlos Esquivel</h3>
                        <p className="footer-description">
                            Full Stack Developer & Unity Developer
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#certificates">Certificates</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Contact</h4>
                        <ul className="footer-contact">
                            <li>
                                <FiMail />
                                <a href="mailto:carlosesquiveel03@gmail.com">
                                    carlosesquiveel03@gmail.com
                                </a>
                            </li>
                            <li>
                                <FiPhone />
                                <a href="tel:+524448020254">+52 444 802 0254</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Follow me</h4>
                        <div className="footer-social">
                            <a
                                href="https://github.com/CarlosEsquivel17"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FiGithub size={24} />
                            </a>
                            <a
                                href="mailto:carlosesquiveel03@gmail.com"
                                aria-label="Email"
                            >
                                <FiMail size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/carlos-esquivel-002a62250/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {currentYear} Carlos Esquivel. All rights reserved.
                    </p>
                    <p className="footer-heart">
                        Made with React & Vite
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;