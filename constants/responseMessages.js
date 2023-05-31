const responseMessages = {
    registration:{
        nameRequired: "name is required",
        emailRequired: "email is required",
        passwordRequired: "password is required",
        mobileRequired: "phone number is required",
        emailInvalid:"email is invalid",
        mobileInvalid:"please enter valid mobile number",
        password:"password is required",
        passwordInvalid:"password should be in the combination of contains at least one digit,at least one lowercase letter,at least one uppercase letter,at least one special character,at least 8 characters long",
        emailAlreadyExists:"email already exists",
        confirmPasswordRequird:"confirm Password Requird",
        confirmPasswordNotMatching:"confirm password is not matching with password",
        mobile:"phone number is required",
        mobileInvalid:"phone number is invalid",
        mobileAlreadyExists:"mobile number Already Exists",
        emailDoesnotExists:"email Doesnot Exists",
        classNumberRequired:"classNumberRequired",
        classNumberInvalid:"classNumberInvalid",
        studentIdRequired:"studentIdRequired",
        studentIdInvalid:"studentIdInvalid",
        rollNoRequired:"rollNoRequired",
        rollNoInvalid:"rollNoInvalid",
        attendanceRequired:"attendanceRequired",
        dateRequired:"dateRequired",
        teacherIdRequired:"teacherIdRequired",
        teacherIdInvalid:"teacherIdInvalid"
    },
    verifyOtp:
    {
        emailRequired:"email required",
        otpRequired:"otp required",
        otpInvalid:"Your otp is invalid",
        emailInvalid:"Please enter valid email",
       
    },
    login:
    {
        emailRequired:"email required",
        password:"password is required",
        passwordInvalid:"password is invalid",
        emailInvalid:"Invalid email Id",
        verifyOtpLogin:"First please verify your otp and then login"
    },
    class:
    {
        classNumberRequired:"class number required",
        studentIdRequired:"student id required",
        studentIdNotExists:"student Id Not Exists"
    },
    update:{
        studentIdRequired:"student Id Required",
        studentIdNotFound:"student Id not found",
        name:"name is required"
    },
    notice:{
        noticeRequired:"notice required",
        subjectRequired:"subject required"
    },
    adminDelete:{
        idRequired:"student id required",
        idNotExists:"student Id not exists"
    },
    grade:{
        start:"start is required",
        end:"end is required",
        grade:"grade is required"
    },
    marks:{
        mark:"marks is required"
    }
}




module.exports = {responseMessages}