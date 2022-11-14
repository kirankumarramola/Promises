let juice = false;

function getDetails(){
    return new Promise(function(resolve,reject){
        if(juice)
        resolve("Available")
        else 
        reject("Not Available")
    });
}
let prom = getDetails();
prom.then((x)=>{console.log(x);})
.catch(()=>{console.log("wait");setTimeout(()=>{console.log("Not Available");},3000)})
.finally(()=>{setTimeout(()=>{console.log("Thank You");},7000)});