"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Globe, Server, Shield, Layers } from "lucide-react";

const Item = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`p-6 rounded-2xl bg-[#1e293b]/50 border border-white/5 hover:border-white/10 transition-colors ${className}`}
    >
        {children}
    </motion.div>
);

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Engineered for Performance.</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My background helps me bridge the gap between complex backend logic and seamless frontend experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Experience */}
                    <Item className="md:col-span-1 space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <Server className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Experience</h3>
                            <p className="text-gray-400 mt-1">Junior Dev @ Zignuts Technolab</p>
                            <p className="text-sm text-gray-500 mt-1">Jul 2025 - Present</p>
                        </div>
                    </Item>

                    {/* Education */}
                    <Item className="md:col-span-1 space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                            <Globe className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Education</h3>
                            <p className="text-gray-400 mt-1">B.E. Computer Engineering</p>
                            <p className="text-sm text-gray-500 mt-1">CGPA 8.25 • 2021-2025</p>
                        </div>
                    </Item>

                    {/* Focus */}
                    <Item className="md:col-span-1 space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Core Focus</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["Scalability", "Security", "API Design"].map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Item>

                    {/* Technical Arsenal - Full Width */}
                    <Item className="md:col-span-3">
                        <div className="flex items-center gap-3 mb-6">
                            <Cpu className="w-6 h-6 text-gray-400" />
                            <h3 className="text-2xl font-bold">Technical Arsenal</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="space-y-3">
                                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider">Backend Core</h4>
                                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Node.js</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Python / Django</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>FastAPI</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Express.js</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider">Database</h4>
                                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>PostgreSQL</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Redis</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>AWS S3</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>MongoDB</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider">DevOps & Tools</h4>
                                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>AWS (SQS, EC2)</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Docker</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Git / GitHub</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Stripe</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider">Frontend</h4>
                                <ul className="space-y-2 text-gray-300 font-mono text-sm">
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>React.js / Next.js</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>Tailwind CSS</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>Framer Motion</li>
                                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>HTML / CSS</li>
                                </ul>
                            </div>
                        </div>
                    </Item>
                </div>
            </div>
        </section>
    );
}
