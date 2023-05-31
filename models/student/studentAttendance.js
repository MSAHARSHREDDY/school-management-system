const mongoose=require('mongoose');
const studentAttendanceSchema=new mongoose.Schema({
    class:{
        type:Number,
        required:true
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    rollNo:{
        type:Number,
        required:true
    },
    attendance:{
        type:Boolean
    },
    date:{
        type: Date,
       default:Date.now
    }
})

module.exports={studentAttendanceSchema}