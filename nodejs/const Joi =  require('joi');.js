const Joi =  require('joi');
const express = require('express');
const app = express();




app.use(express.json());
app.set("view engine",'ejs');

const course = [
    {id:1, name:"course1"},
    {id:2, name:"course2"},
    {id:3, name:"course3"},
]

///   GET request  GET DATA

app.get('/gmail',(req,res) => {
    res.redirect("https://www.gmail.co.in/");  //redirect
});


app.get('/',(req,res) => {
    res.send('hello world')
});

app.get('/api/courses',(req,res) => {
    res.send( course)
});

app.get('/api/courses/:id',(req,res) => {
   let c = course.find(c=> c.id === parseInt(req.params.id))
    if(!c) return res.status(404).send('Given id not found')
    res.send(c)
});

app.get('/api/:year/:month',(req,res) => {
   // res.send( req.params);
    res.send( req.query);    
});


////     POST request  ADD DATA

app.post('/api/courses',(req, res) =>{

    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
       
   
   
    const c = {
        id: course.length + 1,
        name: req.body.name 
    };

    course.push(c);
    res.send(course)
});


// PUT request  Update data
app.put('/api/courses/:id',(req, res) => {

    let c = course.find(c=> c.id === parseInt(req.params.id))
    if(!c) return res.status(404).send('Given id not found');

    // const result = validate(req.body)
    
    const { error } = validate(req.body);
    if(error)return res.status(400).send(error.details[0].message)
      

    c.name = req.body.name;
    res.send(c);
    

    
    
});


// HTTP DELETE REQUEST 

app.delete('/api/courses/:id',(req, res) => {

    let c = course.find(c=> c.id === parseInt(req.params.id))
    if(!c) return res.status(404).send('Given id not found');

    let index = course.indexOf(c);
    course.splice(index,1)
    res.send(c);
    

    
    
});



function validate( course){
    const schema={
        name:Joi.string().min(3).required()
    };
    
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;

app.listen(port , () => { console.log(`listening at ${port}`);
});