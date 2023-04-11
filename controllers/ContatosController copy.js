var contatos = [
    { id: 1, nome: 'Adéliton', numero: 999999999 },
    { id: 2, nome: 'João', numero: 88888888 },
    { id: 3, nome: 'Maria', numero: 777777777 }
]

class ContatosController {
    static index(req, res) {
        res.render('index', {
            contatos: contatos
        })
    }

    static novo(req, res) {
        res.render('novo')
    }

    static salvarNovo(req, res) {
        const { nome, numero } = req.body
        var contato = {
            id: contatos.length + 1,
            nome: nome,
            numero: numero
        }
        contatos.push(contato)

        res.redirect('/')
    }

    static excluir(req, res) {
        const { id } = req.params
        contatos = contatos.filter((contato) => {
            return contato.id != id
        })

        res.redirect('/')
    }

    static editar(req, res) {
        const { id } = req.params

        const contato = contatos.find((contato) => {
            return contato.id == id
        })
        
        res.render('editar', {
            contato: contato
        })
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

        res.redirect('/')
    }
}

module.exports = ContatosController