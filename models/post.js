var mongoose= require('mongoose');

var schema = new mongoose.Schema({
    title: {type:String, required:true},
    type:{type:String, required:true},
    userid:{type:String, required:true},
    username:{type:String, required:true},
    date:{type:Date, required:true}
})

module.exports = mongoose.model('Post',schema)
