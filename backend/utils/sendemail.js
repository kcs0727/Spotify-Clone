import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.USER,
            to,
            subject,
            text,
        });

        console.log("Email sent successfully");
    }
    catch (error) {
        console.log("Email not sent", error);
        throw error;
    }
};

export default sendEmail;
