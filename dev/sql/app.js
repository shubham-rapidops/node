const express = require('express');
const mysql = require('mysql')
const Joi =  require('joi');


const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'shubham',
    password: 'rapid@456',
    database: 'nodesql'
});

db.connect((err)=>{
    if(err){
        console.log(err);     
         return;
    }
     console.log('connected...');
     
})

app.get('/createdb',(req,res)=>{
    let sql='CREATE DATABASE nodesql1';
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
        
    })
})

app.get('/createtable',(req,res)=>{
    let sql='create table posts(id int AUTO_INCREMENT primary key, title varchar(200),body varchar(200))  ';
    //let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);       
    })
})

app.get('/insert/:post/:body',(req,res)=>{
    let post={title: req.params.post ,body:req.params.body}
    let sql ='insert into posts set ?';
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err
        console.log(result); 
        res.send(`Post title --> ${post.title} <br> and Body --> ${post.body}`)
        
    })
})



app.get('/getpost/:id',(req,res)=>{

    

    let sql = `select * from posts where id=${req.params.id}`;
    let query = db.query(sql,(err,result)=>{
        if(err) throw err
        console.log(result); 
        res.send(result)
        
    })
})

app.get("/update/:id/:post",(req,res)=>{
   
    let sql =`update posts set title = "${req.params.post} "where id=${req.params.id}`
    let query = db.query(sql,(err,result)=>{
        if(err) throw err
        console.log(result); 
        res.send(result)
        
    })
})

app.post('/insert',(req,res)=>{
  
    let post={title: req.body.post ,body: req.body.body}
    let sql ='insert into posts set ?';
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err
        console.log(result); 
        res.send(`Post title --> ${post.title} <br> and Body --> ${post.body}`)
        
    }) 
})



app.put("/update/:id",(req,res)=>{
    
    
    let sql =`update posts set title = "${req.body.post} "where id=${req.params.id}`
    let query = db.query(sql,(err,result)=>{
        if(err) throw err
        console.log(result); 
        res.send(result)
        
    })
})

app.listen(3000,()=>console.log('started'));




