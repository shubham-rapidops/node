let arr = [
  {name:'abc',
   sport:['chess','cricket']},

  {name:'bcd',
  sport:['football','cricket']},

  {name:'xyz',
   sport:['tt','football','ludo']},

   {name:'sad',
   sport:['taf','cricket']}
]

 let obj1=[];
 let sports=[];

for(let i of arr){
  for(let j of i.sport){
    if(!sports.includes(j)){
      sports.push(j)
    }
  }
}
  
  
  for(let j of sports){
    let obj ={      
    }
    obj[j]=[]
    obj1.push(obj);
  }

 
  for(let i of arr){
    for(let j of obj1){
      let key = Object.keys(j)
      if(i.sport.includes(key[0])){
        if(j[key[0]]){
          j[key[0]].push(i.name)
        }        
      }
    }
  }


console.log(obj1);

// for(let i of arr){
//   if(i.sport.includes('chess')){
//     obj1.chess.push(i.name)
//   }
//   if(i.sport.includes('cricket')){
//     obj2.cricket.push(i.name)
//   }
//   if(i.sport.includes('football')){
//     obj3.football.push(i.name)
//   }
//   if(i.sport.includes('tt')){
//     obj4.tt.push(i.name)
//   }
  
// }


// console.log([obj1 , obj2, obj3,obj4]);


function itrate(obj){

  for(let key in obj){
     document.write("<ul>")

if(typeof obj[key] === 'object'){
 document.write("<li>"+ key + "--></li>")
 itrate(obj[key])
 
}
else{
  document.write("<li>"+ key + "-->"+obj[key]+"</li>")
  
}
document.write("</ul>")
  }
}

// for(let i of obj1){
//   itrate(i)
// }
itrate(obj1)