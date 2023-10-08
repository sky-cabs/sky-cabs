import nodemailer from 'nodemailer';

// Define the API route handler as an async function
const bookingHandler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const {
        name,
        email,
        mobile,
        startLoc,
        endLoc,
        dateTime,
      } = req.body;

      // Create a transporter using Nodemailer
      const PPASSWORD = process.env.PASSWORD;
      const transporter = nodemailer.
      createTransport({
        host: 'smtp.forwardemail.net',
        port: 465,
        secure: true,
        auth: {
          user: 'info@sky-cabs.com', //  email address
          pass: 'process.env.PASSWORD', //  email password
        },
      });

      // Create an email message
      const mailOptions = {
        from: 'info@sky_cabs.com', // Your email address
        to: email,  // Recipient's email address from the form input
        subject: `New Taxi Booking from ${name}`,
        text: `Details of your taxi booking:
          Name: ${name}
          Email: ${email}
          Start Location: ${startLoc}
          End Location: ${endLoc}
          Date and Time: ${dateTime}
          Mobile Number: ${mobile}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).end();
  }
};

export default bookingHandler;
