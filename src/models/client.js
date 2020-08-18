const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
  
    client_id : Number, 
    name : String,
    description : String,
    phone : String,
    email : String,    
    status : {
        type: Boolean,
        default : false
    }
  });
module.exports = model("Store", UserSchema);