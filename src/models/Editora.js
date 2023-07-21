import mongoose from "mongoose"

const schemaEditora = {
    "id": {type: String},
    "nome": {type: String, required: true},
    "endereco": {type: String, require:true}
}

const editoras = new mongoose.model("editoras",schemaEditora)

export default editoras