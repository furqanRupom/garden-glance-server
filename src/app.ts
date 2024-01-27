import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes/route';
import globalErrorHandler from './app/middleware/globalErrorHandler';

const app: Application = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.use('/', router);

app.use(globalErrorHandler);
app.get('/', (req, res) => {
  res.send('GardenGlance is running');
});

export default app;
