const mongoose = require("mongoose")

const userModel=mongoose.Schema({
    user_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})
const User = mongoose.model("UserCollection", userModel)

module.exports = User