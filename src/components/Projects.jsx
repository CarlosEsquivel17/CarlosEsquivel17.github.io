import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            id: 1,
            title: "Portafolio Personal",
            description: "Portafolio web moderno desarrollado con React y Vite, con animaciones fluidas y diseño responsive.",
            technologies: ["React", "Vite", "Framer Motion", "CSS3"],
            github: "https://github.com/CarlosEsquivel17",
            demo: "#",
            featured: true
        },
        {
            id: 2,
            title: "Proyecto Unity VR",
            description: "Aplicación de realidad virtual desarrollada en Unity, implementando interacciones inmersivas.",
            technologies: ["Unity", "C#", "VR SDK", "Blender"],
            github: "https://github.com/CarlosEsquivel17",
            featured: true
        },
        {
            id: 3,
            title: "Sistema Web Full Stack",
            description: "Aplicación web completa con autenticación, CRUD y panel de administración.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/CarlosEsquivel17",
        },
        {
            id: 4,
            title: "Script de Automatización",
            description: "Herramientas de automatización en Python para procesamiento de datos y tareas repetitivas.",
            technologies: ["Python", "Pandas", "NumPy"],
            github: "https://github.com/CarlosEsquivel17",
        }
    ];

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
        <section id="projects" className="projects" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <span className="title-number">04.</span> Proyectos Destacados
                    </h2>

                    <motion.div
                        className="projects-grid"
                        variants={container}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={`project-card ${project.featured ? 'featured' : ''}`}
                                variants={item}
                                whileHover={{ y: -10 }}
                            >
                                <div className="project-content">
                                    {project.featured && (
                                        <span className="featured-badge">Destacado</span>
                                    )}
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <FiGithub /> Código
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                <FiExternalLink /> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="view-more"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                    >
                        <a
                            href="https://github.com/CarlosEsquivel17"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Ver Más en GitHub <FiGithub />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;