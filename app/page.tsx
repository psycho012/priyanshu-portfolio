export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">

      <img
        src="/profile.jpg"
        alt="Priyanshu the Rax"
        className="w-32 h-32 rounded-full border-4 border-white mb-4"
      />

      <h1 className="text-4xl font-bold tracking-tight">
        Priyanshu the Rax
      </h1>

      <p className="text-gray-400 mt-2 text-center max-w-md">
        Creator • Developer • Building in public
      </p>

      <div className="mt-8 w-full max-w-sm space-y-4">

        <a
          href="https://www.youtube.com/@PriyanshuRax"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl bg-white text-black py-3 font-semibold text-center"
        >
          YouTube
        </a>

        <a
          href="https://www.instagram.com/priyanshu.rax_/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl bg-zinc-800 py-3 font-semibold text-center"
        >
          Instagram
        </a>

        <a
          href="https://twitter.com/priyanshu"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-xl bg-zinc-800 py-3 font-semibold text-center"
        >
          Twitter / X
        </a>

      </div>

      <p className="text-xs text-gray-600 mt-10">
        © 2026 Priyanshu the Rax
      </p>

    </main>
  );
}
