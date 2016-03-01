import { upload } from '../controllers/upload';
import { search } from '../controllers/search';

const routes = (app) => {
  app.post('/upload', upload);
  app.get('/search', search);
};

export default routes;
