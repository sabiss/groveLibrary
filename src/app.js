import express from "express"; //importando o framework express

const app = express();//inicializando 
app.use(express.json);

const livros = [
    {id: 1, 'título': 'Alice no País das Maravilhas', 'autor(a)': 'Lewis Carroll'},
    {id: 2, 'título': 'Dom Casmurro', 'autor(a)': 'Machado de Assis'}
]

app.get('/', (req, res) =>{//sempre que na url tiver '/' irá retornar este o texto 'livraria'
    res.status(200).send("Livraria");
})

export default app;