import through2 from 'through2';
import csv2 from 'csv2';
import { connection } from '../database/mysql';

export const insertToDatabase = (data, next) => {
  connection.query('INSERT INTO csvdata SET ?', data, (err, result) => {
    if(err) {
      console.log(err);
      return next();
    }
    console.log('success', data.id);
    next();
  });
};

export const upload = (req, res) => {
  console.log('hit');
  if(req.readable) {
    req
    .pipe(csv2())
    .pipe(through2({ objectMode: true }, (chunk, enc, callback) => {
      const data = {
        id: chunk[0],
        name: chunk[1],
        age: chunk[2],
        address1: chunk[3],
        address2: chunk[4],
        team: chunk[5]
      };
      insertToDatabase(data, callback);
    }));

    req.on('end', () => {
      console.log('end');
      res.send('ok');
    });
  }
};
