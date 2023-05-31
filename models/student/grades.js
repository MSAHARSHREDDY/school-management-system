const mongoose=require('mongoose');
const gradeSchema=new mongoose.Schema({
    start:{
        type:Number,
        required:true
    },
    end:{
        type:Number,
        required:true
    },
    grade:{
        type:String,
        required:true
    }
})
module.exports={gradeSchema}