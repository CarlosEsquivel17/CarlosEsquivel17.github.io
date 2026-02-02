import { FiGithub, FiMail, FiPhone, FiHeart } from 'react-icons/fi';
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
                            Desarrollador Full Stack & Unity Developer
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Enlaces Rápidos</h4>
                        <ul className="footer-links">
                            <li><a href="#about">Sobre Mí</a></li>
                            <li><a href="#skills">Habilidades</a></li>
                            <li><a href="#certificates">Certificados</a></li>
                            <li><a href="#projects">Proyectos</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Contacto</h4>
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
                        <h4 className="footer-subtitle">Sígueme</h4>
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
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {currentYear} Carlos Esquivel. Todos los derechos reservados.
                    </p>
                    <p className="footer-heart">
                        Hecho con <FiHeart className="heart-icon" /> y React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;