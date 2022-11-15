console.log('Script start');
            setTimeout(() => {
            console.log('setTimeout 1 with O seconds');
            },0);
            setTimeout(() => {
            console.log('setTimeout 2 with 1 second');
            }, 1000);
            new Promise((resolve, reject) => {
            resolve('Promise 1 resolved');
            }).then(res => console.log(res))
            .catch(err => console.log(err));
            new Promise((resolve, reject) => {
            resolve('Promise 2 resolved');
            }).then(res => console.log(res))
            .catch(err => console.log(err));
        console.log('Script End');