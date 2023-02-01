const express = require("express")
const cors = require("cors")
const { connect } = require("./config/db")
require("dotenv").config({ path: ".env" })
connect()

const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use("/user", require("./routes/userRoutes"))  //7
app.use("/doc", require("./routes/docRoutes"))  //7


app.listen(process.env.PORT, console.log("http://localhost:5000"))


// 2nd
// 7th