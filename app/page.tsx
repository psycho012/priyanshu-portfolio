"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
      >

        {/* Profile */}
        <div className="flex flex-col items-center">
          <img
            src="/profile.jpg"
            alt="Priyanshu the Rax"
            className="w-28 h-28 rounded-full border-4 border-white/20 mb-4"
          />

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Priyanshu the Rax
          </h1>

          <p className="text-gray-400 mt-2 text-center">
            Creator • Developer • Building in public
          </p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xl font-bold">120K+</p>
            <p className="text-xs text-gray-400">Subscribers</p>
          </div>
          <div>
            <p className="text-xl font-bold">10M+</p>
            <p className="text-xs text-gray-400">Views</p>
          </div>
          <div>
            <p className="text-xl font-bold">50+</p>
            <p className="text-xs text-gray-400">Brands</p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 space-y-4">

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://youtube.com/@PriyanshuRax"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-white text-black py-3 font-semibold"
          >
            ▶ YouTube
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://instagram.com/priyanshu.rax_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3 font-semibold"
          >
            📸 Instagram
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-zinc-800 py-3 font-semibold"
          >
            𝕏 Twitter
          </motion.a>

        </div>

        {/* Brand Collabs */}
        <div className="mt-10">
          <p className="text-sm text-gray-400 mb-3 text-center">
            Worked with
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/10">Zomato</span>
            <span className="px-3 py-1 rounded-full bg-white/10">Boat</span>
            <span className="px-3 py-1 rounded-full bg-white/10">Cred</span>
            <span className="px-3 py-1 rounded-full bg-white/10">Unacademy</span>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-8">
          © 2026 Priyanshu the Rax
        </p>

      </motion.div>

    </main>
  );
}
