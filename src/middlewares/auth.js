const db = require("../Models/dbConnect.js")
const authPost = (req, res, next) => {

    if(req.body.cpf === undefined){
        res.status(400).json({message: "Voce precisa digitar um cpf"})
    }
    if(req.body.cpf === ""){
        res.status(400).json({message: "O cpf nao pode ser nulo"})
    }
    if(req.body.nome === undefined){
        res.status(400).json({message: "Voce precisa digitar um nome"})
    }
    if(req.body.nome === ""){
        res.status(400).json({message: "O nome nao pode ser nulo"})
    }
    if(req.body.idade === undefined){
        res.status(400).json({message: "Voce precisa digitar uma idade"})
    }
    if(req.body.idade === ""){
        res.status(400).json({message: "A idade nao pode ser nula"})
    }
    next()

}

const authUpdate = async (req, res, next) => {

    const flag = (await db).execute("SELECT * FROM cliente WHERE cpf = ?", [req.body.cpf])
    if(flag != undefined || flag != null || flag != ""){
        res.status(400).json({message: "CPF invalido"})
    }

}

module.exports = {
    authPost,
    authUpdate
}