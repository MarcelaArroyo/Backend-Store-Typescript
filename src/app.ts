import express from 'express';
import routes from './routes';
import httpErroMiddleware from './middlewares/http.erro.middleware';

const app = express();

app.use(express.json());
app.use(routes);
app.use(httpErroMiddleware);

export default app;
