import livros from "../models/Livro.js";
import autores from "../models/Autor.js"

class livrosController{
    static async listarLivros(req, res) {
        try {
          const listaLivros = await livros.find()// retorna todos os livros
          .populate('autor')
          .populate('editora');//vai popular o atributo autor com os dados sobre o autor ao qual pertence o ID 
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
            .populate('autor', 'nome')
            .populate('editora');//vai popular o atributo autor com os dados sobre o autor ao qual pertence o ID e so vai me mostrar o nome do autor
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
    static buscaPorNomeDoLivro = async (req,res) =>{
        const nomeDoLivro = req.query.titulo//QUERY são parâmetros de consulta
        //localhost:3000/livros/busca?titulo=Harry Potter 
        try{
            const livro = await livros.find({'titulo': nomeDoLivro})
            res.status(200).send(livro)
        }catch(error){
            res.status(404).send("Não existe livro com esse nome")
        }
    }
    static buscaPorNomeAutor = async (req,res) =>{
        const nomeAutor = req.query.autor
        try{
            const autor = await autores.find({"nome": nomeAutor})
            console.log(autor)
            const idDoAutor = autor._id//_id: new ObjectId("64bfcb4b50901431fe8c98ac")
            console.log(idDoAutor)
            try{
                const livroDoAutor = await livros.find({"autor": idDoAutor})
                res.status(200).json(livroDoAutor)
            }catch(erro){
                res.status(404).send(`Erro ao buscar o livro com o id do autor ${nomeAutor} - ${erro}`)
            }
        }catch(erro){
            res.status(404).send("Erro ao buscar o nome do autor - " + erro)
        }
        
    }
    // static buscarLivroPorEditora = async (req,res) =>{
    //     const editora = req.query.editora
    //     try{
    //         const livrosDaEditora = livros.find({"editora": editora})
    //         res.status(200).send(livrosDaEditora)
    //     }catch(error){
    //         res.status(404).send("O Livro não foi encontrado")
    //     }
    // }
} 

export default livrosController;