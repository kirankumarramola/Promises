const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 0, "Fast");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Slow");
});
const promise3 = new Promise((resolve)=>{resolve("Very Fast")});
// race will execute the promise which calls resolve function quickly
Promise.race([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
