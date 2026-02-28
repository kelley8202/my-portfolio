"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 blur-[120px] rounded-full opacity-50 pointer-events-none mix-blend-screen"></div>
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon-blue/20 blur-[100px] rounded-full opacity-60 pointer-events-none mix-blend-screen"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <Sparkles className="w-4 h-4 text-neon-pink" />
                    <span className="text-sm font-medium text-slate-300">Open for new opportunities</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Crafting <span className="text-gradient">Digital</span> <br className="hidden md:block" />
                    Experiences
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    I'm a Front-end Developer with a product-mindset, specializing in ReactJS/Next.js and TypeScript ecosystems. Focused on scalable architecture and seamless user experiences.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-slate-200 transition-colors group">
                        View My Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a href="/CV_Nguyen_Thanh_Cong.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-colors">
                        Read Resume
                    </a>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"
                    animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}
