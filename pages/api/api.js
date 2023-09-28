// Import the Axios library
const axios = require('axios');



// Define the API key for RapidAPI (replace 'YOUR_RAPIDAPI_API_KEY' with your actual key)
const rapidApiKey = 'ef391dfd0cmsh18e62f5afa8f3d3p12fbe9jsnb704968f8a39';

// Define the SendGrid API endpoint
const sendGridApiEndpoint = 'https://rapidapi.p.rapidapi.com/mail/send';

// Define the email data
const emailData = {
  to: 'recipient@example.com',
  subject: 'Your Booking Confirmation',
  text: 'Your taxi booking has been confirmed.',
};

// Set up headers for the request
const headers = {
  'X-RapidAPI-Host': 'rapidapi.p.rapidapm',
  'X-RapidAPI-Key': 'ef391dfd0cmsh18e62f5afa8f3d3p12fbe9jsnb704968f8a39',
  'Content-Type': 'application/json',
};

// Send the email using SendGrid via RapidAPI
axios
  .post(sendGridApiEndpoint, emailData, { headers })
  .then((response) => {
    console.log('Email sent successfully:', response.data);
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
