const mongoose = require('mongoose');
async function connection(){
    try{
        let connection = await mongoose.connect('mongodb://localhost:27017/batch-2');
        console.log("Database is connected")
    }catch(err){
        console.log(err.message,'msg..')
    }

}
module.exports = connection