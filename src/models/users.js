const { Schema, model } = require("mongoose");
//const { Mongoose } = require('mongoose');




const UserSchema = new Schema({
  
    name : String,
    lastName : String,
    email : String,
    password : String,
    typeUser : String, 
    status : {
        type: Boolean,
        default : false
    }
  });
module.exports = model("User", UserSchema);//mongoose.model ('User',  UserSchema);