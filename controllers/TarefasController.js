const Services = require('../services/services.js')
const tarefasServices = new Services('Tarefas');

class TarefasController{

    static async buscarTarefa(req, res){
        try{
            const tarefas = await tarefasServices.buscaRegistros();
            res.status(200).json(tarefas);
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }

    static async buscarTarefaPorUsuario(req, res){
        try{
            const {idUsuario} = req.params;
            const tarefa = await tarefasServices.buscaRegistroPorUsuario(idUsuario);
            res.status(200).json(tarefa);
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }
    
    static async criarTarefa(req, res){
        try{
            const dados = req.body;
            const novoTarefa = await tarefasServices.criaRegistro(dados);
            res.status(200).json(novoTarefa);
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }
    
    static async atualizarTarefa(req, res){
        try{
            const {idParam} = req.params;
            const dados = req.body;
            await tarefasServices.atualizaRegistro(dados, idParam);
            const tarefaAtualizado = await tarefasServices.buscaUmRegistro(idParam);
            res.status(200).json(tarefaAtualizado);
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }

    static async excluirTarefa(req, res){
        try{
            const {idParam} = req.params;
            await tarefasServices.excluiRegistro(idParam);
            res.status(200).send('Usuário excluído');
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }
}

module.exports = TarefasController;