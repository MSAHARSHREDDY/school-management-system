const nodemailer = require("nodemailer")
const sendMail = async (emailData) =>

{

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: true,
            auth: {
                user: process.env.emailUser,
                pass: process.env.emailPassword,
            },
        });
        if (emailData.html ? true : false) {
            await transporter.sendMail({
                from: process.env.emailUser,
                to: emailData.toEmail,
                subject: emailData.subject,
                html: emailData.html
            });
        } else {
            await transporter.sendMail({
                from: process.env.emailUser,
                to: emailData.toEmail,
                subject: emailData.subject,
                text: emailData.message
            });
        }

        if (transporter) {
            console.log("email has been sent ")
        }
        else {
            console.log(err)
        }

        return { status: true };
    } catch (error) {
        console.log(error)
    }
}


module.exports = { sendMail }