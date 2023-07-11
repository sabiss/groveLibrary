import livros from "../models/Livro.js";

class livrosController{
    static listarLivros = async (req, res) =>{
        try{
            const listaLivros = await livros.find();//.find faz pesquisas em uma coleção | vai na coleção LIVROS e me devolve todos os livros nele
            res.status(201).json(listaLivros)
        }catch(error){
            res.status(500).send("Erro ao buscar livros: " + error);
        }
    }
    static cadastrarLivro = (req, res)=>{
        const novoLivro = new livros(req.body);
        novoLivro.save((err)=>{
            if(err){
                res.status(500).send({message: "erro ao cadastrar livro - " + err});
            }else{
                res.status(201).send({message: "Livro cadastrado com sucesso"})
            }
            
        })
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