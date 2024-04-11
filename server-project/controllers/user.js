const UserModel = require("../models/user")

const createUser=async(req, res)=>{

try{
   const{user_name,lastname,email,password} =req.body
   const user=new UserModel({
      user_name,
      lastname,
      email,
      password,
   })
    const newUser = await new user.save()
    res.status(201).json(newUser)
 }catch(error){
    res.status(500).json({error:"Something wrong"})

 }
}

module.exports = {createUser};
