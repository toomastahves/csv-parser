import config from '../config/';
import mysql from 'mysql';

export const connection = mysql.createConnection(`${config.MYSQL}`);

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ', err.stack);
    return;
  }
  console.log('connected as id ', connection.threadId);
});
