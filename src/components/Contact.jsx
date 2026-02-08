import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactInfo = [
        {
            icon: FiMail,
            title: "Email",
            value: "carlosesquiveel03@gmail.com",
            link: "mailto:carlosesquiveel03@gmail.com"
        },
        {
            icon: FiPhone,
            title: "Phone",
            value: "+52 444 802 0254",
            link: "tel:+524448020254"
        },
        {
            icon: FiGithub,
            title: "GitHub",
            value: "CarlosEsquivel17",
            link: "https://github.com/CarlosEsquivel17"
        }
    ];

    return (
        <section id="contact" className="contact" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <span className="title-number">05.</span> Contact
                    </h2>

                    <div className="contact-content">
                        <motion.div
                            className="contact-text"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="contact-heading">Do you have a project in mind?</h3>
                            <p className="contact-description">
                                I am available for new opportunities and collaborations.
                                If you have an interesting project or simply want to connect,
                                don't hesitate to contact me.
                            </p>

                            <motion.a
                                href="mailto:carlosesquiveel03@gmail.com"
                                className="btn btn-primary contact-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.title}
                                    href={info.link}
                                    className="contact-card"
                                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 + (index * 0.1) }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className="contact-icon">
                                        <info.icon size={24} />
                                    </div>
                                    <div className="contact-details">
                                        <h4>{info.title}</h4>
                                        <p>{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;