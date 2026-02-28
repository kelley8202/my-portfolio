"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Mail } from "lucide-react";

export default function Navbar() {
    const { scrollY } = useScroll();

    // Fade out slightly when scrolling down
    const background = useTransform(
        scrollY,
        [0, 100],
        ["rgba(3, 0, 20, 0)", "rgba(3, 0, 20, 0.7)"]
    );

    const backdropBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );

    const border = useTransform(
        scrollY,
        [0, 100],
        ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.05)"]
    );

    return (
        <motion.header
            style={{ background, backdropFilter: backdropBlur, borderBottom: border }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-colors"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tighter flex items-center gap-1">
                    <span className="text-neon-purple">&lt;</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Công</span>
                    <span className="text-neon-blue">/&gt;</span>
                </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-purple to-neon-blue transition-all group-hover:w-full rounded-full"></span>
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <a href="https://github.com/kelley8202" target="_blank" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                    <Github className="w-5 h-5" />
                </a>
                <a href="#contact" className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-medium transition-all backdrop-blur-sm">
                    <Mail className="w-4 h-4" />
                    <span>Hire Me</span>
                </a>
            </div>
        </motion.header>
    );
}
