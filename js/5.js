function union(arr1,arr2){
  if(arr1==null || arr2==null)
   return void 0;

  let obj = {};

  for (let i = 0; i<=  arr1.length-1;i++)
  {
    obj[arr1[i]] = arr1[i];

  }
  for (let i = 0; i<= arr2.length-1 ;i++)
  {
    obj[arr2[i]] = arr2[i];

  }

 let result = [] ;

for (var key  in obj){
  if (obj.hasOwnProperty(key))
  result.push(key)
}
  return result;
}

function diff( arr1 ,arr2){
  let temp=[];


 arr1 = arr1.toString().split(',').map(Number);
 arr2 = arr2.toString().split(',').map(Number);


 for (let i in arr1) {
   if(arr2.indexOf(arr1[i]) === -1){
    temp.push(arr1[i]);
   }
 }

 for(let i in arr2) {
   if(arr1.indexOf(arr2[i]) === -1) {
     temp.push(arr2[i]);
   }
 }

  return temp;
}

let arr1 = [1,2,3,4]
let arr2 = [2,5,1,3,4,6,45]

console.log(union(arr1,arr2));

console.log(diff(arr1,arr2));
