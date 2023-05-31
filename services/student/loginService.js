const studentLoginRepository=require("../../repository/student/loginRepository")


const studentLogin=async(body)=>{
   const condition={class:body.class}
   const conditionEmail={email:body.email}
   const updateInfo={isLogin:true}
   const responseData=await studentLoginRepository.updateLogin(condition,conditionEmail,updateInfo)
   if(responseData.status==true){
   return responseData
   }
   else
   {
      return{status:false,data:"failed in login"}
   }
}
module.exports={studentLogin}