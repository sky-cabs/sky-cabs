
const axios = require('axios');

const sendBookingConfirmationEmail = async (req, res) => {
  let status;

  const { name, startLoc, endLoc, dateTime, mobile, email } = req.body;

  if (!name || !startLoc || !endLoc || !dateTime || !mobile || !email) {
    res.statusCode = 400;
    res.json({ status: 'Invalid Data' });
    return;
  }

  // Define the email data
  const emailData = {
    to: email, // Use the email provided in the form
    from: 'info@sky-cabs.com.com', // Replace with your service's email address
    subject: `New Booking - ${name}`,
    text: `You got a New Booking from ${name}\r\n 
            Starting Destination: ${startLoc}\r\n
            Ending Destination: ${endLoc}\r\n
            Date and Time: ${dateTime}\r\n
            
            Mobile Number: ${mobile}`,
    html: `<center><img src="http://cdn.mcauto-images-production.sendgrid.net/1eaf4ebb26cf5c4e/5529782b-813f-4a2c-a0e5-4f4c04b1c919/777x151.png"/></center><br/>
          <span style="font-weight:700;font-size:20px;">New Booking from <span style="color:#c41969">${name}</span></span><br/><br/>
          <span style="font-size:16px;"><strong>Starting Destination</strong>: ${startLoc}<br/>
          <strong>Ending Destination</strong>: ${endLoc}<br/>
          <strong>Date and Time</strong>: ${dateTime}<br/>
          // <strong>Car</strong>: ${car}<br/>
          <strong>Mobile Number</strong>: ${mobile}</span>`,
  };

  // Set up headers for the request
  const headers = {
    'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'ef391dfd0cmsh18e62f5afa8f3d3p12fbe9jsnb704968f8a39', // Replace with your RapidAPI API key
    'Content-Type': 'application/json',
  };

  try {
    await axios.post('https://rapidapi.p.rapidapi.com/mail/send', emailData, { headers });

    status = 'sent';
  } catch (error) {
    status = 'failed: ' + error;
    console.error(error);
  }

  res.statusCode = 200;
  res.json({ status });
};

export default sendBookingConfirmationEmail; // Naming the default export
