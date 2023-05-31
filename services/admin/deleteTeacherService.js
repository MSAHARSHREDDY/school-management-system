const deleteTeacherRepository = require("../../repository/admin/deleteTeacherRepository");

const deleteTeacher = async (body) => {
  const condition = {
    _id: body.teacherId,
  };
  const updateInfo = {
    deletedAt: new Date(),
  };
  const responseData = await deleteTeacherRepository.deleteTeacher(
    condition,
    updateInfo
  );
  if (responseData.status) {
    return responseData;
  } else {
    return { status: false, data: "failed" };
  }
};
module.exports = { deleteTeacher };
