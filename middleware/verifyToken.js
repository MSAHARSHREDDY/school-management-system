const jwt=require("jsonwebtoken")

const studentVerifyToken=(req,res,next)=>{
    const token=req.headers["authorization"]
    const studentSecretKey=process.env.studentSecretKey
    if(token)
    {
        jwt.verify(token,studentSecretKey,(err,decoded)=>{
            if(err)
            {
                res.send({"status":"400","message":"token expired please login again"})
            }
            else
            {
                //console.log('JWT verification successful:', decoded);
                req.body._id = decoded._idInfo;
                req.body.class=decoded.classInfo
                req.body.email=decoded.emailInfo
                next()
            }
        })
    }
    else
    {
        res.send({"status":"400","message":"token is missing in headers"})
    }
}

const teacherVerifyToken=(req,res,next)=>{
    const token=req.headers["authorization"]
    const teacherSecretKey=process.env.teacherSecretKey
    if(token)
    {
        jwt.verify(token,teacherSecretKey,(err,decoded)=>{
            if(err)
            {
                res.send({"status":"400","message":"token expired please login again"})
            }
            else
            {
                //console.log('JWT verification successful:', decoded);
                req.body._id = decoded._idInfo;
                req.body.email=decoded.emailInfo
                next()
            }
        })
    }
    else
    {
        res.send({"status":"400","message":"token is missing in headers"})
    }
}

const adminVerifyToken=(req,res,next)=>{
    const token=req.headers["authorization"]
    const adminSecretKey=process.env.adminSecretKey
    if(token)
    {
        jwt.verify(token,adminSecretKey,(err,decoded)=>{
            if(err)
            {
                res.send({"status":"400","message":"token expired please login again"})
            }
            else
            {
                //console.log('JWT verification successful:', decoded);
                req.body._id = decoded._idInfo;
                req.body.email=decoded.emailInfo
                next()
            }
        })
    }
    else
    {
        res.send({"status":"400","message":"token is missing in headers"})
    }
}
module.exports={studentVerifyToken,teacherVerifyToken,adminVerifyToken}