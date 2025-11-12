// import nodemailer from "nodemailer";
import SibApiV3Sdk from "sib-api-v3-sdk";




export const sendEmail = async (to, name, verifyLink) => {
    try {
        const defaultClient = SibApiV3Sdk.ApiClient.instance;
        const apiKey = defaultClient.authentications["api-key"];
        apiKey.apiKey = process.env.BREVO_API_KEY;
        const client = new SibApiV3Sdk.TransactionalEmailsApi();
        await client.sendTransacEmail({
            sender: { name: "TuneHive 🎵", email: process.env.USER_MAIL },
            to: [{ email: to }],
            subject: "Verify your TuneHive music streaming account",

            textContent: "plain text is optional, which is just a fallback, not shown unless HTML fails to load.",

            htmlContent:
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


export const notifyAdmin = async (email, name) => {
    try {
        const defaultClient = SibApiV3Sdk.ApiClient.instance;
        const apiKey = defaultClient.authentications["api-key"];
        apiKey.apiKey = process.env.BREVO_API_KEY;
        const client = new SibApiV3Sdk.TransactionalEmailsApi();
        await client.sendTransacEmail({
            sender: { name: "TuneHive Bot", email: process.env.USER_MAIL },
            to: [{ email: process.env.ADMIN_MAIL }],
            subject: "New User Registered on TuneHive",
            htmlContent:
                `<div style="font-family:sans-serif;line-height:1.6">
                <h3>Hello Admin,</h3>
                <p>A new user has just registered on <b>TuneHive</b>.</p>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p>Log in to your admin dashboard to view more details.</p>`
        });

        console.log("Admin notified about new user:");
    } catch (error) {
        console.error("Failed to send admin notification:", error);
    }
};

