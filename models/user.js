var mongoose= require('mongoose');
var bcrypt = require('bcrypt');

var schema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    createdAt: {type:Date, required:true}, 
    bio:{type:String, required:true},
    type:{type:String, required:true},
    iframe:{type:String},
    sharableLink:{type:String},
    registration:{type:String},

})

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedPasssword){
    return bcrypt.compareSync(hashedPasssword, this.password);
}

module.exports = mongoose.model('User',schema)