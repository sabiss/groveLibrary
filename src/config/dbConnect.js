import mongoose from "mongoose";
mongoose.connect('mongodb+srv://sabiss:030310Banquinho@grovelibrary-teste.lfaz7ht.mongodb.net/')//criando conecção

let conexaoComOBanco = mongoose.connection//conexão feita e em uma variável

export default conexaoComOBanco;