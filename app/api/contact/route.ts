import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Ton adresse Gmail
                pass: process.env.EMAIL_PASS, // Ton mot de passe (ou App Password)
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER, 
            subject: `📩 Nouveau message de ${name}`,
            text: message,
            html: `<p><strong>Nom:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong><br>${message}</p>`,
        });

        return NextResponse.json({ success: true, message: "Email envoyé avec succès !" });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Erreur lors de l'envoi de l'email." }, { status: 500 });
    }
}
