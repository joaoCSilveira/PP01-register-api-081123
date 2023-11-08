const cadastroModel = require("../Models/cadastroModel.js")

const postData = async(req, res) => {
    const postedData = await cadastroModel.postData(req.body)
    res.status(200).send({message: "post concluido"})
}

const updateData = async(req, res) => {
    const updatedData = await cadastroModel.updateData(req.body)
    res.status(200).send({message: "update concluido"})
}

const getAllData = async(req, res) => {
    const gotAllData = await cadastroModel.getAllData()
    res.status(200).send(gotAllData[0])
}

const deleteData = async(req, res) => {
    const deletedData = await cadastroModel.deleteData(req.body)
    res.status(200).send({message: "Dados deletados"})
}

module.exports = {
    postData,
    updateData,
    getAllData,
    deleteData
}