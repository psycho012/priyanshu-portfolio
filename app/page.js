export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">

      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Priyanshu the Rax"
        className="w-32 h-32 rounded-full border-4 border-white mb-4"
      />

      {/* Name */}
      <h1 className="text-4xl font-bold tracking-tight">
        Priyanshu the Rax
      </h1>

      {/* Tagline */}
      <p className="text-gray-400 mt-2 text-center max-w-md">
        Creator • Developer • Building in public
      </p>

      {/* Buttons */}
      <div className="mt-8 w-full max-w-sm space-y-4">

        <a
          href="#"
          className="block w-full rounded-xl bg-white text-black py-3 font-semibold text-center hover:opacity-90 transition"
        >
          YouTube
        </a>

        <a
          href="https://www.youtube.com/@PriyanshuRax"
          className="block w-full rounded-xl bg-zinc-800 py-3 font-semibold text-center hover:bg-zinc-700 transition"
        >
          Instagram
        </a>

        <a
          href="https://www.instagram.com/priyanshu.rax_/"
          className="block w-full rounded-xl bg-zinc-800 py-3 font-semibold text-center hover:bg-zinc-700 transition"
        >
          Twitter / X
        </a>

        <a
          href=""
          className="block w-full rounded-xl bg-zinc-800 py-3 font-semibold text-center hover:bg-zinc-700 transition"
        >
          Contact / Email
        </a>

      </div>

      {/* Footer */}
      <p className="text-xs text-gray-600 mt-10">
        © 2026 Priyanshu the Rax
      </p>

    </main>
  );
}

