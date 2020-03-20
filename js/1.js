function first(array, n) {
      if (array == null)
      return void 0;
    if (n == null)
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  }

function last (array, n) {

    if (array == null)
      return void 0;
    if (n == null)
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
    };

let array=[5,4,6,2,5,7];

console.log(array);

console.log(`first element ${array[0]}`);
console.log(`last element ${array[array.length - 1 ]}`);

console.log(last(array,0));

console.log(first());
console.log(first(array, -1));
console.log(first(array , 3));
