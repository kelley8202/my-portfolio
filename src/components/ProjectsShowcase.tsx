"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsShowcase() {
    const projects = [
        {
            title: "Enterprise Admin Portal",
            tech: "Angular 19, RxJS, Tailwind CSS",
            desc: "A complex standalone component admin dashboard using RxJS for global state, real-time data streams, and glassmorphism UI.",
            link: "https://github.com/kelley8202/03-admin-portal-angular",
            color: "from-blue-500/20 to-purple-500/20",
            accent: "text-blue-400"
        },
        {
            title: "Zalo Mini App E-commerce",
            tech: "React, ZMP SDK, ZaUI, Tailwind",
            desc: "Native-like mini application deployed on Zalo super app with seamless authentication and ZaloPay integration.",
            link: "https://github.com/kelley8202/02-zalo-mini-app-ecommerce",
            color: "from-blue-600/20 to-cyan-500/20",
            accent: "text-blue-500"
        },
        {
            title: "Social Feed App",
            tech: "React, Redux Toolkit, Framer Motion",
            desc: "Highly interactive social newsfeed with optimistic updates, theme customization, and global state management.",
            link: "https://github.com/kelley8202/05-social-feed-redux",
            color: "from-pink-500/20 to-rose-500/20",
            accent: "text-pink-400"
        },
        {
            title: "Advanced Task Tracker",
            tech: "React, TanStack Query, DnD",
            desc: "Enterprise productivity tool featuring dual views (Kanban/List), drag-and-drop, and optimistic UI updates.",
            link: "https://github.com/kelley8202/04-task-tracker-react-query",
            color: "from-emerald-500/20 to-teal-500/20",
            accent: "text-emerald-400"
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-neon-pink">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        A curated selection of my most technically challenging and visually striking applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass rounded-3xl p-8 relative group hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${project.accent}`}>
                                        <ExternalLink className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-xs font-mono text-neon-blue mb-4 tracking-wider uppercase">
                                    {project.tech}
                                </p>

                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
