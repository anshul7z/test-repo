const fs = require ("fs");

function anshulReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve(data);
        });
    });
}

function onDone(data){
    console.log(data);
}

const a=anshulReadFile();
console.log(a);
a.then(onDone);
console.log("outside");