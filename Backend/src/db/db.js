const mongoose = require("mongoose") 

function connectToDB(){
    mongoose.connect(process.env.MONGOOSE_URL).then(()=>{
        console.log("db is connected");  
    })
}

module.exports = connectToDB