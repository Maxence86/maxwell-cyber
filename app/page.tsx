export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="hero glitch layers" data-text="Maxwell-Cyber">
        <span>Maxwell-cyber</span>
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl mt-16">
        🔐 Pentester | Admin Réseau | Consultant Sécurité Informatique
      </p>

      <div className="flex flex-wrap gap-4 mt-16">
        <a href="/about" className="btn">📄 En savoir plus</a>
        <a href="/contact" className="btn">📬 Me contacter</a>
        <a href="/portfolio" className="btn">📂 Portfolio</a>
      </div>
    </main>
  );
}
