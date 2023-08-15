const mongoose = require("mongoose")

// const certificationsSchema = mongoose.Schema({
//     course_name:String,
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
    email: String,
    phone: String,
    name: String,
    password: String,
    image: String,
    about: String,
    skills: String,
    certifications_course_name: String,
    certifications_institute: String,
    education_institute: String,
    education_duration_start: String,
    education_duration_end: String,
    experiences_years: String,
    experiences_duration_start: String,
    experiences_duration_end: String,
    experiences_job_type: String,
    experiences_industry: String,
    experiences_designation: String
})

const userModel = mongoose.models.userdata || mongoose.model("userdata",userSchema)

module.exports={
    userModel
}
