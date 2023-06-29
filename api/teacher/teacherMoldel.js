const mongoose = require("mongoose")
const teacherSchema = new mongoose.Schema({
    name:{type:String, default:""},
    email:{type:String, default:""},
    phone:{type:Number, default:null},
    age:{type:String, default:""},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()},
})
module.exports= new mongoose.model("teacher",teacherSchema)