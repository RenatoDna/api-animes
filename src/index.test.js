import request from 'supertest';

import app from './app.js'; 

describe('Testes de Integração da API de Animes', () => {


  it('GET /api/animes - Deve retornar a lista de animes', async () => {
    const response = await request(app)
      .get('/api/animes')
      .expect(200); 

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].nome).toBe('Naruto');
  });


  it('DELETE /api/animes/:id - Deve remover um anime com sucesso', async () => {

    const response = await request(app)
      .delete('/api/animes/2')
      .expect(200);


    expect(response.body.mensagem).toBe('Anime removido com sucesso');
    expect(response.body.removido.id).toBe(2);
  });


  it('DELETE /api/animes/:id - Deve retornar 404 para um ID inexistente', async () => {
    const response = await request(app)
      .delete('/api/animes/999') 
      .expect(404);

    expect(response.body.message).toBe('Anime não localizado');
  });
});