export default function Contact() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-bold text-green-400 glitch" data-text="Me Contacter">Me Contacter</h1>
  
        <div className="mt-8 text-left max-w-3xl text-gray-300 space-y-4">
          <p>📧 Email : <a href="mailto:maxencedassaud@gmail.com" className="text-green-400 hover:underline">maxencedassaud@gmail.com</a></p>
          <p>📞 Téléphone : 06 83 94 61 91</p>
          <p>💼 <a href="https://github.com/Maxence86" className="text-green-400 hover:underline">GitHub</a></p>
          <p>💬 <a href="tonserveurdiscord" className="text-green-400 hover:underline">Discord</a></p>
        </div>
  
        {/* Formulaire de Contact */}
        <form action="https://formspree.io/f/xjkgwnbo" method="POST" className="mt-8 flex flex-col gap-4 max-w-md w-full">
          <input type="text" name="name" placeholder="Votre Nom" required className="p-2 bg-black border border-green-500 text-green-400" />
          <input type="email" name="email" placeholder="Votre Email" required className="p-2 bg-black border border-green-500 text-green-400" />
          <textarea name="message" placeholder="Votre Message" required className="p-2 bg-black border border-green-500 text-green-400 h-32"></textarea>
          <button type="submit" className="btn">📩 Envoyer</button>
        </form>
      </main>
    );
  }
  