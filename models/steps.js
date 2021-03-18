var mongoose= require('mongoose');

var schema = new mongoose.Schema({
    steps: {type:Number, required:true, default:0},
    userid:{type:String, required:true},
    username:{type:String, required:true},
    date:{type:Date, required:true}
})

module.exports = mongoose.model('Steps',schema)
