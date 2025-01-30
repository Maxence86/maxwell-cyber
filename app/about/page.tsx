export default function About() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="hero glitch layers" data-text="A propos de moi">
  <span>A propos de moi</span>
</h1>

        
  
        {/* Présentation */}
        <div className="mt-8 text-left max-w-3xl text-gray-300 space-y-6">
          <h2 className="text-3xl text-green-400 font-bold">👨‍💻 Mon parcours</h2>
          <p>
            Ancien directeur commercial en reconversion, je me spécialise aujourd’hui dans la cybersécurité, 
            avec une expertise en **Pentesting, Sécurité Réseau et Sécurisation d’Infrastructures**.
          </p>
  
          <h2 className="text-3xl text-green-400 font-bold">💾 Compétences</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>✔️ Tests d’Intrusion (Pentest) - Web, Réseau, API, Cloud</li>
            <li>✔️ Audit de Sécurité & Analyse de Vulnérabilités</li>
            <li>✔️ Déploiement de solutions SIEM & Protection Cloud (AWS, Azure)</li>
            <li>✔️ Développement sécurisé (JavaScript, Python, C#)</li>
          </ul>
  
          <h2 className="text-3xl text-green-400 font-bold">📄 Mon CV</h2>
          <p>
            📥 <a href="/Maxence Dassaud.pdf" className="text-green-400 hover:underline">Télécharger mon CV</a>
          </p>
        </div>
      </main>
    );
  }
  