"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Lock, Database, Clock, Layout } from "lucide-react";

const projects = [
    {
        title: "Luxury E-Commerce",
        description: "A high-performance frontend interaction showcase featuring glassmorphism design and smooth product transitions.",
        tags: ["React.js", "Framer Motion", "Glassmorphism", "React-Leaflet"],
        type: "Frontend Showcase",
        visual: (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black p-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
                <div className="relative z-10 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md w-4/5 shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700"></div>
                        <div className="h-2 w-16 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full mb-2"></div>
                    <div className="h-2 w-2/3 bg-gray-700 rounded-full"></div>
                </div>
            </div>
        ),
        link: "#",
        github: "#"
    },
    {
        title: "Event Management System",
        description: "Robust backend system handling event registration, role-based access control, and automated email notifications via SMTP.",
        tags: ["Django REST", "PostgreSQL", "SMTP", "RBAC"],
        type: "Backend Architecture",
        visual: (
            <div className="w-full h-full bg-[#0d1117] p-6 font-mono text-xs text-gray-400 relative overflow-hidden group-hover:bg-[#161b22] transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                <div className="mt-2 text-blue-400">GET /api/events/2025</div>
                <div className="mt-2 text-yellow-400">HTTP 200 OK</div>
                <div className="mt-4 text-green-400">{"{"}</div>
                <div className="pl-4">
                    <div>"id": "evt_123",</div>
                    <div>"status": "confirmed",</div>
                    <div>"seats_available": 42,</div>
                    <div>"automated_email": <span className="text-blue-400">true</span></div>
                </div>
                <div>{"}"}</div>
            </div>
        ),
        link: "#",
        github: "#"
    },
    {
        title: "Library & Student System",
        description: "Secure detailed record management system with JWT authentication and optimized database queries for scale.",
        tags: ["JWT Auth", "Optimized Queries", "Security", "Node.js"],
        type: "System Security",
        visual: (
            <div className="w-full h-full bg-[#1e1e1e] p-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#252526] transition-colors">
                <div className="mb-4 p-3 rounded-full bg-blue-500/20 border border-blue-500/50">
                    <Lock className="w-6 h-6 text-blue-400" />
                </div>
                <div className="w-full bg-[#2d2d2d] rounded p-2 mb-2 border border-[#3e3e3e] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-400 font-mono">Authorization: Bearer eyJhbG...</span>
                </div>
                <div className="w-full bg-[#2d2d2d] rounded p-2 border border-[#3e3e3e] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-400 font-mono">Role: "LIBRARIAN"</span>
                </div>
            </div>
        ),
        link: "#",
        github: "#"
    },
    {
        title: "Task Manager Application",
        description: "CRUD-heavy application with strict validation rules and RESTful API standards.",
        tags: ["CRUD", "REST API", "Validation", "Express"],
        type: "API Design",
        visual: (
            <div className="w-full h-full bg-[#0f172a] p-6 relative overflow-hidden group-hover:bg-[#1e293b] transition-colors">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono text-gray-400">Scheme Validation</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                        <span className="text-gray-500">title:</span>
                        <span className="text-green-400">String!</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">priority:</span>
                        <span className="text-orange-400">Enum(HIGH, LOW)</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">due_date:</span>
                        <span className="text-blue-400">Date.ISO</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                        <span className="text-purple-400">validate()</span>
                        <span className="text-green-400">Passed</span>
                    </div>
                </div>
            </div>
        ),
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative bg-black/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Architected Solutions.</h2>
                        <p className="text-gray-400 max-w-xl">
                            Selected projects highlighting backend scalability, security, and frontend performance.
                        </p>
                    </div>
                    <a href="https://github.com/FransiPatel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                        View all repositories <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl bg-[#161b22] border border-white/5 overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            {/* Visual Header */}
                            <div className="h-48 border-b border-white/5 overflow-hidden">
                                {project.visual}
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-mono text-blue-400 mb-2 block">{project.type}</span>
                                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href={project.github} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
