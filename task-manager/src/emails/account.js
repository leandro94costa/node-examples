const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leandro@example.com',
        subject: 'Thanks for joining in!',
        text: `Welcome, ${name}, welcome to the machine. \nWhere have you been? \nIt's alright, we know where you've been.`
    });
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leandro@example.com',
        subject: 'Thanks for using our services',
        text: `Hello, how are you? ${name}. \nWould you mind telling us why are you leaving? \nPlease feel free to answer in this e-mail.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}