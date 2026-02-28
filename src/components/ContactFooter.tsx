"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactFooter() {
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFocus = (name: string) => setFocusedInput(name);
    const handleBlur = () => setFocusedInput(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mreadrvr", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });
            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
                setTimeout(() => setIsSubmitted(false), 3000);
            } else {
                alert("Oops! There was a problem submitting your form");
            }
        } catch (error) {
            console.error(error);
            alert("Oops! There was a problem submitting your form");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contact" className="relative pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-neon-purple/5 blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 mb-24">

                {/* Info Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6">
                        Let's build <br /> something <span className="text-gradient">epic.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-md">
                        Currently available for freelance projects and open to full-time opportunities. Drop me a line and let's talk.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-neon-blue">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Email</p>
                                <a href="mailto:kelley8202@gmail.com" className="text-lg hover:text-white transition-colors">kelley8202@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-neon-purple">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Phone</p>
                                <a href="tel:0376252192" className="text-lg hover:text-white transition-colors">0376252192</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-neon-pink">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Location</p>
                                <p className="text-lg">Cầu Giấy, Hà Nội</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 glass p-8 md:p-10 rounded-3xl relative group"
                >
                    <div className={`absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-blue/20 blur-3xl rounded-full transition-opacity duration-500 ${focusedInput ? 'opacity-100' : 'opacity-0'}`}></div>

                    <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>

                        <div className="group">
                            <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                onFocus={() => handleFocus("name")}
                                onBlur={handleBlur}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all duration-300"
                            />
                        </div>

                        <div className="group">
                            <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                onFocus={() => handleFocus("email")}
                                onBlur={handleBlur}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all duration-300"
                            />
                        </div>

                        <div className="group">
                            <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                required
                                placeholder="Tell me about your project..."
                                onFocus={() => handleFocus("message")}
                                onBlur={handleBlur}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 relative overflow-hidden group ${isSubmitted
                                ? "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                                : "bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 shadow-[0_0_20px_rgba(176,38,255,0.4)]"
                                }`}
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                            <span className="relative flex items-center gap-2">
                                {isSubmitting ? (
                                    <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                                ) : isSubmitted ? (
                                    <>Message Sent! <CheckCircle2 className="w-4 h-4" /></>
                                ) : (
                                    <>Send Message <Send className="w-4 h-4" /></>
                                )}
                            </span>
                        </button>

                    </form>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Cong.Dev. All rights reserved.</p>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <a href="https://github.com/kelley8202" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                    <a href="mailto:kelley8202@gmail.com" className="hover:text-white transition-colors">Email</a>
                </div>
            </div>
        </footer>
    );
}
