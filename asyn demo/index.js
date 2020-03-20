async function display(){

    const customer = await getCustomer(1);
    // console.log(`Customer ${JSON.stringify(customer)}`);
    console.log('Customer :' ,customer);

     
    if(customer.isGold){
        const movies = await getTopMovies();
        console.log(movies);
        
        await sendEmail(customer.email,movies);
        console.log('mail sent.....');
        
     }
}

display();

function getCustomer(id){
    return new Promise((resolve ,reject)=>{
      setTimeout(()=>{
          resolve({id:1,
                   name:"shubham",
                   isGold:true,
                   email:"mail"})
      },4000);
    })
}

function getTopMovies(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['movies1','movies2'])
        },4000)
    })
}

function sendEmail(email,movies){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },4000)
    })
}



