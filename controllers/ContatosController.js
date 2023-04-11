var contatos = [
    { id: 1, nome: 'Adéliton', numero: 999999999 },
    { id: 2, nome: 'João', numero: 88888888 },
    { id: 3, nome: 'Maria', numero: 777777777 }
]

class ContatosController {
    static index(req, res) {
        res.json(contatos)
    }

    static salvarNovo(req, res) {
        const { nome, numero } = req.body
        var contato = {
            id: contatos.length + 1,
            nome: nome,
            numero: numero
        }
        contatos.push(contato)

        res.json(contato)
    }

    static excluir(req, res) {
        const { id } = req.params
        contatos = contatos.filter((contato) => {
            return contato.id != id
        })
        res.json(true)

    }

    static salvarEditar(req, res) {
        const { id } = req.params
        const { nome, numero } = req.body

        const index = contatos.findIndex((contato) => {
            return contato.id == id
        })
        let contato = {
            id: id,
            nome: nome,
            numero: numero
        }
        contatos[index] = contato

        res.json(contato)

    }
}

module.exports = ContatosController