const express =require('express');
const router = express.Router();
const Joi =  require('joi');


const course = [
    {id:1, name:"course1"},
    {id:2, name:"course2"},
    {id:3, name:"course3"},
]



router.get('/',(req,res) => {
    res.send( course)
});

router.get('/:id',(req,res) => {
   let c = course.find(c=> c.id === parseInt(req.params.id))
    if(!c) return res.status(404).send('Given id not found')
    res.send(c)
});

////     POST request  ADD DATA

router.post('/',(req, res) =>{

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

router.put('/:id',(req, res) => {

    let c = course.find(c=> c.id === parseInt(req.params.id))
    if(!c) return res.status(404).send('Given id not found');

    // const result = validate(req.body)
    
    const { error } = validate(req.body);
    if(error)return res.status(400).send(error.details[0].message)
      

    c.name = req.body.name;
    res.send(c);  
    
    
});


// HTTP DELETE REQUEST 

router.delete('/:id',(req, res) => {

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

module.exports =router;