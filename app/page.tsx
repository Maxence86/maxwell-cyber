export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-green-400 animate-pulse">
        ⚡ Maxwell-Cyber ⚡
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Bienvenue sur mon portfolio cyberpunk ! 🚀
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="https://github.com/Maxence86"
          target="_blank"
          className="px-6 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 transition"
        >
          GitHub
        </a>
        <a
          href="/contact"
          className="px-6 py-2 border border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-black transition"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
