export default function Portfolio() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-bold text-green-400 hero glitch layers" data-text="Portfolio">Portfolio</h1>
  
        <div className="mt-16 text-left max-w-3xl text-gray-300 space-y-6">
          <p>📂 Voici quelques projets sur lesquels j’ai travaillé :</p>
  
          {/* Projets */}
          <div className="space-y-4">
            <div className="border border-green-500 p-4 rounded-lg">
              <h2 className="text-2xl text-green-400 font-bold">🔹 Projet 1 : Outil de Pentest</h2>
              <p>Un outil open-source pour les tests d’intrusion.</p>
              <a href="https://github.com/Maxence86/projet1" target="_blank" className="text-green-400 hover:underline">🔗 Voir sur GitHub</a>
            </div>
  
            <div className="border border-green-500 p-4 rounded-lg">
              <h2 className="text-2xl text-green-400 font-bold">🔹 Projet 2 : Dashboard Sécurité</h2>
              <p>Un tableau de bord permettant de suivre l’état de sécurité d’un réseau.</p>
              <a href="https://github.com/Maxence86/projet2" target="_blank" className="text-green-400 hover:underline">🔗 Voir sur GitHub</a>
            </div>
          </div>
        </div>
      </main>
    );
  }
  