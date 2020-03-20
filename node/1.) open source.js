// 1.) open source
// 2.) it is based on chrome v8
// 3.) allows js program to run on server
// 4.) came at 2009

// console.log('Step: 1')

// setTimeout(function () {
//  console.log('Step: 3')
// }, 1000)

// console.log('Step: 2')
// console.log('Step: 2')
// console.log('Step: 2')

// console.log("1");
// let date1= new Date().getTime();
// for(let i=0;i<10000000000;i++){
    
// }
// let date2= new Date().getTime();

// console.log(date2-date1);



// const fs = require('fs');

// var content = fs.readFileSync('/home/shubham/1.txt','utf8');

// console.log(content);
// console.log('hrllo \n');

// var content =fs.readFileSync('/home/shubham/11.txt','utf8');
// console.log(content);
// console.log('hello');



// const fs = require('fs');

// fs.readFile('/home/shubham/121.txt','utf8',(err,data)=>{
//     if(err){
//         // console.log(err);  
//         return;      
//     }
//     console.log(data);
    
// })
// fs.readFile('/home/shubham/1.txt','utf8',(err,data)=>{
//     if(err){
//         // console.log(err);  
//         return;      
//     }
//     console.log(data);
    
// })

// console.log(__filename);












process.stdin.resume();
process.stdin.setEncoding('utf8');

// process.stdin.on('data',(chunk)=>{
//     console.log('chunk:',chunk);
    
// })
// process.stdin.on('end',()=>{
//     console.log('-----end-----');
    
// })
process.stdout.write('A simple message\n')