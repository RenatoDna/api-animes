import Router from 'express';

const animeRouter = Router();

animeRouter.get('/api/animes', obterAnimes);

const animes = [
  { id: 1, nome: 'Naruto', genero: 'Ação' },
  { id: 2, nome: 'One Piece', genero: 'Aventura' },
  { id: 3, nome: 'Attack on Titan', genero: 'Fantasia' },
  { id: 4, nome: 'Yugioh', genero: 'Jogo de Tabuleiro' },
  { id: 5, nome: 'digimon', genero: 'Aventura' },
  { id: 6, nome: 'Pokemon', genero: 'Aventura' },
];

function obterAnimes(req, res) {
  return res.status(200).json(animes);
}

export default animeRouter;