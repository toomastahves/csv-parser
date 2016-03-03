import { connection } from '../database/mysql';

export const search = (req, res) => {
  const query = req.params.query;
  const tableName = req.params.tableName;
  connection.query(`SELECT * FROM csvdata  where Concat(name, address1, address2, team) like "%${query}%"`, (err, rows) => {
    if(err) {
      console.log(err);
      return res.send(err);
    }
    res.send(rows);
  });
};

export const listTables = (req, res) => {
  connection.query('SHOW TABLES;', (err, list) => {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.status(200).json(list);
  });
};
