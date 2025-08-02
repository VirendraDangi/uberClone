const express = require("express") ;
const {body} = require("express-validator");
const { authCaptainMiddleware } = require("../middlewares/auth.middlewares");
const { profileController, registerController, loginController, logoutController } = require("../controllers/captain.conrollers");

const router = express.Router() 

router.post("/register",[
    body("email").isEmail().withMessage("invalid email") ,
    body("fullname.firstname").isLength({min:3}).withMessage("firstname must be atleast 3 character long") ,
    body("password").isLength({min:6}).withMessage("password must be atleast 6 character long") ,
   body("vehicle.color").isLength({min:3}).withMessage("color must be atleast 3 character long") ,
   body("vehicle.plate").isLength({min:3}).withMessage("plate must be 3 character long") ,
   body("vehicle.capacity").isInt({min:1}).withMessage("capacity must be atleast 1") ,
   body("vehicle.vehicleType").isInt(["car","bike","auto"]).withMessage("invalid vehicle")
],registerController)

router.post("/login",[
    body("email").isEmail().withMessage("invalid email") ,
    body("password").isLength({min:6}).withMessage("password must be atleast 6 character long")
] , loginController)

 
router.get("/profile", authCaptainMiddleware,profileController)

router.get("/logout",authCaptainMiddleware,logoutController)

module.exports = router