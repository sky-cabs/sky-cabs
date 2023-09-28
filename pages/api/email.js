const nodemailer = require('nodemailer');

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Create a transporter
  const transporter = nodemailer.createTransport({
    // Configure the email transport (SMTP, Gmail, etc.)
  });

  // Prepare the email message
  const mailOptions = {
    from: 'sender@example.com',
    to: 'info@sky-cabs.com',
    subject: 'Booking Request',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    // Handle any success logic or redirect to a success page
  } catch (error) {
    console.error('Error sending email:', error);
    // Handle any error logic or redirect to an error page
  }
};
