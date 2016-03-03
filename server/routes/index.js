import { upload } from '../controllers/upload';
import { search, listTables } from '../controllers/search';

const routes = (app) => {
  app.post('/upload', upload);
  app.get('/list', listTables);
  app.get('/search/:query', search);
};

export default routes;
