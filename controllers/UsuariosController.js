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
        const { nome, email, data_nascimento, status } = req.body

        // const usuario = await Usuarios.update(
        //     { nome: nome, email: email },
        //     { where: { id: id } }
        // )
        const usuario = await usuarios.findByPk(id)
        usuario.update(
            { nome: nome, email: email, data_nascimento:data_nascimento, status:status }
        )
        res.json(usuario)

    }

    static async novaSenha(req, res) {
        const { id } = req.params
        const { senha, novaSenha, confirmarSenha } = req.body

        const usuario = await usuarios.findByPk(id)
        const sucesso = await bcrypt.compare(senha, usuario.senha)
        if(sucesso){
            if(novaSenha===confirmarSenha){
                const salt = await  bcrypt.genSalt(12)
                const password = await bcrypt.hash(novaSenha,salt)
                usuario.update( { senha:password } )
                res.json({
                    succsses: 'Senha alterada com sucesso'
                })
            } else {
                res.status(401).json({
                    error: 'Senhas não são Identicas'
                })
            }
            
        } else {
            res.status(401).json({
                error: 'Senha atual Incorreta'
            })
        }
        

    }
}

module.exports = UsuariosController