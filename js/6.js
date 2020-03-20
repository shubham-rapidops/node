
function num_string_range(start , end ,incre){

  let range = [];
  if (end < start) {
       incre = -incre;
   }

  if(typeof start == "string"){
    start = start.charCodeAt(0);
    end = end.charCodeAt(0);

      while (incre > 0 ? end >= start : end <= start) {
              range.push(String.fromCharCode(start));
              start += incre;
          }
  }
  if (typeof start == "number") {

          while (incre > 0 ? end >= start : end <= start) {
              range.push(start);
              start += incre;
          }
        }
        return range;
}

console.log(num_string_range('a', "z", 2));
console.log(num_string_range(1,50, 5));
