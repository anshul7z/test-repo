function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function compute(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}

//regular callback
console.log(compute(1,4,cube));

//anaonmous function
console.log(compute(1,2,(a)=>{
    return a*a;
}));