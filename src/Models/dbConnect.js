const mysql = require("mysql2/promise")
require("dotenv").config({path: "../../.env"})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kj.sim2!220",
    database: "cadastro", 
    port: 3306
})

module.exports = db