let arr=[1,2,5,1,2,1,2,3,4,2,3,4,1,3];
let mf = 1;
let count = 0;
let item;
for (let i=0; i<arr.length; i++)
{
        for (let j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 count++;
                if (mf<count)
                {
                  mf=count;
                  item = arr[i];
                }
        }
        count=0;
}
console.log(item+" ( " +mf +" times ) ") ;
