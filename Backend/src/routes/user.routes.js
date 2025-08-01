const express = require("express") ;
const {body} = require("express-validator");
const { loginController, registerController, profileController, logoutController } = require("../controllers/user.controllers");
const authMiddleware = require("../middlewares/auth.middlewares")


const router = express.Router() 

 router.post("/register",[
    body("email").isEmail().withMessage("invalid email") ,
    body("fullname.firstname").isLength({min:3}).withMessage("first name must be 3 character long") ,
    body("password").isLength({min : 6}).withMessage("password must be atleast 6 character long")
 ],registerController)

 router.post("/login" , [
body("email").isEmail().withMessage("invalid email") ,
   body("password").isLength({min: 6}).withMessage("password must be atleast 6 character long")
 ],loginController)


 router.get("/profile" , authMiddleware ,profileController) 

 router.get("/logout",authMiddleware,logoutController)


module.exports = router