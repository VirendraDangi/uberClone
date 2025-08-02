const userModel = require("../models/user.models")


const createUser = async({
    firstname , lastname , email , password
})=>{
    if(!firstname  || !email || !password){
        throw new Error("all fiels are required")
    }
    const user = await userModel.create({
        fullname : {
            firstname ,lastname
        },
        email ,
        password
    })
    return user
}

module.exports = createUser ;