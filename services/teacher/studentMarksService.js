const studentMarksRepository=require("../../repository/teacher/studentMarksRepository")
const gradesRepository=require("../../repository/teacher/gradeRepository")

// const studentMarks=async(body)=>{
//     const condition={class:body.class}
//     // let totalMarks = 0;
//     for(i=0;i<body.marksData.length;i++)
//     {
       
//         var studentMarksInfo={
//             studentId:body.marksData[i].studentId,
//             telugu:body.marksData[i].telugu,
//             hindi:body.marksData[i].hindi,
//             english:body.marksData[i].english,
//             math:body.marksData[i].math,
//             science:body.marksData[i].science,
//         }
//         var responseData=await studentMarksRepository.studentMarks(condition,studentMarksInfo)
//         const totalMarks=responseData.data.telugu+responseData.data.hindi+responseData.data.english+responseData.data.math+responseData.data.science
//         console.log(totalMarks)
//         const average=totalMarks/5
//         const averageInfo=Math.floor(average)
//         console.log(averageInfo)
//         const conditionId={_id:responseData.data._id}
//         const updateInfo={total:totalMarks,average:averageInfo}
//         const studentMarks=await studentMarksRepository.update(condition,conditionId,updateInfo)

//         const findAverage=async(averageInfo)=>{
//             const responseData=await gradesRepository.findAverage(averageInfo)
//             console.log(responseData)
//             const updateGrade={grade:responseData.data[0].grade}
//             const studentMarks=await studentMarksRepository.update(condition,conditionId,updateGrade)
//         }
//         findAverage(averageInfo)
   
//     }
//     return responseData
// }


const studentMarks=async(body)=>{
    const condition={class:body.class}
    for(i=0;i<body.marksData.length;i++)
    {
        var studentMarksInfo={
            studentId:body.marksData[i].studentId,
            telugu:body.marksData[i].telugu,
            hindi:body.marksData[i].hindi,
            english:body.marksData[i].english,
            math:body.marksData[i].math,
            science:body.marksData[i].science,
        }
        var responseData=await studentMarksRepository.studentMarks(condition,studentMarksInfo)
        const totalMarks=responseData.data.telugu+responseData.data.hindi+responseData.data.english+responseData.data.math+responseData.data.science
        // console.log(totalMarks)
        const average=totalMarks/5
        const averageInfo=Math.floor(average)
        // console.log(averageInfo)
        const conditionId={_id:responseData.data._id}
        const updateInfo={total:totalMarks,average:averageInfo}

        await updateInformation(condition,conditionId,updateInfo)
        const gradeInfo=await findAverage(averageInfo)
        const updateGrade={grade:gradeInfo.data[0].grade}
       await updateInformation(condition,conditionId,updateGrade)
    }
    return responseData
}

    const findAverage=async(averageInfo)=>{
        const responseData=await gradesRepository.findAverage(averageInfo)
        return responseData
    }

    const updateInformation=async(condition,conditionId,updateInfo)=>{
        const responseData=await studentMarksRepository.update(condition,conditionId,updateInfo)
        return responseData
    }


module.exports={studentMarks}