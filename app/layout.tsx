import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Happy 19th Birthday",
    description: "A beautiful, premium digital experience for a beautiful soul.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${playfair.variable} ${inter.variable} antialiased bg-[#fafafa] text-slate-900 font-inter`}
            >
                {children}
            </body>
        </html>
    );
}
