const jwt = require("jsonwebtoken")
const userModel = require("../models/user.models")
const blacklistToken = require("../models/blacklistToken.models")
const captainModel = require("../models/captain.models")
 
 const authUserMiddleware = async (req,res,next) => {
     
   const token = req.cookies.token
      
       console.log(token);
       

    if(!token){
        return res.status(401).json({message : "unAuthorised user"})
    } 
 
    isBlacklist = await blacklistToken.find({token : token})
            
     if(isBlacklist){
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


  const authCaptainMiddleware = async (req,res,next) => {
      const token = req.cookies 

      if(!token){
        return res.status(401).json({message : " unauthorised captain"})
      }

         isBlacklist = await blacklistToken.find({token : token}) 

       if(isBlacklist){
        return res.status(401).json({message : "unauthorised user"})
     } 

      try {
         const decode = jwt.verify(token,process.env.JWT_SECRET)
             const captain = captainModel.findById({
              _id : decode._id
             })

              req.captain = captain 
 
               return next()

      } catch (error) {
        res.status(401).json({
          message : "unauthorised user"
        })
      }
  }

 module.exports = {authUserMiddleware,authCaptainMiddleware}