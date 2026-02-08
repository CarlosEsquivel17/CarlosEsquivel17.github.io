import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiReact, SiJavascript, SiPython, SiCplusplus, SiC,
    SiUnity, SiHtml5, SiCss3, SiLinux, SiNodedotjs, SiDjango
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML5", icon: SiHtml5, level: 90 },
                { name: "CSS3", icon: SiCss3, level: 85 },
                { name: "JavaScript", icon: SiJavascript, level: 85 },
                { name: "React", icon: SiReact, level: 80 },
            ]
        },
        {
            title: "Backend & Languages",
            skills: [
                { name: "Python", icon: SiPython, level: 85 },
                { name: "C", icon: SiC, level: 80 },
                { name: "C++", icon: SiCplusplus, level: 80 },
                { name: "Node.js", icon: SiNodedotjs, level: 75 },
                { name: "Django", icon: SiDjango, level: 70 },
            ]
        },
        {
            title: "Game Development",
            skills: [
                { name: "Unity", icon: SiUnity, level: 85 },
                { name: "C#", icon: SiCplusplus, level: 80 },
                { name: "VR Development", icon: SiUnity, level: 75 },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Linux", icon: SiLinux, level: 80 },
            ]
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
        <section id="skills" className="skills" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <span className="title-number">02.</span> Technical Skills
                    </h2>

                    <motion.div
                        className="skills-grid"
                        variants={container}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                    >
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                className="skill-category"
                                variants={item}
                            >
                                <h3 className="category-title">{category.title}</h3>
                                <div className="skills-list">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            className="skill-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                        >
                                            <div className="skill-header">
                                                <div className="skill-info">
                                                    <skill.icon className="skill-icon" />
                                                    <span className="skill-name">{skill.name}</span>
                                                </div>
                                                <span className="skill-percentage">{skill.level}%</span>
                                            </div>
                                            <div className="skill-bar">
                                                <motion.div
                                                    className="skill-progress"
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                                    transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;