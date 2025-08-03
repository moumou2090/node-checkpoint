require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
  subject: 'Test Node.js Email',
  text: 'Ceci est un email envoyé depuis Node.js 🎉'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Erreur:', error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});
// Note: Ensure you have a .env file with EMAIL_USER, EMAIL_PASS, and EMAIL_TO set up.
// Example .env file content:
 
// Make sure to replace these with your actual email credentials and recipient.
// Important: For Gmail, you may need to allow "less secure apps" or use an App Password if you have 2FA enabled. 
