import express from 'express';
import favicon from 'serve-favicon';
import routes from './routes/';
import { startWebpackDevServer } from './webpack/devServer';

const app = express();

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express started at ${port}`);
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
