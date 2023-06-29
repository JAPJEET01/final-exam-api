const mongoose = require("mongoose")
const USchema = new mongoose.Schema({
    name:{type:String, default:""},
    email:{type:String, default:""},
    password:{type:String, default:""},
    userType:{type:Number, default:1}, // 1= sudent , 2 = teacher , 0 = admin
    teacherId:{type: mongoose.Types.ObjectId , default:null , ref:"teacher"},
    studentId:{type: mongoose.Types.ObjectId , default:null , ref:"student"},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()},
})
module.exports= new mongoose.model("user",USchema)