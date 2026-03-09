"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder photos to be replaced by the user later.
const placeholders = Array.from({ length: 10 }).map((_, i) => `/pictures/photo${i + 1}.jpg`);

export function Gallery() {
    return (
        <section id="gallery" className="py-32 px-6 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-slate-900 mb-4 tracking-tight">
                            A Collection <br /> of Moments.
                        </h2>
                        <p className="text-slate-500 font-light max-w-md leading-relaxed">
                            Every picture tells a story of us. A visual journey of our most cherished memories, captured in time.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Chapters</span>
                        <div className="h-px w-12 bg-slate-300"></div>
                        <span className="text-xs font-semibold tracking-widest text-slate-900">19</span>
                    </div>
                </motion.div>

                {/* Clean, modular grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                    {placeholders.map((src, index) => {
                        // Give some items a different span for a masonry-like feel
                        const isLarge = index === 0 || index === 4 || index === 7;
                        const spanClass = isLarge ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1";

                        return (
                            <motion.div
                                key={src}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`relative rounded-3xl overflow-hidden group bg-slate-100 ${spanClass}`}
                            >
                                {/* Image Placeholder logic - User will replace these files in public/pictures */}
                                <div
                                    className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center"
                                    style={{
                                        backgroundImage: `url(${src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <span className="text-slate-400 font-inter text-sm font-medium opacity-60">
                                        Replace in /public/pictures/photo{index + 1}.jpg
                                    </span>
                                </div>

                                {/* Premium subtle gradient overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
