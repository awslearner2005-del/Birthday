"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Surprise() {
    const [isRevealed, setIsRevealed] = useState(false);

    // Elegant, subtle particle system
    const renderParticles = () => {
        return Array.from({ length: 30 }).map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-rose-400/60 z-0 blur-[1px]"
                initial={{
                    top: "50%",
                    left: "50%",
                    scale: 0,
                    opacity: 0
                }}
                animate={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: Math.random() * 3 + 2,
                    ease: "easeOut",
                }}
            />
        ));
    };

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-white flex flex-col items-center justify-center min-h-[60vh]">
            <div className="relative z-10 w-full max-w-2xl mx-auto text-center flex flex-col items-center p-8">

                <AnimatePresence mode="wait">
                    {!isRevealed ? (
                        <motion.div
                            key="button-container"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() => setIsRevealed(true)}
                                className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-inter text-lg shadow-2xl hover:shadow-rose-500/20 hover:bg-slate-800 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3 font-light tracking-wide">
                                    <Sparkles className="w-5 h-5 text-rose-300" />
                                    Reveal Surprise
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="surprise"
                            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <h2 className="text-6xl md:text-8xl font-playfair font-medium text-slate-900 mb-6 tracking-tight">
                                I Love You.
                            </h2>
                            <p className="text-xl md:text-3xl font-light text-rose-500 italic max-w-xl mx-auto leading-relaxed">
                                More than words could ever express. Happy 19th Birthday.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            {isRevealed && (
                <div className="absolute inset-0 pointer-events-none">
                    {renderParticles()}
                </div>
            )}
        </section>
    );
}
