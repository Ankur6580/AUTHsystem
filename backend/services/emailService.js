const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendPasswordResetEmail = (email, resetToken) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset Request',
    text: `Please click on the following link to reset your password: ${process.env.CLIENT_URL}/auth/reset-password?token=${resetToken}`,
  };

  return transporter.sendMail(mailOptions);
};

exports.sendConfirmationEmail = (email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset Confirmation',
    text: 'Your password has been successfully reset.',
  };

  return transporter.sendMail(mailOptions);
};
