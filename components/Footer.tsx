"use client";

import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="relative bg-slate-950 text-white overflow-hidden py-32 px-6 flex flex-col items-center justify-center min-h-[60vh]">
            {/* Subtle glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-900/20 rounded-t-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium mb-10 tracking-tight text-slate-100">
                        A Lifetime of <br className="hidden md:block" /> Moments Awaits.
                    </h2>

                    <div className="w-16 h-px bg-rose-500/50 mx-auto mb-16"></div>

                    <div className="flex flex-col items-center gap-2 text-slate-400 font-light text-sm uppercase tracking-[0.4em]">
                        <span>10 March 2026</span>
                        <span className="text-rose-400">❤</span>
                        <span>Forever</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
