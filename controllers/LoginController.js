const { usuarios } = require("../models/")
const bcrypt = require("bcrypt")

class LoginController {
    static async makeLogin(req, res) {
        const { email, senha } = req.body

        const usuarioObj = await usuarios.findAll(
            { where: { email: email, status:'A' } }
        )
        // const usuario = await usuarios.findByPk(id)
        // usuario.update(
        //     { nome: nome, email: email, senha:senha, data_nascimento:data_nascimento, status:status }
        // )
        // res.json(usuario)
        if(!usuarioObj.length) {
            res.status(401).json({
                error: 'Usuário ou senha inválido'
            }).end()
        } else {

            res.json(usuarioObj)

        }


    }
}

module.exports = LoginController