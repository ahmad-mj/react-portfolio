const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        form: email,
        to: process.env.EMAIL_USER,
        subject: `Dog Training Contact from${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({success: true, message: 'Email sent successfully!'})
    } catch (error) {
        console.error('Error sending email: ',error);
        res.status(500).send({success: false, message: 'Failed to send email!'})
    }
});

module.exports = router;

