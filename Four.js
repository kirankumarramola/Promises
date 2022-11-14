async function even(){
    let n = 5;
    let prom = new Promise(function(resolve,reject){
        if(n%2==0)
        resolve("Ok");
        else
        reject("err");
    });
    console.log(await prom);
}
even();