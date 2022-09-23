'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tarefas.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuario'
      })
    }
  }
  Tarefas.init({
    descricao: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tarefas',
  });
  return Tarefas;
};