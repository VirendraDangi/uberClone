const captainModel = require("../models/captain.models") ;

const createCaptain = async ({
    firstname ,lastname ,email , password , color , plate , capacity ,vehicleType
})=>{
   if(!firstname || !email || !password || !capacity || !color || !vehicleType || !plate){
    throw new Error("all field are required");
    
   }

   const captain = captainModel.create({
    fullname : {
        firstname , lastname
    } ,
    email ,
    password ,
    vehicle : {
        capacity ,
        color ,
        plate ,
        vehicleType
    }
   })
   return captain
}

module.exports = createCaptain