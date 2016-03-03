import { upload } from '../controllers/upload';
import { search, listTables } from '../controllers/search';
import { sendMail } from '../controllers/mailer';

const routes = (app) => {
  app.post('/upload', upload);
  app.get('/mailer', sendMail);
  app.get('/list', listTables);
  app.get('/search/:query', search);
};

export default routes;
