const { usuarios } = require("../models/")
const bcrypt = require("bcrypt")

class UsuariosController {
    static async index(req, res) {
        const list = await usuarios.findAll()
        res.json(list)
    }

    static async salvarNovo(req, res) {
        const { nome, email, senha, data_nascimento, status } = req.body
        const salt = await  bcrypt.genSalt(12)
        const password = await bcrypt.hash(senha,salt)
        const usuario = await usuarios.create(
         { nome: nome,
            email: email,
            senha:password,
            data_nascimento:data_nascimento,
            status:status
        })

        res.json(usuario)
    }

    static async excluir(req, res) {
        const { id } = req.params
        // const usuario = await Usuarios.destroy({
        //     where: {
        //       id: id
        //     }
        //   })
          const usuario = await usuarios.findByPk(id)
          usuario.destroy({
            where: {
              id: id
            }
          })
        res.json(true)
    }

    static async salvarEditar(req, res) {
        const { id } = req.params
        const { nome, email, senha, data_nascimento, status } = req.body

        // const usuario = await Usuarios.update(
        //     { nome: nome, email: email },
        //     { where: { id: id } }
        // )
        const usuario = await usuarios.findByPk(id)
        usuario.update(
            { nome: nome, email: email, senha:senha, data_nascimento:data_nascimento, status:status }
        )
        res.json(usuario)

    }
}

module.exports = UsuariosController