const express = require('express')
const ContatosController = require('./controllers/ContatosController')
const router = express.Router()

router.get('/', ContatosController.index)
router.post('/novo', ContatosController.salvarNovo)
router.delete('/excluir/:id', ContatosController.excluir)
router.put('/editar/:id', ContatosController.salvarEditar)

// router.get('/novo', ContatosController.novo)
// router.get('/editar/:id', ContatosController.editar)

module.exports = router