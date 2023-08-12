const mongoose = require("mongoose")

// const certificationsSchema = mongoose.Schema({
//     course_name:{type:String,required:true},
//     institute: {type:String,required:true}
// })

// const skillsSchema = mongoose.Schema({
//     skillName:{type:String,required:true},
// })

// const experiencesShema = mongoose.Schema({
//     years:{type:String,required:true},
//     duration_start: {type:String,required:true},
//     duration_end: {type:String,required:true},
//     job_type:{type:String,required:true},
//     industry:{type:String,required:true},
//     designation:{type:String,required:true},
// })

// const educationSchema = mongoose.Schema({
//     institute: {type:String,required:true},
//     duration_start: {type:String,required:true},
//     duration_end: {type:String,required:true},
// })

// const userSchema = mongoose.Schema({
//     image:{type:String,required:true},
//     name : {type:String,required:true},
//     email:{type:String,required:true},
//     password:{type:String,required:true},
//     phone:{type:Number,required:true},
//     about:{type:String,required:true},
//     skills:[skillsSchema],
//     certifications:[certificationsSchema],
//     experiences:[experiencesShema],
//     education : [educationSchema]
// })

const userSchema = mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    phone: {type:Date,required:true},
    image: {type:String,required:true},
    about: {type:String,required:true},
    skills: {type:String,required:true},
    certifications_course_name: {type:String,required:true},
    certifications_institute: {type:String,required:true},
    education_institute: {type:String,required:true},
    education_duration_start: {type:Date,required:true},
    education_duration_end: {type:Date,required:true},
    experiences_years: {type:String,required:true},
    experiences_duration_start: {type:Date,required:true},
    experiences_duration_end: {type:Date,required:true},
    experiences_job_type: {type:String,required:true},
    experiences_industry: {type:String,required:true},
    experiences_designation: {type:String,required:true}
})

const userModel = mongoose.model("userdata",userSchema)

module.exports={
    userModel
}
