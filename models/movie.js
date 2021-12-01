const mongoose = require("mongoose") 
const movieSchema = new mongoose.Schema({ 
 name: String,
 length: Number, 
 director: String 
}) 
 
module.exports = mongoose.model("movie", 
movieSchema) 