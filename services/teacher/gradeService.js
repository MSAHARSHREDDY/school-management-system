const gradeRepository=require("../../repository/teacher/gradeRepository")

const grade=async(body)=>{
    for(i=0;i<body.gradesInfo.length;i++){
    var gradeData={
        start:body.gradesInfo[i].start,
        end:body.gradesInfo[i].end,
        grade:body.gradesInfo[i].grade
    }
    var responseData=await gradeRepository.grade(gradeData)
}
   
    return responseData
}
module.exports={grade}