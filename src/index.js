const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

let animes = [
  { id: 1, nome: "Naruto", genero: "Ação" },
  { id: 2, nome: "One Piece", genero: "Aventura" },
];

app.get("/api/animes", (req, res) => {
  res.json(animes);
});

app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
app.post("/api/animes", (req, res) => {
  const { nome, genero } = req.body;
  if (!nome || !genero) {
    return res.status(400).json({ error: "Nome e gênero são obrigatórios" });
  }
  const newAnime = { id: animes.length + 1, nome, genero };
  animes.push(newAnime);
  res.status(201).json(newAnime);
});
