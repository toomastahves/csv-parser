import express from 'express';
import favicon from 'serve-favicon';
import routes from './routes/';
import { startWebpackDevServer } from './webpack/devServer';

const app = express();
// app.use(timeout('6000s'));
app.use((req, res, next) => {
  // http://www.fingersdancing.net/2012/12/nodejs-connection-times-out-after-2.html
  res.setTimeout(0);
  next();
});

if(process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
}

routes(app);
app.use(express.static('public'));
app.use(favicon('public/favicon.png'));

app.listen(3000, () => {
  console.log('Express started');
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
