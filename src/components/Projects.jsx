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
            id: 5,
            title: "Kanban CRM",
            description: "CRM system based on Kanban flow using Django REST Framework and React.js.",
            technologies: ["React", "Django REST Framework", "Python", "Kanban", "PostgreSQL"],
            github: "https://github.com/CarlosEsquivel17",
            featured: true
        },
        {
            id: 1,
            title: "Personal Portfolio",
            description: "Modern web portfolio developed with React and Vite, with smooth animations and responsive design.",
            technologies: ["React", "Vite", "Framer Motion", "CSS3"],
            github: "https://github.com/CarlosEsquivel17",
            demo: "#",
            featured: true
        },
        {
            id: 2,
            title: "Unity VR Project",
            description: "Virtual reality application developed in Unity, implementing immersive interactions.",
            technologies: ["Unity", "C#", "VR SDK", "Blender"],
            github: "https://github.com/CarlosEsquivel17",
            featured: true
        },
        {
            id: 3,
            title: "Full Stack Web System",
            description: "Complete web application with authentication, CRUD, and administration panel.",
            technologies: ["React", "Node.js", "PostgreSQL", "Express"],
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
                        <span className="title-number">04.</span> Featured Projects
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
                                        <span className="featured-badge">Featured</span>
                                    )}
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;