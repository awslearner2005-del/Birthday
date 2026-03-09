"use client";

import { motion } from "framer-motion";

export function LoveLetter() {
    return (
        <section className="py-32 px-6 bg-[#fafafa] relative flex items-center justify-center min-h-[80vh]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl w-full"
            >
                <div className="glass-panel p-10 md:p-16 lg:p-24 rounded-[2rem] md:rounded-[3rem] relative z-10 text-center">
                    <span className="text-rose-400 font-playfair italic text-xl mb-8 block">My Dearest,</span>

                    <div className="space-y-8 text-slate-600 font-light text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-[1.8]">
                        <p>
                            From the moment you came into my life, everything became infinitely brighter.
                        </p>
                        <p>
                            Your smile turns ordinary days into something magical.
                            Every laugh we share, every quiet moment, it all means the absolute world to me.
                        </p>
                        <p>
                            On your 19th birthday, I just want you to know how deeply you are loved.
                            You are the most beautiful person, inside and out.
                        </p>
                    </div>

                    <div className="mt-16">
                        <div className="w-12 h-px bg-rose-200 mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl font-playfair text-slate-900 tracking-wide">Forever Yours.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
