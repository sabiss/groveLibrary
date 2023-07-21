import editoras from '../models/Editora.js'

class editorasController  {
    static cadastrarEditora = async (req, res) => {
        const novaEditora = new editoras(req.body)
        try{
            await novaEditora.save()
            res.status(201).send({message: "Editora criada com sucesso!"})
        }catch(error){
            res.status(400).send({message:`Erro ao criar nova Editora - ${error}`})
        }
    }
    static listarEditoras = async (req,res) =>{
        try{
            const listaEditoras = await editoras.find()
            res.status(200).json(listaEditoras)
        }catch(error){
            res.status(404).send({message:`Erro ao buscar por editoras - ${error}`})
        }
        
    }
    static listarEditoraPorId = async (req,res) => {
        const id = req.params.id
        try{
            const editora = await editoras.findById(id)
            res.status(200).json(editora)
        }catch(error){
            res.status(404).send({message:`Editora não encontrada - ${error}`})
        }
        
    }
    static deletarEditora = async (req,res)=>{
        const id = req.params.id;
        try{
            await editoras.findByIdAndDelete(id)
            res.status(200).send({message:"Editora deletada com sucesso"})
        }catch(err){
            res.status(404).send({message: `Não foi possível deletar a editora - ${err}`})
        }
        
    }
    static atualizarEditora = async (req, res) =>{
        const id = req.params.id;
        try{
            await editoras.findByIdAndUpdate(id, {$set: req.body}, {new: true})
            res.status(200).send({message: "Editora atualizada com sucesso"})
        }catch(err){
            res.status(404).send({message:`Erro ao atualizar editora - ${err}`})
        }
    }
}

export default editorasController