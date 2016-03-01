import express from 'express';
import favicon from 'serve-favicon';
import routes from './routes/';
import { startWebpackDevServer } from './webpack/devServer';

const app = express();

if(process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, X-Requested-With, Content-Type, Accept');
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
