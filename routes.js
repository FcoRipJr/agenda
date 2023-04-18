const express = require('express')
const ContatosController = require('./controllers/ContatosController')
const FilmesController = require('./controllers/FilmesController')
const UsuariosController = require('./controllers/UsuariosController')
const LoginController = require('./controllers/LoginController')
const router = express.Router()

router.get('/',LoginController.validaToken, ContatosController.index)
router.post('/novo', ContatosController.salvarNovo)
router.delete('/excluir/:id', ContatosController.excluir)
router.put('/editar/:id', ContatosController.salvarEditar)

router.get('/filmes', FilmesController.index)
router.post('/filmes/novo', FilmesController.salvarNovo)
router.delete('/filmes/excluir/:id', FilmesController.excluir)
router.put('/filmes/editar/:id', FilmesController.salvarEditar)

router.get('/usuarios', UsuariosController.index)
router.post('/usuarios/novo', UsuariosController.salvarNovo)
router.delete('/usuarios/excluir/:id', UsuariosController.excluir)
router.put('/usuarios/editar/:id', UsuariosController.salvarEditar)
router.put('/usuarios/novasenha/:id', UsuariosController.novaSenha)
// router.get('/novo', ContatosController.novo)
// router.get('/editar/:id', ContatosController.editar)
router.post('/login', LoginController.makeLogin)
router.get('/user', LoginController.validaToken, LoginController.user)

module.exports = router