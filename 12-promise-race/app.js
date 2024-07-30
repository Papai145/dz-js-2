const promise1 = Promise.resolve(13);
const promise2 = Promise.reject(42);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "foo");
});

async function race(arr) {
  return await Promise.race(arr);
}
race([promise2, promise1, promise3]).then((res) => console.log(res));
