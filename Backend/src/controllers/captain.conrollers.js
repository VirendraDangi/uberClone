 const {validationResult, body} = require("express-validator")
 const createCaptain = require("../services/captain.services") ;
const captainModel = require("../models/captain.models");
const blacklistToken = require("../models/blacklistToken.models");

 const registerController = async (req,res) => {
      const errors = validationResult(req )
    
      if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
      }

      const{fullname , email , password , vehicle} = req.body 

       
         const isUserExist = captainModel.findOne({
            email
         })

         if(isUserExist){
            return res.status(400).json({message : "email is already registered"})
         }

       const hashPassword = await captainModel.hashPassword(password) ;

       const captain = await createCaptain({
        firstname : fullname.firstname ,
        lastname : fullname.lastname ,
        email ,
        password : hashPassword ,
        color : vehicle.color ,
        plate : vehicle.plate ,
        capacity : vehicle.capacity ,
        vehicleType : vehicle.vehicleType
       })

       const token = generateAuthToken() ;

       res.status(201).json({token,captain})
 }


 const loginController = async (req,res) => {
          const errors = validationResult(req) 
       
     if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
     }

     const {email , password } = req.body ;

       const captain = await captainModel.findOne({
        email
       }).select("+password")

       if(!captain){
        return res.status(401).json({message : "email is not registered"})
       }

     const isMatch = await captain.comparePassword(password)
  
      if(!isMatch){
        res.status(401).json({message : "invalid email and password"})
      }

       const token = captain.generateAuthToken() 

        res.cookies("token",token)

        res.status(200).json({token,captain})

 }

 const profileController = async (req,res) => {
     res.status(200).json({captain : req.captain})
 }

 const logoutController = async (req,res) => {
       const token = req.cookies.token 

       await blacklistToken.create({token})

       res.clearCookie("token")

       res.status(200).json({message : "logout sucessfully"})
 }

 module.exports = {registerController,loginController , profileController , logoutController}