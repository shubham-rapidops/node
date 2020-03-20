                            ASYNC FUNCTIONS


console.log('before');
getUser(1,(user)=>{
    console.log(user);
    getRepo(user.name,(repo)=>{
        console.log(repo);
        
    })
    // console.log(`user --> ${user.name} , repos--> ${getRepo(user.name)}`);
    
});


console.log('aftre');

function getUser(id ,callback){
    setTimeout(()=>{
        console.log('reading .....');
        callback({id:id , name:'shubham'})
    },2000)
    
}

function getRepo(username, callback){
    setTimeout(()=>{
        console.log('calling ....');
        callback(['reop1','repo2', 'repo3'])
    })
    // return ['reop1','repo2', 'repo3']
}



// let p = Promise.resolve({id:1});

// p.then( result=>console.log(result));

// p = Promise.reject(Error('rejected'));
// p.catch(err=>console.log(err));


// console.log('after error');

==============================================================================

                                 PROMISE async

console.log('before');


// getUser(1,(user)=>{
//     console.log(user);
//     getRepo(user.name,(repo)=>{
//         console.log(repo);
        
//     })
//     // console.log(`user --> ${user.name} , repos--> ${getRepo(user.name)}`);
    
// });

//promise

// getUser(1)
//     .then(user=>getRepo(user.name))
//     .then(repo=>console.log(repo))

// Asyn Await 


async function display(){
    try{
        const user =await getUser(1);
        const repo = await getRepo(user.name);
        console.log(repo);
        }catch(e){
            console.log(e);
            
        }
}

display();
 


    console.log('aftre');

function getUser(id){

    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            console.log('reading .....');
            resolve({id:id , name:'shubham'})
        },2000)
        
    })
   
}

function getRepo(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('calling ....');
            resolve(['reop1','repo2', 'repo3'])
        })
    })
    // return ['reop1','repo2', 'repo3']
}







const p1 = new Promise(resolve=>{
    setTimeout(()=>{
        console.log('operation 1...');  
        resolve(1)   
    },2000)
})
const p2 = new Promise(resolve=>{
    setTimeout(()=>{
        console.log('operation 2...'); 
        resolve(2)       
    },2000)
})

// Promise.all([p1,p2])
Promise.race([p1,p2])
.then(result=>console.log(result))