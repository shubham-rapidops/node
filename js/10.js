function diff_year(date1,date2){

  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60*24)
  return Math.abs(Math.round(diff/365.25));
}

function diff_months(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60*24*7*4);
  return Math.abs(Math.round(diff));

}
function diff_weeks(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60*24*7);
  return Math.abs(Math.round(diff));

}


function diff_days(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60*24);
  return Math.abs(Math.round(diff));

}

function diff_hours(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60*60);
  return Math.abs(Math.round(diff));

}


function diff_min(date1,date2){
  let diff = (date1.getTime() - date2.getTime())/1000;
  diff = diff/(60);
  return Math.abs(Math.round(diff));

}


let date1 = new Date("January 26 ,2016 08:50:15");
let date2 = new Date("January 26,2017 08:54:00");



console.log(diff_year(date1,date2));
console.log(diff_months(date1,date2));
console.log(diff_weeks(date1,date2));
console.log(diff_days(date1,date2));
console.log(diff_min(date1,date2));
