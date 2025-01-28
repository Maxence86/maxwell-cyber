export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-9xl font-bold text-green-400 text-neon animate-pulse">
        Maxwell-Cyber
      </h1>
      <p className="mt-10 text-lg text-gray-300 max-w-3xl">
        🔐 Pentester Junior | Admin Réseau | Consultant Sécurité Informatique
      </p>

      {/* Section Présentation */}
      <div className="mt-8 text-left max-w-3xl text-gray-300 space-y-6">
        <h2 className="text-3xl text-green-400 font-bold">👨‍💻 Qui suis-je ?</h2>
        <p>
          Passionné de cybersécurité et en reconversion depuis le monde commercial, 
          je me spécialise aujourd’hui dans les tests d’intrusion et l’administration d’infrastructures sécurisées.
        </p>

        <h2 className="text-3xl text-green-400 font-bold">🎓 Parcours & Compétences</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>🔹 2024 - Administrateur d'Infrastructures Sécurisées (Jedha Bootcamp)</li>
          <li>🔹 2023 - Développeur Fullstack Web & Mobile (La Capsule Bootcamp)</li>
          <li>🔹 2017-2023 - Directeur de Magasin (Snow Emotion, Paris)</li>
        </ul>

        <h2 className="text-3xl text-green-400 font-bold">💾 Mes Services</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>✔️ Tests d’Intrusion (Pentest) - Web, Réseau, API, Cloud</li>
          <li>✔️ Audit de Sécurité & Analyse de Vulnérabilités</li>
          <li>✔️ Déploiement de solutions SIEM & Protection Cloud (AWS, Azure)</li>
          <li>✔️ Mise en place de politiques de sécurité (IAM, MFA, Firewall, IDS)</li>
        </ul>

        <h2 className="text-3xl text-green-400 font-bold">📬 Contactez-moi</h2>
        <p>📧 <a href="mailto:maxencedassaud@gmail.com" className="text-green-400">maxencedassaud@gmail.com</a></p>
        <p>📞 06 83 94 61 91</p>
        <p>💼 <a href="https://github.com/Maxence86" className="text-green-400">GitHub</a></p>
      </div>

      {/* Boutons Contact */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="mailto:maxencedassaud@gmail.com" className="btn">📧 Me Contacter</a>
        <a href="https://github.com/Maxence86" target="_blank" className="btn">💼 GitHub</a>
      </div>
    </main>
  );
}
