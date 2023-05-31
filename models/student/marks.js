const mongoose=require('mongoose');
const marksSchema=new mongoose.Schema({
    telugu:{
        type: Number,
        required:true
    },
    hindi:{
        type: Number,
        required:true
    },
    english:{
        type: Number,
        required:true
    },
    math:{
        type: Number,
        required:true
    },
    science:{
        type: Number,
        required:true
    },
    total:{
        type:Number,
        default: null,
    },
    average:{
        type:Number,
        default: null,
    },
    grade:{
        type:String,
        default: null,
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
       
    }
    

})
module.exports={marksSchema}