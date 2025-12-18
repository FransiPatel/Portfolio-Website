"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        company: "Zignuts Technolab",
        role: "Junior Software Developer",
        period: "Jul 2025 - Present",
        description: "Continuing impactful backend development.",
        achievements: [
            "Building scalable backend architectures using Node.js and Django.",
            "Optimizing database queries for high-volume data processing.",
            "Refining API security protocols including JWT and RBAC."
        ]
    },
    {
        company: "Zignuts Technolab",
        role: "Junior Software Developer",
        period: "Jan 2025 - Jun 2025",
        description: "Initial tenure focused on foundational systems.",
        achievements: [
            "Integrated AWS S3 for secure file storage and SQS for message queuing.",
            "Implemented Stripe Connect for multi-vendor payment processing.",
            "Developed comprehensive REST APIs for internal tools."
        ]
    },
    {
        company: "BlackID Solution",
        role: "Software Developer Intern",
        period: "Feb 2023 - Mar 2023",
        description: "Early career internship focused on web basics.",
        achievements: [
            "Assisted in frontend UI development using React basic principles.",
            "Collaborated with senior developers to debug legacy codebases.",
            "Learned agile workflows and version control with Git."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey.</h2>
                    <p className="text-gray-400">
                        A timeline of continuous growth and technical application.
                    </p>
                </div>

                <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot on Timeline */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black"></div>

                            <div className="bg-[#1e293b]/30 border border-white/5 p-6 rounded-xl hover:bg-[#1e293b]/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-blue-400 mt-1 font-mono text-sm">
                                            <Building2 className="w-4 h-4" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-4 text-sm">
                                    {exp.description}
                                </p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
