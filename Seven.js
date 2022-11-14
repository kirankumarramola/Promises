let id = ["IARC111","IARC222","333","444"]
function idChange(){
let i =0;
id.forEach(myFunction);
function myFunction(x){
    let str = x;
    if(str.match("IARC")==null)
    id[i]= "IARC"+str;
    i++;
}}
let prom = new Promise(function(resolve,reject){
    if(id.length >0)
    resolve("Start Changing");
    else
    reject("No Data Found");
});
prom.then(
    (val)=>{
        console.log(val);
        idChange();
        console.log(id);
    }
)
.catch((err)=>{console.log(err);})
.finally(
console.log(id));