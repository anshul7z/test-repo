const fs=require("fs");
const { promises } = require("stream");

function anshulReadFile(filename){
    return new Promise(function(resolve){
        fs.readFile(filename,"utf-8",(err,data)=>{
            resolve(data);
        });
    });
}

function onDone(data){
    console.log(data);
}

const a = anshulReadFile("a.txt")
a.then(onDone);
console.log(a);
console.log("after a");

const b = anshulReadFile("b.txt");
b.then(onDone);
console.log(b);

setTimeout(() => {
    console.log("hi there");
}, 1000);

console.log("after b");