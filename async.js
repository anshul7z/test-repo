function findSum(a){
    let sum=0;
    for(let i=0;i<=a;i++){
        sum+=i;
    }
    return sum;
}

function computeSum100(){
   console.log(findSum(100));
}

setTimeout(computeSum100,1);
console.log("hello world!");
let temp=0;
for(let i=0;i<100000;i++){
    temp++;
}
console.log("2n cehckpoint")