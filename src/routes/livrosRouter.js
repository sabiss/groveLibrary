import express from "express";
import livrosController from "../controllers/livrosController.js";

const router = express.Router();
//se chamarem um get para o /livros faça o livros.Controller.listarLivros
router//as rotas tem que ser escritas das MAIS ESPECÍFICAS para as MENOS ESPECÍFICAS
    .get('/livros', livrosController.listarLivros)
    .get('/livros/buscaTituloLivro', livrosController.buscaPorNomeDoLivro)
    .get('/livros/buscaPorNomeDoAutor', livrosController.buscaPorNomeAutor)
    .get('/livros/buscarLivroPorNomeDaEditora',livrosController.buscarLivroPorEditora)
    .get('/livros/:id', livrosController.listarLivroPorID)
    .post('/livros', livrosController.cadastrarLivro)
    .put('/livros/:id', livrosController.atualizarLivro)//os dois pontos indica que ali vai chegar um parâmetro do tipo id
    .delete('/livros/:id', livrosController.deletarLivro)

export default router;