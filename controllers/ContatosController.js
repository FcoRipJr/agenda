// var contatos = [
//     { id: 1, nome: 'Adéliton', numero: 999999999 },
//     { id: 2, nome: 'João', numero: 88888888 },
//     { id: 3, nome: 'Maria', numero: 777777777 }
// ]

const { contatos } = require("../models/")

class ContatosController {
    static async index(req, res) {
        const list = await contatos.findAll()
        res.json(list)
    }

    static async salvarNovo(req, res) {
        const { nome, numero } = req.body
        const contato = await contatos.create(
         { nome: nome,
            numero: numero
        })

        res.json(contato)
    }

    static async excluir(req, res) {
        const { id } = req.params
        const contato = await contatos.destroy({
            where: {
              id: id
            }
          })
        res.json(contato)
    }

    static async salvarEditar(req, res) {
        const { id } = req.params
        const { nome, numero } = req.body

        const contato = await contatos.update(
            { nome: nome, numero: numero },
            { where: { id: id } }
        )
        res.json(contato)

    }
}

module.exports = ContatosController