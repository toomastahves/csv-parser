import express from 'express';
import favicon from 'serve-favicon';
import routes from './routes/';
import { startWebpackDevServer } from './webpack/devServer';

const app = express();
routes(app);
app.use(express.static('public'));
app.use(favicon('public/favicon.png'));

app.listen(3000, () => {
  console.log('Express started');
});

if(process.env.NODE_ENV !== 'production') {
  startWebpackDevServer();
}
