import livros from "../models/Livro.js";

class livrosController{
    static async listarLivros(req, res) {
        try {
          const listaLivros = await livros.find()// retorna todos os livros
          .populate('autor');//vai popular o atributo autor com os dados sobre o autor ao qual pertence o ID 
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
    
    static atualizarLivro = async (req, res) => {
        const id = req.params.id; // parâmetros são informações que vêm na rota
      
        try {
            //vou pesquisar o livro pelo id e vou atualizar pelo que tiver no body da requisição
          const livroAtualizado = await livros.findByIdAndUpdate(id, { $set: req.body }, { new: true });//set = pelo que eu devo mudar
          if (!livroAtualizado) {
            return res.status(404).json({ message: "Livro não encontrado." });
          }
          res.status(200).json({ message: "Livro atualizado com sucesso", livro: livroAtualizado });
        } catch (error) {
          res.status(500).json({ message: "Erro ao atualizar livro - " + error.message });
        }
    }

    static listarLivroPorID = async (req, res) => {
        const id = req.params.id;

        try{
            const livro = await livros.findById(id)
            .populate('autor', 'nome');//vai popular o atributo autor com os dados sobre o autor ao qual pertence o ID e so vai me mostrar o nome do autor
            if(livro){
                res.status(200).send(livro)
            }else{
                res.status(404).send({message: `erro ao buscar pelo livro - ${err.message}`})
            }
        }catch(err){
            res.status(404).send(`ID não encontrado - ${err.message}`)
        }
        
    }
    
    static deletarLivro = async (req,res) =>{
        const id = req.params.id
        try{
            const erro = await livros.findByIdAndDelete(id);
            if(!erro){
                res.status(200).send({message:"Livro deletado com sucesso!"})
            }
        }catch(error){
            res.status(500).send({message:`ID do livro não encontrado, não sendo deletado - ${error.message}`})
        }
    }
} 

export default livrosController;