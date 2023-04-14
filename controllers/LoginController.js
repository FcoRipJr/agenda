const { usuarios } = require("../models/")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require('dotenv').config()

class LoginController {
    static async makeLogin(req, res) {
        const { email, senha } = req.body

        const usuarioObj = await usuarios.findOne(
            { where: { email: email, status:'A' } }
        )
        if(!usuarioObj) {
            res.status(401).json({
                error: 'Usuário ou senha inválido'
            }).end()
        } else {
            const sucesso = await bcrypt.compare(senha, usuarioObj.senha)
            if(sucesso){

                const token = await jwt.sign(usuarioObj.id, process.env.JWT_KEY);

                res.json({token: token})
            } else {
                res.status(401).json({
                    error: 'Usuário ou senha inválido'
                }).end()
            }
        }


    }
}

module.exports = LoginController