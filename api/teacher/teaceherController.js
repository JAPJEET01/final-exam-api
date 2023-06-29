const teacher = require("./teacherMoldel")
const User = require("../user/usermodel")
const bcrypt = require("bcrypt")

exports.addtec=(req,res)=>{

    User.findOne({email:req.body.email})
    .then(data=>{
        if(data != null){
            res.json({
                status:400,
                success: false,
                message: "Teacher Already Exist"
            })
        }
        else{
            let tecObj = new teacher()
            tecObj.name = req.body.name,
            tecObj.email = req.body.email,
            tecObj.age = req.body.age,
            tecObj.phone = req.body.phone,
            tecObj.save()
            .then(udata=>{
                let uobj = new User()
                uobj.name = udata.name,
                uobj.email = udata.email,
                uobj.password = bcrypt.hashSync( req.body.password, 10 ),
                uobj.userType = 2
                uobj.teacherId = udata._id
                uobj.save()
                .then(usedata=>{
                    
                    res.json({
                        status:200,
                        success: true,
                        message: "Teacher Added Successfully",
                        data:udata,
                        userdata : usedata
                    })

                })
            })


        }
    })

}
