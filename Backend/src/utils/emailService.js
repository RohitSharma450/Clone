import dotenv from 'dotenv';
import nodemailer from 'nodemailer'

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL,   
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  }
});

const sendEmail = (email, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL,   
        to: email,                
        subject: subject,        
        text: text                    
    };

    return transporter.sendMail(mailOptions)
        .then(info => {
            console.log('Email sent: ' + info.response);
            return { success: true, message: 'Email sent successfully!' };
        })
        .catch(error => {
            console.error('Error sending email: ', error);
            return { success: false, message: 'Error sending email.' };
        });
};

export { sendEmail };
