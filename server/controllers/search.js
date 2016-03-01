import { connection } from '../database/mysql';

export const search = (req, res) => {
  connection.query('SELECT * FROM csvdata', (err, rows) => {
    if(err) {
      console.log(err);
      return res.send(err);
    }
    console.log(rows);
    res.send(rows);
  });
};
