const router = require("express").Router()
const teccontrolller = require("../api/teacher/teaceherController")
const stucontrolller = require("../api/student/studencController")

router.post("/addtec",teccontrolller.addtec)
router.post("/addstu",stucontrolller.addstu)

module.exports= router