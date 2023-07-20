import autores from "../models/Autor.js"

class autoresController {
    static cadastrarAutor = async (req,res) =>{
        const autor = new autores(req.body);
        try{
            await autor.save()
            res.status(201).send({message:"Autor criado com sucesso"});
        }catch(err){
            res.status(500).send({message: `Erro ao cadastrar autor - ${err.message}`})
        }
    }
    static listarAutores = async (req,res)=>{
        try{
            const listaAutores = await autores.find();
            res.status(200).json(listaAutores)
        }catch(err){
            res.status(500).send({message:`Erro ao buscar lista de autores - ${err.message}`})
        }
        
    }
    static listarPorId = async (req, res)=>{
        const id = req.params.id;
        try{
            const autor = await autores.findById(id)
            res.status(200).json(autor)
        }catch(err){
            res.status(500).send({message:`ID de autor não encontrado - ${err.message}`})
        }
    }
}

export default autoresController