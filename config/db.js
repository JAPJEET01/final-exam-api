const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/afterfinalexam")
.then(
    console.log("DB CONNECTERD")
)