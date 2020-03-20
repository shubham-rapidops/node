function email (mail){
  let split= mail.split("@");
  let prefix = split[0]
  let mid=prefix.length/2;
  let sufix = split[1];



  return prefix.substring(0,(prefix.length - mid )) + "****" + prefix.charAt(prefix.length-1) + "@" + sufix
}

console.log(email("shubham.muley@rapidops.com"));
