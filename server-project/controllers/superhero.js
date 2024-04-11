const SuperHeroModel = require("../models/superheroe")

const createSuperhero=async(req,res)=>{
try{
    const{superhero_name,superpowers, isAlive} = req.body
    const newSuperHero=new SuperHeroModel({
        superhero_name,
        superpowers,
        isAlive,
    })
    const superheroSaved=await newSuperHero.save()
    req.status(201).json(newSuperHero)
    console.log()
}   
catch(error){
    res.status(500).json({message:error.message})
}

}
module.exports={createSuperhero}