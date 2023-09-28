import { Router, Request, Response } from 'next/router';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
  },
});

Router.post('/Booking', async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: '"sky-cabs" <info@sky-cabs.com>',
    to: '"Recipient Name" <recipient@email.com>',
    subject: 'New Booking Request',
    text: `
      A new booking request has been made by ${name}.
      Their email address is ${email} and their phone number is ${phone}.
      Their message is:
      ${message}
    `,
  };

  await transporter.sendMail(mailOptions);

  res.status(200).send('Thank you for your booking request!');
});
