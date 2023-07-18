import livros from "../models/Livro.js";

class livrosController{
    static async listarLivros(req, res) {
        try {
          const listaLivros = await livros.find(); // retorna todos os livros
          res.status(200).json(listaLivros);
        } catch (error) {
          res.status(500).send("Erro ao buscar livros: " + error);
        }
    }
    static cadastrarLivro = async (req, res) => {
        const novoLivro = new livros(req.body);//instancio um novo livro pelas informações no body da requisição
        try {
            await novoLivro.save();//salvo no mongo
            res.status(201).send({ message: "Livro cadastrado com sucesso" });
        } catch (err) {
            res.status(500).send({ message: "Erro ao cadastrar livro - " + err.message });
        }
    }
    
    static atualizarLivro = (req, res)=>{
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({message: "Livro atualizado com sucesso"})
            }else{
                res.status(500).send({message: "Erro ao atualizar livro - " + err.message});
            }
        })//parâmetros: id, arquivo com a atualização

    }
} 

export default livrosController;