const express = require('express');

const app = express();


app.use((req,res,next)=>{
    return next();
})

app.get('/hello',(req,res,next)=>{
    return res.send("<h1> Hello stranger </h1>")
})
app.get('/hello/:name',(req,res,next)=>{
    // return res.send(`<h1> Hello ${req.param.name} </h1>`)
    const {name} = req.params;
        
    if(name.toLowerCase()== 'abcd'){
        return next(new Error("<h1> CANNOT PRINT THIS NAME</h1>"))
    }
    return res.send(`<h1> Hello ${name.toUpperCase()} </h1>`)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    return res.send(err.message)
});

app.listen(3000)