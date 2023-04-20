const { usuarios, pessoas, emails, generos } = require("../models/")
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
                req.userId = success
                next()
            } else {
                res.status(401).json({
                    error: 'Token inválido'
                }).end()
            }
            
        })
    }

    static async user(req,res) {
        const usuario = await usuarios.findByPk(req.userId,{
            attributes: ['id', 'nome', 'email', 'data_nascimento']
        })
        res.json(usuario)
    }

    static async pessoa(req,res) {
        const pessoa = await pessoas.findByPk(1,{
            include: ['emails', 'generos']
        })
        res.json(pessoa)
    }
}

module.exports = LoginController