import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // 🔐 Vérifications de sécurité
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: "Tous les champs sont requis." },
                { status: 400 }
            );
        }

        // 🔐 Vérification du format de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Email invalide." },
                { status: 400 }
            );
        }

        // 🔐 Nettoyage des entrées pour éviter les injections
        const sanitizedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Adresse Gmail
                pass: process.env.EMAIL_PASS, // Mot de passe (ou App Password)
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER, 
            subject: `📩 Nouveau message de ${name}`,
            text: sanitizedMessage,
            html: `<p><strong>Nom:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong><br>${sanitizedMessage}</p>`,
        });

        return NextResponse.json({ success: true, message: "Email envoyé avec succès !" });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Erreur lors de l'envoi de l'email." }, { status: 500 });
    }
}
