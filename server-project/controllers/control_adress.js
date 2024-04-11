const adress_user=require("../models/adress")
const createAdress=async(req,res)=>{

    try{
        const{nombre_pais,departamento,municipio,nomenclatura,direccion_activa,role}=req.body

        const avatar=req.file ? req.file.filename : null
        console.log(avatar)
        const adrres=new adress_user({
            nombre_pais,
            departamento,
            municipio,
            nomenclatura,
            direccion_activa,
            role,
            avatar
        })
        const new_adress=await adrres.save()
        res.status(201).json(new_adress)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

const getListUsers = async(req,res)=>{
    try{
       console.log("listar usuarios")
       const users=await adress_user.find();
       res.status(200).json(users)
    }
    catch(error){
       res.status(400).json({message:error.message})
    }
 
 }
 
 const getUserById=async(req,res)=>{
    try{
        const {id} =req.params
        const adress = await adress_user.findById(id)
       console.log(`Consultar Usuario por id: ${id}`)
       res.status(200).json(adress)
    }catch(error){
       res.status(400).json({message:error.message})
    }
 
 }

const editAdress=async(req,res)=>{
    try{
        const {id} =req.params
        const{nombre_pais,departamento,municipio,nomenclatura,direccion_activa}=req.body
        //Findbyanyupdate recibe 3 parametor el id del usuario  aeditar los datos a editar y un objerto con la propiedad new : ttrue
        console.log(`editar Usuario por id: ${id} ${req.body.nombre_pais}`)
        const adress=await adress_user.findByIdAndUpdate(
            id,
            {nombre_pais,departamento,municipio,nomenclatura,direccion_activa},
            {new : true}
        )
    }catch(error){
       res.status(400).json({message:error.message})
    }
}

const deleteAdress=async(req,res)=>{
    try{
        const {id}=req.params
        await adress_user.findByIdAndDelete(id)
        res.status(200).json({message:"Superheroele"})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
module.exports={createAdress, getListUsers, getUserById,editAdress,deleteAdress}