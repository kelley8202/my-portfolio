"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        type: "work",
        title: "Front-end Developer",
        company: "Eztek Digital Solutions Co., Ltd",
        period: "02/2025 - 01/2026",
        desc: "Participated in development and maintenance of Web and Super App Zalo. Built Zalo Mini Apps using React and ZaUI. Maintained Admin Portal with Angular & RxJS. Developed pixel-perfect ReactJS/Next.js web apps and optimized performance.",
    },
    {
        type: "edu",
        title: "Information Technology",
        company: "University of Economics - Technology for Industries",
        period: "09/2021 - 08/2025",
        desc: "Graduated with Good Classification. Built solid foundations in algorithms, software architecture, and web development technologies.",
    }
];

export default function ExperienceTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        My <span className="text-neon-purple">Journey</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        A timeline of my professional experience and education.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Animated Line */}
                    <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 rounded-full">
                        <motion.div
                            style={{ scaleY: pathLength, originY: 0 }}
                            className="absolute top-0 bottom-0 left-0 right-0 w-full bg-gradient-to-b from-neon-purple via-neon-pink to-neon-blue rounded-full shadow-[0_0_15px_rgba(176,38,255,0.5)]"
                        />
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className={`relative flex items-center justify-between md:justify-normal w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#030014] border-4 border-neon-purple z-10 shadow-[0_0_10px_rgba(176,38,255,0.5)]"
                                ></motion.div>

                                {/* Content Box */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className={`ml-16 md:ml-0 w-full md:w-[45%] glass p-6 rounded-2xl group hover:border-neon-purple/50 transition-colors ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                                >
                                    <div className={`flex items-center gap-2 mb-2 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        {exp.type === 'work' ? (
                                            <Briefcase className="w-5 h-5 text-neon-pink" />
                                        ) : (
                                            <GraduationCap className="w-5 h-5 text-neon-blue" />
                                        )}
                                        <span className="text-sm font-mono text-slate-400 group-hover:text-neon-blue transition-colors">{exp.period}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                    <h4 className="text-neon-purple font-medium mb-4">{exp.company}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
