const app = require("./app.js")
require("dotenv").config({path: "../.env"})

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Server on port: ${port}`)
})

