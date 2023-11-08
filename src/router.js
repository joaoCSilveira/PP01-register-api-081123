const express = require("express")
const cadastroController = require("./Controllers/cadastroController")
const auth = require("./middlewares/auth.js")

const router = express.Router()

router.post("/cadastro/register", auth.authPost, cadastroController.postData)
router.put("/cadastro/update", auth.authUpdate, cadastroController.updateData)
router.get("/cadastro", cadastroController.getAllData)
router.delete("/cadastro/delete", auth.authUpdate, cadastroController.deleteData)

module.exports = router