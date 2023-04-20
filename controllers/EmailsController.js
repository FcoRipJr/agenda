const { usuarios, pessoas, emails, generos } = require("../models/")

require('dotenv').config()

class EmailsController {
    static async index(req, res) {
        const {id} = req.params
        const email = await emails.findByPk(1,{
            include: 'pessoa'
        })
        res.json(email)
    }

}

module.exports = EmailsController