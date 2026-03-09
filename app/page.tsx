import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Timeline } from "@/components/Timeline";
import { LoveLetter } from "@/components/LoveLetter";
import { Surprise } from "@/components/Surprise";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-[#fafafa] selection:bg-rose-200 selection:text-slate-900">
            <Hero />
            <Gallery />
            <Timeline />
            <LoveLetter />
            <Surprise />
            <Footer />
        </main>
    );
}
