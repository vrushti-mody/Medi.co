var mongoose= require('mongoose');

var schema = new mongoose.Schema({
    doctorname: {type:String, required:true},
    doctorid:{type:String, required:true},
    userid:{type:String, required:true},
    username:{type:String, required:true},
    date:{type:Date, required:true},
    time:{type:String, required: true},
    status:{type:String, required: true},
    code:{type:String, required: true}
})

module.exports = mongoose.model('Book',schema)
