import nodemailer from 'nodemailer'

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth:{
        user: process.env.SENDER_EMAIL, 
        pass: process.env.SMTP_PASSWORD
    }
});

// Wrap in an async IIFE so we can use await.
const sendEmail = async ({to, subject, body}) => {
  const response = await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to,
    subject,
    html: body, // HTML body
  });

  console.log("Message sent:", info.messageId);
  return response
};






export default sendEmail