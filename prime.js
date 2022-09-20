
function prime(num){
let count=0;
for(let i=0; i<=num; i++){
  if(num%i==0){
    count++
  }
}
if(count==2){
   console.log("prime")
   }else{
   console.log("not prime")
}
}

prime(num);
