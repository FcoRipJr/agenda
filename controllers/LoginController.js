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

    static validaToken(req,res, next) {
        const token = req.headers["authorization"]

        jwt.verify(token, process.env.JWT_KEY, (error, success) => {
            if(!error){
                console.log(success)
                next()
            } else {
                res.status(401).json({
                    error: 'Token inválido'
                }).end()
            }
            
        })
    }
}

module.exports = LoginController