"use client";

import { motion } from "framer-motion";

const events = [
    { year: "Chapter I", title: "The Beginning", text: "When our paths first crossed. A simple hello that changed everything forever." },
    { year: "Chapter II", title: "First Realization", text: "The exact moment I knew you were going to be someone incredibly special to me." },
    { year: "Chapter III", title: "Countless Memories", text: "Late night conversations, endless laughter, and building a foundation of pure trust." },
    { year: "Chapter IV", title: "To Eternity", text: "Looking forward to every single tomorrow. You are my greatest adventure." },
];

export function Timeline() {
    return (
        <section className="py-32 px-6 bg-white relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-24"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-rose-400 mb-4 block">Our Journey</span>
                    <h2 className="text-4xl md:text-5xl font-playfair font-medium text-slate-900 tracking-tight">The Story So Far.</h2>
                </motion.div>

                <div className="relative">
                    {/* Subtle vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 -translate-x-1/2"></div>

                    <div className="flex flex-col gap-16 md:gap-24 relative z-10">
                        {events.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`flex flex-col md:flex-row gap-8 md:items-center ${isEven ? "md:flex-row-reverse" : ""}`}
                                >
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-rose-200 rounded-full shadow-sm z-20"></div>

                                    <div className={`w-full md:w-1/2 ${isEven ? "md:pl-16 text-left" : "md:pr-16 md:text-right ml-12 md:ml-0"}`}>
                                        <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-3 block">{item.year}</span>
                                        <h3 className="text-2xl font-playfair font-medium text-slate-900 mb-4">{item.title}</h3>
                                        <p className="text-slate-500 font-light leading-relaxed">{item.text}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
