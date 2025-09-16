# API Animes

## Descrição
API simples para listar e adicionar animes.

## Rota GET
- `GET /api/animes` → Lista todos os animes

## Rota POST
- `POST /api/animes` → Adiciona um novo anime  
  Exemplo de corpo JSON:
  ```json
  {
    "nome": "Bleach",
    "genero": "Ação"
  }
