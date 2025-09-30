import Router from 'express';

const animeRouter = Router();

animeRouter.get('/api/animes', obterAnimes);

const animes = [
  { id: 1, nome: 'Naruto', genero: 'Ação' },
  { id: 2, nome: 'One Piece', genero: 'Aventura' },
  { id: 3, nome: 'Attack on Titan', genero: 'Fantasia' },
];

function obterAnimes(req, res) {
  return res.status(200).json(animes);
}

export default animeRouter;