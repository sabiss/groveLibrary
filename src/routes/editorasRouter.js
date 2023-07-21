import editorasController from "../controllers/editorasController.js";
import express from "express";

const router = express.Router()

router
    .post('/editoras', editorasController.cadastrarEditora)
    .get('/editoras', editorasController.listarEditoras)
    .get('/editoras/:id', editorasController.listarEditoraPorId)
    .put('/editoras/:id', editorasController.atualizarEditora)
    .delete('/editoras/:id', editorasController.deletarEditora)
export default router
