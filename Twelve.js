console.log('Script start');
        const promise1 = Promise.resolve(3);
        const promise2 = 42;
        const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100,"Prom");
        });
        //promise all executes when all the promises are resolved
        Promise.all([promise1, promise2, promise3]).then((values) => {
        console.log(values);
        });
        console.log('Script End');