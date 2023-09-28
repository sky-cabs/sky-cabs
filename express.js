import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

const mailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your_email_address',
    password: 'your_email_password',
  },
});

app.post('/send-email', async (req, res) => {
  const { email, message } = req.body;

  await mailer.sendMail({
    from: 'your_email_address',
    to: email,
    subject: 'This is a test email',
    text: message,
  });

  res.status(200).json({ message: 'Email sent successfully' });
});

app.listen(3000);