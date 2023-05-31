const dashBoardRepository=require("../../repository/student/dashboardRepository")

const studentDashBoard=async(body)=>{
    const condition={_id:body._id,class:body.class}
    const responseData=await dashBoardRepository.studentDashBoard(condition)
    if(responseData.status)
    {
        return responseData
    }
    else
    {
        return{status:false,data:"cannot fetch your details"}
    }
    
}
module.exports={studentDashBoard}