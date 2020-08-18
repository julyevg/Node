const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    user_id : Number,
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
module.exports = model("User", UserSchema);