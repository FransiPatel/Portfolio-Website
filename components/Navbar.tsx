"use client";

import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4 rounded-2xl glass border border-white/5">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                        <Code2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-mono font-bold text-lg tracking-tight text-gray-100">FRANSI<span className="text-blue-500">.</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-8 font-mono text-sm text-gray-400">
                    {["About", "Skills", "Projects", "Experience"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/FransiPatel" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/fransi-patel" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:fransi2056@gmail.com" className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
