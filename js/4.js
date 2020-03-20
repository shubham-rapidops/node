function shuffle(array){

  let len =array.length ,temp ,index;

  while(len>0){

  index = Math.floor(Math.random() * len);

  len --;

  temp=array[len];
  array[len]= array[index];
  array[index]= temp
 }

 return array;

}

let array = [1,2,3,4,5,6,7]
console.log(shuffle(array));
