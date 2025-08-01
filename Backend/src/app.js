 require("dotenv").config()
const express = require("express") ;
const userRoutes = require("./routes/user.routes")
const cookieParser = require("cookie-parser")

const app = express() ;
app.use(express.json()) 
app.use(express.urlencoded({extended : true})) 
app.use(cookieParser())
app.use("/auth/api",userRoutes)


module.exports = app