const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    product_id: Number,
    name : String,
    description : String,
    count : String,
    price : String,
    client : Number, 
    status : {
        type: Boolean,
        default : false
    }, 
    imagen : String
  });
module.exports = model("Product", ProductSchema);