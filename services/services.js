const database = require('../models');

class Services{
    constructor (nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async buscaRegistros(){
        return database[this.nomeDoModelo].findAll();
    }

    async buscaUmRegistro(idParam){
        return database[this.nomeDoModelo].findOne({where:{id:Number(idParam)}});
    }

    async buscaRegistroPorUsuario(idParam){
        return database[this.nomeDoModelo].findAll({where:{id_usuario:Number(idParam)}});
    }

    async criaRegistro(novoRegistro){
        return database[this.nomeDoModelo].create(novoRegistro);
    }

    async atualizaRegistro(dados, idParam){
        return database[this.nomeDoModelo].update(dados, {where:{id: Number(idParam)}});
    }

    async excluiRegistro(idParam){
        return database[this.nomeDoModelo].destroy({where:{id:Number(idParam)}});
    }

    async restauraRegistro(idParam){
        return database[this.nomeDoModelo].restore({where:{id:Number(idParam)}});
    }
}

module.exports = Services;