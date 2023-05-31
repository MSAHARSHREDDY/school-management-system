const updateProfileRepository=require("../../repository/student/updateProfileRepository")

const updateProfile=async(body)=>{
  
    const condition={class:body.class,_id:body._id}
    const updateInfo={
        name:body.name,
        email:body.email,
        mobile:body.mobile,
        updatedAt:new Date()
    }
    var responseData=await updateProfileRepository.updateProfile(condition,updateInfo)
    if(responseData.status)
    {
        return{responseData}
    }
    else
    {
        return{status:false,data:"failed to update"}
    }
}
module.exports={updateProfile}