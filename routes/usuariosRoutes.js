const { Router } = require('express');
const UsuariosController = require('../controllers/UsuariosController');

const router = Router();

router.get('/usuarios', UsuariosController.buscarUsuarios)
      .get('/usuarios/:idParam', UsuariosController.buscarUsuarioPorId)
      .post('/usuarios', UsuariosController.criarUsuario)
      .put('/usuarios/:idParam', UsuariosController.atualizarUsuario)
      .delete('/usuarios/:id', UsuariosController.excluirUsuario)

module.exports = router;
