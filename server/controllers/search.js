import { connection } from '../database/mysql';
import url from 'url';
import config from '../config/';

export const search = (req, res) => {
  const q = url.parse(req.url, true).query;
  const tableName = q.tableName;
  const query = q.query;
  connection.query(`SELECT * FROM ${tableName} where Concat(name, address1, address2, team) like "%${query}%" LIMIT 1000`, (err, rows) => {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.status(200).json(rows);
  });
};

export const listTables = (req, res) => {
  connection.query('SHOW TABLES;', (err, list) => {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    const parsedConnStr = config.MYSQL.split('/');
    const dbName = parsedConnStr[parsedConnStr.length - 1];
    const tablenames = list.map(t => t[`Tables_in_${dbName}`]);
    res.status(200).json(tablenames);
  });
};
