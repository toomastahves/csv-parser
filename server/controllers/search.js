import { connection } from '../database/mysql';

export const search = (req, res) => {
  const query = req.params.query;
  connection.query(`SELECT * FROM csvdata  where Concat(name, address1, address2, team) like "%${query}%"`, (err, rows) => {
    if(err) {
      console.log(err);
      return res.send(err);
    }
    res.send(rows);
  });
};
