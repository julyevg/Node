const { Schema, model } = require("mongoose");

const StoreSchema = new Schema({
    store_id : Number,
    name : String,
    address : String,
    description : String,
    phone : String,
    email : String,   
    schedule : String,
    client : Number, 
    status : {
        type: Boolean,
        default : false
    }
  });
module.exports = model("Store", UserSchema);