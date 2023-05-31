const dotenv=require("dotenv")
const cors=require("cors")
dotenv.config()
const express=require("express")
const studentRouter=require("./routes/studentRoutes")
const teacherRouter=require("./routes/teacherRoutes")
const adminRouter=require("./routes/adminRoutes")
const {connectDB}=require("./db/connectDB")
const swaggerUI = require('swagger-ui-express');
const studentSwaggerDocument = require('./swagger/studentSwagger.json');
const teacherSwaggerDocument = require('./swagger/teacherSwagger.json');
const adminSwaggerDocument = require('./swagger/adminSwagger.json');


const app=express()
const port=process.env.port

connectDB()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended:false }))

app.use("/student",studentRouter)

app.use("/teacher",teacherRouter)

app.use("/admin",adminRouter)

const options = {}

app.use('/student-document', swaggerUI.serveFiles(studentSwaggerDocument, options), swaggerUI.setup(studentSwaggerDocument)); // 
app.use('/teacher-document', swaggerUI.serveFiles(teacherSwaggerDocument, options), swaggerUI.setup(teacherSwaggerDocument));
app.use('/admin-document', swaggerUI.serveFiles(adminSwaggerDocument, options), swaggerUI.setup(adminSwaggerDocument));

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})