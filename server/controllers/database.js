import mysql from 'mysql';
import config from '../config/';

export const upload = (req, res) => {
  res.send('upload route');
};

export const search = (req, res) => {
  const connection = mysql.createConnection(config.MYSQL);
  connection.query('SELECT * FROM csvdata', (err, rows) => {
    if(err) {
      console.log(err);
      return res.send(err);
    }
    console.log(rows);
    res.send(rows);
  });
};
