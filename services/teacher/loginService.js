const loginRepository=require("../../repository/teacher/loginRepository")


const teacherLogin=async(body)=>{
   const conditionEmail={email:body.email}
   const updateInfo={isLogin:true}
   const responseData=await loginRepository.updateLogin(conditionEmail,updateInfo)
   return responseData
}
module.exports={teacherLogin}