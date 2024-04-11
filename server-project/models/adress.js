const mongoose=require("mongoose")
const adress = mongoose.Schema({
    nombre_pais:{
        type:String,
        require:true
    },
    departamento:{
        type:String,
        require:true
    },
    municipio:{
        type:String,
        require:true
    },
    nomenclatura:{
        type:String,
        require:true
    },
    direccion_activa:{
        type:Boolean,
        default:false
    },
    avatar:{
        type:String
    },
    role:{
        type:String,
        default:"user"
    }
})
const User = mongoose.model("adressColection", adress)

module.exports = User