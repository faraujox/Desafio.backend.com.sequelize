const Services = require('../services/services.js')
const usuariosServices = new Services('Usuarios');

class UsuarioController{

    static async buscarUsuarios(req, res){
        try{
            const usuarios = await usuariosServices.buscaRegistros();
            res.status(200).json(usuarios);
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }

    static async buscarUsuarioPorId(req, res){
        try{
            const {idParam} = req.params;
            const usuario = await usuariosServices.buscaUmRegistro(idParam);
            res.status(200).json(usuario);
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }
    
    static async criarUsuario(req, res){
        try{
            const dados = req.body;
            const novoUsuario = await usuariosServices.criaRegistro(dados);
            res.status(200).json(novoUsuario);
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }
    
    static async atualizarUsuario(req, res){
        try{
            const {idParam} = req.params;
            const dados = req.body;
            await usuariosServices.atualizaRegistro(dados, idParam);
            const usuarioAtualizado = await usuariosServices.buscaUmRegistro(idParam);
            res.status(200).json(usuarioAtualizado);
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }

    static async excluirUsuario(req, res){
        try{
            const {idParam} = req.params;
            await usuariosServices.excluiRegistro(idParam);
            res.status(200).send('Usuário excluído');
        }catch(erro){
            res.status(500).send(`Erro: ${erro}`);
        }
    }
}

module.exports = UsuarioController;