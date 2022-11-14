let count = 0;
let start = false;
let id ="";
function CountNumbers(){
    count++
    console.log(count);
}
let prom = new Promise(function(resolve,reject){
    if(start)
    resolve();
    else
    reject();
});
prom.then(()=>{id=setInterval(CountNumbers,1000);})
.catch(()=>{clearInterval(id)})