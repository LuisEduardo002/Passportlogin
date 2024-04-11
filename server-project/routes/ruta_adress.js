const multer = require("multer")
const adress=require("../controllers/control_adress")
const express=require("express")
const route=express.Router()
route.post("/new_adress",adress.createAdress)
route.get("/",adress.getListUsers)
route.get("/:id",adress.getUserById)
route.patch("/:id",adress.editAdress)
route.delete("/:id",adress.deleteAdress)

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "../uploads")
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    },
})
const upload = multer({storage})
route.post("/new_adress",upload.single("avatar"), adress.createAdress)
module.exports=route