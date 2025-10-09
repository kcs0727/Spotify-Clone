import nodemailer from "nodemailer";

const sendEmail = async (to, name, verifyLink) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
            // tls: {
            //     ciphers: "SSLv3",
            //     rejectUnauthorized: false,
            // },
        });


        await transporter.sendMail({
            from: `"Spotify Clone 🎵" <${process.env.SENDER_EMAIL}>`,
            to,
            subject: "Verify your Spotify account",

            //plain text is optional, which is just a fallback, not shown unless HTML fails to load.
            text: `Hello ${name}, \nPlease click the link below to verify your account: \n${verifyLink} \nThis link will expire in 24 hours.`,

            html:
                `<div style="font-family:sans-serif;line-height:1.6">
                    <h2>Hi, ${name}</h2>
                    <p>Click the button below to verify your account:</p>
                    <a href="${verifyLink}" style="background:#1DB954;color:white;padding:10px 20px;
                        border-radius:6px;text-decoration:none;font-weight:bold;">Verify account</a>
                    <p>This link will expire in 24 hours.</p>
                </div>`
        });

        console.log("Email sent successfully");
    }
    catch (error) {
        console.log("Email not sent", error);
        throw error;
    }
};

export default sendEmail;
