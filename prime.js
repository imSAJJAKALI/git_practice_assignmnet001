
function prime_check(num){
let count=0;
for(let i=0; i<=num; i++){
  if(num%i==0){
    count++
  }
}
if(count==2){
   return true;
   }else{
   return false;
}
}
let print=prime_check(17)
console.log(print)
