import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="about" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <span className="title-number">01.</span> Sobre Mí
                    </h2>

                    <div className="about-content">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="about-paragraph">
                                Me llamo <span className="highlight">Carlos Emiliano Esquivel Badillo</span> y soy
                                estudiante de la carrera de Ingeniería en Tecnologías de la Información,
                                actualmente cursando el último año.
                            </p>

                            <p className="about-paragraph">
                                Mi pasión se centra en el <span className="highlight">desarrollo de software</span>,
                                tanto en front-end como back-end, además de mi experiencia especializada en
                                <span className="highlight"> Unity</span> y el desarrollo de videojuegos.
                            </p>

                            <p className="about-paragraph">
                                Como autodidacta e investigador apasionado por la tecnología, poseo un
                                sólido sentido de la lógica para la programación y el funcionamiento de
                                sistemas. Cuento con múltiples certificaciones que validan mi conocimiento
                                en diversos lenguajes de programación y tecnologías.
                            </p>

                            <div className="about-highlights">
                                <div className="highlight-item">
                                    <div className="highlight-icon">🎓</div>
                                    <div>
                                        <h3>Formación</h3>
                                        <p>Ingeniería en TI</p>
                                    </div>
                                </div>

                                <div className="highlight-item">
                                    <div className="highlight-icon">💼</div>
                                    <div>
                                        <h3>Especialización</h3>
                                        <p>Full Stack & Game Dev</p>
                                    </div>
                                </div>

                                <div className="highlight-item">
                                    <div className="highlight-icon">🏆</div>
                                    <div>
                                        <h3>Certificaciones</h3>
                                        <p>13+ Certificados</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="about-stats"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="stat-card">
                                <motion.div
                                    className="stat-number"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    4+
                                </motion.div>
                                <div className="stat-label">Años de Experiencia</div>
                            </div>

                            <div className="stat-card">
                                <motion.div
                                    className="stat-number"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    13+
                                </motion.div>
                                <div className="stat-label">Certificaciones</div>
                            </div>

                            <div className="stat-card">
                                <motion.div
                                    className="stat-number"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    10+
                                </motion.div>
                                <div className="stat-label">Tecnologías</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;