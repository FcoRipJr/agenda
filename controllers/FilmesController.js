const { filmes } = require("../models/")

class FilmesController {
    static async index(req, res) {
        const list = await filmes.findAll()
        res.json(list)
    }

    static async salvarNovo(req, res) {
        const { titulo, duracao, genero } = req.body
        const filme = await filmes.create(
         { titulo: titulo,
            duracao: duracao,
            genero:genero
        })

        res.json(filme)
    }

    static async excluir(req, res) {
        const { id } = req.params
        // const filme = await Filmes.destroy({
        //     where: {
        //       id: id
        //     }
        //   })
          const filme = await filmes.findByPk(id)
          filme.destroy({
            where: {
              id: id
            }
          })
        res.json(true)
    }

    static async salvarEditar(req, res) {
        const { id } = req.params
        const { titulo, duracao, genero } = req.body

        // const filme = await Filmes.update(
        //     { titulo: titulo, duracao: duracao },
        //     { where: { id: id } }
        // )
        const filme = await filmes.findByPk(id)
        filme.update(
            { titulo: titulo, duracao: duracao, genero:genero }
        )
        res.json(filme)

    }
}

module.exports = FilmesController