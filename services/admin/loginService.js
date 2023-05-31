const adminLoginRepository=require("../../repository/admin/loginRepository")


const adminLogin=async(body)=>{
   const conditionEmail={email:body.email}
   const updateInfo={isLogin:true}
   const responseData=await adminLoginRepository.updateLogin(conditionEmail,updateInfo)
   return responseData
}
module.exports={adminLogin}