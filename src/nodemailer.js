import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_NAME,
        pass: process.env.MAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

export const sender = async (name, phone, email, content) => {
    // I have to send two emails, one to the sender to confirm that I've recived the msg and other to me to auto notify me xD

    // Confirm email
    await transporter.sendMail({
        from: `Jose Mª Pahino <${process.env.MAIL_NAME}>`, // my personal address,
        to: email,
        subject: "Email recieved!",
        html: `<h1>Hi ${name}! I've revided your e-mail and I will contact you as soon as posible!</h1>`, //TODO: Better html template
    });

    // Auto notify email
    await transporter.sendMail({
        from: `Jose Maria Pahino <${process.env.MAIL_NAME}>`, // sender address,
        to: process.env.PERSONAL_MAIL,
        subject: "Someone has contacted you!",
        html: `<ul><li>name: ${name}</li><li>phone:${phone}</li><li>email: ${email}</li><li>content: ${content}</li></ul>`,
    });
};
