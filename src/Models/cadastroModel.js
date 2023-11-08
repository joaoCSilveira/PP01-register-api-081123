const db = require("./dbConnect.js")

const postData = async (body) => {
    const {cpf} = body
    const {nome} = body
    const {idade} = body
    const postDates = (await db).execute("INSERT INTO cliente (cpf, nome, idade) VALUES (?, ?, ?)", [cpf, nome, idade])
    return postDates
}

const updateData = async (body) => {
    const {cpf} = body
    const {nome} = body
    const {idade} = body
    const updateDates = (await db).execute("UPDATE cliente SET nome = ?, idade = ? WHERE cpf = ?", [nome, idade, cpf])
    return updateDates
}

const getAllData = async () => {
    const getDates = (await db).execute("SELECT * FROM cliente")
    return getDates
}

const deleteData = async (body) => {
    const {cpf} = body
    const deleteDates = (await db).execute("DELETE FROM cliente WHERE cpf = ?", [cpf])
    return deleteDates
}

module.exports = {
    postData,
    updateData,
    getAllData,
    deleteData
}