export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-9xl font-bold text-green-400 glitch" data-text="Maxwell-Cyber">
  Maxwell-Cyber
</h1>

      <p className="mt-4 text-lg text-gray-300 max-w-2xl">
        🔐 Pentester | Admin Réseau | Consultant Sécurité Informatique
      </p>
      
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="/about" className="btn">📄 En savoir plus</a>
        <a href="/contact" className="btn">📬 Me contacter</a>
        <a href="/portfolio" className="btn">📂 Portfolio</a>
      </div>
    </main>
  );
}
