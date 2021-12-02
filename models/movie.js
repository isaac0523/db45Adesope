const mongoose = require("mongoose") 
const movieSchema = new mongoose.Schema({ 
 name: {type:String, required:true},
 length: {type:Number, min:60}, 
 director: String 
}) 
 
module.exports = mongoose.model("movie", 
movieSchema) 