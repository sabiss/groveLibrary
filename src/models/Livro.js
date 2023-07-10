import mongoose from "mongoose";

//um Schema é um esquema de como um livro vai ser. O que ele deve ter. Estilo uma classe
const schemaLivro = new mongoose.Schema({
    id: {type: Number},
    titulo: {type: String, required: true},//required = dado obrigatório na ogra de criar um livro
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number}
});

const livros = new mongoose.model('livros', schemaLivro)//vai criar uma coleção no banco com e os livros vão seguir o padrão schemaLivro

export default livros;