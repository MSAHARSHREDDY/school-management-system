const changePasswordRepository = require("../../repository/student/changePasswordRepository")

const bcrypt=require("bcrypt")
 const changePassword=async(body)=>{
    const hashPassword=await bcrypt.hash(body.password,10)
    const condition={class:body.class}
    const emailCondition={email:body.email}
    const updateInfo={password:hashPassword,passwordChange:true}
    var responseData=await changePasswordRepository.changePassword(condition,emailCondition,updateInfo)
    if(responseData.status)
    {
        return responseData
    }
    else
    {
        return failed
    }
}
module.exports={changePassword}