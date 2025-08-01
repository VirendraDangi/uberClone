const jwt = require("jsonwebtoken")
const userModel = require("../models/user.models")
const blackListToken = require("../models/blacklistToken.models")
 
 const authMiddleware = async (req,res,next) => {
     
     
 

      const token = req.cookies.token
      
       console.log(token);
       

    if(!token){
        return res.status(401).json({message : "unAuthorised user"})
    } 
 
    isBlacklist = await userModel.find({token : token})
            
     if(!isBlacklist){
        return res.status(401).json({message : "unauthorised user"})
     }

     try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
          const user = await userModel.findById({
            _id : decode._id
          })  
  
           req.user = user

           return next() ;
           
     } catch (error) {
         
       res.status(401).json({
        message : "unAuthorised user"
       })
     }
     

 }


 module.exports = authMiddleware