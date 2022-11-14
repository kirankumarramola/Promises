let number =99;
        function check(){
        let num = number;
        let rev =0;
        while(num != 0){
            lastDigit = num % 10; 
            rev = rev * 10 + lastDigit;
            num = Math. floor(num/10);
        }
            if(rev===number)
            return true;
            else
            return false;
    }
    let prom = new Promise(function(resolve,reject){
        if(check())
        resolve("Pallindrome");
        else
        reject("Not a Pallindrome");
    });
    prom.then(
        (x)=>{console.log(x);}
    )
    .catch((x)=>{console.log(x);})
    .finally(console.log("Number : "+number));