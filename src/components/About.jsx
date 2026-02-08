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
                        <span className="title-number">01.</span> About Me
                    </h2>

                    <div className="about-content">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="about-paragraph">
                                My name is <span className="highlight">Carlos Emiliano Esquivel Badillo</span>, and I am a
                                graduate student in Information Technology Engineering.
                            </p>

                            <p className="about-paragraph">
                                My main interest is <span className="highlight">software development</span>,
                                both front-end and back-end, in addition to my knowledge and certifications
                                in video game and Augmented/Virtual/Mixted reality
                                <span className="highlight"> (Unity)</span>.
                            </p>

                            <p className="about-paragraph">
                                As a self-taught and avid technology researcher, I have a solid
                                sense of logic for programming and systems operation, as well as
                                problem solving by applying knowledge such as OOP.
                                I have multiple certificacions that validate my knowledge in
                                various programming languages and technologies.
                            </p>

                            <div className="about-highlights">
                                <div className="highlight-item">
                                    <div className="highlight-icon">🎓</div>
                                    <div>
                                        <h3>Education</h3>
                                        <p>Information Technology Engineering</p>
                                    </div>
                                </div>

                                <div className="highlight-item">
                                    <div className="highlight-icon">💼</div>
                                    <div>
                                        <h3>Specialization</h3>
                                        <p>Full Stack & Game Dev</p>
                                    </div>
                                </div>

                                <div className="highlight-item">
                                    <div className="highlight-icon">🏆</div>
                                    <div>
                                        <h3>Certifications</h3>
                                        <p>13+ Certifications</p>
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
                                    2+
                                </motion.div>
                                <div className="stat-label">Years of Experience</div>
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
                                <div className="stat-label">Certificates</div>
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
                                <div className="stat-label">Technologies</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;