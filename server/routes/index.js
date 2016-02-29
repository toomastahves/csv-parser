import { upload, search } from '../controllers/database';

const routes = (app) => {
  app.get('/upload', upload);
  app.get('/search', search);
};

export default routes;
