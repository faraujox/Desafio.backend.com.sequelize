const { Router } = require('express');
const TarefasController = require('../controllers/TarefasController')

const router = Router();

router.get('/tarefas', TarefasController.buscarTarefa)
      .get('/tarefas/:idUsuario', TarefasController.buscarTarefaPorUsuario)
      .post('/tarefas', TarefasController.criarTarefa)
      .put('/tarefas/:idParam', TarefasController.atualizarTarefa)
      .delete('/tarefas/:idParam', TarefasController.excluirTarefa)

module.exports = router;
