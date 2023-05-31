const { studentSchema } = require("../../models/student/studentModel");
const mongoose = require("mongoose");

const studentRegistration = async (registration) => {
  const studentModel = await mongoose.model( `class${registration.class}`, studentSchema);
  const createdData = await studentModel.create(registration);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to create" };
  }
};

const find=async(condition)=>{
    const studentModel=await mongoose.model(`class${condition.class}`,studentSchema)
    const createdData = await studentModel.findOne(condition);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to find" };
  }

}

const updateRegistration=async(condition,conditionId, updateInfo)=>{
    const studentModel=await mongoose.model(`class${condition.class}`,studentSchema)
    const createdData = await studentModel.findByIdAndUpdate(conditionId,updateInfo);
  if (createdData) {
    return { status: true, data: createdData };
  } else {
    return { status: false, data: "failed to update" };
  }
}

const totalStudents=async(condition)=>{
  const modelName=await mongoose.model(`class${condition.class}`,studentSchema)
  const findData=await modelName.find(condition)
  if(findData.length>0)
  {
      return{status:true,data:findData}
  }
  else
  {
      return{status:false,message:"failed to fetch data"}
  }

}


const countStudents = async (modelNames, condition) => {
  const countPromises = modelNames.map(async ([modelName, value]) => {
    const studentModel = mongoose.model(value, studentSchema);
    const createdData = await studentModel.countDocuments(condition);
    return { modelName, count: createdData };
  });

  const counts = await Promise.all(countPromises);

  if (counts.length > 0) {
    return { status: true, data: counts };
  } else {
    return { status: false, data: "Failed to find any counts" };
  }
};


module.exports = { studentRegistration,find,updateRegistration,totalStudents,countStudents };
