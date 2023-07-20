import express from "express"; //importando o framework express
import conexaoComOBanco from "./config/dbConnect.js"
import routes from "./routes/index.js"

conexaoComOBanco.on("error", console.log.bind(console, "erro na conexão com o banco"))//testa a conecção pra ver se não tem algum erro
conexaoComOBanco.once("open", ()=>{//abre a conexão com o banco
    console.log("Banco de dados conectado")
})

const app = express();//inicializando 
app.use(express.json());//a api vai entender o json que estou enviando
routes(app)

export default app;