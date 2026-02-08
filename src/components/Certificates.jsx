import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import { certificatesData, categories } from './certificates.js';
import './Certificates.css';

const Certificates = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredCertificates = selectedCategory === 'all'
        ? certificatesData
        : certificatesData.filter(cert => cert.category === selectedCategory);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 50 }
        },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
    };

    return (
        <section id="certificates" className="certificates" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <span className="title-number">03.</span> Certificates
                    </h2>

                    <div className="certificates-filter">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.name}
                                <span className="count">{category.count}</span>
                            </motion.button>
                        ))}
                    </div>

                    <motion.div
                        className="certificates-grid"
                        variants={container}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredCertificates.map((cert) => (
                                <motion.div
                                    key={cert.id}
                                    className="certificate-card"
                                    variants={item}
                                    layout
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="certificate-header" style={{ backgroundColor: cert.color }}>
                                        <FiAward className="certificate-icon" />
                                    </div>
                                    <div className="certificate-body">
                                        <h3 className="certificate-title">{cert.title}</h3>
                                        <a
                                            href={cert.pdfPath}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="certificate-link"
                                        >
                                            View Certificate <FiExternalLink />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;