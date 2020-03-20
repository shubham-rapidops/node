const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log('Connected..'))
.catch((err)=>console.log(err))

const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tag:[String],
    date: {type:Date, default:Date.now},
    isPublish:Boolean
});

const Course = mongoose.model('Course', courseSchema)
const course = new Course({
    name:'my.js',
    author:'me',
    tag:['node','backend'],
    isPublish:true
})

async function create(){
    const result = await course.save();
    console.log(result);

}



async function getCourse(){
 
   const courses = await Course .find();
   console.log(courses);
   
}

getCourse();