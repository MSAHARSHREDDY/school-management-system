const dashboardService=require("../../services/admin/dashboardService")

const adminDashboard=async(req,res)=>{
    
    const responseData=await dashboardService.adminDashboard()
    res.send({"status":"200","messge":"success",total:responseData})
}
module.exports={adminDashboard}