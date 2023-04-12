const express = require('express')
const ContatosController = require('./controllers/ContatosController')
const FilmesController = require('./controllers/FilmesController')
const router = express.Router()

router.get('/', ContatosController.index)
router.post('/novo', ContatosController.salvarNovo)
router.delete('/excluir/:id', ContatosController.excluir)
router.put('/editar/:id', ContatosController.salvarEditar)

router.get('/filmes', FilmesController.index)
router.post('/filmes/novo', FilmesController.salvarNovo)
router.delete('/filmes/excluir/:id', FilmesController.excluir)
router.put('/filmes/editar/:id', FilmesController.salvarEditar)
// router.get('/novo', ContatosController.novo)
// router.get('/editar/:id', ContatosController.editar)

module.exports = router