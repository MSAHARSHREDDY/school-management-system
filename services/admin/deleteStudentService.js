const deleteStudentRepository = require("../../repository/admin/deleteStudentRepository")

const deleteStudent=async(body)=>{
    const condition={
        class:body.class,
        _id:body.studentId,
    }
    const updateInfo={
       
        deletedAt:new Date(),
    }
    const responseData=await deleteStudentRepository.deleteStudent(condition,updateInfo)
    return responseData
}
module.exports={deleteStudent}