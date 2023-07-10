class livrosController{
    static listarLivros = async (req, res) =>{
        try{
            const listaLivros = await livros.find();//.find faz pesquisas em uma coleção | vai na coleção LIVROS e me devolve todos os livros nele
            res.status(200).json(listaLivros)
        }catch(error){
            res.status(500).send("Erro ao buscar livros: " + error);
        }
    }
} 

export default livrosController;