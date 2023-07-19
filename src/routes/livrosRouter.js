import express from "express";
import livrosController from "../controllers/livrosController.js";

const router = express.Router();
//se chamarem um get para o /livros faça o livros.Controller.listarLivros
router
    .get('/livros', livrosController.listarLivros)
    .get('/livros/:id', livrosController.listarLivroPorID)
    .post('/livros', livrosController.cadastrarLivro)
    .put('/livros/:id', livrosController.atualizarLivro);//os dois pontos indica que ali vai chegar um parâmetro do tipo id

export default router;