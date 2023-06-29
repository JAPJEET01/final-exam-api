const express = require("express")
const app = express()
const db = require("./config/db")
const router = require("./routes/routes")
app.use(express.urlencoded({extended:true}))


app.use("/admin",router)
app.listen(3004,()=>{
    console.log("server nunning at 3004")
})