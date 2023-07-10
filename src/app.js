import express from "express"; //importando o framework express
import conexaoComOBanco from "./config/dbConnect.js"
import livros from "./models/Livro.js"

conexaoComOBanco.on("error", console.log.bind(console, "erro na conexão com o banco"))//testa a conecção pra ver se não tem algum erro
conexaoComOBanco.once("open", ()=>{//abre a conexão com o banco
    console.log("Banco de dados conectado")
})

const app = express();//inicializando 
app.use(express.json());//a api vai entender o json que estou enviando

app.get('/', (req, res) =>{//sempre que na url tiver '/' irá retornar este o texto 'livraria'
    res.status(200).send("Bem Vindo a Livraria Grove");
})
app.get('/livros', async (req, res) => {
    try{
        const listaLivros = await livros.find();//.find faz pesquisas em uma coleção 
        res.status(200).json(listaLivros)
    }catch(error){
        res.status(500).send("Erro ao buscar livros: " + error);
    }
    
    livros.find((err, livros)=>{//vai na coleção LIVROS e me devolve todos os livros nele
        //(err, livros)... caso ocorra um erro
        res.status(200).json(livros)//listo na tela o array de LIVROS em forma de json
    })
})
app.post('/livros', (req, res) => {
    livros.push(req.body);//vai pra minha lista o objeto que está no corpo da minha requisição la no POSTMAN
    res.status(201).send("Livro adicionado!");
})
app.put('/livros/:id', (req, res) => {
    const index = buscarLivro(req.params.id)//o id para estar dentro dos PARAMS(parâmetros) da requisição
    livros[index].autor = req.body.autor // vai pegar o json que está em body e vai poder o que tem dentro do atributo TITULO
    res.json(livros[index])//exibo o livro alterado
})

function buscarLivro(id){
    return livros.findIndex(livro => livro.id == id);
}

app.delete('/livros/:id', (req, res) => {
    //método desestruturado
    let {id} = req.params;//mesma coisa que: req.params.id
    let index = buscarLivro(id);
    livros.splice(index, 1);
    res.send(`O Livro do id ${id} foi deletado com sucesso`);
})

export default app;