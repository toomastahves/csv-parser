import nodemailer from 'nodemailer';
import config from '../config/';

export const sendMail = () => {
  console.log('hit');
  const transporter = nodemailer.createTransport(config.MAILER);
  const mailOptions = {
    from: 'csvparser123@gmail.com', // sender address
    to: 'toomastahves@hotmail.com', // list of receivers
    subject: 'testing', // Subject line
    text: 'text body', // plaintext body
    html: '<b>html body</b>' // html body
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log(err);
    }
    console.log('Message sent: ', info.response);
  });
};
