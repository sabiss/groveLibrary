import autoresController from "../controllers/autoresController.js";
import express from "express";

const router = express.Router();

router
    .get('/autores', autoresController.listarAutores)
    .get('/autores/:id', autoresController.listarPorId)
    .post('/autores', autoresController.cadastrarAutor)

export default router