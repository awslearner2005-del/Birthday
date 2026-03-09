"use client";

import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function Denied() {
    return (
        <main className="min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950 text-slate-200">
            {/* Subtle warning glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 p-10 md:p-16 max-w-2xl text-center flex flex-col items-center"
            >
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="w-20 h-20 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20 mb-8 shadow-[0_0_30px_rgba(244,63,94,0.1)]"
                >
                    <ShieldAlert className="w-10 h-10 text-rose-500" />
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-playfair font-medium tracking-tight mb-6 text-white">
                    Not For You.
                </h1>

                <div className="w-12 h-px bg-slate-800 mx-auto mb-8"></div>

                <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-lg mb-4">
                    This digital space is exclusively reserved for a very specific beautiful soul.
                </p>

                <p className="text-sm font-inter text-slate-500 tracking-widest uppercase mt-12 bg-slate-900/50 py-2 px-6 rounded-full border border-slate-800">
                    Access Denied
                </p>
            </motion.div>
        </main>
    );
}
