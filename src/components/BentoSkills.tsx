"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, MonitorPlay, Palette, Rocket, Database, Blocks } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function BentoSkills() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-neon-blue">Arsenal</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        A comprehensive overview of my toolset, focused on creating scalable and performant frontend applications.
                    </p>
                </motion.div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">

                    {/* Frontend Core - Large Canvas */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="md:col-span-2 lg:col-span-2 row-span-2 glass rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[80px] rounded-full group-hover:bg-neon-purple/30 transition-colors"></div>
                        <MonitorPlay className="w-10 h-10 text-white mb-6" />
                        <h3 className="text-2xl font-bold mb-3">Frontend Architecture</h3>
                        <p className="text-slate-400 mb-8 max-w-sm">Building solid foundations with modern frameworks and robust state management.</p>
                        <div className="flex flex-wrap gap-2">
                            {['React 18', 'Next.js App Router/SSR', 'Redux Toolkit', 'Context API', 'TanStack Query'].map((tech) => (
                                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300 backdrop-blur-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Styling & UI */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="md:col-span-1 lg:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-colors flex flex-col justify-end"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/20 blur-[50px] rounded-full"></div>
                        <Palette className="w-8 h-8 text-white mb-4 absolute top-8 left-8" />
                        <h3 className="text-xl font-bold mb-2 z-10">Styling & UI</h3>
                        <div className="z-10 flex flex-wrap gap-2 mt-4">
                            {['Tailwind CSS', 'Material UI (MUI)', 'Framer Motion', 'Ant Design', 'ZaUI'].map((tech) => (
                                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Web Performance */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="md:col-span-1 lg:col-span-1 glass rounded-3xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors flex flex-col items-center justify-center text-center"
                    >
                        <Rocket className="w-8 h-8 text-neon-blue mb-4 group-hover:-translate-y-2 transition-transform duration-500" />
                        <h3 className="font-bold text-lg">Frameworks</h3>
                        <p className="text-xs text-slate-400 mt-2">Zalo Mini App & Angular</p>
                    </motion.div>

                    {/* Core Languages */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="md:col-span-1 lg:col-span-1 glass rounded-3xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors flex flex-col items-center justify-center text-center"
                    >
                        <Code2 className="w-8 h-8 text-neon-purple mb-4 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="font-bold">Languages</h3>
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-300">
                            <span className="bg-white/10 border border-white/5 px-2 py-1 rounded shadow-sm">TypeScript</span>
                            <span className="bg-white/10 border border-white/5 px-2 py-1 rounded shadow-sm">JS/DOM</span>
                            <span className="bg-white/10 border border-white/5 px-2 py-1 rounded shadow-sm">HTML5</span>
                            <span className="bg-white/10 border border-white/5 px-2 py-1 rounded shadow-sm">CSS3/SCSS</span>
                        </div>
                    </motion.div>

                    {/* Tools & Ecosystem */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="md:col-span-2 lg:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-colors"
                    >
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-neon-blue/20 blur-[60px] rounded-full"></div>
                        <div className="flex items-center gap-3 mb-4">
                            <Blocks className="w-6 h-6 text-white" />
                            <h3 className="text-xl font-bold">Ecosystem & Tools</h3>
                        </div>
                        <p className="text-sm text-slate-400 mb-6 flex-wrap leading-relaxed">Git, Postman, Swagger, Firebase, Monorepo, Agile, RxJS</p>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-neon-purple to-neon-blue w-[85%]"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
