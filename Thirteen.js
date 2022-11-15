const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100));
const promises = [promise1, promise2];
// promise.allSettled will take single arguement and executes resolve and reject functions
Promise.allSettled(promises).
then((results) => results.forEach((result) => console.log(result.status)));
// result will return the object result.status will return only status