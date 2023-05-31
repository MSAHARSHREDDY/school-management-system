const changePasswordRepository = require("../../repository/teacher/changePasswordRepository")

const bcrypt=require("bcrypt")
 const changePassword=async(body)=>{
    const hashPassword=await bcrypt.hash(body.password,10)
    const emailCondition={email:body.email}
    const updateInfo={password:hashPassword,passwordChange:true}
    var responseData=await changePasswordRepository.changePassword(emailCondition,updateInfo)
    if(responseData.status)
    {
        return responseData
    }
}
module.exports={changePassword}