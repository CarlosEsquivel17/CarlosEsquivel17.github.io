import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import { certificatesData, categories } from '../data/certificates';
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
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
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
                        <span className="title-number">03.</span> Certificaciones
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
                        {filteredCertificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="certificate-card"
                                variants={item}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
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
                                        Ver Certificado <FiExternalLink />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;