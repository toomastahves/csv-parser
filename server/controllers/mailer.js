import nodemailer from 'nodemailer';
import config from '../config/';
import url from 'url';

export const sendMail = (req, res) => {
  console.log('hit');
  const query = url.parse(req.url, true).query;
  const email = query.email;
  const importdate = query.importdate;
  const time = query.time;
  const tableName = query.tableName;
  console.log(query);

  const transporter = nodemailer.createTransport(config.MAILER);
  const mailOptions = {
    from: 'csvparser123@gmail.com',
    to: email,
    subject: 'CSV file upload results',
    html: `
      <div>File has been uploaded to database.</div>
      <div>Import date: ${importdate}</div>
      <div>Time spent: ${time}</div>
      <div>Uploaded into table: ${tableName}</div>
    `
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log(err);
      return res.status(500).send({ error: err });
    }
    console.log('Message sent: ', info.response);
    res.send({ result: 'Email sent' });
  });
};
