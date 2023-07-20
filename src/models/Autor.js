import mongoose from "mongoose";

const schemaAutores = {
    "id":{type: String},
    "nome":{type: String, required:true},
    "nacionalidade":{type: String, required: true}

}

const autores = new mongoose.model("autores", schemaAutores);

export default autores;