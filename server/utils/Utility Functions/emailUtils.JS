const nodemailer = require('nodemailer');

exports.sendEmail = async (to, subject, text) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let info = await transporter.sendMail({
        from: '"Example Team" <example@example.com>',
        to: to,
        subject: subject,
        text: text
    });

    console.log('Message sent: %s', info.messageId);
};