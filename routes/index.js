const bodyParser = require('body-parser');
const usuarios = require('./usuariosRoutes');
const tarefas = require('./tarefasRoutes');

module.exports = app =>{
    app.use(bodyParser.json());
    app.use(tarefas);
    app.use(usuarios);
    app.get('/', (req,res) => res.status(200).send("Api de tarefas"))
}