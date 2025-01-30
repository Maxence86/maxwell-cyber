"use client";

import { useState } from "react";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessageSent(false);

    const form = e.target as HTMLFormElement; // Récupération du formulaire avant l'attente
    const formData = new FormData(form);
    const jsonData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData),
        });

        const result = await response.json();
        console.log("Réponse API:", result);

        if (!response.ok) {
            throw new Error(result.message || "Une erreur est survenue.");
        }

        setMessageSent(true);
        form.reset(); // Utilisation de form.reset() au lieu de e.currentTarget.reset()
    } catch (err: any) {
        console.error("Erreur Formulaire:", err);
        setError(err.message || "❌ Erreur réseau. Vérifiez votre connexion.");
    } finally {
        setLoading(false);
    }
};
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-5xl font-bold text-green-400 hero glitch layers" data-text="Me Contacter">Me Contacter</h1>

      <div className="mt-8 text-left max-w-3xl text-gray-300 space-y-4 mt-16">
        <p>📧 Email : <a href="mailto:maxencedassaud@gmail.com" className="mt-16 text-green-400 hover:underline">maxencedassaud@gmail.com</a></p>
        <p>📞 Téléphone : 06 83 94 61 91</p>
        <p>💼 <a href="https://github.com/Maxence86" className="text-green-400 hover:underline">GitHub</a></p>
        <p>💬 <a href="tonserveurdiscord" className="text-green-400 hover:underline">Discord</a></p>
      </div>

      {/* Formulaire de Contact */}
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 max-w-md w-full">
        <input type="text" name="name" placeholder="Votre Nom" required className="p-2 bg-black border border-green-500 text-green-400" />
        <input type="email" name="email" placeholder="Votre Email" required className="p-2 bg-black border border-green-500 text-green-400" />
        <textarea name="message" placeholder="Votre Message" required className="p-2 bg-black border border-green-500 text-green-400 h-32"></textarea>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "📨 Envoi en cours..." : "📩 Envoyer"}
        </button>
      </form>

      {/* Message de confirmation */}
      {messageSent && (
        <p className="text-green-500 mt-4">✅ Votre message a été envoyé avec succès !</p>
      )}

      {/* Message d'erreur */}
      {error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}
    </main>
  );
}
