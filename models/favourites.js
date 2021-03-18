var mongoose= require('mongoose');

var schema = new mongoose.Schema({
    id: {type:String, required:true},
    title:{type:String, required:true},
    image:{type:String, required:true},
    userid:{type:String, required:true},
    
})

module.exports = mongoose.model('Favourites',schema)
