import express from 'express';
import animesRouter from './routes/animes.js';

const app = express();

app.use(express.json());


app.use('/api', animesRouter);

export default app;