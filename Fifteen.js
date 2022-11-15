let getMsg = true; // there will be no output if getMsg is false
let prom = new Promise(function (resolve, reject) {
setTimeout(function () {
if(getMsg)
return resolve("Promise resolved")
else
return reject("Promise Rejected")
}, 1000); 
});
async function myFunction(){
let result = await prom; 
//result will wait until it gets resolved
console.log(result);
setTimeout(()=>console.log('hello'),1000);
}

myFunction();