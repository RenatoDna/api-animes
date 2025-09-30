import express from 'express';
import animesRouter from './routes/animes.js';

const app = express();

app.use(express.json());
app.use(animesRouter)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});