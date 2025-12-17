export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-[#0a0a0a] text-center">
            <div className="max-w-7xl mx-auto px-6 space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                    Ready to scale your backend? Let's talk.
                </h2>

                <div className="flex justify-center items-center gap-8 font-mono text-sm text-gray-400">
                    <a href="https://linkedin.com/in/fransi-patel" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="https://github.com/FransiPatel" className="hover:text-blue-400 transition-colors">GitHub</a>
                    <a href="mailto:fransi2056@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
                </div>

                <div className="text-xs text-gray-600 font-mono">
                    &copy; {new Date().getFullYear()} Fransi Patel. Engineered with Next.js & Tailwind.
                </div>
            </div>
        </footer>
    );
}
