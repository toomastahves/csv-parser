import through2 from 'through2';
import csv2 from 'csv2';
import { connection } from '../database/mysql';

const insertToDatabase = (chunk, tableName, next) => {
  const data = {
    id: chunk[0],
    name: chunk[1],
    age: chunk[2],
    address1: chunk[3],
    address2: chunk[4],
    team: chunk[5]
  };
  connection.query(`INSERT INTO ${tableName} SET ?`, data, (err) => {
    if(err) {
      console.log(err);
      return next();
    }
    console.log('Inserted ', data.id);
    next();
  });
};

const createNewTable = (next) => {
  // http://stackoverflow.com/a/8084248
  const tableName = Math.random().toString(36).substring(7);
  console.log(tableName);
  connection.query(`CREATE TABLE ${tableName} (
    id int not null,
    name varchar(50),
    age int,
    address1 varchar(50),
    address2 varchar(50),
    team varchar(50)
  );`, (err) => {
    if(err) {
      console.log(err);
      return next(err, null);
    }

    return next(null, tableName);
  });
};

export const upload = (req, res) => {
  if(req.readable) {
    createNewTable((err, tableName) => {
      if(err) {
        return res.status(500).json({ error: err });
      }
      const start = process.hrtime();
      req.pipe(csv2()).pipe(through2.obj((chunk, enc, callback) => {
        if(chunk.length === 6)
          return insertToDatabase(chunk, tableName, callback);

        return callback();
      }));
      req.on('end', () => {
        // http://stackoverflow.com/a/17678755
        const hrtime = process.hrtime(start);
        const elapsed = parseFloat(hrtime[0] + (hrtime[1] / 1000000).toFixed(3), 10);
        console.log(elapsed, 'ms');
        res.json({ time: elapsed, tableName });
      });
    });
  }
};
