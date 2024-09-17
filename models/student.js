const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNo : {type:Number},
    name : {type:String},
    fartherName : {type:String},
    aadharCardNumber : {type:String},
    mobileNUmber : {type:String},
})
module.exports= mongoose.model('student',StudentSchema)