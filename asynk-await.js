const fs=require("fs");

function anshulReadFunction(filename){
    return new Promise(function(resolve){
        fs.readFile(filename,"utf-8",(err,data)=>{
            resolve(data);
        });
        setTimeout(() => {
            console.log("operation done");
        }, 1000);
    });
}

function ondone(data){
    console.log(data+"#####");
}

async function main(){
    const a = await anshulReadFunction("a.txt");
    console.log(a);
}

main();
console.log("after main");