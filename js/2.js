let num = 124526028

let arr = num.toString();

let result = [arr[0]];

for(let x=1; x<arr.length; x++)
  {
    if((arr[x-1]%2 === 0)&&(arr[x]%2 === 0))
     {
      result.push('-', arr[x]);
     }
    else
     {
      result.push(arr[x]);
     }
  }
console.log(result.join(''));
