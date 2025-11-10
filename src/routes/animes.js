import Router from 'express';

const animeRouter = Router();

const animes = [
  { id: 1, nome: 'Naruto', genero: 'Ação' },
  { id: 2, nome: 'One Piece', genero: 'Aventura' },
  { id: 3, nome: 'Attack on Titan', genero: 'Fantasia' },
  { id: 4, nome: 'Yugioh', genero: 'Jogo de Tabuleiro' },
  { id: 5, nome: 'Digimon', genero: 'Aventura' }, 
  { id: 6, nome: 'Pokemon', genero: 'Aventura' },
];



function obterAnimes(req, res) {
  return res.status(200).json(animes);
}

function deleteAnime(req, res) {
  const id = parseInt(req.params.id);

  const index = animes.findIndex((anime) => anime.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Anime não localizado' });
  }


  const removido = animes.splice(index, 1);

  return res.status(200).json({
    mensagem: "Anime removido com sucesso",
    removido: removido[0], 
  });
}


animeRouter.get('/animes', obterAnimes); 


animeRouter.delete('/animes/:id', deleteAnime);

export default animeRouter;