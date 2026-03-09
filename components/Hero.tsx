"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    const scrollToNext = () => {
        const nextSection = document.getElementById("gallery");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#fafafa]">
            {/* Premium minimal background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-100/40 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="z-10 text-center px-6 flex flex-col items-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md mb-8"
                >
                    <span className="text-sm font-medium tracking-widest text-slate-500 uppercase">
                        10 March 2007
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-[7rem] font-playfair font-medium tracking-tight text-slate-900 leading-[1.1] mb-8"
                >
                    Happy <span className="text-gradient-rose italic pr-2">19th</span> <br className="hidden md:block" /> Birthday.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto mb-16 leading-relaxed"
                >
                    To the most beautiful soul in my life. A celebration of you, today, tomorrow, and always.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={scrollToNext}
                    className="group flex flex-col items-center gap-3 text-slate-400 hover:text-rose-500 transition-colors duration-500"
                >
                    <span className="text-xs tracking-widest uppercase font-medium">Explore</span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-rose-200 group-hover:bg-rose-50 transition-all duration-500">
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-500" />
                    </div>
                </motion.button>
            </div>
        </section>
    );
}
