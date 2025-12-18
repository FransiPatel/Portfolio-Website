"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const terminalLines = [
    { text: "> INITIATING SYSTEM...", color: "text-gray-400" },
    { text: "> CONNECTING TO DATABASE...", color: "text-blue-400" },
    { text: "> SUCCESS: PostgreSQL Connected", color: "text-green-400" },
    { text: "> LOADING ARCHITECTURE...", color: "text-gray-400" },
    { text: "> IMPORTING NODE.JS MODULES...", color: "text-yellow-400" },
    { text: "> OPTIMIZING QUERIES...", color: "text-purple-400" },
    { text: "> DEPLOYING TO AWS...", color: "text-orange-400" },
    { text: "> SYSTEM READY.", color: "text-green-400 font-bold" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev < terminalLines.length ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(timer);
  }, [terminalLines.length]);

  return (
    <section className='min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden'>
      {/* Background Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none'></div>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none'></div>

      <div className='max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-8'
        >
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500'></span>
            </span>
            Available for Hire
          </div>

          <h1 className='text-5xl md:text-7xl font-bold tracking-tight leading-tight'>
            Building{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400'>
              Scalable
            </span>{" "}
            <br />
            Digital Infrastructures.
          </h1>

          <p className='text-xl text-gray-400 max-w-lg leading-relaxed'>
            I'm <span className='text-white font-semibold'>Fransi Patel</span>,
            a Backend Specialist & Software Developer engineering robust,
            secure, and high-performance systems.
          </p>

          <div className='flex flex-wrap gap-4'>
            <a
              href='#projects'
              className='group px-6 py-3 bg-white text-black font-semibold rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors'
            >
              View Projects
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </a>
            <a
              href='/Fransi_CV.pdf'
              download='Fransi_CV.pdf'
              className='px-6 py-3 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2'
            >
              Download CV
              <Download className='w-4 h-4' />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative'
        >
          <div className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl blur opacity-20'></div>
          <div className='relative bg-[#0F172A] border border-white/10 rounded-xl overflow-hidden shadow-2xl'>
            {/* Terminal Header */}
            <div className='flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5'>
              <div className='w-3 h-3 rounded-full bg-red-500/80'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500/80'></div>
              <div className='w-3 h-3 rounded-full bg-green-500/80'></div>
              <div className='ml-2 text-xs text-gray-400 font-mono'>
                server@fransi-dev:~/portfolio
              </div>
              <Terminal className='w-4 h-4 ml-auto text-gray-500' />
            </div>

            {/* Terminal Body */}
            <div className='p-6 font-mono text-sm h-[320px] flex flex-col gap-2'>
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: textIndex >= i ? 1 : 0,
                    x: textIndex >= i ? 0 : 10,
                  }}
                  className={`${line.color}`}
                >
                  {line.text}
                </motion.div>
              ))}
              {textIndex >= terminalLines.length && (
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className='text-white'
                >
                  _
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
